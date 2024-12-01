from backend.database.models import User
from main import router
from config import users_collection
from backend.spotify import SpotifyAPI
from fastapi import HTTPException
from constants import REC_LIMIT, MAX_POPULARITY
# User Routes
@router.post("/user")
def create_user(user: User):
    # Check if user already exists
    existing_user = users_collection.find_one({"email": user.email})
    if existing_user:
        return {"message": "User with this email already exists"}
        
    users_collection.insert_one({
        "email": user.email,
        "first_name": user.first_name,
        "last_name": user.last_name,
        "liked_songs": user.liked_songs,
        "genres": user.genres,
        "recommendations": user.recommendations
    })
    return {"message": "User created successfully"}

@router.get("/user")
def get_all_users():
    users = users_collection.find({})
    user_list = []
    for user in users:
        user_list.append({
            "email": user["email"],
            "first_name": user["first_name"],
            "last_name": user["last_name"], 
            "liked_songs": user["liked_songs"],
            "genres": user["genres"],
            "recommendations": user["recommendations"]
        })
    return user_list


@router.get("/user/{email}")
def get_user(email: str):
    user = users_collection.find_one({"email": email})
    if not user:
        return {"message": "User not found"}
    
    return {
        "email": user["email"],
        "first_name": user["first_name"], 
        "last_name": user["last_name"],
        "liked_songs": user["liked_songs"],
        "genres": user["genres"],
        "recommendations": user["recommendations"]
    }

@router.delete("/user/{email}")
def delete_user(email: str):
    # Check if user exists
    result = users_collection.delete_one({"email": email})
    if result.deleted_count == 0:
        return {"message": "User not found"}
    return {"message": "User deleted successfully"}

# User Song Interactions
@router.post("/user/like/{song_id}")
def like_song(song_id: str):
    return {"message": "Song liked successfully"}


# Song Routes
@router.get("/song/{song_id}") # Get song info from Spotify API (Bryans function)
def get_song_info(song_id: str):
    return {"message": "Song retrieved successfully"}

@router.post("/song/recommendations/{email}")
async def update_initial_recommendations(email: str, access_token: str):
    try:
        # Get user from MongoDB
        user_data = users_collection.find_one({"email": email})
        if not user_data:
            raise HTTPException(status_code=404, detail="User not found")
        
        user = User(**user_data)
        
        if not user.genres:
            raise HTTPException(status_code=400, detail="No genres found for user")
        
        # Initialize Spotify API with access token
        # Note: You'll need to implement token management
        spotify = SpotifyAPI(access_token)  
        
        # Get recommendations based on genres
        recommendations = spotify.get_recommended_track_ids(
            genres=user.genres,
            artist_popularity_threshold=MAX_POPULARITY
        )
        
        # Update user's recommendations in database
        users_collection.update_one(
            {"email": email},
            {"$set": {"recommended_songs": recommendations}}
        )
        
        return {
            "message": "Initial recommendations updated successfully",
            "recommendations": recommendations,
            "count": len(recommendations)
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/song/initial/{email}")
def update_initial_recommendations(email: str):
    return {"message": "Initial recommendations updated successfully"}

# Spotify Account Interactions
@router.post("/spotify/liked/{email}")
def update_liked_songs(email: str, song_id: str):
    return {"message": "Liked songs updated successfully"}
 
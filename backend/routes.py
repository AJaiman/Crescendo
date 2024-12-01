from backend.database.models import User
from backend.spotify import SpotifyAPI
from fastapi import HTTPException
from config import users_collection
from constants import REC_LIMIT, MAX_POPULARITY
from main import router

# User Routes
@router.post("/user")
def create_user(user: User):
    return {"message": "User created successfully"}

@router.get("/user")
def get_user(user_id: str):
    return {"message": "User retrieved successfully"}

@router.delete("/user")
def delete_user(user_id: str):
    return {"message": "User deleted successfully"}

# User Song Interactions
@router.post("/user/like/{song_id}")
def like_song(song_id: str):
    return {"message": "Song liked successfully"}


# Song Routes
@router.get("/song/{song_id}") # Get song info from Spotify API (Bryans function)
def get_song_info(song_id: str):
    return {"message": "Song retrieved successfully"}

@router.post("/song/recommendations/{email}") # Use liked songs to generate recommendations and update user's recommendations list
def update_song_recommendations(email: str):
    return {"message": "Song recommendations retrieved successfully"}

@router.post("/song/initial/{email}") # Use genres to generate recommendations and update user's recommendations list
async def update_initial_recommendations(email: str, access_token: str):
    try:
        user_data = users_collection.find_one({"email": email})
        if not user_data:
            raise HTTPException(status_code=404, detail="User not found")
        user = User(**user_data)
        if not user.genres:
            raise HTTPException(status_code=400, detail="No genres found for user")
        spotify = SpotifyAPI(access_token)  
        recommendations = spotify.get_recommended_track_ids(
            genres=user.genres,
            artist_popularity_threshold=MAX_POPULARITY
        )
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

# Spotify Account Interactions
@router.post("/spotify/liked/{email}")
def update_liked_songs(email: str, song_id: str):
    return {"message": "Liked songs updated successfully"}

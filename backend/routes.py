from backend.database.models import User
from main import router
from config import users_collection

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
def update_song_recommendations(email: str):
    return {"message": "Song recommendations retrieved successfully"}

@router.post("/song/initial/{email}")
def update_initial_recommendations(email: str):
    return {"message": "Initial recommendations updated successfully"}

# Spotify Account Interactions
@router.post("/spotify/liked/{email}")
def update_liked_songs(email: str, song_id: str):
    return {"message": "Liked songs updated successfully"}

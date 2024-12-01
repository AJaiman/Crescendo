from backend.database.models import User
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
@router.get("/song/{song_id}")
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

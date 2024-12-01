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
@router.get("/song/{song_id}") # Get song info from Spotify API (Bryans function)
def get_song_info(song_id: str):
    return {"message": "Song retrieved successfully"}

@router.post("/song/recommendations/{email}") # Use liked songs to generate recommendations and update user's recommendations list
def update_song_recommendations(email: str):
    user = User.get_by_email(email)
    liked_songs = user.liked_songs
    disliked_songs = user.disliked_songs
    artist_popularity_threshold = 20 #max popularity threshold

    recommended_tracks = get_recommended_tracks(
        liked_songs,
        disliked_songs,
        artist_popularity_threshold
    )
    user.update_recommendations(recommended_tracks)

    return {
        "message": "Song recommendations retrieved successfully"
        "recommendations": recommended_tracks
    }
except Exception as e:
    return {"error": str(e)}, 400 #basiclaly will reutrn the error mesaage as 400 status


@router.post("/song/initial/{email}") # Use genres to generate recommendations and update user's recommendations list
def update_initial_recommendations(email: str):
    return {"message": "Initial recommendations updated successfully"}

# Spotify Account Interactions
@router.post("/spotify/liked/{email}")
def update_liked_songs(email: str, song_id: str):
    return {"message": "Liked songs updated successfully"}

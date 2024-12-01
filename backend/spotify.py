import spotipy

class SpotifyAPI():
    def __init__(self, access_token):
        self.sp = spotipy.Spotify(access_token)

    def get_recommended_track_ids(self, liked, disliked, artist_popularity_threshold):
        """
        Recommends a list of track ids based on the liked and disliked tracks, with artists under the artist_popularity_threshold
        """
        pass

    def get_recommended_track_ids(self, genres, artist_popularity_threshold):
        pass

    def get_track_info(self, track_id):
        pass

import spotipy

class SpotifyAPI():
    def __init__(self, access_token):
        self.sp = spotipy.Spotify(access_token)

    def get_recommended_track_ids(self, liked, disliked, artist_popularity_threshold):
        """
        Recommends a list of track ids based on the liked and disliked tracks, with artists under the artist_popularity_threshold
        """
        return self.sp.recommendations(seed_tracks=liked, anti_tracks=disliked, max_popularity=artist_popularity_threshold)

    def get_recommended_track_ids(self, genres, artist_popularity_threshold):
        """
        Recommends a list of track ids based on the genres, with artists under the artist_popularity_threshold
        """
        return self.sp.recommendations(seed_genres=genres, max_popularity=artist_popularity_threshold)

    def get_track_info(self, track_id):
        """
        Returns the track information for the given track id
        """
        return self.sp.track(track_id)


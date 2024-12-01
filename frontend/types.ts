export type TrackInfo = {
    name: string;
    artists: string[];
    album: {
        images: string[];
    };
    preview_url: string;
    duration_ms: number;
}

"use client";

import Grid from "@/app/ui/landing/grid";
import Rater from "@/app/ui/discover/rater";
import { useEffect, useState } from "react";
import { TrackInfo } from "@/types";

export default function Page() {

    const sample_track_id = "11dFghVXANMlKmJXsNCbNl";

    const [currentTrackInfo, setCurrentTrackInfo] = useState<TrackInfo | null>(null);

    const get_track_info = async () => {
        try {
            const access_token = localStorage.getItem('spotify_token');
            const response = await fetch(`http://localhost:8000/song/${sample_track_id}`, {
                headers: {
                    'access_token': access_token || ''
                }
            });
            const data = await response.json();
            
            const trackInfo: TrackInfo = {
                name: data.name,
                artists: data.artists.map((artist: any) => artist.name),
                album: {
                    images: data.album.images.map((image: any) => image.url)
                },
                preview_url: data.preview_url,
                duration_ms: data.duration_ms
            };
            
            setCurrentTrackInfo(trackInfo);
        } catch (error) {
            console.error("Error fetching track info:", error);
        }
    }

    useEffect(() => {
        get_track_info();
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center w-screen h-screen">
            <div className="absolute inset-0 w-screen h-screen grid grid-rows-2 grid-cols-2 z-0">
                <div className="ellipse-radial-gradient">
                    <Grid />
                </div>
                <div className="ellipse-radial-gradient">
                    <Grid />
                </div>
                <div className="ellipse-radial-gradient">
                    <Grid />
                </div>
                <div className="ellipse-radial-gradient">
                    <Grid />
                </div>
            </div>
            <Rater track_info={
                {
                    name: "See You Again",
                    artists: ["Tyler, the Creator", "Kali Uchis"],
                    album: {
                        images: ['/flower-boy.png']
                    },
                    preview_url: "/flower-boy.mp3",
                    duration_ms: 210000
                }
            } />
        </div>
    )
}
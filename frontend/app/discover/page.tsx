"use client"

import Grid from "@/app/ui/landing/grid";
import Rater from "@/app/ui/discover/rater";
import DislikedSongs from "@/app/ui/discover/disliked-songs";
import LikedSongs from "@/app/ui/discover/liked-songs";
import { useState } from "react";

export default function Page() {
    const songs = [
        { name: "See You Again", artists: ["Tyler, The Creator", "Kali Uchis"], lengthOfSong: 180, picture: "/flower-boy.png" },
        { name: "Espresso", artists: ["Sabrina Carpenter"], lengthOfSong: 175, picture: "/short-and-sweet.png" },
        { name: "luther", artists: ["Kendrick Lamar", "SZA"], lengthOfSong: 177, picture: "/gnx.png" },
        { name: "No Pole", artists: ["Don Toliver"], lengthOfSong: 187, picture: "/no-pole.jpg"},
        { name: "Slowly", artists: ["Weston Estate"], lengthOfSong: 177, picture: "/slowly.jpeg" },
    ]
    const [likedSongs, setLikedSongs] = useState<string[]>([])
    const [dislikedSongs, setDislikedSongs] = useState<string[]>([])
    const totLength = likedSongs.length + dislikedSongs.length

    const curSong = songs[totLength < songs.length ? totLength : songs.length - 1]


    return (
        <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
            <div className="absolute inset-0 w-screen h-screen grid grid-rows-2 grid-cols-2 z-0">
                <div className="ellipse-radial-gradient">
                    <Grid strokeWidth="0.75" />
                </div>
                <div className="ellipse-radial-gradient">
                    <Grid strokeWidth="0.75" />
                </div>
                <div className="ellipse-radial-gradient">
                    <Grid strokeWidth="0.75" />
                </div>
                <div className="ellipse-radial-gradient">
                    <Grid strokeWidth="0.75" />
                </div>
            </div>
            <Rater name={curSong.name} artists={curSong.artists} lengthOfSong={curSong.lengthOfSong} picture={curSong.picture} setLikedSongs={(song) => setLikedSongs([song, ...likedSongs])} setDislikedSongs={(song) => setDislikedSongs([song, ...dislikedSongs])}/>
            <div className="absolute top-1/2 -translate-y-1/2 left-0 w-32 h-32">
                <DislikedSongs key={dislikedSongs.length} songs={dislikedSongs.slice(0, 3)}/>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-32 h-32">
                <LikedSongs key={likedSongs.length} songs={likedSongs.slice(0, 3)} />
            </div>
        </div>
    )
}
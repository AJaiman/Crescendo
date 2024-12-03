"use client";

import { HandThumbDownIcon, HeartIcon, PauseIcon, PlayIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Rater({ name, artists, lengthOfSong, picture, setLikedSongs, setDislikedSongs } : { name: string, artists: string[], lengthOfSong: number, picture: string, setLikedSongs: (song: string) => void, setDislikedSongs: (song: string) => void}) {
    const [isPlaying, setPlaying] = useState(true);
    const [secondsPlayed, setCounter] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    // If isActive is true, start the interval
    if (isPlaying) {
      interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000); // Run every second
    } else {
      // Clear the interval when isActive is false
      clearInterval(interval);
    }

    // Cleanup the interval on component unmount or when isActive changes
    return () => clearInterval(interval);
  }, [isPlaying]); // Dependency array: runs when isActive changes

    const artistsName = artists.length == 1 ? artists[0] : (
        artists.length == 2 ? artists[0] + " and " + artists[1] : artists.join(", ")
    )
    const durationInSong = (secondsPlayed / lengthOfSong) * 100

    return (
        <div className="flex flex-row items-between justify-center gap-12 h-1/3 z-10">
            <div className="flex flex-col items-start justify-center">

                { name == 'Slowly' ? <p className="text-sm">Based on your interest in <strong>See You Again</strong></p> : <></>}
                <Image width={320} height={320} src={picture} alt="Image of album cover" className="rounded-lg" />
            </div>
            <div className="flex flex-col items-start justify-between w-3/5 h-full">
                <div className="space-y-8">
                    <div>
                        <h1 className="font-extrabold text-5xl whitespace-nowrap text-crescendoPurple">{name}</h1>
                        <h1 className="font-medium text-xl whitespace-nowrap text-crescendoPurple">{artistsName}</h1>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[20rem] h-12">
                        <button onClick={() => setPlaying(!isPlaying)}>
                            {
                                isPlaying ? <PauseIcon className="w-12 h-12 text-crescendoPurple" /> : <PlayIcon className="w-8 h-8 text-crescendoPurple" />
                            }
                        </button>
                        <div className="flex flex-col justify-between w-4/5 h-7">
                            <div className="relative w-full h-3 rounded-full bg-crescendoPurple/25">
                                <div className="absolute left-0 top-0 h-full rounded-l-full rounded-r-none bg-crescendoPurple" style={{ width: durationInSong < 2 ? '2%' : `${durationInSong}%`}} />
                            </div>
                            <div className="flex flex-row w-full items-center justify-between h-2">
                                <p className="text-crescendoPurple text-sm">{Math.floor(secondsPlayed / 60)}:{(secondsPlayed % 60).toString().padStart(2, '0')}</p>
                                <p className="text-crescendoPurple text-sm">{Math.floor(lengthOfSong / 60)}:{(lengthOfSong % 60).toString().padStart(2, '0')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                    <button 
                        className="flex items-center justify-center w-36 h-36 rounded-full bg-crescendoPurple hover:scale-105 hover:transition"
                        onClick={() => setLikedSongs(picture)}>
                        <HeartIcon className="w-20 h-20 text-[#E2E0FC]" />
                    </button>
                    <button 
                        className="flex items-center justify-center w-36 h-36 rounded-full bg-crescendoPurple hover:scale-105 hover:transition"
                        onClick={() => setDislikedSongs(picture)}>
                        <HandThumbDownIcon className="w-20 h-20 text-[#E2E0FC]" />
                    </button>
                </div>
            </div>
        </div>
    )
}
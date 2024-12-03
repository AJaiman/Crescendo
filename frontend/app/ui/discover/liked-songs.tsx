import Image from "next/image"
import { useEffect, useState } from "react";

export default function LikedSongs({ songs } : { songs: string[] }) {
    const classNames = [
        "absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 z-10 rounded-lg animate-popInRight", 
        "absolute right-[40%] top-[40%] translate-x-1/2 -translate-y-1/2 z-[5] rounded-lg animate-rotateRightBarely",
        "absolute right-[30%] top-[30%] translate-x-1/2 -translate-y-1/2 z-0 rounded-lg animate-rotateRight"
    ]
    
    return (
        <div className="relative w-full h-full">
            { songs.map((path, index) => 
                <Image 
                key={index}
                width={150} 
                height={150} 
                src={path} 
                alt="Image of last liked album cover" 
                className={classNames[index]} />
            )}
        </div>
    )
}
import Image from "next/image"

export default function DislikedSongs({ songs } : { songs: string[] }) {
    const classNames = [
        "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-lg animate-popInLeft", 
        "absolute left-[40%] top-[40%] -translate-x-1/2 -translate-y-1/2 z-[5] animate-rotateLeftBarely rounded-lg",
        "absolute left-[30%] top-[30%] -translate-x-1/2 -translate-y-1/2 z-0 animate-rotateLeft rounded-lg"
    ]

    return (
        <div className="relative w-full h-full">
            { songs.map((path, index) => 
                <Image 
                key={index}
                width={150} 
                height={150} 
                src={path} 
                alt="Image of last disliked album cover" 
                className={classNames[index]} />
            )}
        </div>
    )
}
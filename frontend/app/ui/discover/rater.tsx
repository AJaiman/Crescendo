"use client";

import { TrackInfo } from '@/types';
import { HandThumbDownIcon, HeartIcon, PauseIcon, PlayIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useState } from 'react';

type RaterProps = {
    track_info: TrackInfo;
}

export default function Rater(props: RaterProps) {
    const [isPlaying, setPlaying] = useState(true);

    return (
        <div className="flex flex-row items-between justify-center gap-12 h-1/3 z-10">
            <Image width={320} height={320} src={props.track_info.album.images[0]} alt="Image of album cover" className="rounded-lg" />
            <div className="flex flex-col items-start justify-between w-3/5 h-full">
                <div className="space-y-8">
                    <div>
                        <h1 className="font-extrabold text-5xl whitespace-nowrap text-crescendoPurple">{props.track_info.name}</h1>
                        <h1 className="font-medium text-xl whitespace-nowrap text-crescendoPurple">Test</h1>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[20rem] h-12">
                        <button onClick={() => setPlaying(!isPlaying)}>
                            {
                                isPlaying ? <PauseIcon className="w-12 h-12 text-crescendoPurple" /> : <PlayIcon className="w-8 h-8 text-crescendoPurple" />
                            }
                        </button>
                        <div className="flex flex-col justify-between w-4/5 h-7">
                            <div className="relative w-full h-3 rounded-full bg-crescendoPurple/25">
                                <div className="absolute left-0 top-0 w-[77%] h-full rounded-l-full rounded-r-none bg-crescendoPurple" />
                            </div>
                            <div className="flex flex-row w-full items-center justify-between h-2">
                                <p className="text-crescendoPurple text-sm">1:51</p>
                                <p className="text-crescendoPurple text-sm">3:09</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between w-full">
                    <button className="flex items-center justify-center w-36 h-36 rounded-full bg-crescendoPurple hover:scale-105 hover:transition">
                        <HeartIcon className="w-20 h-20 text-[#E2E0FC]" />
                    </button>
                    <button className="flex items-center justify-center w-36 h-36 rounded-full bg-crescendoPurple hover:scale-105 hover:transition">
                        <HandThumbDownIcon className="w-20 h-20 text-[#E2E0FC]" />
                    </button>
                </div>
            </div>
        </div>
    )
}
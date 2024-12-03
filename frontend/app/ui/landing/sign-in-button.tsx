"use client";

import { signIn } from 'next-auth/react'
import { MusicalNoteIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';

export default function SignInButton() {
  return (
    <Link
      href="/discover"
      className="animate-pulsateMuted relative flex w-full items-center justify-center gap-5 rounded-xl px-4 py-2.5 mt-4 text-sm bg-crescendoPurple text-white cursor-pointer hover:bg-crescendoPurple/90"
    >
      <MusicalNoteIcon className="w-6 h-6" />
      <p className="text-lg font-bold">Sign in with Spotify</p>
    </Link>
  )
}
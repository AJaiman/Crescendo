import Grid from "@/app/ui/landing/grid";
import { figtree, rethinkSans } from "@/app/ui/fonts";
import SignInButton from "@/app/ui/landing/sign-in-button";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center w-screen h-screen">
      <div className="absolute inset-0 w-screen h-screen grid grid-rows-2 grid-cols-3">
        <div className="circle-radial-gradient animate-pulsate">
            <Grid />
        </div>
        <div className="circle-radial-gradient animate-pulsateDelayed">
            <Grid />
        </div>
        <div className="circle-radial-gradient animate-pulsate">
            <Grid />
        </div>
        <div className="circle-radial-gradient animate-pulsate">
            <Grid />
        </div>
        <div className="circle-radial-gradient animate-pulsateDelayed">
            <Grid />
        </div>
        <div className="circle-radial-gradient animate-pulsate">
            <Grid />
        </div>
      </div>
      <div className="flex flex-col items-start justify-center">
        <h1 className={`${rethinkSans.className} text-7xl font-extrabold text-crescendoPurple`}>
          crescendo
        </h1>
        <h1 className={`${figtree.className} text-lg -mt-1 text-black font-medium`}>
          Rate songs to discover new artists.
        </h1>
        <SignInButton />
      </div>
    </div>
  )
}

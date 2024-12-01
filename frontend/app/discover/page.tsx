import Grid from "@/app/ui/landing/grid";
import Rater from "@/app/ui/discover/rater";

export default function Page() {
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
            <Rater />
        </div>
    )
}
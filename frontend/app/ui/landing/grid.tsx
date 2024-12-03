export default function Grid({ strokeWidth = "1.25" } : { strokeWidth?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none">
            <defs>
                <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#6058CC" strokeWidth={strokeWidth} />
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
    )
}
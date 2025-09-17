"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function VideoPage() {
    const router = useRouter()

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black p-4">
            <Button
                className="mb-8"
                onClick={() => router.back()} // go back to previous page
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
            </Button>

            <video
                src="/video.mp4"
                controls
                autoPlay
                className="w-full max-w-3xl rounded-lg shadow-2xl"
            />
        </div>
    )
}

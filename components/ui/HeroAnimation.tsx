"use client"

import { useEffect, useRef } from "react"
import { FadeIn } from "@/components/ui/FadeIn"
import { cn } from "@/lib/utils"

interface HeroAnimationProps {
    className?: string;
    videoClassName?: string;
    noMask?: boolean;
    loop?: boolean;
    noShine?: boolean;
    customMask?: string;
}

export function HeroAnimation({ className, videoClassName, noMask = false, loop = true, noShine = false, customMask }: HeroAnimationProps) {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75 // Slightly slower for a more majestic feel
        }
    }, [])

    return (
        <div className={cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[50%] w-[300px] h-[300px] md:w-[800px] md:h-[800px] -z-10 pointer-events-none", className)}>
            <FadeIn delay={0}>
                <div className="relative w-full h-full">
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        playsInline
                        loop={loop}
                        className={cn("w-full h-full object-cover mix-blend-screen opacity-60", videoClassName)}
                        style={customMask ? {
                            maskImage: customMask,
                            WebkitMaskImage: customMask
                        } : (noMask ? undefined : {
                            maskImage: "radial-gradient(circle at center, black 0%, transparent 60%)",
                            WebkitMaskImage: "radial-gradient(circle at center, black 0%, transparent 60%)"
                        })}
                    >
                        <source src="/animation.mp4" type="video/mp4" />
                    </video>

                    {/* Enhanced shine effect - centralized */}
                    {!noShine && (
                        <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full mix-blend-screen z-0 opacity-50 scale-50" />
                    )}
                </div>
            </FadeIn>
        </div>
    )
}

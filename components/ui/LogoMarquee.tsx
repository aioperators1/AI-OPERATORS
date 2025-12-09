"use client"

import { useEffect, useRef } from "react"

interface LogoMarqueeProps {
    logos: Array<{
        name: string
        abbr: string
        image?: string
    }>
}

export function LogoMarquee({ logos }: LogoMarqueeProps) {
    const scrollRef = useRef<HTMLDivElement>(null)

    return (
        <div
            className="relative overflow-hidden w-full max-w-full"
        >
            {/* Gradient overlays - Optional: removed for cleaner full-width look if preferred, but keeping mask */}
            {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" /> */}
            {/* <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" /> */}

            {/* Scrolling container */}
            <div
                ref={scrollRef}
                className="flex gap-8 md:gap-16 animate-marquee items-center"
                style={{
                    width: "max-content", // Ensure it takes full width of children
                }}
            >
                {/* Quadruple set for guaranteed seamless loop on all Screens with -50% translate */}
                {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
                    <div
                        key={`logo-${index}`}
                        className="flex items-center gap-2 flex-shrink-0"
                    >
                        {logo.image ? (
                            <div className="relative h-12 md:h-16 w-auto min-w-[120px] md:min-w-[160px]">
                                <img
                                    src={logo.image}
                                    alt={logo.name}
                                    className="h-full w-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                                />
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <div className="h-10 w-10 rounded-lg bg-secondary/50 flex items-center justify-center border border-border">
                                    <span className="text-xs font-bold">{logo.abbr}</span>
                                </div>
                                <span className="text-sm font-medium whitespace-nowrap">{logo.name}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

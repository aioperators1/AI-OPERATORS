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
        <div className="relative overflow-hidden py-12">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            {/* Scrolling container */}
            <div
                ref={scrollRef}
                className="flex gap-16 animate-marquee"
                style={{
                    width: "fit-content",
                }}
            >
                {/* First set */}
                {logos.map((logo, index) => (
                    <div
                        key={`logo-1-${index}`}
                        className="flex items-center gap-2 text-muted-foreground/60 hover:text-foreground transition-colors duration-300 flex-shrink-0"
                    >
                        {logo.image ? (
                            <div className="relative h-16 w-auto min-w-[140px]">
                                <img
                                    src={logo.image}
                                    alt={logo.name}
                                    className="h-full w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                                />
                            </div>
                        ) : (
                            <>
                                <div className="h-10 w-10 rounded-lg bg-secondary/50 flex items-center justify-center border border-border">
                                    <span className="text-xs font-bold">{logo.abbr}</span>
                                </div>
                                <span className="text-sm font-medium whitespace-nowrap">{logo.name}</span>
                            </>
                        )}
                    </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {logos.map((logo, index) => (
                    <div
                        key={`logo-2-${index}`}
                        className="flex items-center gap-2 text-muted-foreground/60 hover:text-foreground transition-colors duration-300 flex-shrink-0"
                    >
                        {logo.image ? (
                            <div className="relative h-16 w-auto min-w-[140px]">
                                <img
                                    src={logo.image}
                                    alt={logo.name}
                                    className="h-full w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                                />
                            </div>
                        ) : (
                            <>
                                <div className="h-10 w-10 rounded-lg bg-secondary/50 flex items-center justify-center border border-border">
                                    <span className="text-xs font-bold">{logo.abbr}</span>
                                </div>
                                <span className="text-sm font-medium whitespace-nowrap">{logo.name}</span>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

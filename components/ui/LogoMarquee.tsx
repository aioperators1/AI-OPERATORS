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
            dir="ltr"
        >
            <style jsx>{`
                @keyframes marquee-forced-ltr {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee-forced {
                    animation: marquee-forced-ltr 60s linear infinite;
                }
                .animate-marquee-forced:hover {
                    animation-play-state: paused;
                }
            `}</style>

            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

            {/* Scrolling container */}
            <div
                ref={scrollRef}
                className="flex gap-16 items-center animate-marquee-forced"
                style={{
                    width: "max-content",
                    display: "flex",
                    flexWrap: "nowrap",
                    willChange: "transform",
                }}
            >
                {/* Quadruple set for guaranteed seamless loop on all Screens with -50% translate */}
                {[...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos].map((logo, index) => (
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

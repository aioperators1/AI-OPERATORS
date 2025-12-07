"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function BackgroundBeams() {
    const [beams, setBeams] = useState<{ id: number; x: number; delay: number; duration: number }[]>([]);

    useEffect(() => {
        // Determine number of beams based on screen width (optimized for performance)
        const count = typeof window !== 'undefined' && window.innerWidth < 768 ? 2 : 4;

        const newBeams = Array.from({ length: count }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // percentage
            delay: Math.random() * 5,
            duration: 3 + Math.random() * 5,
        }));
        setBeams(newBeams);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {beams.map((beam) => (
                <motion.div
                    key={beam.id}
                    className="absolute top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent blur-[0.5px]"
                    style={{ left: `${beam.x}%` }}
                    initial={{ y: "-100%", opacity: 0 }}
                    animate={{ y: "100%", opacity: [0, 0.8, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: beam.duration,
                        delay: beam.delay,
                        ease: "linear",
                    }}
                />
            ))}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_80%)]" />
        </div>
    );
}

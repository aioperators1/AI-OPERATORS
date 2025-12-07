"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function PageLoadTransition() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Fast, snappy load time (Pro feel)
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        scale: 1.1,
                        filter: "blur(20px)",
                        transition: {
                            duration: 0.8, // Fast exit
                            ease: [0.76, 0, 0.24, 1] // Snappy "Power" ease
                        }
                    }}
                >
                    {/* SVG Filters for Liquid Effect */}
                    <svg className="hidden">
                        <defs>
                            <filter id="fast-goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="goo" />
                                <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                            </filter>
                        </defs>
                    </svg>

                    {/* Dynamic Background Pulse */}
                    <motion.div
                        className="absolute w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px]"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* LIQUID CORE - High Energy */}
                    <div className="relative w-72 h-72 flex items-center justify-center" style={{ filter: "url(#fast-goo)" }}>
                        {/* Rapid Orbiting Blobs */}
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-20 h-20 bg-primary rounded-full opacity-90"
                                animate={{
                                    rotate: [0, 360],
                                    x: [0, 60, 0],
                                    y: [0, -60, 0],
                                    scale: [1, 0.8, 1.2, 1]
                                }}
                                transition={{
                                    duration: 1.5, // Fast orbit
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: i * 0.3
                                }}
                            />
                        ))}

                        {/* Central Anchor */}
                        <motion.div
                            className="absolute w-28 h-28 bg-primary rounded-full"
                            animate={{ scale: [0.9, 1.1, 0.9] }}
                            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>

                    {/* LOGO - Quick Snap In */}
                    <motion.div
                        className="absolute z-20 w-36 h-36 rounded-2xl flex items-center justify-center overflow-hidden bg-card border border-foreground/10 shadow-[0_0_50px_rgba(56,189,248,0.5)]"
                        initial={{ scale: 0, opacity: 0, rotate: -45 }}
                        animate={{ scale: 1, opacity: 1, rotate: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
                    >
                        <img
                            src="/logo.jpg"
                            alt="Logo"
                            className="w-full h-full object-cover"
                        />
                        {/* Fast Flash */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-tr from-transparent via-foreground/20 to-transparent"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.5, ease: "easeInOut" }}
                        />
                    </motion.div>

                    {/* TEXT - Instant Reveal */}
                    <div className="relative z-30 mt-12 flex flex-col items-center gap-4">
                        <motion.h1
                            className="text-5xl font-display font-bold text-foreground tracking-[0.2em]"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5, ease: "backOut" }}
                        >
                            AI SOLUTION
                        </motion.h1>

                        {/* Fast Loading Bar */}
                        <div className="w-56 h-1 bg-foreground/10 overflow-hidden rounded-full">
                            <motion.div
                                className="h-full bg-primary"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.8, ease: "easeInOut" }}
                            />
                        </div>
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    )
}

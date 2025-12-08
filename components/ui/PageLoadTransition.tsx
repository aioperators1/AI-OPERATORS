"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function PageLoadTransition() {
    const [isLoading, setIsLoading] = useState(true)
    const { theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [percentage, setPercentage] = useState(0)

    useEffect(() => {
        setMounted(true)

        // Smoother, faster progress
        let current = 0
        const interval = setInterval(() => {
            current += Math.random() * 8
            if (current > 100) current = 100
            setPercentage(Math.floor(current))

            if (current >= 100) {
                clearInterval(interval)
                setTimeout(() => setIsLoading(false), 500)
            }
        }, 80)

        const safety = setTimeout(() => {
            setPercentage(100)
            setIsLoading(false)
        }, 2500)

        return () => {
            clearInterval(interval)
            clearTimeout(safety)
        }
    }, [])

    const logoSrc = mounted && (theme === 'dark' || resolvedTheme === 'dark') ? '/logowhit.png' : '/logoblack.png'

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background text-foreground"
                    exit={{
                        y: "-100%",
                        transition: {
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1] // "Swift" easing (Apple-like)
                        }
                    }}
                >
                    <div className="flex flex-col items-center gap-10">
                        {/* Elegant Logo Reveal */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
                            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative w-28 h-28 md:w-32 md:h-32"
                        >
                            <img
                                src={logoSrc}
                                alt="AI Operators"
                                className="w-full h-full object-contain"
                            />
                        </motion.div>

                        {/* Minimalist Progress Container */}
                        <div className="w-64 h-[2px] bg-secondary/30 rounded-full overflow-hidden relative">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-primary"
                                initial={{ width: "0%" }}
                                animate={{ width: `${percentage}%` }}
                                transition={{ ease: "linear", duration: 0.1 }}
                            />
                        </div>

                        {/* Percentage - Subtle & Clean */}
                        <motion.div
                            className="text-sm font-medium text-muted-foreground font-mono"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            {percentage}%
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

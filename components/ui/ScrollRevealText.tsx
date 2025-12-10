"use client"

import { useScroll, useTransform, motion, MotionValue } from "framer-motion"
import { useRef } from "react"

interface ScrollRevealTextProps {
    children: string;
    className?: string;
}

export function ScrollRevealText({ children, className }: ScrollRevealTextProps) {
    const ref = useRef<HTMLSpanElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const words = children.split(" ")

    return (
        <span ref={ref} className={className}>
            {words.map((word, i) => (
                <Word key={i} word={word} index={i} total={words.length} progress={scrollYProgress} />
            ))}
        </span>
    )
}

function Word({ word, index, total, progress }: { word: string, index: number, total: number, progress: MotionValue<number> }) {
    const start = index / total
    const end = start + (1 / total)
    const opacity = useTransform(progress, [start, end], [0.1, 1])

    return (
        <motion.span
            style={{ opacity }}
            className="inline-block mr-[0.2em] transition-opacity duration-200"
        >
            {word}
        </motion.span>
    )
}

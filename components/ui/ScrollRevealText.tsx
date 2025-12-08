"use client"

import { useScroll, useTransform, motion } from "framer-motion"
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
            {words.map((word, i) => {
                const start = i / words.length
                const end = start + (1 / words.length)
                // Map scroll progress to opacity for each word
                const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1])

                return (
                    <motion.span
                        key={i}
                        style={{ opacity }}
                        className="inline-block mr-[0.2em] transition-opacity duration-200"
                    >
                        {word}
                    </motion.span>
                )
            })}
        </span>
    )
}

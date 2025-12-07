"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TextScrambleProps {
    text: string;
    className?: string;
    duration?: number;
    speed?: number;
    delay?: number;
}

export function TextScramble({
    text,
    className,
    duration = 0.5,
    speed = 0.05,
    delay = 0,
}: TextScrambleProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [isScrambling, setIsScrambling] = useState(true);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let timeout: NodeJS.Timeout;
        let counter = 0;
        const steps = text.length;
        const totalIterations = duration / speed;

        const startScramble = () => {
            interval = setInterval(() => {
                let result = "";
                // Calculate how many characters should be fixed based on progress
                const progress = counter / totalIterations;
                const fixedCharsCount = Math.floor(progress * steps);

                for (let i = 0; i < steps; i++) {
                    if (i < fixedCharsCount) {
                        result += text[i];
                    } else {
                        result += chars[Math.floor(Math.random() * chars.length)];
                    }
                }

                setDisplayedText(result);
                counter++;

                if (counter >= totalIterations) {
                    clearInterval(interval);
                    setDisplayedText(text);
                    setIsScrambling(false);
                }
            }, speed * 1000);
        };

        if (delay > 0) {
            timeout = setTimeout(startScramble, delay * 1000);
        } else {
            startScramble();
        }

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [text, duration, speed, delay]);

    return (
        <motion.span
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {displayedText}
        </motion.span>
    );
}

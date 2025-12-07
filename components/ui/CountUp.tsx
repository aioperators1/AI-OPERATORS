"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
    end: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    decimals?: number;
}

export function CountUp({ end, suffix = "", prefix = "", duration = 2500, decimals = 0 }: CountUpProps) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);

                    const startTime = Date.now();
                    const startValue = 0;

                    const easeOutCubic = (t: number): number => {
                        return 1 - Math.pow(1 - t, 3);
                    };

                    const updateCount = () => {
                        const now = Date.now();
                        const elapsed = now - startTime;
                        const progress = Math.min(elapsed / duration, 1);

                        if (progress < 1) {
                            const easedProgress = easeOutCubic(progress);
                            setCount(startValue + (end - startValue) * easedProgress);
                            requestAnimationFrame(updateCount);
                        } else {
                            setCount(end);
                        }
                    };

                    requestAnimationFrame(updateCount);
                }
            },
            { threshold: 0.3 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [end, duration, hasAnimated]);

    const formattedCount = decimals > 0
        ? count.toFixed(decimals)
        : Math.floor(count).toLocaleString();

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}{formattedCount}{suffix}
        </span>
    );
}

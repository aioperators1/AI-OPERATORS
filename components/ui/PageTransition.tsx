"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { useContext, useRef } from "react"

// This prevents the exit-ing component from re-rendering and losing state/styles
function FrozenRouter(props: { children: React.ReactNode }) {
    const context = useContext(LayoutRouterContext ?? {})
    const frozen = useRef(context).current

    return (
        <LayoutRouterContext.Provider value={frozen}>
            {props.children}
        </LayoutRouterContext.Provider>
    )
}

export function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    // The "Liquid Scale" Transition
    // Simulates the content liquefying/blurring as it moves
    return (
        <AnimatePresence mode="popLayout">
            <motion.div
                key={pathname}
                initial={{
                    opacity: 0,
                    scale: 0.96, // Start slightly zoomed out (deep)
                    y: 20,       // Slight upward drift
                    filter: "blur(12px)"
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    filter: "blur(0px)"
                }}
                exit={{
                    opacity: 0,
                    scale: 1.04, // Zoom in slightly (pushing through)
                    y: -20,      // Continued upward drift
                    filter: "blur(12px)"
                }}
                transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for "Fluid" feel
                }}
                className="flex-1 w-full"
            >
                <FrozenRouter>{children}</FrozenRouter>
            </motion.div>
        </AnimatePresence>
    )
}

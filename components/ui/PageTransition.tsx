"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { useContext, useState } from "react"

// This prevents the exit-ing component from re-rendering and losing state/styles
function FrozenRouter(props: { children: React.ReactNode }) {
    const context = useContext(LayoutRouterContext ?? {})
    // Capture the context once on mount/initial render
    const [frozen] = useState(context)

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
                    y: 15,
                    scale: 0.98
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}
                exit={{
                    opacity: 0,
                    y: -15,
                    scale: 0.98,
                }}
                transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1] // "Swift" ease
                }}
                className="flex-1 w-full"
            >
                <FrozenRouter>{children}</FrozenRouter>
            </motion.div>
        </AnimatePresence>
    )
}

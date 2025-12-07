import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode
    className?: string
    id?: string
}

export const Section = forwardRef<HTMLElement, SectionProps>(({ children, className, id, ...props }, ref) => {
    return (
        <section
            ref={ref}
            id={id}
            className={cn("py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto", className)}
            {...props}
        >
            {children}
        </section>
    )
})
Section.displayName = "Section"

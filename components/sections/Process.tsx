"use client"

import { FadeIn } from "@/components/ui/FadeIn"
import { Section } from "@/components/ui/Section"
import { Search, Code2, Rocket, BarChart3 } from "lucide-react"
import { useTranslations } from "next-intl"
import { useScroll } from "framer-motion"
import { useRef } from "react"

export function Process() {
    const t = useTranslations("Process");
    const containerRef = useRef<HTMLDivElement>(null)
    const { } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const steps = [
        {
            icon: Search,
            title: t("step1Title"),
            desc: t("step1Desc"),
            color: "text-blue-400",
            bg: "bg-blue-400/10",
            border: "border-blue-400/20"
        },
        {
            icon: Code2,
            title: t("step2Title"),
            desc: t("step2Desc"),
            color: "text-primary",
            bg: "bg-primary/10",
            border: "border-primary/20"
        },
        {
            icon: Rocket,
            title: t("step3Title"),
            desc: t("step3Desc"),
            color: "text-purple-400",
            bg: "bg-purple-400/10",
            border: "border-purple-400/20"
        },
        {
            icon: BarChart3,
            title: t("step4Title"),
            desc: t("step4Desc"),
            color: "text-green-400",
            bg: "bg-green-400/10",
            border: "border-green-400/20"
        }
    ]

    return (
        <Section className="py-16 md:py-24 relative overflow-hidden" ref={containerRef}>
            {/* Simple centered vertical connecting line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/50 to-transparent -translate-x-1/2 hidden md:block" />



            <div className="text-center mb-16 relative z-10">
                <FadeIn>
                    <div className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-muted-foreground mb-4 backdrop-blur-md">
                        {t("badge")}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">{t("title")}</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        {t("subtitle")}
                    </p>
                </FadeIn>
            </div>

            <div className="max-w-5xl mx-auto relative z-10 px-4">
                {steps.map((step, i) => (
                    <FadeIn key={i} delay={i * 0.15}>
                        <div className={`flex flex-row items-start lg:items-center gap-6 lg:gap-16 mb-16 last:mb-0 relative ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                            {/* Center Icon Node - Static on Mobile, 3D on Desktop */}
                            <div className="relative shrink-0 z-10 group perspective-1000">
                                <div className={`h-16 w-16 md:h-20 md:w-20 rounded-2xl flex items-center justify-center ${step.bg} ${step.color} border ${step.border} backdrop-blur-xl shadow-[0_0_30px_-5px_rgba(0,0,0,0.5)] z-10 relative transition-all duration-500 group-hover:scale-110 group-hover:rotate-y-12 group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] transform-style-3d`}>
                                    <step.icon size={32} className="md:w-10 md:h-10 transform-style-3d group-hover:translate-z-10" />
                                    {/* Number Badge */}
                                    <div className="absolute -top-3 -right-3 rtl:-left-3 rtl:right-auto h-8 w-8 rounded-full bg-background border border-border flex items-center justify-center text-xs font-bold text-muted-foreground shadow-lg">
                                        {i + 1}
                                    </div>
                                </div>
                                <div className={`absolute inset-0 ${step.bg} blur-2xl opacity-40 rounded-full -z-10 group-hover:opacity-70 transition-opacity duration-500`} />
                            </div>

                            {/* Text Content */}
                            <div className={`flex-1 text-start ${i % 2 === 1 ? 'lg:text-end' : ''}`}>
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{step.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{step.desc}</p>
                            </div>

                            {/* Empty flexible space for balance */}
                            <div className="flex-1 hidden lg:block" />
                        </div>
                    </FadeIn>
                ))}
            </div>
        </Section>
    )
}

"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { Building, Utensils, Truck, ShoppingBag, Landmark, ShoppingCart, LucideIcon, CheckCircle2, Zap } from "lucide-react"

import { Section } from "@/components/ui/Section"
import { FadeIn } from "@/components/ui/FadeIn"

interface IndustryNode {
    key: string
    icon: LucideIcon
    color: string // Tailwind text color class
    hex: string // Hex color for SVG strokes
    bg: string
    x: number // Percent X
    y: number // Percent Y
}

export function IndustryHub() {
    const t = useTranslations("Industries")
    const containerRef = useRef<HTMLDivElement>(null)

    // Compact, optimized coordinates
    const industries: IndustryNode[] = [
        { key: "realestate", icon: Building, color: "text-emerald-500", hex: "#10b981", bg: "bg-emerald-500/10", x: 50, y: 10 },    // Top
        { key: "restaurants", icon: Utensils, color: "text-orange-500", hex: "#f97316", bg: "bg-orange-500/10", x: 85, y: 25 },   // Top Right
        { key: "logistics", icon: Truck, color: "text-blue-500", hex: "#3b82f6", bg: "bg-blue-500/10", x: 85, y: 75 },      // Bottom Right
        { key: "retail", icon: ShoppingBag, color: "text-pink-500", hex: "#ec4899", bg: "bg-pink-500/10", x: 50, y: 90 },       // Bottom
        { key: "finance", icon: Landmark, color: "text-indigo-500", hex: "#6366f1", bg: "bg-indigo-500/10", x: 15, y: 75 },     // Bottom Left
        { key: "ecommerce", icon: ShoppingCart, color: "text-cyan-500", hex: "#06b6d4", bg: "bg-cyan-500/10", x: 15, y: 25 },     // Top Left
    ]

    // Helper to calculate curved path (Quadratic Bezier)
    // Start: 50, 50 (Center) -> Control Point -> End: x, y
    const getPath = (ind: IndustryNode) => {
        // Simple control point: mostly straight but slightly curved towards center-y
        // Logic: midpoint + offset
        const startX = 50
        const startY = 50
        const endX = ind.x
        const endY = ind.y

        // Create a gentle organic curve
        // Control point is midpoint + some orthogonal vector
        // For simplicity, let's curve slighty away from center
        const midX = (startX + endX) / 2
        const midY = (startY + endY) / 2

        // Direction vector
        const dx = endX - startX
        const dy = endY - startY

        // Orthogonal offset (very subtle curve)
        const curveStrength = 10
        const offsetX = -dy * 0.2
        const offsetY = dx * 0.2

        const controlX = midX + offsetX
        const controlY = midY + offsetY

        return `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`
    }

    return (
        <Section className="py-12 md:py-24 relative overflow-hidden" ref={containerRef}>
            <div className="container relative z-10 px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center max-w-6xl mx-auto">

                    {/* Left Column: Text Content */}
                    <div className="text-left w-full mx-auto lg:mx-0">
                        <FadeIn>
                            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary mb-6 shadow-[0_0_15px_-3px_rgba(var(--primary-rgb),0.3)]">
                                <Zap className="w-3 h-3 mr-2" fill="currentColor" />
                                {t("badge") || "Industry Intelligence"}
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                                {t("title")}
                            </h2>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            {/* Use subtitle as main description */}
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 border-l-2 border-primary/20 pl-4">
                                {t("subtitle")}
                            </p>

                            {/* "Smart" List */}
                            <div className="space-y-4">
                                <div className="group flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all shadow-sm hover:shadow-md hover:bg-secondary/5">
                                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 group-hover:scale-110 transition-transform">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">Universal Integration</h4>
                                        <p className="text-xs text-muted-foreground leading-relaxed">Connect any store or custom platform instantly.</p>
                                    </div>
                                </div>
                                <div className="group flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all shadow-sm hover:shadow-md hover:bg-secondary/5">
                                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-0.5 group-hover:scale-110 transition-transform">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">Automated Workflows</h4>
                                        <p className="text-xs text-muted-foreground leading-relaxed">Trigger actions on leads, sales, and support queries.</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Column: The Hub (Standard Version) */}
                    <div className="relative w-full aspect-square max-w-[500px] mx-auto lg:ml-auto select-none">
                        {/* Ambient Background Glow */}
                        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent opacity-70 blur-3xl -z-10" />

                        {/* SVG Connector Layer */}
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                        >
                            {industries.map((ind, i) => (
                                <g key={`connection-${i}`}>
                                    {/* Background faint path */}
                                    <path
                                        d={getPath(ind)}
                                        fill="none"
                                        stroke={ind.hex}
                                        strokeWidth="0.5"
                                        opacity="0.2"
                                    />

                                    {/* Animated Dash Path - Moving OUTWARD from center */}
                                    <motion.path
                                        d={getPath(ind)}
                                        fill="none"
                                        stroke={ind.hex}
                                        strokeWidth="1.5"
                                        strokeDasharray="4 6" // Dash pattern
                                        initial={{ strokeDashoffset: 20 }}
                                        animate={{ strokeDashoffset: 0 }} // Move continuously
                                        transition={{
                                            repeat: Infinity,
                                            ease: "linear",
                                            duration: 1.5
                                        }}
                                        opacity="0.8"
                                    />

                                    {/* Moving Particle - A glowing dot travelling the line */}
                                    <motion.circle
                                        r="1.5"
                                        fill={ind.hex}
                                        filter={`drop-shadow(0 0 2px ${ind.hex})`}
                                    >
                                        <animateMotion
                                            dur={`${2 + i * 0.2}s`}
                                            repeatCount="indefinite"
                                            path={getPath(ind)}
                                            rotate="auto" // Tangent rotation if slightly non-circular
                                        />
                                    </motion.circle>
                                </g>
                            ))}
                        </svg>

                        {/* Central Hub - Fixed White Bg */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-24 h-24 lg:w-32 lg:h-32">
                            <div className="relative w-full h-full flex items-center justify-center">
                                {/* Core Container - Static, no pulse */}
                                <div
                                    className="relative w-full h-full rounded-full border-4 border-primary shadow-[0_0_50px_-5px_rgba(var(--primary-rgb),0.5)] z-20 flex items-center justify-center overflow-hidden"
                                    style={{ backgroundColor: '#ffffff' }}
                                >
                                    <div className="relative w-16 h-16 md:w-24 md:h-24">
                                        <Image
                                            src="/hub-logo-black.png"
                                            alt="AI Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Orbiting Industry Nodes */}
                        {industries.map((item, index) => (
                            <div
                                key={item.key}
                                className="absolute w-14 h-14 -ml-7 -mt-7" // Center anchor
                                style={{
                                    left: `${item.x}%`,
                                    top: `${item.y}%`,
                                }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                                    className="group relative flex flex-col items-center justify-center"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {/* Icon Circle */}
                                    <div className={`
                                        relative h-14 w-14 rounded-full flex items-center justify-center 
                                        bg-card border-2 transition-all duration-300 shadow-lg
                                        z-10
                                    `}
                                        style={{ borderColor: item.hex }} // Dynamic border color
                                    >
                                        {/* Inner Glow */}
                                        <div
                                            className="absolute inset-0 rounded-full opacity-20"
                                            style={{ backgroundColor: item.hex }}
                                        />
                                        <item.icon size={24} style={{ color: item.hex }} />

                                        {/* Status Dot */}
                                        <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-card shadow-sm" />
                                    </div>

                                    {/* Floating Label - Enhanced */}
                                    <div className="absolute top-full mt-3 px-3 py-1.5 rounded-full bg-popover/90 backdrop-blur-md border border-border shadow-xl text-center whitespace-nowrap transform transition-all duration-300 group-hover:-translate-y-1">
                                        <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                                            {t(`items.${item.key}.title`)}
                                        </span>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </Section>
    )
}

"use client"

import { ExternalLink, ArrowUpRight, Github } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"
import { Link } from "@/navigation"
import { FadeIn } from "@/components/ui/FadeIn"

const projects = [
    {
        title: "GlobalRetail Omni-Agent",
        category: "E-commerce",
        description: "Unified sales and support agent across WhatsApp, Instagram, and Web for a multinational retail brand, increasing conversion by 35%.",
        status: "In Development",
        link: "#",
        gradient: "from-green-500/20 to-emerald-500/5",
        border: "group-hover:border-green-500/30"
    },
    {
        title: "FinTech Onboarding Automation",
        category: "Finance",
        description: "Secure KYC and document verification bot that reduced customer onboarding time from 3 days to 10 minutes.",
        status: "In Development",
        link: "#",
        gradient: "from-blue-500/20 to-cyan-500/5",
        border: "group-hover:border-blue-500/30"
    },
    {
        title: "Enterprise Knowledge Base",
        category: "Internal Tool",
        description: "RAG-powered internal query agent for a 500+ employee SaaS company, instantly retrieving policy and technical documentation.",
        status: "In Development",
        link: "#",
        gradient: "from-purple-500/20 to-pink-500/5",
        border: "group-hover:border-purple-500/30"
    },
    {
        title: "LogisticChain Real-Time Tracker",
        category: "Logistics",
        description: "WhatsApp-based fleet management and shipment tracking system for drivers and end-customers.",
        status: "In Development",
        link: "#",
        gradient: "from-amber-500/20 to-orange-500/5",
        border: "group-hover:border-amber-500/30"
    }
]

export default function Portfolio() {
    return (
        <div className="flex flex-col min-h-screen pt-20">
            <Section className="pb-12 text-center">
                <FadeIn>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">Our Work</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        See how we're transforming industries one agent at a time.
                    </p>
                </FadeIn>
            </Section>

            <Section className="py-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <div className={`group relative h-full rounded-3xl border border-border bg-card overflow-hidden transition-all duration-500 hover:bg-secondary/50 ${project.border}`}>
                                {/* Subtle Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className="relative z-10 p-8 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <span className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-semibold text-muted-foreground backdrop-blur-md">
                                            {project.category}
                                        </span>
                                        <span className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-secondary/80 backdrop-blur-md border border-border ${project.status === "Live" ? "text-green-500" : "text-yellow-500"}`}>
                                            <span className={`h-1.5 w-1.5 rounded-full ${project.status === "Live" ? "bg-green-500 animate-pulse" : "bg-yellow-500"}`} />
                                            {project.status}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-muted-foreground mb-8 text-base leading-relaxed flex-1">{project.description}</p>

                                    <div className="flex items-center pt-4 border-t border-border">
                                        <Link href={project.link} className="flex items-center text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                            View Case Study <ArrowUpRight size={16} className="ml-2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Section>

            <Section className="py-24">
                <FadeIn>
                    <div className="rounded-3xl bg-primary text-primary-foreground p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent opacity-50" />
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-4">Have a similar project?</h2>
                            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8 text-lg">
                                Let's discuss how an AI agent can solve your specific business challenges.
                            </p>
                            <Link href="/contact">
                                <Button size="lg" variant="secondary" className="rounded-full shadow-lg hover:shadow-xl transition-all">
                                    Start a Project
                                </Button>
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </Section>
        </div>
    )
}

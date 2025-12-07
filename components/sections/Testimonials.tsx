"use client"

import { FadeIn } from "@/components/ui/FadeIn"
import { Section } from "@/components/ui/Section"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
    const reviews = [
        {
            text: "The AI agent transformed our customer support. We reduced response time from 2 hours to 2 seconds.",
            author: "Sarah J.",
            role: "CEO, TechFlow",
            stars: 5
        },
        {
            text: "Incredible attention to detail. The team built a sales bot that actually feels human and closes deals.",
            author: "Michael K.",
            role: "Director, GlobalRetail",
            stars: 5
        },
        {
            text: "Professional, fast, and scalable. AI Solution is the best agency partner we've worked with.",
            author: "Elena R.",
            role: "Ops Manager, FinServe",
            stars: 5
        }
    ]

    return (
        <Section className="py-24 border-t border-border/50">
            <div className="text-center mb-16">
                <FadeIn>
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">Client Success Stories</h2>
                </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviews.map((review, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                        <div className="p-8 rounded-3xl bg-card border border-border relative h-full flex flex-col hover:border-primary/20 transition-colors shadow-sm">
                            <Quote className="text-primary/40 mb-6" size={40} />
                            <div className="flex gap-1 mb-6">
                                {[...Array(review.stars)].map((_, s) => (
                                    <Star key={s} size={16} className="fill-yellow-500 text-yellow-500" />
                                ))}
                            </div>
                            <p className="text-lg text-foreground italic mb-8 leading-relaxed flex-1">
                                "{review.text}"
                            </p>
                            <div>
                                <p className="text-foreground font-bold">{review.author}</p>
                                <p className="text-muted-foreground text-sm">{review.role}</p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </Section>
    )
}

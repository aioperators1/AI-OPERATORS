"use client"

import { Section } from "@/components/ui/Section"
import { FadeIn } from "@/components/ui/FadeIn"

export default function TermsOfService() {
    return (
        <div className="flex flex-col min-h-screen pt-20">
            <Section className="pb-12 text-center max-w-4xl mx-auto">
                <FadeIn>
                    <div className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-primary mb-4">
                        Last Updated: December 01, 2024
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                        Terms of Service
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Please read these terms carefully before using our AI services.
                    </p>
                </FadeIn>
            </Section>

            <Section className="py-0 max-w-4xl mx-auto pb-24">
                <FadeIn delay={0.2}>
                    <div className="prose prose-invert prose-lg max-w-none text-muted-foreground/90">
                        <p className="lead text-xl text-foreground font-medium mb-8">
                            By accessing or using AI Solution ("Service"), you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.
                        </p>

                        <h3 className="text-foreground text-2xl font-bold mt-12 mb-4">1. Acceptable Use</h3>
                        <p className="mb-8">
                            You agree not to use the Service to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-8">
                            <li>Generate harmful, fraudulent, or illegal content</li>
                            <li>Violate the privacy or rights of others</li>
                            <li>Reverse engineer the AI models or software</li>
                            <li>Send unsolicited marketing messages (Spam) via our WhatsApp integration</li>
                        </ul>

                        <h3 className="text-foreground text-2xl font-bold mt-12 mb-4">2. Intellectual Property</h3>
                        <p className="mb-8">
                            The Service and its original content (excluding content provided by you), features, and functionality are and will remain the exclusive property of AI Solution and its licensors.
                        </p>

                        <h3 className="text-foreground text-2xl font-bold mt-12 mb-4">3. Termination</h3>
                        <p className="mb-8">
                            We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                        </p>

                        <h3 className="text-foreground text-2xl font-bold mt-12 mb-4">4. Limitation of Liability</h3>
                        <p className="mb-8">
                            In no event shall AI Solution, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits.
                        </p>

                        <h3 className="text-foreground text-2xl font-bold mt-12 mb-4">5. Governing Law</h3>
                        <p>
                            These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which AI Solution operates, without regard to its conflict of law provisions.
                        </p>
                    </div>
                </FadeIn>
            </Section>
        </div>
    )
}

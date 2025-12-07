"use client"

import { Section } from "@/components/ui/Section"
import { FadeIn } from "@/components/ui/FadeIn"
import { useTranslations } from "next-intl"

export default function PrivacyPolicy() {
    return (
        <div className="flex flex-col min-h-screen pt-20">
            <Section className="pb-12 text-center max-w-4xl mx-auto">
                <FadeIn>
                    <div className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-primary mb-4">
                        Effective Date: December 01, 2024
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                        Privacy Policy
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        We value your privacy and are committed to protecting your personal data.
                    </p>
                </FadeIn>
            </Section>

            <Section className="py-0 max-w-4xl mx-auto pb-24">
                <FadeIn delay={0.2}>
                    <div className="prose prose-invert prose-lg max-w-none text-muted-foreground/90">
                        <p className="lead text-xl text-foreground font-medium mb-8">
                            This Privacy Policy explains how AI Solution ("we", "us", or "our") collects, uses, and discloses your information when you use our website and AI services.
                        </p>

                        <h3 className="text-foreground text-2xl font-bold mt-12 mb-4">1. Information We Collect</h3>
                        <p>
                            We collect information that you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact support. This may include:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-8">
                            <li>Contact information (name, email address, phone number)</li>
                            <li>Business information (company name, role, industry)</li>
                            <li>Payment information (processed securely by our payment providers)</li>
                            <li>Usage data (how you potentialy interact with our AI agents)</li>
                        </ul>

                        <h3 className="text-foreground text-2xl font-bold mt-12 mb-4">2. How We Use Your Information</h3>
                        <p>
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-8">
                            <li>Provide, maintain, and improve our AI services</li>
                            <li>Process transactions and send related information</li>
                            <li>Send you technical notices, updates, and support messages</li>
                            <li>Respond to your comments and questions</li>
                            <li>Train our AI models (only using anonymized data where explicitly permitted)</li>
                        </ul>

                        <h3 className="text-foreground text-2xl font-bold mt-12 mb-4">3. Data Security</h3>
                        <p className="mb-8">
                            We implement enterprise-grade security measures to protect your personal information. All data is encrypted in transit and at rest. We do not sell your personal data to third parties.
                        </p>

                        <h3 className="text-foreground text-2xl font-bold mt-12 mb-4">4. Contact Us</h3>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at: <br />
                            <span className="text-primary font-medium">privacy@aisolution.com</span>
                        </p>
                    </div>
                </FadeIn>
            </Section>
        </div>
    )
}

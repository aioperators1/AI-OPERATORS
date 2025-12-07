"use client";

import { Check } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const plans = [
    {
        name: "Starter",
        price: "$99",
        period: "/month",
        description: "Perfect for small businesses getting started with AI",
        features: [
            "Up to 1,000 messages/month",
            "1 AI agent",
            "WhatsApp integration",
            "Basic analytics",
            "Email support",
        ],
        cta: "Start Free Trial",
        popular: false,
    },
    {
        name: "Professional",
        price: "$299",
        period: "/month",
        description: "For growing businesses that need more power",
        features: [
            "Up to 10,000 messages/month",
            "3 AI agents",
            "WhatsApp + Website chat",
            "Advanced analytics",
            "Priority support",
            "Custom branding",
        ],
        cta: "Start Free Trial",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For large organizations with custom needs",
        features: [
            "Unlimited messages",
            "Unlimited AI agents",
            "All integrations",
            "White-label solution",
            "Dedicated support",
            "Custom development",
        ],
        cta: "Contact Sales",
        popular: false,
    },
];

export function Pricing() {
    return (
        <Section className="py-24">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <FadeIn>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Simple, Transparent Pricing
                    </h2>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <p className="text-lg text-muted-foreground">
                        Choose the plan that fits your business. All plans include a 14-day free trial.
                    </p>
                </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan, index) => (
                    <FadeIn key={plan.name} delay={0.1 * (index + 2)}>
                        <div
                            className={`relative p-8 rounded-2xl border ${plan.popular
                                    ? "border-primary bg-primary/5"
                                    : "border-border bg-card"
                                } hover:border-primary/50 transition-colors`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                                <p className="text-sm text-muted-foreground">{plan.description}</p>
                            </div>

                            <div className="mb-6">
                                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                                <span className="text-muted-foreground">{plan.period}</span>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link href="/contact">
                                <Button
                                    className="w-full"
                                    variant={plan.popular ? "default" : "outline"}
                                >
                                    {plan.cta}
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </Section>
    );
}

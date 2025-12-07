"use client"

import { FadeIn } from "@/components/ui/FadeIn"
import { Section } from "@/components/ui/Section"
import { useTranslations } from "next-intl"

import { LogoMarquee } from "@/components/ui/LogoMarquee"

export function Partners() {
    const t = useTranslations("Partners");

    return (
        <Section className="py-20 border-t border-border">
            <FadeIn>
                <p className="text-center text-sm font-medium text-muted-foreground uppercase tracking-widest mb-12">
                    {t("trustedBy")}
                </p>
            </FadeIn>

            <LogoMarquee
                logos={[
                    { name: "AI Solution", abbr: "AI", image: "/partnerai.png" },
                    { name: "Qunvert", abbr: "QV", image: "/partnerqunvert.png" },
                    { name: "AI Solution", abbr: "AI", image: "/partnerai.png" },
                    { name: "Qunvert", abbr: "QV", image: "/partnerqunvert.png" },
                    { name: "AI Solution", abbr: "AI", image: "/partnerai.png" },
                    { name: "Qunvert", abbr: "QV", image: "/partnerqunvert.png" },
                ]}
            />
        </Section>
    )
}

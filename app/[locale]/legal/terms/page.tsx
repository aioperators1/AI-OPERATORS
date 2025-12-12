"use client"

import { Section } from "@/components/ui/Section"
import { FadeIn } from "@/components/ui/FadeIn"
import { useTranslations } from "next-intl"

export default function TermsOfService() {
    const t = useTranslations("Terms");

    return (
        <div className="flex flex-col min-h-screen pt-20">
            <Section className="pb-12 text-center max-w-4xl mx-auto">
                <FadeIn>
                    <div className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-primary mb-4">
                        {t("date")}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-foreground">
                        {t("title")}
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        {t("subtitle")}
                    </p>
                </FadeIn>
            </Section>

            <Section className="py-0 max-w-4xl mx-auto pb-24">
                <FadeIn delay={0.2}>
                    <div className="prose prose-invert prose-lg max-w-none text-muted-foreground/90">
                        <p className="lead text-xl text-foreground font-medium mb-8">
                            {t("intro")}
                        </p>

                        <h3 className="text-foreground text-2xl font-bold mt-12 mb-4">{t("section1Title")}</h3>
                        <p className="mb-8">
                            {t("section1Text")}
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mb-8">
                            <li>{t("section1List.item1")}</li>
                            <li>{t("section1List.item2")}</li>
                            <li>{t("section1List.item3")}</li>
                            <li>{t("section1List.item4")}</li>
                        </ul>

                        <h3 className="text-foreground text-2xl font-bold mt-12 mb-4">{t("section2Title")}</h3>
                        <p className="mb-8">
                            {t("section2Text")}
                        </p>

                        <h3 className="text-foreground text-2xl font-bold mt-12 mb-4">{t("section3Title")}</h3>
                        <p className="mb-8">
                            {t("section3Text")}
                        </p>

                        <h3 className="text-foreground text-2xl font-bold mt-12 mb-4">{t("section4Title")}</h3>
                        <p className="mb-8">
                            {t("section4Text")}
                        </p>

                        <h3 className="text-foreground text-2xl font-bold mt-12 mb-4">{t("section5Title")}</h3>
                        <p>
                            {t("section5Text")}
                        </p>
                    </div>
                </FadeIn>
            </Section>
        </div>
    )
}

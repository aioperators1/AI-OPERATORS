"use client"

import { Link } from "@/navigation"
import { ArrowRight, Bot, Zap, MessageSquare, Brain, TrendingUp, Wrench, Database, BarChart3, Calendar } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"
import { FadeIn } from "@/components/ui/FadeIn"
import { Process } from "@/components/sections/Process"
import { CountUp } from "@/components/ui/CountUp"
import { LogoMarquee } from "@/components/ui/LogoMarquee"
import { useTranslations } from "next-intl"

import { Magnetic } from "@/components/ui/Magnetic"


import { HeroAnimation } from "@/components/ui/HeroAnimation"
import { IndustryHub } from "@/components/sections/IndustryHub"

export default function Home() {
  const t = useTranslations("Hero");
  const tFeatures = useTranslations("Features");

  const tCTA = useTranslations("CTA");
  const tStats = useTranslations("Stats");
  const tPartners = useTranslations("Partners");
  const tIndustries = useTranslations("Industries");

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Hero Section */}
      <Section className="relative flex flex-col items-center justify-center text-center pt-16 md:pt-32 pb-10 md:pb-20 px-4">
        {/* Dynamic Logo Animation */}
        <HeroAnimation />

        <FadeIn delay={0.1}>
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary mb-8 backdrop-blur-sm">
            <Zap size={14} className="mr-2 fill-primary" />
            {t("badge")}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground max-w-[95vw] mx-auto mb-6 leading-[1.15] break-words">
            <span className="block">{t("titleStart")}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary/80 pb-2 md:pb-0">{t("titleMiddle")}</span>
            <span className="block">{t("titleEnd")}</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 font-medium px-2">
            {t("description")}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto px-4 sm:px-0">
            <Magnetic>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="h-14 sm:h-12 w-full sm:w-auto px-8 text-base font-semibold shadow-lg shadow-primary/20">
                  {t("ctaPrimary")}
                  <ArrowRight size={18} className="ms-2 rtl:rotate-180" />
                </Button>
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="/solutions" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="h-14 sm:h-12 w-full sm:w-auto px-8 text-base font-semibold border border-border bg-background/60 hover:bg-accent text-foreground">
                  {t("ctaSecondary")}
                </Button>
              </Link>
            </Magnetic>
          </div>
        </FadeIn>
      </Section>



      {/* Stats Section */}
      <Section className="py-6 md:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-12 max-w-5xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="text-center p-4 rounded-2xl bg-secondary/20 border border-transparent hover:border-primary/10 transition-colors">
              <div className="text-3xl md:text-5xl font-bold text-foreground mb-2">
                <CountUp end={7} suffix="+" />
              </div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider">{tStats("activeUsers")}</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="text-center p-4 rounded-2xl bg-secondary/20 border border-transparent hover:border-primary/10 transition-colors">
              <div className="text-3xl md:text-5xl font-bold text-foreground mb-2">
                <CountUp end={99.9} decimals={1} suffix="%" />
              </div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider">{tStats("uptime")}</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="text-center p-4 rounded-2xl bg-secondary/20 border border-transparent hover:border-primary/10 transition-colors">
              <div className="text-3xl md:text-5xl font-bold text-foreground mb-2">
                <CountUp end={5} suffix="+" />
              </div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider">{tStats("countries")}</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="text-center p-4 rounded-2xl bg-secondary/20 border border-transparent hover:border-primary/10 transition-colors">
              <div className="text-3xl md:text-5xl font-bold text-foreground mb-2">
                <CountUp end={45000} suffix="+" />
              </div>
              <div className="text-xs md:text-sm text-muted-foreground font-medium uppercase tracking-wider">{tStats("messagesDay")}</div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="py-8 md:py-16">
        <div className="text-center mb-12 max-w-3xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{tFeatures("headerTitle")}</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-base md:text-lg text-muted-foreground">{tFeatures("headerSubtitle")}</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8 max-w-7xl mx-auto">
          {[
            { key: "agents", icon: Bot, color: "text-primary", bg: "bg-primary/10" },
            { key: "predictive", icon: Brain, color: "text-purple-500", bg: "bg-purple-500/10" },
            { key: "workflow", icon: Zap, color: "text-amber-500", bg: "bg-amber-500/10" },
            { key: "chatbots", icon: MessageSquare, color: "text-blue-500", bg: "bg-blue-500/10" },
            { key: "sales", icon: TrendingUp, color: "text-green-500", bg: "bg-green-500/10" },
            { key: "custom", icon: Wrench, color: "text-pink-500", bg: "bg-pink-500/10" },
            { key: "integration", icon: Database, color: "text-indigo-500", bg: "bg-indigo-500/10" },
            { key: "analytics", icon: BarChart3, color: "text-cyan-500", bg: "bg-cyan-500/10" },
          ].map((feature, index) => (
            <FadeIn key={feature.key} delay={0.1 * (index + 1)}>
              <div className="p-6 rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300 h-full">
                <div className={`h-12 w-12 ${feature.bg} rounded-2xl flex items-center justify-center mb-6 ${feature.color}`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{tFeatures(`items.${feature.key}.title`)}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{tFeatures(`items.${feature.key}.desc`)}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>



      <IndustryHub />

      <Process />

      <Section className="py-8 md:py-16 border-b border-white/5 relative overflow-hidden">
        {/* Container for the entire section content - Strictly constrained */}
        <div className="flex flex-col items-center w-full max-w-[100vw] px-4 overflow-hidden">

          {/* Header Text */}
          <div className="text-center mb-6 w-full max-w-3xl mx-auto relative z-20">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-3 break-words">
              {tPartners("trustedBy")}
            </h2>
            <p className="text-base md:text-lg text-muted-foreground break-words px-4">
              {tPartners("trustedBySubtitle")}
            </p>
          </div>

          {/* Marquee Wrapper - Isolated to prevent layout bleed */}
          <div className="w-screen relative left-1/2 -translate-x-1/2 mb-8">
            <div className="w-full overflow-hidden">
              <LogoMarquee
                logos={[
                  { name: "AI Operators", abbr: "AI", image: "/partnerai.png" },
                  { name: "Qunvert", abbr: "QV", image: "/partnerqunvert.png" },
                  { name: "AI Operators", abbr: "AI", image: "/partnerai.png" },
                  { name: "Qunvert", abbr: "QV", image: "/partnerqunvert.png" },
                  { name: "AI Operators", abbr: "AI", image: "/partnerai.png" },
                  { name: "Qunvert", abbr: "QV", image: "/partnerqunvert.png" },
                ]}
              />
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-center w-full max-w-2xl mx-auto relative z-20 px-4">
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3 break-words">
              {tPartners("partnerTitle")}
            </h3>
            <p className="text-muted-foreground mb-6 text-sm md:text-base break-words">
              {tPartners("partnerSubtitle")}
            </p>
            <Link href="/contact">
              <Button variant="outline" className="rounded-full px-8 h-12 border-primary/20 hover:bg-primary/5 text-primary hover:text-primary transition-colors font-medium">
                Become a Partner <ArrowRight size={16} className="ms-2 rtl:rotate-180" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA Section - Mobile Optimized */}
      <Section className="py-8 md:py-16">
        <FadeIn>
          <div className="relative rounded-[2rem] p-6 md:p-20 text-center bg-gradient-to-b from-primary/5 to-transparent border border-primary/20 w-full overflow-hidden">
            <div className="max-w-3xl mx-auto space-y-6 px-2">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground break-words leading-tight">{tCTA("title")}</h2>
              <p className="text-base md:text-lg text-muted-foreground break-words max-w-[95%] mx-auto">
                {tCTA("subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 w-full sm:w-auto">
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button size="lg" className="h-14 sm:h-12 w-full sm:w-auto px-10 text-base font-bold shadow-xl shadow-primary/20">
                    {tCTA("primary")}
                  </Button>
                </Link>
                <Link href="https://wa.me/97451704550" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="h-14 sm:h-12 w-full sm:w-auto px-10 text-base font-bold bg-background/50 backdrop-blur-sm">
                    {tCTA("secondary")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  )
}

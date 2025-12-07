"use client"

import { Link } from "@/navigation"
import { ArrowRight, Bot, MessageSquare, Zap, CheckCircle2, Smartphone, Globe, Clock, ShieldCheck, Brain, TrendingUp, Wrench, Database, BarChart3, Building, Utensils, Truck, ShoppingBag, Landmark, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"
import { Card } from "@/components/ui/Card"
import { FadeIn } from "@/components/ui/FadeIn"
import { Process } from "@/components/sections/Process"
import { CountUp } from "@/components/ui/CountUp"
import { LogoMarquee } from "@/components/ui/LogoMarquee"
import { useTranslations } from "next-intl"


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
      <Section className="relative flex flex-col items-center justify-center text-center pt-48 md:pt-60 pb-40">
        {/* Spotlight Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10" />

        <FadeIn delay={0.1}>
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-transparent px-3 py-1 text-xs font-medium text-primary mb-8">
            <Zap size={12} className="mr-2 fill-primary" />
            {t("badge")}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground max-w-6xl mb-6 leading-[1.1]">
            {t("titleStart")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary/80">{t("titleMiddle")}</span> {t("titleEnd")}
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12 font-medium">
            {t("description")}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="h-12 px-8 text-base font-semibold">
                {t("ctaPrimary")}
                <ArrowRight size={18} className="ms-2 rtl:rotate-180" />
              </Button>
            </Link>
            <Link href="/solutions">
              <Button variant="secondary" size="lg" className="h-12 px-8 text-base font-semibold border border-border bg-white/50 dark:bg-white/5 hover:bg-accent text-foreground dark:text-white">
                {t("ctaSecondary")}
              </Button>
            </Link>
          </div>
        </FadeIn>
      </Section>



      {/* Stats Section */}
      <Section className="py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                <CountUp end={850} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground">{tStats("activeUsers")}</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                <CountUp end={99.9} decimals={1} suffix="%" />
              </div>
              <div className="text-sm text-muted-foreground">{tStats("uptime")}</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                <CountUp end={12} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground">{tStats("countries")}</div>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                <CountUp end={45000} suffix="+" />
              </div>
              <div className="text-sm text-muted-foreground">{tStats("messagesDay")}</div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Features Section */}
      <Section className="py-24">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{tFeatures("headerTitle")}</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground">{tFeatures("headerSubtitle")}</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
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
              <div className="p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors h-full">
                <div className={`h-12 w-12 ${feature.bg} rounded-xl flex items-center justify-center mb-6 ${feature.color}`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{tFeatures(`items.${feature.key}.title`)}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{tFeatures(`items.${feature.key}.desc`)}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Industries Section */}
      <Section className="py-24">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{tIndustries("title")}</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground">{tIndustries("subtitle")}</p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { key: "realestate", icon: Building, color: "text-emerald-500", bg: "bg-emerald-500/10" },
            { key: "restaurants", icon: Utensils, color: "text-orange-500", bg: "bg-orange-500/10" },
            { key: "logistics", icon: Truck, color: "text-blue-500", bg: "bg-blue-500/10" },
            { key: "retail", icon: ShoppingBag, color: "text-pink-500", bg: "bg-pink-500/10" },
            { key: "finance", icon: Landmark, color: "text-indigo-500", bg: "bg-indigo-500/10" },
            { key: "ecommerce", icon: ShoppingCart, color: "text-cyan-500", bg: "bg-cyan-500/10" },
          ].map((industry, index) => (
            <FadeIn key={industry.key} delay={0.1 * index}>
              <div className="flex items-start gap-6 p-6 rounded-2xl border border-border bg-card hover:bg-secondary/30 transition-colors">
                <div className={`shrink-0 h-12 w-12 rounded-xl flex items-center justify-center ${industry.bg} ${industry.color}`}>
                  <industry.icon size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{tIndustries(`items.${industry.key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tIndustries(`items.${industry.key}.desc`)}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <Process />

      {/* Trusted Companies Marquee */}
      {/* Trusted Companies Marquee */}
      <Section className="py-20 border-b border-border/50">
        <div className="text-center mb-10">
          <FadeIn>
            <h2 className="text-3xl font-bold text-foreground mb-4">{tPartners("trustedBy")}</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
              {tPartners("trustedBySubtitle")}
            </p>
          </FadeIn>
        </div>

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

        <FadeIn delay={0.2}>
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {tPartners("partnerTitle")}
            </h3>
            <p className="text-muted-foreground mb-6">
              {tPartners("partnerSubtitle")}
            </p>
            <Link href="/contact">
              <Button variant="outline" className="rounded-full px-6 border-primary/20 hover:bg-primary/5 text-primary hover:text-primary transition-colors">
                Become a Partner <ArrowRight size={14} className="ml-2" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </Section>

      {/* CTA Section */}
      <Section className="py-24">
        <FadeIn>
          <div className="relative rounded-3xl p-16 md:p-24 text-center bg-gradient-to-b from-primary/5 to-transparent border border-primary/20">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">{tCTA("title")}</h2>
              <p className="text-lg text-muted-foreground">
                {tCTA("subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Link href="/contact">
                  <Button size="lg" className="h-12 px-8 text-base font-semibold">
                    {tCTA("primary")}
                  </Button>
                </Link>
                <Link href="https://wa.me/1234567890">
                  <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold">
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

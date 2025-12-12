import { Target, Users, Trophy, Globe, Sparkles, Bot, Eye, Heart } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"
import { Link } from "@/navigation"
import { FadeIn } from "@/components/ui/FadeIn"
import { Partners } from "@/components/sections/Partners"
import { CountUp } from "@/components/ui/CountUp"
import { HeroAnimation } from "@/components/ui/HeroAnimation"
import { useTranslations } from "next-intl"

export default function About() {
    const t = useTranslations("About");

    return (
        <div className="flex flex-col min-h-screen pt-20">
            <Section className="pb-12 text-center">
                <FadeIn>
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-transparent px-3 py-1 text-xs font-medium text-primary mb-6">
                        {t("badge")}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground dark:text-white">
                        {t("titlePrefix")} <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary/80">{t("titleSuffix")}</span>
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        {t("subtitle")}
                    </p>
                </FadeIn>
            </Section>

            {/* Our Story - PRO Design */}
            <Section className="py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <FadeIn>
                        <div className="relative z-10 space-y-10">
                            <div className="space-y-6">
                                <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-bold text-primary tracking-widest uppercase">
                                    <Bot size={14} className="mr-2" />
                                    {t("storyTitle")}
                                </div>
                                <h2 className="text-4xl md:text-6xl font-bold text-foreground dark:text-white leading-tight">
                                    Building the <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-indigo-500">Autonomous Future</span>
                                </h2>
                                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                                    {t("storyP1")}
                                </p>
                                <p className="text-lg text-foreground/80 dark:text-slate-300 leading-relaxed border-l-4 border-primary/30 pl-6 italic">
                                    {t("storyP2")}
                                </p>
                            </div>

                            {/* Stats - Redesigned */}
                            <div className="grid grid-cols-3 gap-8 py-8 border-t border-border/50">
                                <div className="space-y-2">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl md:text-5xl font-bold text-foreground dark:text-white"><CountUp end={5} /></span>
                                        <span className="text-xl text-primary font-bold">+</span>
                                    </div>
                                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Countries</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl md:text-5xl font-bold text-foreground dark:text-white"><CountUp end={170} /></span>
                                        <span className="text-xl text-primary font-bold">+</span>
                                    </div>
                                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Clients</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl md:text-5xl font-bold text-foreground dark:text-white"><CountUp end={7} /></span>
                                        <span className="text-xl text-primary font-bold">+</span>
                                    </div>
                                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Projects</div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* The "Tile" - Clean Animation Only */}
                    <FadeIn delay={0.2} className="relative h-full min-h-[500px] lg:min-h-[600px]">
                        <div className="relative h-full w-full overflow-hidden flex items-center justify-center">
                            {/* Animation Container */}
                            <HeroAnimation
                                className="w-full h-full flex items-center justify-center pointer-events-none"
                                videoClassName="object-contain scale-[0.9] mix-blend-screen opacity-100 contrast-125 brightness-100"
                                customMask="radial-gradient(circle, black 80%, transparent 100%)"
                                noShine
                            />
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* Mission & Vision */}
            <Section>
                <div className="grid md:grid-cols-3 gap-6">
                    <FadeIn delay={0.1}>
                        <div className="p-8 rounded-2xl bg-card border border-border h-full hover:bg-secondary/50 transition-colors">
                            <div className="h-12 w-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6 text-primary">
                                <Target size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">{t("missionTitle")}</h3>
                            <p className="text-muted-foreground">{t("missionDesc")}</p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="p-8 rounded-2xl bg-card border border-border h-full hover:bg-secondary/50 transition-colors">
                            <div className="h-12 w-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-blue-400">
                                <Eye size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">{t("visionTitle")}</h3>
                            <p className="text-muted-foreground">{t("visionDesc")}</p>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <div className="p-8 rounded-2xl bg-card border border-border h-full hover:bg-secondary/50 transition-colors">
                            <div className="h-12 w-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6 text-pink-400">
                                <Heart size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-3">{t("valuesTitle")}</h3>
                            <ul className="space-y-2 text-muted-foreground text-sm">
                                <li className="flex gap-2"><span className="text-pink-400">•</span> {t("value1")}</li>
                                <li className="flex gap-2"><span className="text-pink-400">•</span> {t("value2")}</li>
                                <li className="flex gap-2"><span className="text-pink-400">•</span> {t("value3")}</li>
                            </ul>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            <Partners />

            <Section className="py-20 text-center">
                <FadeIn>
                    <h2 className="text-3xl font-bold text-foreground mb-6">{t("joinTitle")}</h2>
                    <Link href="/contact">
                        <Button size="lg" className="rounded-full px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90">{t("joinButton")}</Button>
                    </Link>
                </FadeIn>
            </Section>
        </div>
    )
}

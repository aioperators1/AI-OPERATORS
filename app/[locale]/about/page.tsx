import { Terminal, Users, Globe, Award, Target, Eye, Heart, Zap, Bot } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"
import { Link } from "@/navigation"
import { FadeIn } from "@/components/ui/FadeIn"
import { Partners } from "@/components/sections/Partners"
import { CountUp } from "@/components/ui/CountUp"
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

            <Section className="py-0">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <FadeIn>
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6">{t("storyTitle")}</h2>

                            <div className="mb-8 space-y-6">
                                <p className="text-foreground/80 dark:text-white/90 leading-relaxed text-xl md:text-2xl">
                                    {t("storyP1")}
                                </p>
                            </div>

                            <div className="grid grid-cols-3 gap-6 border-y border-border dark:border-white/10 py-10">
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-2"><CountUp end={10} suffix="+" /></div>
                                    <div className="text-xs md:text-sm text-primary/80 uppercase tracking-widest font-bold">COUNTRIES</div>
                                </div>
                                <div className="text-center border-l border-border dark:border-white/10">
                                    <div className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-2"><CountUp end={100} suffix="+" /></div>
                                    <div className="text-xs md:text-sm text-primary/80 uppercase tracking-widest font-bold">CLIENTS</div>
                                </div>
                                <div className="text-center border-l border-border dark:border-white/10">
                                    <div className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-2"><CountUp end={200} suffix="+" /></div>
                                    <div className="text-xs md:text-sm text-primary/80 uppercase tracking-widest font-bold">PROJECTS</div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <p className="text-foreground/80 dark:text-white/90 leading-relaxed text-xl md:text-2xl">
                                    {t("storyP2")}
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        {/* Premium Glassmorphic Card */}
                        <div className="relative aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-white/5 via-white/5 to-transparent border border-white/10 shadow-2xl backdrop-blur-sm group">
                            {/* Animated Glow Behind */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/30 rounded-full blur-[100px] group-hover:bg-primary/40 transition-colors duration-700" />

                            {/* Inner Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                                <div className="h-20 w-20 rounded-3xl bg-gradient-to-tr from-primary/20 to-blue-500/20 border border-primary/20 flex items-center justify-center mb-8 shadow-inner shadow-primary/20 rotate-3 group-hover:rotate-6 transition-transform duration-500">
                                    <Bot size={40} className="text-primary drop-shadow-[0_0_15px_rgba(56,189,248,0.5)]" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">{t("imageTitle")}</h3>
                                <div className="h-1 w-12 bg-primary/50 rounded-full mb-4" />
                                <p className="text-sm font-medium text-primary/80 uppercase tracking-widest">{t("imageSubtitle")}</p>
                            </div>

                            {/* Decorative Grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
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

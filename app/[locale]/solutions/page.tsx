"use client"

import { Bot, MessageSquare, Briefcase, Calendar, ArrowRight, Check, Zap, BarChart } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"
import { Link } from "@/navigation"
import { FadeIn } from "@/components/ui/FadeIn"
import { useTranslations } from "next-intl"

export default function Solutions() {
    const t = useTranslations("Solutions");
    return (
        <div className="flex flex-col min-h-screen pt-20">
            <Section className="relative pt-32 pb-20 text-center space-y-8">
                {/* Spotlight Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />

                <FadeIn>
                    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary mb-6 ring-1 ring-inset ring-primary/10">
                        <Zap size={12} className="mr-2 fill-primary" />
                        Our Expertise
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground dark:text-white mb-6">
                        Intelligent <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary/80">Solutions</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        We don't just build bots. We build digital employees that drive real business results and automate your core operations.
                    </p>
                </FadeIn>
            </Section>

            {/* Featured Service Highlight - Premium Glass Card */}
            <Section className="py-0">
                <FadeIn delay={0.2}>
                    <div className="relative rounded-[2.5rem] border border-border dark:border-white/10 bg-card/40 dark:bg-white/[0.02] backdrop-blur-md p-8 md:p-12 overflow-hidden shadow-2xl group">
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/20 transition-colors duration-700" />

                        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-4xl font-bold text-foreground dark:text-white mb-2">{t("featured.title")}</h2>
                                    <p className="text-primary font-medium tracking-wide">{t("featured.tags")}</p>
                                </div>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    {t("featured.description")}
                                </p>

                                <div className="space-y-4">
                                    {[
                                        "Unified intelligence across all channels",
                                        "Auto-qualify leads with custom criteria",
                                        "Multilingual support (100+ languages)",
                                        "Seamless handover to human experts"
                                    ].map((feat, i) => (
                                        <div key={i} className="flex items-start gap-3">
                                            <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5 shadow-[0_0_10px_rgba(56,189,248,0.3)]">
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            <span className="text-foreground/80 dark:text-slate-200">{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-4">
                                    <Link href="/contact">
                                        <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all">
                                            Request Consultation
                                            <ArrowRight size={16} className="ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Visual Representation */}
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full opacity-20" />
                                <div className="relative bg-card/60 dark:bg-black/40 backdrop-blur-xl border border-border dark:border-white/10 rounded-2xl p-6 shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500">
                                    <div className="flex items-center gap-4 mb-6 border-b border-border dark:border-white/5 pb-4">
                                        <div className="h-10 w-10 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                            <Bot size={20} />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-foreground dark:text-white">{t("featured.agentName")}</div>
                                            <div className="text-xs text-blue-400 font-mono">System Active • v2.4.0</div>
                                        </div>
                                    </div>
                                    <div className="space-y-4 text-sm">
                                        <div className="bg-secondary/50 dark:bg-white/5 border border-border dark:border-white/5 p-3 rounded-2xl rounded-tl-sm text-foreground/80 dark:text-slate-300 self-start max-w-[85%]">
                                            {t("featured.chat.user1")}
                                        </div>
                                        <div className="bg-primary/20 border border-primary/20 p-3 rounded-2xl rounded-tr-sm text-foreground dark:text-white self-end max-w-[90%] ml-auto shadow-[0_4px_12px_rgba(56,189,248,0.1)]">
                                            {t("featured.chat.aiResponse")}
                                        </div>
                                        <div className="bg-secondary/50 dark:bg-white/5 border border-border dark:border-white/5 p-3 rounded-2xl rounded-tl-sm text-foreground/80 dark:text-slate-300 self-start max-w-[85%]">
                                            {t("featured.chat.user2")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </Section>

            {/* Video Showcase Section */}
            <Section className="py-24">
                <div className="max-w-6xl mx-auto">
                    <FadeIn>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground dark:text-white mb-6">
                                Future-Proof Operations
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                See how our intelligent agents automate complex workflows and drive efficiency across your entire organization.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border dark:border-white/10 bg-black/50 ring-1 ring-white/10">
                            {/* Video Container with 16:9 aspect ratio */}
                            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                                <iframe
                                    className="absolute top-0 left-0 w-full h-full"
                                    src="https://www.youtube.com/embed/mWzTO3ZPYP8?start=1253"
                                    title="AI Solutions Demo"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* Other Services Grid */}
            <Section>
                <div className="text-center mb-16">
                    <h3 className="text-3xl font-bold text-foreground dark:text-white">Specialized Modules</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Smart Scheduling",
                            desc: "Eliminate the back-and-forth. Let AI handle availability and booking directly.",
                            icon: Calendar,
                            color: "text-purple-400",
                            bg: "bg-purple-400/10"
                        },
                        {
                            title: "Support Triage",
                            desc: "Instantly resolve Tier 1 queries and categorize complex issues for your team.",
                            icon: Zap,
                            color: "text-amber-400",
                            bg: "bg-amber-400/10"
                        },
                        {
                            title: "Data Analytics",
                            desc: "Gain insights from conversations. Understand customer sentiment and pain points.",
                            icon: BarChart,
                            color: "text-pink-400",
                            bg: "bg-pink-400/10"
                        }
                    ].map((service, index) => (
                        <FadeIn key={index} delay={0.1 * index + 0.3}>
                            <div className="group relative h-full p-8 rounded-2xl border border-border dark:border-white/10 bg-secondary/50 dark:bg-white/5 hover:bg-secondary/80 dark:hover:bg-white/[0.07] transition-all hover:-translate-y-1 duration-300 backdrop-blur-sm">
                                {/* Badge */}
                                <div className="absolute top-4 right-4 px-2.5 py-1 bg-amber-500/10 text-amber-500 text-[10px] font-bold rounded-full border border-amber-500/20">
                                    Active
                                </div>

                                <div className={`h-14 w-14 ${service.bg} rounded-2xl flex items-center justify-center mb-6 ${service.color} border border-border dark:border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                                    <service.icon size={26} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-foreground dark:text-white">{service.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.desc}</p>
                                <div className="flex items-center text-xs font-bold text-muted-foreground group-hover:text-primary transition-colors tracking-wide uppercase">
                                    Learn more <ArrowRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Section>

            {/* Pricing Section */}
            <Section className="py-24">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <FadeIn>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Solution Packages
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <p className="text-lg text-muted-foreground">
                            Flexible engagement models designed for businesses of all sizes.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {[
                        {
                            name: "Starter",
                            badge: "FOR PILOT PROJECTS",
                            price: "$499",
                            period: "/mo",
                            description: "Perfect for testing AI implementation",
                            features: [
                                "1 Active Agent",
                                "10,000 AI Tokens",
                                "Basic Workflow Automation",
                                "Email Support",
                                "1 Integration",
                            ],
                            cta: "Start Pilot",
                            popular: false,
                            color: "from-blue-500/20 to-cyan-500/20",
                        },
                        {
                            name: "Growth",
                            badge: "FOR SCALING TEAMS",
                            price: "$1,499",
                            period: "/mo",
                            description: "For businesses expanding AI ops",
                            features: [
                                "3 Active Agents",
                                "100,000 AI Tokens",
                                "Advanced Workflows",
                                "Priority Support",
                                "3 Integrations",
                            ],
                            cta: "Scale Now",
                            popular: false,
                            color: "from-purple-500/20 to-pink-500/20",
                        },
                        {
                            name: "Professional",
                            badge: "FOR ESTABLISHED BRANDS",
                            price: "$3,999",
                            period: "/mo",
                            description: "Full-service AI transformation",
                            features: [
                                "Unlimited Agents",
                                "500,000 AI Tokens",
                                "Custom LLM Fine-tuning",
                                "Dedicated Success Manager",
                                "Full CRM/ERP Sync",
                            ],
                            cta: "Get Started",
                            popular: true,
                            color: "from-primary/30 to-blue-500/30",
                        },
                        {
                            name: "Enterprise",
                            badge: "FOR GLOBAL ORGS",
                            price: "Custom",
                            period: "",
                            description: "Strategic partnership & development",
                            features: [
                                "Custom Development",
                                "On-premise Deployment",
                                "SLA Guarantees",
                                "24/7 Engineering Support",
                                "White Labeling",
                            ],
                            cta: "Contact Sales",
                            popular: false,
                            color: "from-amber-500/20 to-orange-500/20",
                        },
                    ].map((plan, index) => (
                        <FadeIn key={plan.name} delay={0.1 * (index + 2)}>
                            <div
                                className={`group relative h-full p-6 rounded-2xl border transition-all duration-300 ${plan.popular
                                    ? "border-primary bg-gradient-to-br from-primary/5 via-transparent to-primary/5 shadow-lg shadow-primary/10 scale-105"
                                    : "border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
                                    }`}
                            >
                                {/* Gradient overlay */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />

                                {/* Badge */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="text-[10px] font-bold text-muted-foreground tracking-widest uppercase">
                                        {plan.badge}
                                    </div>
                                    {plan.popular && (
                                        <div className="px-2.5 py-1 bg-primary text-primary-foreground text-[10px] font-bold rounded-full tracking-wide">
                                            RECOMMENDED
                                        </div>
                                    )}
                                </div>

                                {/* Plan name */}
                                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>

                                {/* Price */}
                                <div className="mb-6">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                                        <span className="text-sm text-muted-foreground">{plan.period}</span>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

                                {/* Features */}
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2.5">
                                            <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                                <Check className="h-2.5 w-2.5 text-primary" strokeWidth={3} />
                                            </div>
                                            <span className="text-sm text-foreground/80 leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <Link href="/contact" className="block mt-auto">
                                    <Button
                                        className={`w-full font-semibold transition-all duration-300 ${plan.popular
                                            ? "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25"
                                            : "border-2 hover:border-primary hover:bg-primary/5"
                                            }`}
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

            <Section className="pb-24 text-center">
                <div className="p-8 rounded-3xl bg-secondary/30 border border-border">
                    <h2 className="text-2xl font-bold text-foreground mb-4">Need a Custom Solution?</h2>
                    <p className="text-muted-foreground mb-8">We build bespoke agents trained on your specific data.</p>
                    <Link href="/contact">
                        <Button variant="outline" className="border-border hover:bg-secondary text-foreground">Contact Sales from Team</Button>
                    </Link>
                </div>
            </Section>
        </div>
    )
}

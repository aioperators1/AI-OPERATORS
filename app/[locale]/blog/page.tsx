"use client"

import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"
import { Link } from "@/navigation"
import { FadeIn } from "@/components/ui/FadeIn"
import { ArrowRight, Calendar, Tag, Search, Sparkles } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Blog() {
    const t = useTranslations('Blog')
    const [selectedCategory, setSelectedCategory] = useState('all')

    const posts = [
        {
            title: t('featured.title'),
            summary: t('featured.excerpt'),
            category: "guide",
            date: "Dec 12, 2024",
            readTime: "5 min",
            image: "bg-gradient-to-br from-purple-500/20 via-blue-500/10 to-emerald-500/5",
            featured: true,
            author: { initials: "SC", name: "Sarah Chen" }
        },
        {
            title: "5 Signs Your Business Needs AI Automation",
            summary: "Manual tasks slowing you down? Here are the key indicators that it's time to upgrade.",
            category: "guide",
            date: "Dec 10, 2024",
            readTime: "4 min",
            image: "bg-gradient-to-br from-emerald-500/10 to-teal-500/5",
            featured: false,
            author: { initials: "JD", name: "John Doe" }
        },
        {
            title: "Case Study: Reducing Support Costs by 40%",
            summary: "How a local logistics company used Qunvert to automate driver coordination.",
            category: "case_study",
            date: "Dec 05, 2024",
            readTime: "7 min",
            image: "bg-gradient-to-br from-amber-500/10 to-orange-500/5",
            featured: false,
            author: { initials: "AM", name: "Alex Mike" }
        },
        {
            title: "AI Solution Launches Multi-Language Support",
            summary: "Our agents now speak 30+ languages fluently. Expand your global reach today.",
            category: "news",
            date: "Nov 28, 2024",
            readTime: "2 min",
            image: "bg-gradient-to-br from-indigo-500/10 to-purple-500/5",
            featured: false,
            author: { initials: "SC", name: "Sarah Chen" }
        },
        // Additional mock posts for "Pro" feel
        {
            title: "The Ethics of AI in Customer Support",
            summary: "Maintaining transparency and trust while automating interactions.",
            category: "guide",
            date: "Nov 20, 2024",
            readTime: "6 min",
            image: "bg-gradient-to-br from-pink-500/10 to-rose-500/5",
            featured: false,
            author: { initials: "JD", name: "John Doe" }
        }
    ]

    const filteredPosts = selectedCategory === 'all'
        ? posts.filter(p => !p.featured)
        : posts.filter(p => !p.featured && p.category === selectedCategory)

    const categories = ['all', 'guide', 'case_study', 'news']

    return (
        <div className="flex flex-col min-h-screen pt-20">
            {/* Pro Hero Section with Background Glow */}
            <div className="relative border-b border-border/50 bg-background/50 backdrop-blur-3xl overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                <div className="absolute -top-[20%] -left-[10%] w-[70vh] h-[70vh] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
                <div className="absolute -bottom-[20%] -right-[10%] w-[50vh] h-[50vh] rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />

                <Section className="py-24 relative z-10">
                    <FadeIn>
                        <div className="max-w-3xl">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase mb-6"
                            >
                                <Sparkles size={12} />
                                {t('title')}
                            </motion.div>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                                Insights for the <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">AI Era</span>
                            </h1>
                            <p className="text-xl text-muted-foreground/80 leading-relaxed max-w-2xl">
                                {t('subtitle')}
                            </p>
                        </div>
                    </FadeIn>
                </Section>
            </div>

            {/* Featured Post - "Pro" High Impact Card */}
            <Section className="-mt-12 py-0 z-20 relative">
                <FadeIn delay={0.2}>
                    <Link href="#" className="group relative block rounded-[2rem] overflow-hidden border border-white/10 bg-card shadow-2xl hover:shadow-primary/20 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1">
                        <div className="grid lg:grid-cols-5 gap-0 h-full">
                            <div className={`lg:col-span-3 min-h-[400px] ${posts[0].image} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-50" />
                                {/* Abstract Pattern Overlay */}
                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 mix-blend-overlay" />
                                <div className="absolute bottom-6 left-8">
                                    <div className="flex items-center gap-2">
                                        <div className="h-8 w-8 rounded-full bg-background/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-xs font-bold text-white">
                                            {posts[0].author.initials}
                                        </div>
                                        <div className="text-sm font-medium text-white/90">
                                            {posts[0].author.name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-2 p-8 md:p-12 flex flex-col justify-center bg-card/50 backdrop-blur-sm">
                                <div className="flex items-center gap-3 text-xs font-bold tracking-wider mb-6">
                                    <span className="px-3 py-1 rounded-full bg-primary text-white shadow-lg shadow-primary/25">
                                        {t('featured.badge')}
                                    </span>
                                    <span className="text-muted-foreground uppercase flex items-center">
                                        <Calendar size={12} className="mr-1.5" /> {posts[0].date}
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-primary transition-all">
                                    {posts[0].title}
                                </h2>
                                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                    {posts[0].summary}
                                </p>
                                <div className="flex items-center text-sm font-bold text-foreground group-hover:text-primary transition-colors mt-auto">
                                    {t('readMore')}
                                    <div className="ml-2 p-1 rounded-full bg-secondary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </FadeIn>
            </Section>

            {/* Content Area with Sticky Sidebar (if we had one) or Filter */}
            <Section className="py-20">
                <div className="flex flex-col gap-10">
                    {/* Interactive Filter Pills */}
                    <div className="flex flex-wrap items-center gap-2 md:gap-3 sticky top-24 z-30 py-4 bg-background/80 backdrop-blur-xl -mx-4 px-4 md:static md:bg-transparent md:p-0">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${selectedCategory === cat
                                        ? "text-primary border-primary/20 bg-primary/10 shadow-lg shadow-primary/10"
                                        : "text-muted-foreground border-border hover:border-foreground/20 hover:text-foreground bg-card/50"
                                    }`}
                            >
                                {t(`categories.${cat}`)}
                            </button>
                        ))}
                    </div>

                    {/* Animated Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filteredPosts.map((post, index) => (
                                <motion.div
                                    layout
                                    key={post.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <Link href="#" className="flex flex-col group h-full rounded-3xl border border-white/5 bg-card/30 hover:bg-card/50 backdrop-blur-md overflow-hidden hover:shadow-2xl hover:shadow-black/20 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2">
                                        <div className={`aspect-[4/3] w-full ${post.image} relative overflow-hidden`}>
                                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                                            <div className="absolute top-4 left-4">
                                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-md ${post.category === 'news' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                                                        post.category === 'case_study' ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' :
                                                            'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'
                                                    }`}>
                                                    {t(`categories.${post.category}`)}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-7 flex flex-col flex-1 border-t border-white/5">
                                            <div className="flex items-center gap-2 mb-4">
                                                <div className="h-6 w-6 rounded-full bg-secondary flex items-center justify-center text-[10px] font-bold">
                                                    {post.author.initials}
                                                </div>
                                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                                    <span>{post.author.name}</span>
                                                    <span className="w-1 h-1 rounded-full bg-border" />
                                                    <span>{post.date}</span>
                                                </div>
                                            </div>

                                            <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                                                {post.title}
                                            </h3>
                                            <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                                {post.summary}
                                            </p>

                                            <div className="flex items-center justify-between text-xs font-semibold pt-4 border-t border-white/5 text-muted-foreground group-hover:text-foreground transition-colors">
                                                <span>{post.readTime} read</span>
                                                <span className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                                                    Read Now <ArrowRight size={12} className="ml-1" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </Section>

            {/* Newsletter CTA - Pro Glass Style */}
            <Section className="pb-24">
                <FadeIn>
                    <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10">
                        {/* Gradient Backgrounds */}
                        <div className="absolute inset-0 bg-secondary/30 backdrop-blur-xl" />
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-primary/20 rounded-full blur-[80px]" />
                        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[80px]" />

                        <div className="relative z-10 p-12 md:p-20 text-center max-w-4xl mx-auto">
                            <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 text-primary mb-8 shadow-lg shadow-primary/10">
                                <Tag size={32} />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Stay ahead of the curve</h2>
                            <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
                                Join 5,000+ founders receiving our weekly deep dives on AI, automation, and growth strategies.
                            </p>
                            <form className="max-w-md mx-auto relative group" onSubmit={(e) => e.preventDefault()}>
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" size={20} />
                                <input
                                    type="email"
                                    placeholder="Enter your work email..."
                                    className="w-full bg-background/50 border border-white/10 hover:border-primary/30 focus:border-primary rounded-full pl-12 pr-32 py-4 shadow-xl shadow-black/5 outline-none transition-all duration-300"
                                />
                                <Button className="absolute right-1.5 top-1.5 bottom-1.5 rounded-full px-6 bg-foreground text-background hover:bg-primary hover:text-white transition-colors duration-300 shadow-lg" size="sm">
                                    Subscribe
                                </Button>
                            </form>
                            <p className="mt-6 text-xs text-muted-foreground/60">
                                No spam. Unsubscribe at any time.
                            </p>
                        </div>
                    </div>
                </FadeIn>
            </Section>
        </div>
    )
}

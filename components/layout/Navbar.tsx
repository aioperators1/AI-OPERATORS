"use client"

import { useState, useEffect } from "react"
import { Link } from "@/navigation"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/ui/ThemeToggle"
import { LocaleSwitcher } from "@/components/ui/LocaleSwitcher"
import { useTranslations } from "next-intl"
import Image from "next/image"

export function Navbar() {
    const t = useTranslations("Navbar")
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const navLinks = [
        { name: t("solutions"), href: "/solutions" },
        { name: t("portfolio"), href: "/portfolio" },
        { name: t("blog"), href: "/blog" },
        { name: t("about"), href: "/about" },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={cn(
            "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-7xl rounded-full border",
            scrolled
                ? "bg-background/80 backdrop-blur-xl border-border shadow-lg shadow-black/5 py-3 px-6"
                : "bg-transparent border-transparent py-5 px-4"
        )}>
            <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-1 group">
                    <div className="relative h-12 w-12">
                        <Image
                            src="/logo.jpg?v=3"
                            alt="AI Solutions Logo"
                            fill
                            className="object-contain mix-blend-screen"
                            priority
                        />
                    </div>
                    <span className="font-bold text-2xl text-foreground tracking-tight">Solution</span>
                </Link>

                <div className="hidden md:flex items-center gap-1 bg-secondary/50 rounded-full p-1 border border-foreground/10 backdrop-blur-md shadow-inner shadow-foreground/5">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium px-5 py-2 rounded-full hover:bg-foreground/5 text-muted-foreground hover:text-foreground transition-all duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-2">
                    <LocaleSwitcher />
                    <ThemeToggle />
                    <Link href="/contact">
                        <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6">
                            {t("bookDemo")}
                        </Button>
                    </Link>
                </div>

                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-foreground hover:text-primary transition-colors p-2"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-4 bg-card border border-border rounded-2xl overflow-hidden shadow-2xl p-4 flex flex-col gap-2"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors py-4 px-6 rounded-xl"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-2">
                            <Button className="w-full rounded-xl py-6 bg-primary text-primary-foreground font-bold text-lg">{t("bookDemo")}</Button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

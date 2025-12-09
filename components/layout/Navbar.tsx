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

import { Magnetic } from "@/components/ui/Magnetic"
import { useTheme } from "next-themes"

export function Navbar() {
    const t = useTranslations("Navbar")
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const { theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navLinks = [
        { name: t("solutions"), href: "/solutions" },
        { name: t("portfolio"), href: "/portfolio" },
        { name: t("blog"), href: "/blog" },
        { name: t("about"), href: "/about" },
    ]

    const logoSrc = mounted && (theme === 'dark' || resolvedTheme === 'dark') ? '/logowhit.png' : '/logoblack.png'

    return (
        <nav className={cn(
            "fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-7xl rounded-full border",
            scrolled
                ? "bg-background/80 backdrop-blur-xl border-border shadow-lg shadow-black/5 py-3 px-6"
                : "bg-transparent border-transparent py-5 px-6"
        )}>
            <div className="flex items-center justify-between" dir="ltr">
                <Link href="/" className="flex items-center gap-1 md:gap-2 group" dir="ltr">
                    <div className="relative h-9 w-9 md:h-12 md:w-12 transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src={logoSrc} // Dynamic Logo
                            alt="AI Operators Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="font-bold text-xl md:text-2xl text-foreground tracking-tight">perators</span>
                </Link>

                <div className="hidden md:flex items-center gap-1 bg-secondary/50 rounded-full p-1 border border-foreground/10 backdrop-blur-md shadow-inner shadow-foreground/5">
                    {navLinks.map((link) => (
                        <Magnetic key={link.name}>
                            <Link
                                href={link.href}
                                className="inline-block text-sm font-medium px-5 py-2 rounded-full hover:bg-foreground/5 text-muted-foreground hover:text-foreground transition-all duration-300"
                            >
                                {link.name}
                            </Link>
                        </Magnetic>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-2">
                    <LocaleSwitcher />
                    <ThemeToggle />
                    <Magnetic>
                        <Link href="/contact">
                            <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-6">
                                {t("bookDemo")}
                            </Button>
                        </Link>
                    </Magnetic>
                </div>

                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-foreground hover:text-primary transition-colors p-3 rounded-full hover:bg-secondary/50"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="md:hidden flex flex-col mt-4 bg-card/95 backdrop-blur-xl border border-border rounded-3xl overflow-hidden shadow-2xl max-h-[80vh] overflow-y-auto"
                    >
                        <div className="p-4 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium hover:bg-primary/10 hover:text-primary transition-colors py-4 px-6 rounded-2xl text-center active:bg-primary/5"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="h-px bg-border/50 my-2" />
                            <div className="flex flex-col gap-4 items-center justify-center py-4">
                                <LocaleSwitcher mode="list" />
                                <ThemeToggle />
                            </div>
                            <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-2">
                                <Button className="w-full rounded-2xl py-6 bg-primary text-primary-foreground font-bold text-lg hover:shadow-lg hover:shadow-primary/20 transition-all">
                                    {t("bookDemo")}
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}

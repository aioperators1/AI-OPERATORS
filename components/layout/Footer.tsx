"use client"

import { Link } from "@/navigation"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { useTranslations } from "next-intl"
import Image from "next/image"

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Footer() {
    const tFooter = useTranslations("Footer");
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const logoSrc = mounted && (theme === 'dark' || resolvedTheme === 'dark') ? '/logowhit.png' : '/logoblack.png';

    return (
        <footer className="relative border-t border-border bg-card/40 backdrop-blur-xl pt-20 pb-24">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 mb-16">
                {/* Brand Column */}
                <div className="col-span-2 md:col-span-4 space-y-6">
                    <Link href="/" className="inline-flex items-center gap-0 group" dir="ltr">
                        <div className="relative h-12 w-12">
                            <Image
                                src={logoSrc}
                                alt="AI Operators Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="font-bold text-2xl text-foreground tracking-tight">perators</span>
                    </Link>
                    <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                        {tFooter("tagline")}
                    </p>
                    <div className="flex gap-4">
                        {[Github, Twitter, Linkedin].map((Icon, i) => (
                            <a key={i} href="#" className="h-10 w-10 rounded-full border border-border bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links Columns */}
                <div className="col-span-1 md:col-span-2 space-y-4">
                    <h4 className="font-bold text-foreground text-lg">{tFooter("services")}</h4>
                    <ul className="space-y-3">
                        {[
                            { label: tFooter("aiDev"), href: "#" },
                            { label: tFooter("workflow"), href: "#" },
                            { label: tFooter("chatbot"), href: "#" },
                            { label: tFooter("analytics"), href: "#" }
                        ].map(item => (
                            <li key={item.label}><a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">{item.label}</a></li>
                        ))}
                    </ul>
                </div>

                <div className="col-span-1 md:col-span-2 space-y-4">
                    <h4 className="font-bold text-foreground text-lg">{tFooter("company")}</h4>
                    <ul className="space-y-3">
                        {[
                            { label: tFooter("aboutUs"), href: "/about" },
                            { label: tFooter("careers"), href: "#" },
                            { label: tFooter("blogLink"), href: "/blog" },
                            { label: tFooter("contactLink"), href: "/contact" }
                        ].map(item => (
                            <li key={item.label}><Link href={item.href} className="text-muted-foreground hover:text-primary transition-colors">{item.label}</Link></li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter / CTA */}
                <div className="col-span-2 md:col-span-4 space-y-4">
                    <h4 className="font-bold text-foreground text-lg">{tFooter("subscribe")}</h4>
                    <p className="text-muted-foreground">
                        {tFooter("subscribeDesc")}
                    </p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder={tFooter("emailPlaceholder")}
                            className="bg-secondary/50 border border-border rounded-lg px-4 py-2 w-full focus:outline-none focus:border-primary/50 text-foreground placeholder:text-muted-foreground"
                        />
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold">
                            <Mail size={18} />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto px-6">
                <p className="text-muted-foreground text-sm">
                    © {new Date().getFullYear()} AI Operators. {tFooter("rights")}
                </p>
                <div className="flex gap-6 text-sm text-muted-foreground">
                    <Link href="/legal/privacy" className="hover:text-foreground transition-colors">{tFooter("privacy")}</Link>
                    <Link href="/legal/terms" className="hover:text-foreground transition-colors">{tFooter("terms")}</Link>
                </div>
            </div>
        </footer>
    )
}

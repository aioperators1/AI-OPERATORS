"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/navigation"
import { useState, useRef, useEffect, useTransition } from "react"
import { Globe, ChevronDown, Check } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const languages = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "ar", label: "العربية", flag: "🇸🇦" },
]

export function LocaleSwitcher() {
    const locale = useLocale()
    const router = useRouter()
    const pathname = usePathname()
    const [isPending, startTransition] = useTransition()
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [])

    const onSelectChange = (nextLocale: string) => {
        setIsOpen(false)
        startTransition(() => {
            router.replace(pathname, { locale: nextLocale })
        })
    }

    const currentLang = languages.find(l => l.code === locale) || languages[0]

    return (
        <div className="relative" ref={containerRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full border border-transparent hover:bg-secondary/50 transition-all text-sm font-medium text-muted-foreground hover:text-foreground"
            >
                <Globe size={16} />
                <span className="uppercase">{locale}</span>
                <ChevronDown size={14} className={cn("transition-transform duration-200", isOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 w-40 bg-card border border-border rounded-xl shadow-xl overflow-hidden z-50 py-1"
                    >
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => onSelectChange(lang.code)}
                                disabled={isPending}
                                className={cn(
                                    "w-full flex items-center justify-between px-4 py-2 text-sm transition-colors hover:bg-secondary/50 text-left",
                                    locale === lang.code ? "text-primary font-medium bg-primary/5" : "text-muted-foreground"
                                )}
                            >
                                <span className="flex items-center gap-2">
                                    <span>{lang.flag}</span>
                                    <span>{lang.label}</span>
                                </span>
                                {locale === lang.code && <Check size={14} />}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

"use client"

import { Link } from "@/navigation"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/Button"
import { ArrowRight, Home } from "lucide-react"

export default function NotFound() {
    const t = useTranslations("NotFound")

    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
            <div className="relative mb-8">
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
                <h1 className="relative text-[120px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent leading-none select-none">
                    404
                </h1>
            </div>

            <h2 className="text-2xl md:text-4xl font-bold mb-4 relative z-10">
                {t("title")}
            </h2>

            <p className="text-muted-foreground text-lg mb-8 max-w-md relative z-10">
                {t("description")}
            </p>

            <Link href="/" className="relative z-10">
                <Button className="rounded-full px-8 h-12 bg-primary text-primary-foreground hover:bg-primary/90 font-bold group">
                    <Home className="mr-2 h-4 w-4" />
                    {t("backToHome")}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
            </Link>
        </div>
    )
}

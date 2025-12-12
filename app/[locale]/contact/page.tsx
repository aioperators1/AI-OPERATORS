"use client"

import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Section } from "@/components/ui/Section"
import { Link } from "@/navigation"
import { useState } from "react"
import { FadeIn } from "@/components/ui/FadeIn"
import { useTranslations } from "next-intl"

export default function Contact() {
    const t = useTranslations('Contact')
    const [formData, setFormData] = useState({ name: "", email: "", message: "" })
    const [errors, setErrors] = useState({ name: "", email: "", message: "" })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [submitError, setSubmitError] = useState("")

    const validateForm = () => {
        const newErrors = { name: "", email: "", message: "" }
        let isValid = true

        if (!formData.name.trim()) {
            newErrors.name = t('errorName')
            isValid = false
        }
        if (!formData.email.trim()) {
            newErrors.email = t('errorEmail')
            isValid = false
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = t('errorEmailValid')
            isValid = false
        }
        if (!formData.message.trim()) {
            newErrors.message = t('errorMessage')
            isValid = false
        }

        setErrors(newErrors)
        return isValid
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitError("")

        if (!validateForm()) {
            return
        }

        setIsSubmitting(true)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                const data = await response.json()
                throw new Error(data.error || 'Failed to send message')
            }

            // Success!
            setIsSuccess(true)
            setFormData({ name: "", email: "", message: "" }) // Reset form
        } catch (error: unknown) {
            console.error('Submission error:', error);
            setSubmitError((error as Error).message || t('errorGeneric'));
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">
            <Section className="pt-24 md:pt-32 pb-12">
                <FadeIn>
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-foreground">{t('title')}</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            {t('subtitle')}
                        </p>
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="grid md:grid-cols-12 gap-12 lg:gap-24 max-w-7xl mx-auto">
                        {/* Contact Info - Takes up 4 columns */}
                        <div className="md:col-span-4 space-y-12">
                            <div>
                                <h3 className="text-foreground/80 dark:text-white/80 font-medium mb-6 uppercase tracking-wider text-sm">{t('detailsTitle')}</h3>
                                <div className="space-y-6">
                                    <a href="mailto:ai.operators.group@gmail.com" className="group flex items-center gap-4 text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors">
                                        <div className="h-12 w-12 border border-border dark:border-white/10 bg-secondary/50 dark:bg-white/5 rounded-2xl flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                                            <Mail size={20} className="group-hover:text-primary transition-colors" />
                                        </div>
                                        <span className="text-lg text-sm md:text-base break-all">ai.operators.group@gmail.com</span>
                                    </a>

                                    <div className="space-y-4">
                                        <a href="https://wa.me/212639127505" className="group flex items-center gap-4 text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors">
                                            <div className="h-12 w-12 border border-border dark:border-white/10 bg-secondary/50 dark:bg-white/5 rounded-2xl flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                                                <Phone size={20} className="group-hover:text-primary transition-colors" />
                                            </div>
                                            <span className="text-lg">+212 639 127 505</span>
                                        </a>

                                        {/* Minimalist Instant Reply Indicator */}
                                        <div className="flex items-center gap-2 ps-[4rem]">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                            </span>
                                            <span className="text-xs font-medium text-green-500 uppercase tracking-widest">{t('availableNow')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-foreground/80 dark:text-white/80 font-medium mb-6 uppercase tracking-wider text-sm">{t('socialsTitle')}</h3>
                                <div className="flex gap-4">
                                    {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                                        <Link href="#" key={social} className="text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors text-sm border border-border dark:border-white/10 bg-secondary/50 dark:bg-white/5 px-6 py-3 rounded-xl hover:border-primary/50 hover:bg-primary/5">
                                            {social}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form - Takes up 8 columns - Premium Glass Card */}
                        <div className="md:col-span-8">
                            <div className="rounded-[2.5rem] p-8 md:p-12 border border-border dark:border-white/10 bg-card/30 dark:bg-white/[0.02] backdrop-blur-md shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-12 opacity-50 pointer-events-none">
                                    <div className="w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-8 relative z-10" noValidate>
                                    {isSuccess ? (
                                        <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 border border-green-500/20 bg-green-500/5 rounded-2xl animate-in fade-in zoom-in duration-500">
                                            <div className="h-20 w-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/20">
                                                <Send size={32} className="text-white" />
                                            </div>
                                            <h3 className="text-3xl font-bold text-foreground dark:text-white mb-4">{t('formSuccessTitle')}</h3>
                                            <p className="text-muted-foreground max-w-md text-lg">
                                                {t('formSuccessMessage')} <span className="text-foreground dark:text-white font-medium">{formData.email}</span>.
                                            </p>
                                            <Button
                                                variant="outline"
                                                className="mt-8 rounded-full border-border dark:border-white/10 hover:bg-secondary dark:hover:bg-white/5"
                                                onClick={() => setIsSuccess(false)}
                                            >
                                                {t('sendAnother')}
                                            </Button>
                                        </div>
                                    ) : (
                                        <>
                                            <div className="grid md:grid-cols-2 gap-8">
                                                <div className="space-y-3 group relative">
                                                    <label htmlFor="name" className={`text-sm font-medium transition-colors duration-300 ${errors.name ? 'text-red-400' : 'text-muted-foreground group-focus-within:text-primary'}`}>
                                                        {t('labelName')}
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            id="name"
                                                            className={`w-full bg-secondary/50 dark:bg-white/5 border border-input dark:border-white/10 rounded-xl px-4 py-4 text-lg focus:outline-none focus:border-primary/50 focus:bg-background dark:focus:bg-white/10 transition-all duration-300 placeholder:text-muted-foreground/40 ${errors.name ? 'border-red-500/50 text-red-500' : 'text-foreground dark:text-white'}`}
                                                            placeholder={t('placeholderName')}
                                                            value={formData.name}
                                                            onChange={(e) => {
                                                                setFormData({ ...formData, name: e.target.value })
                                                                if (errors.name) setErrors({ ...errors, name: "" })
                                                            }}
                                                        />
                                                    </div>
                                                    {errors.name && (
                                                        <span className="text-xs text-red-400 ps-1">{errors.name}</span>
                                                    )}
                                                </div>

                                                <div className="space-y-3 group relative">
                                                    <label htmlFor="email" className={`text-sm font-medium transition-colors duration-300 ${errors.email ? 'text-red-400' : 'text-muted-foreground group-focus-within:text-primary'}`}>
                                                        {t('labelEmail')}
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            id="email"
                                                            type="email"
                                                            className={`w-full bg-secondary/50 dark:bg-white/5 border border-input dark:border-white/10 rounded-xl px-4 py-4 text-lg focus:outline-none focus:border-primary/50 focus:bg-background dark:focus:bg-white/10 transition-all duration-300 placeholder:text-muted-foreground/40 ${errors.email ? 'border-red-500/50 text-red-500' : 'text-foreground dark:text-white'}`}
                                                            placeholder={t('placeholderEmail')}
                                                            value={formData.email}
                                                            onChange={(e) => {
                                                                setFormData({ ...formData, email: e.target.value })
                                                                if (errors.email) setErrors({ ...errors, email: "" })
                                                            }}
                                                        />
                                                    </div>
                                                    {errors.email && (
                                                        <span className="text-xs text-red-400 ps-1">{errors.email}</span>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="space-y-3 group relative">
                                                <label htmlFor="message" className={`text-sm font-medium transition-colors duration-300 ${errors.message ? 'text-red-400' : 'text-muted-foreground group-focus-within:text-primary'}`}>
                                                    {t('labelMessage')}
                                                </label>
                                                <div className="relative">
                                                    <textarea
                                                        id="message"
                                                        className={`w-full bg-secondary/50 dark:bg-white/5 border border-input dark:border-white/10 rounded-xl px-4 py-4 text-lg focus:outline-none focus:border-primary/50 focus:bg-background dark:focus:bg-white/10 transition-all duration-300 resize-none min-h-[150px] placeholder:text-muted-foreground/40 ${errors.message ? 'border-red-500/50 text-red-500' : 'text-foreground dark:text-white'}`}
                                                        placeholder={t('placeholderMessage')}
                                                        value={formData.message}
                                                        onChange={(e) => {
                                                            setFormData({ ...formData, message: e.target.value })
                                                            if (errors.message) setErrors({ ...errors, message: "" })
                                                        }}
                                                    />
                                                </div>
                                                {errors.message && (
                                                    <span className="text-xs text-red-400 ps-1">{errors.message}</span>
                                                )}
                                            </div>

                                            <div className="pt-4 flex flex-col sm:flex-row gap-6 items-center">
                                                <Button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="rounded-full h-14 px-10 text-base bg-primary text-primary-foreground hover:bg-primary/90 font-medium w-full sm:w-auto shadow-lg hover:shadow-primary/25 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                                >
                                                    {isSubmitting ? (
                                                        <span className="flex items-center gap-2">
                                                            <span className="h-4 w-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                                                            {t('buttonSending')}
                                                        </span>
                                                    ) : (
                                                        <span className="flex items-center gap-2">
                                                            {t('buttonSend')} <Send size={18} className="rtl:-scale-x-100" />
                                                        </span>
                                                    )}
                                                </Button>
                                                <div className="hidden sm:block text-muted-foreground/30">•</div>
                                                <Link href="https://wa.me/212639127505" className="w-full sm:w-auto">
                                                    <Button type="button" variant="ghost" className="rounded-full h-14 px-8 text-base text-muted-foreground hover:text-foreground dark:hover:text-white hover:bg-secondary dark:hover:bg-white/5 w-full sm:w-auto border border-border dark:border-white/5">
                                                        {t('buttonWhatsApp')}
                                                    </Button>
                                                </Link>
                                            </div>
                                        </>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </Section>
        </div>
    )
}

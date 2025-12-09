import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, Cairo } from "next/font/google";
import { ThemeProviderWrapper } from "@/components/ThemeProviderWrapper";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingAssistant } from "@/components/ui/FloatingAssistant";

import { PageLoadTransition } from "@/components/ui/PageLoadTransition";
import { PageTransition } from "@/components/ui/PageTransition";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import "../globals.css";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const fontArabic = Cairo({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: '%s | AI Operators',
    default: 'AI Operators - Enterprise Automation & Intelligent Agents',
  },
  description: "Transform your business with AI Operators' enterprise-grade automation agents. We build custom AI assistants, chatbots, and workflow automation for modern companies.",
  keywords: ["AI", "Automation", "Enterprise", "Agents", "Chatbots", "Business Intelligence", "Digital Transformation"],
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ai-operators.group',
    title: 'AI Operators - Enterprise Automation',
    description: 'Transform your business with AI Operators\' enterprise-grade automation agents.',
    siteName: 'AI Operators',
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  // Determine font class based on locale
  const fontClass = locale === 'ar'
    ? `${fontArabic.variable} font-arabic`
    : `${fontSans.variable} ${fontDisplay.variable} font-sans`;

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body className={`${fontClass} antialiased bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary`}>
        <div className="fixed inset-0 -z-10 h-full w-full bg-background">
          <div className="absolute inset-0 bg-dot-white/[0.1]" />
          <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          {/* Ambient Background Effects */}
          <div className="absolute left-0 top-0 -z-10 h-[500px] w-[500px] -translate-x-[30%] -translate-y-[30%] rounded-full bg-primary/20 blur-[100px] opacity-50" />
          <div className="absolute right-0 bottom-0 -z-10 h-[500px] w-[500px] translate-x-[30%] translate-y-[30%] rounded-full bg-blue-600/20 blur-[100px] opacity-50" />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AI Operators",
              "url": "https://ai-operators.group",
              "logo": "https://ai-operators.group/logo.png",
              "sameAs": [
                "https://twitter.com/aioperators",
                "https://linkedin.com/company/ai-operators"
              ],
              "description": "Enterprise-grade AI automation solutions and intelligent agents for modern businesses.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-0123",
                "contactType": "sales",
                "areaServed": "Global",
                "availableLanguage": ["English", "French", "Arabic"]
              }
            })
          }}
        />
        <NextIntlClientProvider messages={messages}>
          <ThemeProviderWrapper attribute="data-theme" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <SmoothScroll>
              <PageLoadTransition />
              <Navbar />
              <FloatingAssistant />
              <main className="flex-grow pt-36 md:pt-24">
                <PageTransition>
                  {children}
                </PageTransition>
              </main>
              <Footer />
            </SmoothScroll>
          </ThemeProviderWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

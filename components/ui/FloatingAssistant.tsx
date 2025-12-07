"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send, Bot, User } from "lucide-react"
import { useTranslations } from "next-intl"

export function FloatingAssistant() {
    const t = useTranslations('Assistant')
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<{ role: 'bot' | 'user', text: string }[]>([])
    const [inputValue, setInputValue] = useState("")
    const [isTyping, setIsTyping] = useState(false)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    // Initial greeting
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setIsTyping(true)
            setTimeout(() => {
                setMessages([{ role: 'bot', text: t('greeting') }, { role: 'bot', text: t('help') }])
                setIsTyping(false)
            }, 600)
        }
    }, [isOpen, messages.length, t])

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages, isTyping])

    const handleOptionClick = (optionKey: string, replyKey: string) => {
        const userText = t(optionKey)
        const botReply = t(replyKey)

        setMessages(prev => [...prev, { role: 'user', text: userText }])
        setIsTyping(true)

        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'bot', text: botReply }])
            setIsTyping(false)
        }, 1200)
    }

    const handleSend = () => {
        if (!inputValue.trim()) return

        const userMessage = inputValue
        setMessages(prev => [...prev, { role: 'user', text: userMessage }])
        setInputValue("")
        setIsTyping(true)

        // Simple Keyword Logic (Back to Basic)
        const lowerInput = userMessage.toLowerCase()
        let replyKey = 'replyDefault'

        if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('argent') || lowerInput.includes('flous')) replyKey = 'replyCost'
        else if (lowerInput.includes('service') || lowerInput.includes('help') || lowerInput.includes('aide')) replyKey = 'replyServices'
        else if (lowerInput.includes('tech') || lowerInput.includes('stack') || lowerInput.includes('code')) replyKey = 'replyTech'
        else if (lowerInput.includes('demo') || lowerInput.includes('contact')) replyKey = 'replyDemo'

        setTimeout(() => {
            setMessages(prev => [...prev, { role: 'bot', text: t(replyKey) }])
            setIsTyping(false)
        }, 1500)
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none font-sans">
            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-card/95 backdrop-blur-xl border border-white/10 shadow-2xl rounded-[1.5rem] w-[320px] h-[460px] mb-4 overflow-hidden pointer-events-auto flex flex-col ring-1 ring-white/5"
                    >
                        {/* Header */}
                        <div className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-4 flex justify-between items-center border-b border-white/5">
                            {/* Decorative glow */}
                            <div className="absolute top-0 left-10 w-20 h-20 bg-primary/20 blur-3xl rounded-full -translate-y-1/2 pointer-events-none" />

                            <div className="flex items-center gap-3 relative z-10">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center shadow-lg shadow-primary/20">
                                        <Bot size={20} className="text-white" />
                                    </div>
                                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-background flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-base text-foreground tracking-tight">AI Agent</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="text-[10px] font-medium text-emerald-500 uppercase tracking-wider">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-foreground/5 p-1.5 rounded-full transition-colors text-muted-foreground hover:text-foreground">
                                <X size={18} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-hide">
                            {messages.map((msg, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm ${msg.role === 'bot' ? 'bg-gradient-to-br from-primary to-primary/80 text-white' : 'bg-secondary text-foreground'}`}>
                                        {msg.role === 'bot' ? <Bot size={12} /> : <User size={12} />}
                                    </div>
                                    <div className={`max-w-[85%] p-3 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${msg.role === 'bot'
                                            ? 'bg-secondary/50 border border-white/5 text-foreground rounded-tl-none'
                                            : 'bg-primary text-primary-foreground rounded-tr-none shadow-primary/20'
                                        } text-left`}>
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="flex gap-3"
                                >
                                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-primary/80 text-white flex items-center justify-center flex-shrink-0">
                                        <Bot size={12} />
                                    </div>
                                    <div className="bg-secondary/30 border border-white/5 rounded-2xl rounded-tl-none p-3 flex gap-1 items-center h-10 w-fit">
                                        <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                                        <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                                        <span className="w-1.5 h-1.5 bg-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Quick Options (Chips) */}
                        {messages.length > 0 && messages[messages.length - 1].role === 'bot' && !isTyping && (
                            <div className="px-4 pb-2">
                                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide mask-fade-right">
                                    {[
                                        { key: 'option1', reply: 'replyServices' },
                                        { key: 'option2', reply: 'replyCost' },
                                        { key: 'option3', reply: 'replyTech' },
                                        { key: 'option4', reply: 'replyDemo' }
                                    ].map(({ key, reply }) => (
                                        <motion.button
                                            key={key}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => handleOptionClick(key, reply)}
                                            className="whitespace-nowrap flex-shrink-0 bg-background/50 hover:bg-primary hover:text-primary-foreground border border-border hover:border-primary/50 text-[10px] font-medium px-3 py-2 rounded-full transition-all duration-300 shadow-sm"
                                        >
                                            {t(key)}
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Input Area */}
                        <div className="p-3 bg-background/30 backdrop-blur-sm border-t border-white/5">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                                className="relative flex items-center"
                            >
                                <input
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder={t('placeholder')}
                                    className="w-full bg-secondary/50 hover:bg-secondary/70 transition-colors border-none rounded-full pl-4 pr-12 py-3 text-xs sm:text-sm focus:ring-1 focus:ring-primary/20 placeholder:text-muted-foreground/50 shadow-inner"
                                />
                                <button
                                    type="submit"
                                    disabled={!inputValue.trim()}
                                    className="absolute right-1.5 p-1.5 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 disabled:opacity-50 disabled:shadow-none transition-all duration-300 transform hover:scale-105 active:scale-95"
                                >
                                    <Send size={14} />
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="pointer-events-auto bg-gradient-to-br from-primary to-primary/90 text-white h-16 w-16 rounded-[2rem] shadow-2xl shadow-primary/30 flex items-center justify-center relative group border border-white/10"
            >
                {/* Ping Animation to show it's 'alive' */}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-background"></span>
                    </span>
                )}

                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X size={28} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                        >
                            <MessageSquare size={28} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    )
}

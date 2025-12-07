"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="max-w-3xl mx-auto space-y-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="border border-border rounded-xl bg-card overflow-hidden hover:border-primary/30 transition-colors"
                >
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                    >
                        <span className="font-semibold text-foreground pr-8">{item.question}</span>
                        <ChevronDown
                            className={`flex-shrink-0 text-muted-foreground transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                }`}
                            size={20}
                        />
                    </button>
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                                    {item.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}

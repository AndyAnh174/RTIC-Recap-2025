"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface Highlight {
    title: string;
    content: string;
    time: string;
}

interface ClubHighlightsProps {
    highlights: Highlight[];
}

export function ClubHighlights({ highlights }: ClubHighlightsProps) {
    return (
        <section className="py-32 px-4 relative overflow-hidden bg-white/30">
            <div className="max-w-4xl mx-auto">
                <div className="mb-20 border-b border-border-main pb-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-primary text-xs font-black tracking-[0.3em] uppercase mb-4"
                    >
                        Index of Achievements
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-black text-text-main tracking-tight"
                    >
                        Báo Cáo <span className="text-primary">"Góc Khuất"</span> RTIC
                    </motion.h2>
                </div>

                <div className="space-y-12">
                    {highlights.map((highlight, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group flex flex-col md:flex-row gap-6 md:gap-12 pb-12 border-b border-border-main/30 last:border-0"
                        >
                            <div className="md:w-32 pt-1">
                                <div className="text-sm font-black text-primary/40 uppercase tracking-widest">
                                    {highlight.time}
                                </div>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-black text-text-main mb-3 group-hover:text-primary transition-colors">
                                    {highlight.title}
                                </h3>
                                <p className="text-text-muted leading-relaxed font-medium text-lg">
                                    {highlight.content}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 p-8 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-sm font-bold text-text-main">Tài liệu nội bộ RTIC 2025</span>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary/40">Confidential</span>
                </div>
            </div>
        </section>
    );
}

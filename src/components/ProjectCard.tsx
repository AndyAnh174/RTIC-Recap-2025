"use client";

import { motion } from "framer-motion";
import { Badge } from "./Badge";
import { CheckCircle2, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
    time: string;
    title: string;
    shortDesc: string;
    highlights: string[];
    techStack?: string[];
    image?: string;
    link?: string;
    index: number;
}

export function ProjectCard({ time, title, shortDesc, highlights, techStack, image, link, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white/70 backdrop-blur-xl rounded-3xl p-6 shadow-sm border border-border-main hover:border-primary/40 transition-all hover:shadow-glow/20 overflow-hidden flex flex-col h-full"

        >
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />

            <div className="flex flex-col gap-6 flex-grow">
                <div className="flex justify-between items-center">
                    <Badge className="font-bold px-4 py-1.5 bg-primary/10 text-primary border-primary/20 shadow-sm">{time}</Badge>
                    <div className="flex gap-2">
                        {techStack?.slice(0, 3).map((tech, i) => (
                            <span key={i} className="text-[10px] font-bold text-text-muted/50 uppercase tracking-widest">{tech}</span>
                        ))}
                    </div>
                </div>

                {image && (
                    <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-border-main/50 group-hover:border-primary/20 transition-colors bg-slate-50/50">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                            sizes="(max-width: 768px) 100vw, 400px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                )}

                <div>
                    <h3 className="text-2xl font-black text-text-main group-hover:text-primary transition-colors flex items-center gap-2">
                        {title}
                        <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                    </h3>
                    <p className="text-base text-text-muted mt-2 leading-relaxed font-medium">{shortDesc}</p>
                </div>

                <div className="space-y-3 pt-4 border-t border-border-main/60 flex-grow">
                    {highlights?.length > 0 ? (
                        highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-3 text-sm text-text-muted/90">
                                <div className="mt-1 flex-shrink-0">
                                    <CheckCircle2 className="w-4 h-4 text-primary/50" />
                                </div>
                                <span className="font-medium">{highlight}</span>
                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-text-muted italic">Đang cập nhật...</p>
                    )}
                </div>

                {link && (
                    <div className="pt-4 mt-auto">
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 group/btn"
                        >
                            Trải nghiệm ngay
                            <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </a>
                    </div>
                )}
            </div>
        </motion.div>
    );
}

"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Timeline } from "@/components/Timeline";
import { ClubHighlights } from "@/components/ClubHighlights";
import { RTIC_2025_DATA } from "@/data/rtic-2025";
import { Sparkles, ArrowDown, ExternalLink, Github, Facebook } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="min-h-screen selection:bg-primary/20 bg-bg-main overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary origin-left z-50 rounded-r-full"
        style={{ scaleX }}
      />

      {/* Background - Tech Grid */}
      <div className="fixed inset-0 overflow-hidden -z-10 bg-bg-main">
        {/* Grid Pattern using Primary Color - Subtler for brand color */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-primary)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-primary)_1px,transparent_1px)] opacity-[0.08] bg-[size:40px_40px]" />

        {/* Vampires Mask (Vignette) - Adjusted for new bg */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,rgba(248,250,252,0),rgba(248,250,252,0.9))]" />

        {/* Blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/30 rounded-full blur-[100px]" />
        <div className="absolute top-[30%] right-[10%] w-[20%] h-[20%] bg-primary/10 rounded-full blur-[80px]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white shadow-xl shadow-primary/5 text-primary text-sm font-black mb-12 border border-primary/10 transition-transform hover:scale-105"
          >
            <Image
              src="/media/LOGO RTIC.png"
              alt="RTIC Logo"
              width={240}
              height={80}
              className="h-20 w-auto object-contain"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-9xl font-black text-text-main tracking-tighter mb-8 leading-[0.9]"
          >
            Hành trình <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-gradient-x">
              {RTIC_2025_DATA.clubInfo.name}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto mb-16 leading-relaxed font-medium"
          >
            Năm 2025 - Khởi đầu của hành trình <span className="text-text-main font-bold">"Beyond Limits, Into Innovation"</span>
          </motion.p>



          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/40"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Cuộn xuống</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-32">
        <div className="max-w-5xl mx-auto px-4 mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-text-main mb-6 tracking-tight">Timeline Hoạt Động</h2>

            <div className="w-32 h-2 bg-primary mx-auto rounded-full mt-8 shadow-glow" />
          </motion.div>
        </div>


        <Timeline projects={RTIC_2025_DATA.projects} />
      </section>

      {/* Highlights Section */}
      <ClubHighlights highlights={RTIC_2025_DATA.clubHighlights} />

      {/* Closing Section */}
      <section className="py-40 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white shadow-3xl shadow-primary/30 relative overflow-hidden"
        >
          {/* Decorative icons in bg */}
          <div className="absolute top-10 left-10 opacity-10 rotate-12"><Rocket size={100} /></div>
          <div className="absolute bottom-10 right-10 opacity-10 -rotate-12"><Sparkles size={100} /></div>

          <div className="relative z-10">
            <div className="w-36 h-36 bg-white/10 backdrop-blur-md rounded-[2rem] mx-auto mb-10 flex items-center justify-center shadow-inner p-6 border border-white/20">
              <Image
                src="/media/LOGO RTIC.png"
                alt="RTIC Logo"
                width={120}
                height={120}
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">Thank you for being <br /> part of our journey</h2>
            <p className="text-white/80 text-lg md:text-xl font-medium mb-16 leading-relaxed max-w-xl mx-auto">
              Hẹn gặp lại bạn vào năm 2026 với những dự án bùng nổ hơn nữa.
              Cùng nhau, chúng ta kiến tạo tương lai!
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="https://hcmutertic.com"
                target="_blank"
                className="group flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-xl"
              >
                Website CLB <ExternalLink size={16} />
              </a>
              <a
                href="https://www.facebook.com/hcmute.rtic/"
                target="_blank"
                className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/20 transition-all"
              >
                Facebook <Facebook size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-border-main/50">
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center gap-4 group">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center p-2.5 group-hover:bg-primary/20 transition-colors">
              <Image
                src="/media/LOGO RTIC.png"
                alt="RTIC Logo"
                width={60}
                height={60}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-sm font-black text-text-main opacity-80 uppercase tracking-widest group-hover:text-primary transition-colors">HCMUTE RTIC</span>
          </a>
          <p className="text-xs text-text-muted font-bold tracking-wider">
            © 2025 RESEARCH ON TECHNOLOGY AND INNOVATION CLUB. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com/HCMUTE-RTIC" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full border border-border-main hover:text-primary transition-colors shadow-sm"><Github size={18} /></a>
            <a href="https://www.facebook.com/hcmute.rtic/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full border border-border-main hover:text-primary transition-colors shadow-sm"><Facebook size={18} /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}

// Add some custom animations in a style tag for the gradient text effect
function Rocket({ size, ...props }: any) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.59.99-1.31.91-2.09L4.5 16.5z" />
      <path d="m14.5 9 4.5 1c0 0 .5 1 .5 2s-.5 2.5-.5 2.5l-2.5 1.5L14 14l-4-4L6 6l5.5-2 1.5-2.5S15 1 16 1s2 .5 2 .5z" />
      <path d="M3.5 14h2" />
      <path d="M11 20.5v-2" />
      <path d="M20.5 3.5 19 5" />
      <path d="M12 12c.76.76.76 2.06 0 2.82" />
      <path d="M14.5 9.5a2 2 0 1 0-2.82-2.82" />
    </svg>
  );
}

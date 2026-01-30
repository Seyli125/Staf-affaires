"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Award, ShieldCheck, Zap, Target, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export function Features() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const badgeY = useTransform(scrollYProgress, [0, 1], [-20, 100]);
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section 
      ref={containerRef}
      id="features" 
      className="container mx-auto px-6 py-24 md:py-32 relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-orange/[0.03] blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-navy/[0.03] blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
        
        {/* LEFT COLUMN: THE VISUAL ICON (5 Columns) */}
        <div className="lg:col-span-5 relative order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* The Main Portrait - Circular Masterpiece */}
            <div className="relative aspect-square rounded-full overflow-hidden border-[16px] border-white shadow-[0_60px_100px_-20px_rgba(10,25,47,0.3)] bg-brand-orange/[0.02]">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/SA2_LE_upscale_prime-1769783680736.jpg?width=8000&height=8000&resize=contain"
                alt="Saïd TAAROUST"
                fill
                className="object-cover mix-blend-multiply transition-transform duration-[2s] hover:scale-110"
                priority
              />
              {/* Artistic Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/20 via-transparent to-brand-orange/10" />
            </div>

            {/* RNCP BADGE - The Perfect Circle above him */}
            <motion.div
              style={{ y: badgeY }}
              initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -5 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 80 }}
              className="absolute -top-12 -left-4 md:-top-20 md:-left-12 w-48 h-48 md:w-64 md:h-64 z-30"
            >
              <div className="relative w-full h-full rounded-full bg-white shadow-3xl border-[10px] border-white flex items-center justify-center p-8 overflow-hidden group">
                {/* Decorative spinning ring */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 rounded-full border-2 border-dashed border-brand-orange/20"
                />
                <div className="relative w-full h-full">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1769789503636.png?width=8000&height=8000&resize=contain"
                    alt="Certification RNCP 6"
                    fill
                    className="object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>

            {/* Float Experience Tag */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 -right-8 bg-brand-navy px-10 py-6 rounded-[30px] shadow-2xl border border-white/10 z-20 flex items-center gap-4"
            >
              <span className="text-5xl font-black text-brand-orange tracking-tighter">25</span>
              <div className="flex flex-col">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] leading-tight">Ans de</span>
                <span className="text-[10px] font-black text-white uppercase tracking-[0.2em] leading-tight text-brand-orange">Légende</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: THE NARRATIVE (7 Columns) */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <motion.div
            style={{ y: nameY }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Name Section - Magazine Style */}
            <div className="mb-16 relative">
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                className="h-2 w-32 bg-brand-orange mb-12 origin-left"
              />
              <h2 className="relative">
                <span className="text-8xl md:text-[130px] font-black text-brand-navy leading-[0.7] tracking-tighter block uppercase">
                  Saïd
                </span>
                <span className="text-8xl md:text-[130px] font-black text-brand-orange leading-[0.7] tracking-tighter block uppercase md:pl-24">
                  TAAROUST
                </span>
                {/* Visual anchor */}
                <div className="absolute top-1/2 -left-12 w-24 h-px bg-brand-navy/10 hidden md:block" />
              </h2>
              <div className="mt-8 flex items-center gap-6">
                <span className="text-xs font-black uppercase tracking-[0.6em] text-brand-navy/30">Expert Stratège & Master Coach</span>
                <div className="h-px flex-1 bg-gradient-to-r from-brand-navy/10 to-transparent" />
              </div>
            </div>

            {/* Praise (Éloge) Section */}
            <div className="space-y-12">
              <div className="relative pl-12">
                <Quote className="absolute top-0 left-0 w-10 h-10 text-brand-orange/20" />
                <p className="text-2xl md:text-4xl font-black text-brand-navy leading-[1.1] italic max-w-2xl">
                  "L'échec n'est qu'un manque de structure. Je suis l'architecte qui rebâtit votre empire commercial."
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6 text-slate-600 font-medium text-lg leading-relaxed border-l-2 border-slate-100 pl-6">
                  <p>
                    Plus qu'une biographie, voici le parcours d'un <span className="text-brand-navy font-black italic">visionnaire du B2B</span>. Saïd TAAROUST incarne l'alliance parfaite entre l'intuition psychologique et la froideur stratégique.
                  </p>
                  <p>
                    Certifié <span className="text-brand-orange font-black">RNCP Niveau 6</span> par l'État, il transforme chaque accompagnement en une victoire académique et financière.
                  </p>
                </div>
                <div className="space-y-6 text-slate-600 font-medium text-lg leading-relaxed">
                  <p>
                    Créateur de la <span className="text-brand-navy font-black underline decoration-brand-orange decoration-4 underline-offset-8">Méthode AVR®</span>, il libère le potentiel inexploité des dirigeants pour atteindre une performance hors-norme.
                  </p>
                  <p>
                    Son mantra ? <span className="text-brand-navy font-black italic">L'excellence sans épuisement</span>. Une promesse tenue auprès de centaines de leaders depuis plus de 25 ans.
                  </p>
                </div>
              </div>

              {/* Status Indicators */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4">
                {[
                  { icon: ShieldCheck, title: "RNCP 6", sub: "ÉTAT" },
                  { icon: Target, title: "PNL", sub: "MAÎTRE" },
                  { icon: Zap, title: "AVR®", sub: "EXCLUSIF" },
                  { icon: Award, title: "B2B", sub: "ÉLITE" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -8, backgroundColor: "#0A192F", color: "#fff" }}
                    className="flex flex-col items-center p-6 bg-white rounded-[32px] shadow-sm border border-slate-100 transition-all duration-500 group"
                  >
                    <item.icon className="w-8 h-8 text-brand-orange mb-4 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-black uppercase tracking-widest">{item.title}</span>
                    <span className="text-[8px] font-bold text-slate-400 uppercase mt-1 group-hover:text-white/40">{item.sub}</span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-8">
                <Link href="/prendre-rendez-vous">
                  <motion.button 
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-6 px-12 py-7 bg-brand-navy text-white rounded-[24px] font-black text-xs uppercase tracking-[0.4em] shadow-[0_25px_50px_-12px_rgba(10,25,47,0.4)] hover:bg-brand-orange transition-all"
                  >
                    Prétendre à l'excellence <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

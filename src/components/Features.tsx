"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Zap, Brain, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const credentials = [
  { title: "RNCP Niveau 6", description: "Certification d'excellence", icon: Award },
  { title: "Technicien PNL", description: "Expertise psychologique", icon: Brain },
  { title: "Approche AVR®", description: "Méthode propriétaire", icon: Zap },
  { title: "Expertise B2B", description: "25 ans de terrain", icon: Users },
];

// Premium easing curve
const premiumEase = [0.25, 0.4, 0.25, 1] as const;

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Smooth parallax transforms
  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3]);

  return (
    <section ref={sectionRef} id="features" className="container mx-auto px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative background - optimized with smooth pulse */}
      <motion.div 
        className="absolute top-1/2 left-0 w-64 h-64 bg-brand-orange/5 blur-[100px] -translate-y-1/2 -translate-x-1/2 rounded-full pointer-events-none"
        style={{ opacity: backgroundOpacity }}
      />
      
      <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
        {/* Left: Image - Reduced & Proportioned */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="relative order-1 lg:order-1"
        >
          <div className="relative max-w-[180px] sm:max-w-[200px] mx-auto">
            {/* Main Image - Compact */}
            <motion.div 
              className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg border-2 border-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: premiumEase }}
            >
              <Image 
                src="/images/said-meeting.jpg"
                alt="Saïd TAAROUST - Expert Performance B2B"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/25 via-transparent to-transparent" />
            </motion.div>
            
            {/* Experience Badge - Smaller */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5, ease: premiumEase }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="absolute -bottom-2 -right-2 bg-brand-orange p-1.5 rounded-lg text-white shadow-md hidden sm:block cursor-default"
            >
              <div className="text-center">
                <span className="text-base font-bold block leading-none">25+</span>
                <span className="text-[6px] font-medium uppercase tracking-wide opacity-90">Années B2B</span>
              </div>
            </motion.div>

            {/* RNCP Badge - Smaller */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5, ease: premiumEase }}
              whileHover={{ scale: 1.05 }}
              className="absolute -top-1.5 -left-1.5 z-20 w-9 h-9 rounded-full overflow-hidden border-2 border-white shadow-md bg-white p-0.5 hidden sm:block"
            >
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1769789503636.png?width=8000&height=8000&resize=contain"
                alt="Certification RNCP"
                fill
                className="object-contain p-0.5"
              />
            </motion.div>
          </div>

          {/* Mobile badges - Compact */}
          <div className="flex sm:hidden justify-center gap-1.5 mt-3">
            <motion.span 
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: premiumEase }}
              className="bg-brand-orange text-white px-2 py-0.5 rounded-full text-[8px] font-semibold"
            >
              25+ ans d'expertise
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5, ease: premiumEase }}
              className="bg-brand-navy text-white px-2 py-0.5 rounded-full text-[8px] font-semibold"
            >
              RNCP Niveau 6
            </motion.span>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: premiumEase }}
          className="relative z-10 order-2 lg:order-2"
        >
          {/* Header */}
          <div className="mb-4">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 28 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: premiumEase }}
              className="h-0.5 bg-brand-orange mb-2.5"
            />
            <motion.span 
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25, ease: premiumEase }}
              className="text-brand-orange font-semibold text-[10px] mb-1 block"
            >
              La Signature d'un Expert
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35, ease: premiumEase }}
              className="text-lg sm:text-xl font-bold text-brand-navy leading-tight mb-1"
            >
              Saïd <span className="text-brand-orange">TAAROUST</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: premiumEase }}
              className="text-[10px] text-slate-500 font-medium"
            >
              Coach d'Élite • Expert Performance Commerciale & Leadership B2B
            </motion.p>
          </div>

          {/* Quote - Premium */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45, ease: premiumEase }}
            whileHover={{ scale: 1.01, boxShadow: "0 6px 20px -6px rgba(0,0,0,0.08)" }}
            className="relative bg-slate-50 rounded-lg p-2.5 mb-4 transition-shadow"
          >
            <Quote className="absolute top-2 right-2 w-3.5 h-3.5 text-slate-200" />
            <p className="text-[10px] font-medium text-brand-navy italic leading-relaxed pr-4">
              "Transformer vos défis complexes en leviers de croissance, tout en préservant votre équilibre."
            </p>
          </motion.div>
          
          {/* Description - Compact */}
          <div className="space-y-1.5 text-slate-600 text-[10px] leading-relaxed mb-4">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5, ease: premiumEase }}
            >
              Avec un parcours forgé au sein de structures de premier plan, Saïd Taaroust incarne l'alliance rare entre <span className="text-brand-navy font-semibold">rigueur stratégique</span> et <span className="text-brand-navy font-semibold">intelligence émotionnelle</span>. 
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55, ease: premiumEase }}
            >
              Maître des dynamiques B2B depuis plus de 25 ans, il a propulsé des centaines de dirigeants vers l'excellence. Sa méthode <span className="text-brand-orange font-semibold">AVR®</span> garantit des résultats concrets et durables.
            </motion.p>
          </div>

          {/* Philosophical quote - Elegant */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.6, ease: premiumEase }}
            className="text-[9px] italic text-slate-400 mb-3.5 border-l-2 border-brand-orange/30 pl-2"
          >
            "Le vrai succès n'est pas de tout avoir, mais d'être aligné avec ce qui compte vraiment."
          </motion.p>

          {/* Credentials Grid - Compact */}
          <div className="grid grid-cols-2 gap-1.5 mb-4">
            {credentials.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.65 + i * 0.06,
                  ease: premiumEase
                }}
                whileHover={{ y: -2, boxShadow: "0 6px 16px -6px rgba(0,0,0,0.08)" }}
                className="flex items-center gap-1.5 p-2 rounded-lg bg-white border border-slate-100 transition-all duration-300 group cursor-default"
              >
                <div className="w-6 h-6 rounded-md bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors duration-300">
                  <item.icon className="w-3 h-3 text-brand-navy group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-brand-navy text-[9px] truncate">{item.title}</p>
                  <p className="text-[7px] text-slate-400 truncate">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.85, ease: premiumEase }}
          >
            <Link href="/prendre-rendez-vous">
              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 12px 24px -6px rgba(10, 25, 47, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-1.5 px-4 py-2 bg-brand-navy text-white rounded-full font-semibold text-[10px] hover:bg-brand-orange transition-all duration-400 shadow-md w-full sm:w-auto justify-center"
              >
                Réserver votre session stratégique 
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-300" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

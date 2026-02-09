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

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);

  return (
    <section ref={sectionRef} id="features" className="container mx-auto px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative background - optimized */}
      <motion.div 
        className="absolute top-1/2 left-0 w-72 h-72 bg-brand-orange/5 blur-[80px] -translate-y-1/2 -translate-x-1/2 rounded-full pointer-events-none"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.3, 0.4, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: Image - Reduced size */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative order-1 lg:order-1"
        >
          <div className="relative max-w-[220px] mx-auto">
            {/* Main Image - Smaller */}
            <motion.div 
              className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-lg border-3 border-white"
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4 }}
            >
              <Image 
                src="/images/said-meeting.jpg"
                alt="Saïd TAAROUST - Expert Performance B2B"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 via-transparent to-transparent" />
            </motion.div>
            
            {/* Experience Badge - Smaller */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 15 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-2 -right-2 bg-brand-orange p-2 rounded-lg text-white shadow-md hidden sm:block cursor-default"
            >
              <div className="text-center">
                <span className="text-lg font-bold block leading-none">25+</span>
                <span className="text-[7px] font-medium uppercase tracking-wide opacity-90">Années B2B</span>
              </div>
            </motion.div>

            {/* RNCP Badge - Smaller */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -top-2 -left-2 z-20 w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-md bg-white p-1 hidden sm:block"
            >
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1769789503636.png?width=8000&height=8000&resize=contain"
                alt="Certification RNCP"
                fill
                className="object-contain p-0.5"
              />
            </motion.div>
          </div>

          {/* Mobile badges - Smaller */}
          <div className="flex sm:hidden justify-center gap-1.5 mt-3">
            <motion.span 
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-orange text-white px-2.5 py-1 rounded-full text-[9px] font-semibold"
            >
              25+ ans d'expertise
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-brand-navy text-white px-2.5 py-1 rounded-full text-[9px] font-semibold"
            >
              RNCP Niveau 6
            </motion.span>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative z-10 order-2 lg:order-2"
        >
          {/* Header */}
          <div className="mb-5">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-0.5 bg-brand-orange mb-3"
            />
            <motion.span 
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-brand-orange font-semibold text-[11px] mb-1.5 block"
            >
              La Signature d'un Expert
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl sm:text-2xl font-bold text-brand-navy leading-tight mb-1.5"
            >
              Saïd <span className="text-brand-orange">TAAROUST</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-xs text-slate-500 font-medium"
            >
              Coach d'Élite • Expert Performance Commerciale & Leadership B2B
            </motion.p>
          </div>

          {/* Quote */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.01 }}
            className="relative bg-slate-50 rounded-lg p-3 mb-5"
          >
            <Quote className="absolute top-2 right-2 w-4 h-4 text-slate-200" />
            <p className="text-xs font-medium text-brand-navy italic leading-relaxed pr-4">
              "Transformer vos défis complexes en leviers de croissance, tout en préservant votre équilibre."
            </p>
          </motion.div>
          
          {/* Description - Reduced */}
          <div className="space-y-2 text-slate-600 text-xs leading-relaxed mb-5">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              Avec un parcours forgé au sein de structures de premier plan, Saïd Taaroust incarne l'alliance rare entre <span className="text-brand-navy font-semibold">rigueur stratégique</span> et <span className="text-brand-navy font-semibold">intelligence émotionnelle</span>. 
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.55 }}
            >
              Maître des dynamiques B2B depuis plus de 25 ans, il a propulsé des centaines de dirigeants vers l'excellence. Sa méthode <span className="text-brand-orange font-semibold">AVR®</span> garantit des résultats concrets et durables.
            </motion.p>
          </div>

          {/* Philosophical quote */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-[10px] italic text-slate-400 mb-4 border-l-2 border-brand-orange/30 pl-2"
          >
            "Le vrai succès n'est pas de tout avoir, mais d'être aligné avec ce qui compte vraiment."
          </motion.p>

          {/* Credentials Grid - Smaller */}
          <div className="grid grid-cols-2 gap-2 mb-5">
            {credentials.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.4, 
                  delay: 0.6 + i * 0.08,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
                whileHover={{ y: -2, boxShadow: "0 8px 20px -8px rgba(0,0,0,0.1)" }}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-100 transition-all duration-300 group cursor-default"
              >
                <div className="w-7 h-7 rounded-md bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors duration-300">
                  <item.icon className="w-3.5 h-3.5 text-brand-navy group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-brand-navy text-[10px] truncate">{item.title}</p>
                  <p className="text-[8px] text-slate-400 truncate">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA - Smaller */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <Link href="/prendre-rendez-vous">
              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 15px 30px -8px rgba(10, 25, 47, 0.25)" }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-brand-navy text-white rounded-full font-semibold text-xs hover:bg-brand-orange transition-all duration-300 shadow-md w-full sm:w-auto justify-center"
              >
                Réserver votre session stratégique 
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

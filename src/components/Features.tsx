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

  const imageY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <section ref={sectionRef} id="features" className="container mx-auto px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative background */}
      <motion.div 
        className="absolute top-1/2 left-0 w-96 h-96 bg-brand-orange/5 blur-[100px] -translate-y-1/2 -translate-x-1/2 rounded-full pointer-events-none"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left: Image - Smaller and more balanced */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative order-1 lg:order-1"
        >
          <div className="relative max-w-[280px] mx-auto">
            {/* Main Image */}
            <motion.div 
              className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border-4 border-white"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <Image 
                src="/images/said-meeting.jpg"
                alt="Saïd TAAROUST - Expert Performance B2B"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent" />
            </motion.div>
            
            {/* Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1 }}
              className="absolute -bottom-3 -right-3 bg-brand-orange p-3 rounded-xl text-white shadow-lg hidden sm:block cursor-default"
            >
              <div className="text-center">
                <span className="text-2xl font-bold block">25+</span>
                <span className="text-[8px] font-medium uppercase tracking-wide opacity-90">Années B2B</span>
              </div>
            </motion.div>

            {/* RNCP Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -top-3 -left-3 z-20 w-14 h-14 rounded-full overflow-hidden border-3 border-white shadow-lg bg-white p-1.5 hidden sm:block"
            >
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1769789503636.png?width=8000&height=8000&resize=contain"
                alt="Certification RNCP"
                fill
                className="object-contain p-1"
              />
            </motion.div>
          </div>

          {/* Mobile badges */}
          <div className="flex sm:hidden justify-center gap-2 mt-4">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-orange text-white px-3 py-1.5 rounded-full text-[10px] font-semibold"
            >
              25+ ans d'expertise
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-brand-navy text-white px-3 py-1.5 rounded-full text-[10px] font-semibold"
            >
              RNCP Niveau 6
            </motion.span>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          className="relative z-10 order-2 lg:order-2"
        >
          {/* Header */}
          <div className="mb-6">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-0.5 bg-brand-orange mb-4"
            />
            <motion.span 
              initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-brand-orange font-semibold text-xs mb-2 block"
            >
              La Signature d'un Expert
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl sm:text-3xl font-bold text-brand-navy leading-tight mb-2"
            >
              Saïd <span className="text-brand-orange">TAAROUST</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-sm text-slate-500 font-medium"
            >
              Coach d'Élite • Expert Performance Commerciale & Leadership B2B
            </motion.p>
          </div>

          {/* Quote */}
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="relative bg-slate-50 rounded-xl p-4 mb-6"
          >
            <Quote className="absolute top-3 right-3 w-5 h-5 text-slate-200" />
            <p className="text-sm font-medium text-brand-navy italic leading-relaxed">
              "Transformer vos défis complexes en leviers de croissance, tout en préservant votre équilibre."
            </p>
          </motion.div>
          
          {/* Description */}
          <div className="space-y-3 text-slate-600 text-sm leading-relaxed mb-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Avec un parcours forgé au sein de structures de premier plan, Saïd Taaroust incarne l'alliance rare entre <span className="text-brand-navy font-semibold">rigueur stratégique</span> et <span className="text-brand-navy font-semibold">intelligence émotionnelle</span>. 
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Maître des dynamiques B2B depuis plus de 25 ans, il a propulsé des centaines de dirigeants vers l'excellence. Sa méthode <span className="text-brand-orange font-semibold">AVR®</span> garantit des résultats concrets et durables.
            </motion.p>
          </div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-2 gap-2.5 mb-6">
            {credentials.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.6 + i * 0.1,
                  ease: [0.25, 0.4, 0.25, 1]
                }}
                whileHover={{ y: -4, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-100 transition-all duration-300 group cursor-default"
              >
                <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors duration-300">
                  <item.icon className="w-4 h-4 text-brand-navy group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-brand-navy text-[11px] truncate">{item.title}</p>
                  <p className="text-[9px] text-slate-400 truncate">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Link href="/prendre-rendez-vous">
              <motion.button 
                whileHover={{ scale: 1.03, boxShadow: "0 20px 40px -10px rgba(10, 25, 47, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-brand-navy text-white rounded-full font-semibold text-sm hover:bg-brand-orange transition-all duration-300 shadow-lg w-full sm:w-auto justify-center"
              >
                Réserver votre session stratégique 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

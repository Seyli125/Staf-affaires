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

const smoothSpring = {
  type: "spring" as const,
  stiffness: 100,
  damping: 30,
  mass: 1
};

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} id="features" className="container mx-auto px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative background */}
      <motion.div 
        className="absolute top-1/2 left-0 w-96 h-96 bg-brand-orange/5 blur-[100px] -translate-y-1/2 -translate-x-1/2 rounded-full pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
      />
      
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left: Image - Balanced size */}
        <motion.div
          style={{ y: imageY }}
          className="relative order-1 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...smoothSpring }}
            className="relative"
          >
              {/* Main Image - Controlled max size */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white max-w-[200px] lg:max-w-[220px] mx-auto">
              <Image 
                src="/images/said-meeting.jpg"
                alt="Saïd TAAROUST - Expert Performance B2B"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 via-transparent to-transparent" />
            </div>
            
            {/* Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.4 }}
              className="absolute -bottom-4 -right-4 bg-brand-orange p-4 rounded-2xl text-white shadow-xl hidden sm:block"
            >
              <div className="text-center">
                <span className="text-3xl font-bold block">25+</span>
                <span className="text-[9px] font-medium uppercase tracking-wide opacity-90">Années B2B</span>
              </div>
            </motion.div>

            {/* RNCP Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.3 }}
              className="absolute -top-4 -left-4 z-20 w-18 h-18 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white p-2 hidden sm:block"
            >
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1769789503636.png?width=8000&height=8000&resize=contain"
                alt="Certification RNCP"
                fill
                className="object-contain p-1"
              />
            </motion.div>
          </motion.div>

          {/* Mobile badges */}
          <div className="flex sm:hidden justify-center gap-2 mt-5">
            <span className="bg-brand-orange text-white px-4 py-2 rounded-full text-xs font-semibold shadow-md">
              25+ ans d'expertise
            </span>
            <span className="bg-brand-navy text-white px-4 py-2 rounded-full text-xs font-semibold shadow-md">
              RNCP Niveau 6
            </span>
          </div>
        </motion.div>

          {/* Right: Content - Redesigned Biography */}
          <motion.div
            style={{ y: contentY }}
            className="relative z-10 order-2 lg:order-2"
          >
            {/* Header with dynamic styling */}
            <motion.div 
              className="mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ ...smoothSpring }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-[3px] bg-gradient-to-r from-brand-orange to-brand-salmon rounded-full"
                />
                <span className="text-brand-orange font-bold text-xs uppercase tracking-widest">
                  L'Expert
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-none mb-2">
                Saïd <span className="text-brand-orange">TAAROUST</span>
              </h2>
              <p className="text-sm text-slate-400 font-medium tracking-wide">
                Coach d'Élite • Architecte de Performance B2B
              </p>
            </motion.div>

            {/* Engaging Bio Cards */}
            <div className="space-y-3 mb-6">
              {/* Card 1 - Hook */}
              <motion.div 
                className="relative bg-gradient-to-br from-brand-navy to-brand-navy/95 rounded-xl p-4 text-white overflow-hidden group cursor-default"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...smoothSpring, delay: 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/20 blur-2xl rounded-full -mr-8 -mt-8 group-hover:bg-brand-orange/30 transition-colors" />
                <div className="relative z-10 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-orange/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Zap className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm mb-1">Le déclencheur de transformations</p>
                    <p className="text-xs text-white/70 leading-relaxed">
                      En 25 ans, Saïd a accompagné +500 dirigeants vers des résultats qu'ils pensaient inaccessibles. Son secret ? Aligner la stratégie avec l'humain.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 - Method */}
              <motion.div 
                className="relative bg-gradient-to-br from-slate-50 to-white rounded-xl p-4 border border-slate-100 overflow-hidden group cursor-default"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...smoothSpring, delay: 0.2 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-brand-orange/10 blur-2xl rounded-full -ml-6 -mb-6" />
                <div className="relative z-10 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Brain className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-brand-navy mb-1">La méthode AVR® — son arme secrète</p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Une approche neuro-psychologique unique qui fusionne rigueur commerciale et intelligence émotionnelle. Pas de théorie creuse — que du concret.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 - Promise */}
              <motion.div 
                className="relative bg-gradient-to-r from-brand-orange/10 to-brand-salmon/10 rounded-xl p-4 border border-brand-orange/20 overflow-hidden group cursor-default"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...smoothSpring, delay: 0.3 }}
                whileHover={{ scale: 1.01 }}
              >
                <Quote className="absolute top-3 right-3 w-5 h-5 text-brand-orange/20" />
                <div className="relative z-10">
                  <p className="text-sm font-semibold text-brand-navy italic leading-relaxed mb-2">
                    "Je ne vends pas du coaching. Je construis des trajectoires de réussite sur-mesure."
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-brand-orange rounded-full" />
                    <p className="text-[10px] text-brand-orange font-bold uppercase tracking-wider">Sa promesse</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Credentials - Compact horizontal */}
            <motion.div 
              className="flex flex-wrap gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.4 }}
            >
              {credentials.map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-slate-100 hover:border-brand-orange/30 hover:shadow-sm transition-all duration-300 group cursor-default"
                >
                  <item.icon className="w-3.5 h-3.5 text-brand-orange" />
                  <span className="text-xs font-semibold text-brand-navy">{item.title}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.5 }}
            >
              <Link href="/prendre-rendez-vous">
                <motion.button 
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(197, 160, 89, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-brand-navy to-brand-navy/90 text-white rounded-full font-semibold text-sm hover:from-brand-orange hover:to-brand-salmon transition-all duration-500 shadow-lg w-full sm:w-auto justify-center"
                >
                  Découvrir son approche
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
      </div>
    </section>
  );
}

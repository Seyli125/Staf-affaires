"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Zap, Brain, ArrowRight, Quote, Briefcase, GraduationCap, Target, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const credentials = [
  { title: "RNCP Niveau 6", description: "Coach Professionnel certifié", icon: Award },
  { title: "Technicien PNL", description: "Programmation Neuro-Linguistique", icon: Brain },
  { title: "Méthode AVR®", description: "Approche propriétaire exclusive", icon: Zap },
  { title: "25+ ans B2B", description: "Expertise terrain éprouvée", icon: Users },
];

const parcours = [
  {
    periode: "2019 - Aujourd'hui",
    titre: "Fondateur STAF AFFAIRES",
    description: "Coaching d'élite et accompagnement de dirigeants B2B vers l'excellence commerciale.",
    icon: Target
  },
  {
    periode: "2010 - 2019",
    titre: "Directeur Commercial",
    description: "Pilotage d'équipes commerciales et développement stratégique en environnement complexe.",
    icon: Briefcase
  },
  {
    periode: "1998 - 2010",
    titre: "Expert Affaires B2B",
    description: "Construction d'une expertise terrain solide au sein de structures de premier plan.",
    icon: GraduationCap
  }
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

  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} id="features" className="container mx-auto px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative backgrounds */}
      <motion.div 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/5 blur-[150px] rounded-full pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-navy/5 blur-[120px] rounded-full pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], [-50, 50]) }}
      />
      
      {/* Section Header */}
      <motion.div 
        className="text-center mb-12 lg:mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ ...smoothSpring }}
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...smoothSpring, delay: 0.1 }}
          className="inline-flex items-center gap-2 text-brand-orange font-semibold text-xs mb-4 px-4 py-2 bg-brand-orange/10 rounded-full"
        >
          <Star className="w-3.5 h-3.5" />
          Votre Expert
        </motion.span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight">
          Rencontrez <span className="text-brand-orange">Saïd Taaroust</span>
        </h2>
      </motion.div>

      {/* Main Bio Card */}
      <motion.div 
        className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ ...smoothSpring }}
      >
        <div className="grid lg:grid-cols-5 gap-0">
          {/* Left: Image Column - Compact */}
          <div className="lg:col-span-2 relative bg-gradient-to-br from-brand-navy to-brand-navy/90 p-6 lg:p-8 flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
            
            {/* Portrait - Smaller, elegant */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="relative w-40 h-52 sm:w-44 sm:h-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
                <Image 
                  src="/images/said-meeting.jpg"
                  alt="Saïd TAAROUST - Expert Performance B2B"
                  fill
                  className="object-cover object-top"
                />
              </div>
              
              {/* RNCP Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ ...smoothSpring, delay: 0.4 }}
                className="absolute -bottom-3 -right-3 w-14 h-14 rounded-full overflow-hidden border-3 border-white shadow-lg bg-white p-1.5"
              >
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1769789503636.png?width=8000&height=8000&resize=contain"
                  alt="Certification RNCP"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </motion.div>

            {/* Name & Title */}
            <motion.div 
              className="text-center mt-6 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.3 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                Saïd Taaroust
              </h3>
              <p className="text-white/70 text-sm font-medium">
                Coach d'Élite & Expert B2B
              </p>
              
              {/* Experience Badge */}
              <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-brand-orange rounded-full">
                <span className="text-white font-bold text-lg">25+</span>
                <span className="text-white/90 text-xs font-medium">années d'expertise</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Content Column */}
          <motion.div
            style={{ y: contentY }}
            className="lg:col-span-3 p-6 sm:p-8 lg:p-10 relative z-10"
          >
            {/* Quote */}
            <motion.div 
              className="relative mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.2 }}
            >
              <Quote className="absolute -top-2 -left-2 w-8 h-8 text-brand-orange/15" />
              <blockquote className="pl-6 border-l-2 border-brand-orange">
                <p className="text-lg sm:text-xl font-medium text-brand-navy italic leading-relaxed">
                  "Transformer vos défis complexes en leviers de croissance, tout en préservant votre équilibre."
                </p>
              </blockquote>
            </motion.div>

            {/* Bio Text - Engaging, fluid */}
            <motion.div 
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.3 }}
            >
              <p className="text-slate-600 text-base leading-relaxed">
                <span className="text-brand-navy font-semibold">Un parcours d'exception.</span> Forgé au cœur des plus grandes structures commerciales françaises, Saïd a développé une expertise rare : celle de comprendre les mécanismes profonds qui séparent la performance ordinaire de l'excellence durable.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Sa force ? <span className="text-brand-orange font-semibold">L'alliance unique</span> entre rigueur stratégique et intelligence émotionnelle. Là où d'autres voient des obstacles, il identifie des leviers de transformation. Sa méthode <span className="font-semibold text-brand-navy">AVR®</span> — fruit de 25 années d'expérimentation terrain — a déjà propulsé des centaines de dirigeants vers leurs objectifs les plus ambitieux.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Aujourd'hui, il met cette expertise au service d'une conviction : <span className="text-brand-navy font-semibold">performer sans s'épuiser n'est pas un idéal, c'est une méthode.</span>
              </p>
            </motion.div>

            {/* Credentials - Compact grid */}
            <motion.div 
              className="grid grid-cols-2 gap-2.5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.4 }}
            >
              {credentials.map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -2, transition: { duration: 0.2 } }}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shrink-0 shadow-sm group-hover:shadow-md transition-shadow">
                    <item.icon className="w-4 h-4 text-brand-orange" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-brand-navy text-xs truncate">{item.title}</p>
                    <p className="text-[10px] text-slate-400 truncate">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Parcours Timeline - Horizontal on desktop */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ ...smoothSpring, delay: 0.2 }}
        className="mb-12"
      >
        <h3 className="text-center text-xl sm:text-2xl font-bold text-brand-navy mb-8">
          Un parcours qui inspire <span className="text-brand-orange">confiance</span>
        </h3>
        
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {parcours.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.1 * i }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative bg-white rounded-2xl p-5 border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Timeline connector */}
              {i < parcours.length - 1 && (
                <div className="hidden sm:block absolute top-1/2 -right-3 sm:-right-4 w-6 sm:w-8 h-0.5 bg-slate-200 z-0" />
              )}
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center group-hover:bg-brand-orange/10 transition-colors">
                    <item.icon className="w-5 h-5 text-brand-navy group-hover:text-brand-orange transition-colors" />
                  </div>
                  <span className="text-xs font-semibold text-brand-orange">{item.periode}</span>
                </div>
                <h4 className="font-bold text-brand-navy text-sm mb-2">{item.titre}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ ...smoothSpring, delay: 0.3 }}
        className="text-center"
      >
        <Link href="/prendre-rendez-vous">
          <motion.button 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-white rounded-full font-semibold text-base hover:bg-brand-orange transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Échanger avec Saïd
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </Link>
        <p className="mt-4 text-sm text-slate-400">Session découverte offerte • Sans engagement</p>
      </motion.div>
    </section>
  );
}

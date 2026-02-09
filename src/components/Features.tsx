"use client";

import { motion } from "framer-motion";
import { Award, Users, Zap, Brain, ArrowRight, Quote, Briefcase, GraduationCap, Target, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const credentials = [
  { title: "RNCP Niveau 6", description: "Coach Professionnel", icon: Award },
  { title: "Technicien PNL", description: "Neuro-Linguistique", icon: Brain },
  { title: "Méthode AVR®", description: "Approche exclusive", icon: Zap },
  { title: "25+ ans B2B", description: "Expertise terrain", icon: Users },
];

const parcours = [
  {
    periode: "2019 - Aujourd'hui",
    titre: "Fondateur STAF AFFAIRES",
    description: "Coaching d'élite et accompagnement de dirigeants B2B.",
    icon: Target
  },
  {
    periode: "2010 - 2019",
    titre: "Directeur Commercial",
    description: "Pilotage d'équipes et développement stratégique.",
    icon: Briefcase
  },
  {
    periode: "1998 - 2010",
    titre: "Expert Affaires B2B",
    description: "Construction d'une expertise terrain solide.",
    icon: GraduationCap
  }
];

export function Features() {
  return (
    <section id="features" className="container mx-auto px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative backgrounds - subtle */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-navy/5 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Section Header - Compact */}
      <motion.div 
        className="text-center mb-10 lg:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-flex items-center gap-2 text-brand-orange font-semibold text-[10px] mb-3 px-3 py-1.5 bg-brand-orange/10 rounded-full">
          <Star className="w-3 h-3" />
          Votre Expert
        </span>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy leading-tight">
          Rencontrez <span className="text-brand-orange">Saïd Taaroust</span>
        </h2>
      </motion.div>

      {/* Main Bio Card - Redesigned, professional */}
      <motion.div 
        className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid lg:grid-cols-12 gap-0">
          {/* Left: Image Column - Balanced proportions */}
          <div className="lg:col-span-4 relative bg-gradient-to-br from-brand-navy to-brand-navy/90 p-5 lg:p-6 flex flex-col items-center justify-center min-h-[280px] lg:min-h-0">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
            
              {/* Portrait - Échangé: said-casual.jpg ici (décontracté) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative z-10"
              >
                <div className="relative w-40 h-52 sm:w-44 sm:h-56 rounded-xl overflow-hidden shadow-xl border-2 border-white/20">
                  <Image 
                    src="/images/said-casual.jpg"
                    alt="Saïd TAAROUST - Expert Performance B2B"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 160px, 176px"
                  />
                </div>
              
              {/* RNCP Badge */}
              <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md bg-white p-1">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1769789503636.png?width=8000&height=8000&resize=contain"
                  alt="Certification RNCP"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Name & Title */}
            <motion.div 
              className="text-center mt-4 relative z-10"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-white mb-0.5">
                Saïd Taaroust
              </h3>
              <p className="text-white/70 text-xs font-medium mb-3">
                Coach d'Élite & Expert B2B
              </p>
              
              {/* Experience Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-orange rounded-full">
                <span className="text-white font-bold text-sm">25+</span>
                <span className="text-white/90 text-[10px] font-medium">ans d'expertise</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Content Column - Improved text balance */}
          <div className="lg:col-span-8 p-5 sm:p-6 lg:p-8 relative z-10">
            {/* Quote - Short, impactful */}
            <motion.div 
              className="relative mb-5"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <Quote className="absolute -top-1 -left-1 w-6 h-6 text-brand-orange/15" />
              <blockquote className="pl-5 border-l-2 border-brand-orange">
                <p className="text-base sm:text-lg font-medium text-brand-navy italic leading-relaxed">
                  "Transformer vos défis en leviers de croissance, tout en préservant votre équilibre."
                </p>
              </blockquote>
            </motion.div>

            {/* Bio Text - Compact, engaging, 2 paragraphs */}
            <motion.div 
              className="space-y-3 mb-5"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <p className="text-slate-600 text-sm leading-relaxed">
                <span className="text-brand-navy font-semibold">Un parcours d'exception.</span> Forgé au cœur des plus grandes structures commerciales françaises, Saïd a développé une expertise rare : comprendre les mécanismes qui séparent la performance ordinaire de l'excellence durable.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Sa force ? <span className="text-brand-orange font-semibold">L'alliance</span> entre rigueur stratégique et intelligence émotionnelle. Sa méthode <span className="font-semibold text-brand-navy">AVR®</span> — fruit de 25 années terrain — a propulsé des centaines de dirigeants vers leurs objectifs les plus ambitieux. <span className="text-brand-navy font-medium">Performer sans s'épuiser n'est pas un idéal, c'est une méthode.</span>
              </p>
            </motion.div>

            {/* Credentials - Compact 2x2 grid */}
            <motion.div 
              className="grid grid-cols-2 gap-2"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              {credentials.map((item, i) => (
                <div 
                  key={i}
                  className="credential-item flex items-center gap-2 p-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <div className="w-7 h-7 rounded-md bg-white flex items-center justify-center shrink-0 shadow-sm">
                    <item.icon className="w-3.5 h-3.5 text-brand-orange" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-brand-navy text-[11px] truncate">{item.title}</p>
                    <p className="text-[9px] text-slate-400 truncate">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Parcours Timeline - Compact horizontal */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-10"
      >
        <h3 className="text-center text-lg sm:text-xl font-bold text-brand-navy mb-6">
          Un parcours qui inspire <span className="text-brand-orange">confiance</span>
        </h3>
        
        <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
          {parcours.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * i }}
              className="timeline-card relative bg-white rounded-xl p-4 border border-slate-100 group"
            >
              {/* Timeline connector */}
              {i < parcours.length - 1 && (
                <div className="hidden sm:block absolute top-1/2 -right-2 sm:-right-2.5 w-4 sm:w-5 h-0.5 bg-slate-200 z-0" />
              )}
              
              <div className="relative z-10">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-navy/5 flex items-center justify-center group-hover:bg-brand-orange/10 transition-colors">
                    <item.icon className="w-4 h-4 text-brand-navy group-hover:text-brand-orange transition-colors" />
                  </div>
                  <span className="text-[10px] font-semibold text-brand-orange">{item.periode}</span>
                </div>
                <h4 className="font-bold text-brand-navy text-xs mb-1">{item.titre}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA - Compact */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-center"
      >
        <Link href="/prendre-rendez-vous">
          <button className="cta-button group inline-flex items-center gap-2 px-6 py-3 bg-brand-navy text-white rounded-full font-semibold text-sm shadow-lg">
            Échanger avec Saïd
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </Link>
        <p className="mt-3 text-xs text-slate-400">Session découverte offerte • Sans engagement</p>
      </motion.div>
    </section>
  );
}

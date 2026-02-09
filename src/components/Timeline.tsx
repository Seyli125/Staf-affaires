"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Building2, TrendingUp, Users, Target, ShieldCheck, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

const timelineData = [
  {
    year: "2000 - 2002",
    title: "Formation Initiale",
    description: "BTS Gestion commerciale & DEUG Arts visuels. L'équilibre entre rigueur stratégique et créativité.",
    icon: GraduationCap,
  },
  {
    year: "2002 - 2012",
    title: "Leadership Opérationnel",
    description: "Directeur adjoint chez Go Sport (10 ans). Gestion d'équipes et pilotage P&L.",
    icon: Building2,
  },
  {
    year: "2010",
    title: "Ingénierie Pédagogique",
    description: "Titre de Formateur professionnel niveau 5 (AFPA).",
    icon: GraduationCap,
  },
  {
    year: "2014 - 2020",
    title: "L'impulsion : STAF40",
    description: "Fondateur. Accompagnement stratégique pour les dirigeants de TPE/PME.",
    icon: Target,
  },
  {
    year: "2017 - 2022",
    title: "Expertise Institutionnelle",
    description: "CCI des Landes. Formateur et Chargé d'affaires.",
    icon: TrendingUp,
  },
  {
    year: "2021 - 2025",
    title: "Haute Performance",
    description: "Coach-consultant associé. Coaching de performance collective et individuelle.",
    icon: Users,
  },
  {
    year: "Depuis 2025",
    title: "STAF AFFAIRES",
    description: "Créateur de l'approche AVR® : Accélération, Valeur, Résilience.",
    icon: Zap,
    highlight: true,
  },
];

export function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "100%"]);

  return (
    <section ref={sectionRef} id="timeline" className="container mx-auto px-4 sm:px-6 overflow-visible relative">
      {/* Header - Reduced */}
      <div className="max-w-xl mx-auto text-center mb-10 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring", damping: 15 }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-orange/10 rounded-full mb-4"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <Zap className="w-3 h-3 text-brand-orange" />
          </motion.div>
          <span className="text-brand-orange font-semibold text-[10px]">
            Héritage & Vision
          </span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-navy leading-tight mb-3"
        >
          La force de <span className="text-brand-orange">l'expérience</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed"
        >
          40 années d'immersion terrain condensées dans une méthode propriétaire au service de votre transformation.
        </motion.p>

        {/* Philosophical quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[10px] italic text-slate-400 mt-3 max-w-xs mx-auto"
        >
          "Chaque étape du chemin construit celui que vous devenez."
        </motion.p>
      </div>

      {/* Timeline - Reduced */}
      <div className="relative max-w-3xl mx-auto">
        {/* Progress Line */}
        <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2">
          <motion.div 
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-brand-orange to-brand-navy origin-top"
          />
        </div>

        <div className="space-y-6 sm:space-y-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                ease: [0.25, 0.4, 0.25, 1]
              }}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Marker */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + index * 0.08, type: "spring", stiffness: 300, damping: 15 }}
                className="absolute left-3 md:left-1/2 w-2.5 h-2.5 bg-white border-2 border-brand-navy rounded-full md:-translate-x-1/2 z-10"
              />

              {/* Content Card - Reduced */}
              <div className="ml-8 md:ml-0 md:w-1/2 md:px-5">
                <motion.div 
                  whileHover={{ 
                    y: -3, 
                    boxShadow: item.highlight ? "0 15px 30px -8px rgba(10,25,47,0.25)" : "0 8px 20px -8px rgba(0,0,0,0.1)" 
                  }}
                  className={`p-4 rounded-xl transition-all duration-300 cursor-default ${
                    item.highlight ? 'bg-brand-navy text-white shadow-lg' : 'bg-white border border-slate-100 hover:border-slate-200'
                  } ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                >
                  {item.highlight && (
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="inline-block bg-brand-orange text-white px-2 py-0.5 rounded-full text-[7px] font-bold uppercase tracking-wider mb-2"
                    >
                      L'Aboutissement
                    </motion.span>
                  )}

                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
                        item.highlight ? 'bg-white/10 text-brand-orange' : 'bg-brand-navy text-white'
                      }`}
                    >
                      <item.icon className="w-3 h-3" />
                    </motion.div>
                    <span className={`text-[9px] font-semibold tracking-wider ${
                      item.highlight ? 'text-brand-orange' : 'text-brand-orange'
                    }`}>{item.year}</span>
                  </div>

                  <h3 className={`text-xs font-bold mb-1 ${
                    item.highlight ? 'text-white' : 'text-brand-navy'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-[10px] leading-relaxed ${
                    item.highlight ? 'text-white/70' : 'text-slate-500'
                  }`}>
                    {item.description}
                  </p>
                </motion.div>
              </div>
              
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA - Reduced */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className="mt-12 sm:mt-16 p-5 sm:p-6 bg-brand-navy rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto shadow-xl relative overflow-hidden"
      >
        <motion.div 
          className="absolute top-0 right-0 w-40 h-40 bg-brand-orange/15 rounded-full blur-2xl -mr-20 -mt-20"
          initial={{ opacity: 0.15 }}
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="relative z-10 flex items-center gap-3 text-center sm:text-left">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 rounded-lg bg-brand-orange flex items-center justify-center shrink-0 shadow-md hidden sm:flex"
          >
            <ShieldCheck className="w-5 h-5 text-white" />
          </motion.div>
          <div>
            <h4 className="text-sm sm:text-base font-bold mb-0.5">Crédibilité Certifiée</h4>
            <p className="text-white/60 text-[10px]">RNCP Niveau 6 & Technicien PNL • Approche AVR®</p>
          </div>
        </div>
        
        <Link href="/prendre-rendez-vous">
          <motion.button 
            whileHover={{ scale: 1.03, boxShadow: "0 15px 30px -8px rgba(0,0,0,0.25)" }}
            whileTap={{ scale: 0.97 }}
            className="relative z-10 px-5 py-2.5 bg-white text-brand-navy rounded-full font-semibold text-xs hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-md flex items-center gap-1.5 whitespace-nowrap"
          >
            Passer à l'action <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}

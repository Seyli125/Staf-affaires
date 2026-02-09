"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
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

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={sectionRef} id="timeline" className="container mx-auto px-4 sm:px-6 overflow-visible relative">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-5"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Zap className="w-3.5 h-3.5 text-brand-orange" />
          </motion.div>
          <span className="text-brand-orange font-semibold text-xs">
            Héritage & Vision
          </span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy leading-tight mb-4"
        >
          La force de <span className="text-brand-orange">l'expérience</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm text-slate-500 max-w-lg mx-auto leading-relaxed"
        >
          40 années d'immersion terrain condensées dans une méthode propriétaire au service de votre transformation.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Progress Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2">
          <motion.div 
            style={{ height: lineHeight }}
            className="w-full bg-gradient-to-b from-brand-orange to-brand-navy origin-top"
          />
        </div>

        <div className="space-y-8 sm:space-y-10">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
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
                transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 300 }}
                className="absolute left-4 md:left-1/2 w-3 h-3 bg-white border-2 border-brand-navy rounded-full md:-translate-x-1/2 z-10"
              />

              {/* Content Card */}
              <div className="ml-10 md:ml-0 md:w-1/2 md:px-6">
                <motion.div 
                  whileHover={{ 
                    y: -4, 
                    boxShadow: item.highlight ? "0 20px 40px -10px rgba(10,25,47,0.3)" : "0 10px 30px -10px rgba(0,0,0,0.1)" 
                  }}
                  className={`p-5 rounded-2xl transition-all duration-300 cursor-default ${
                    item.highlight ? 'bg-brand-navy text-white shadow-xl' : 'bg-white border border-slate-100 hover:border-slate-200'
                  } ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                >
                  {item.highlight && (
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="inline-block bg-brand-orange text-white px-2.5 py-1 rounded-full text-[8px] font-bold uppercase tracking-wider mb-3"
                    >
                      L'Aboutissement
                    </motion.span>
                  )}

                  <div className={`flex items-center gap-2.5 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                        item.highlight ? 'bg-white/10 text-brand-orange' : 'bg-brand-navy text-white'
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                    </motion.div>
                    <span className={`text-[10px] font-semibold tracking-wider ${
                      item.highlight ? 'text-brand-orange' : 'text-brand-orange'
                    }`}>{item.year}</span>
                  </div>

                  <h3 className={`text-sm font-bold mb-1.5 ${
                    item.highlight ? 'text-white' : 'text-brand-navy'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${
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

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
        className="mt-14 sm:mt-20 p-6 sm:p-8 bg-brand-navy rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-5 max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
      >
        <motion.div 
          className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/20 rounded-full blur-3xl -mr-24 -mt-24"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="relative z-10 flex items-center gap-4 text-center sm:text-left">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="w-12 h-12 rounded-xl bg-brand-orange flex items-center justify-center shrink-0 shadow-lg hidden sm:flex"
          >
            <ShieldCheck className="w-6 h-6 text-white" />
          </motion.div>
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-1">Crédibilité Certifiée</h4>
            <p className="text-white/60 text-xs">RNCP Niveau 6 & Technicien PNL • Approche AVR®</p>
          </div>
        </div>
        
        <Link href="/prendre-rendez-vous">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 px-6 py-3 bg-white text-brand-navy rounded-full font-semibold text-sm hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-lg flex items-center gap-2 whitespace-nowrap"
          >
            Passer à l'action <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}

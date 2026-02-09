"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Briefcase, GraduationCap, Building2, TrendingUp, Users, Target, ShieldCheck, ArrowRight, Zap, Quote } from "lucide-react";
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

const smoothSpring = {
  type: "spring" as const,
  stiffness: 100,
  damping: 30,
  mass: 1
};

export function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const lineProgress = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={sectionRef} id="timeline" className="container mx-auto px-4 sm:px-6 overflow-visible relative">
      {/* Header */}
      <motion.div 
        className="max-w-2xl mx-auto text-center mb-12 sm:mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ ...smoothSpring }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ ...smoothSpring, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-5"
        >
          <Zap className="w-4 h-4 text-brand-orange" />
          <span className="text-brand-orange font-semibold text-sm">
            Héritage & Vision
          </span>
        </motion.div>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-4">
          La force de <span className="text-brand-orange">l'expérience</span>
        </h2>
        
        <p className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
          25 années d'immersion terrain condensées dans une méthode propriétaire au service de votre transformation.
        </p>

        {/* Philosophical quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-sm italic text-brand-orange/80 font-medium"
        >
          "L'expérience est le seul professeur qui nous fait passer l'examen avant de nous donner la leçon."
        </motion.p>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Progress Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 md:-translate-x-1/2">
          <motion.div 
            style={{ height: lineProgress }}
            className="w-full bg-gradient-to-b from-brand-orange to-brand-navy"
          />
        </div>

        <div className="space-y-8 sm:space-y-10">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ ...smoothSpring, delay: index * 0.08 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Marker */}
              <motion.div 
                className="absolute left-4 md:left-1/2 w-3 h-3 bg-white border-2 border-brand-navy rounded-full md:-translate-x-1/2 z-10"
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 + 0.2 }}
              />

              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                <motion.div 
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className={`p-5 rounded-2xl transition-all duration-300 ${
                    item.highlight ? 'bg-brand-navy text-white shadow-xl' : 'bg-white border border-slate-100 hover:shadow-lg hover:border-slate-200'
                  } ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                >
                  
                  {item.highlight && (
                    <span className="inline-block bg-brand-orange text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3">
                      L'Aboutissement
                    </span>
                  )}

                  <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      item.highlight ? 'bg-white/10 text-brand-orange' : 'bg-brand-navy text-white'
                    }`}>
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className={`text-xs font-semibold tracking-wider ${
                      item.highlight ? 'text-brand-orange' : 'text-brand-orange'
                    }`}>{item.year}</span>
                  </div>

                  <h3 className={`text-base font-bold mb-2 ${
                    item.highlight ? 'text-white' : 'text-brand-navy'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${
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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ ...smoothSpring }}
        className="mt-16 sm:mt-20 p-6 sm:p-10 bg-brand-navy rounded-3xl text-white flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-2xl relative overflow-hidden"
      >
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-3xl -mr-32 -mt-32"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        
        <div className="relative z-10 flex items-center gap-5 text-center sm:text-left">
          <motion.div 
            whileHover={{ rotate: 10, scale: 1.1 }}
            className="w-14 h-14 rounded-2xl bg-brand-orange flex items-center justify-center shrink-0 shadow-xl hidden sm:flex"
          >
            <ShieldCheck className="w-7 h-7 text-white" />
          </motion.div>
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-1">Crédibilité Certifiée</h4>
            <p className="text-white/60 text-sm">RNCP Niveau 6 & Technicien PNL • Approche AVR®</p>
          </div>
        </div>
        
        <Link href="/prendre-rendez-vous">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 px-6 py-3 bg-white text-brand-navy rounded-full font-semibold text-sm hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-xl flex items-center gap-2 whitespace-nowrap"
          >
            Passer à l'action <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}

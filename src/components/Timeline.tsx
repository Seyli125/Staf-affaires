"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Building2, TrendingUp, Users, Target, ShieldCheck, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

const timelineData = [
  {
    year: "2000 - 2002",
    title: "Formation Initiale",
    description: "BTS Gestion commerciale & DEUG Arts visuels.",
    icon: GraduationCap,
  },
  {
    year: "2002 - 2012",
    title: "Leadership Opérationnel",
    description: "Directeur adjoint Go Sport (10 ans). Gestion d'équipes.",
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
    description: "Fondateur. Accompagnement stratégique dirigeants TPE/PME.",
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
    description: "Coach-consultant associé. Coaching collectif et individuel.",
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

  const lineProgress = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section ref={sectionRef} id="timeline" className="container mx-auto px-4 sm:px-6 overflow-visible relative">
      {/* Header - Compact */}
      <motion.div 
        className="max-w-xl mx-auto text-center mb-10 sm:mb-12"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-orange/10 rounded-full mb-4">
          <Zap className="w-3.5 h-3.5 text-brand-orange" />
          <span className="text-brand-orange font-semibold text-xs">
            Héritage & Vision
          </span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand-navy leading-tight mb-3">
          La force de <span className="text-brand-orange">l'expérience</span>
        </h2>
        
        <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto leading-relaxed">
          25 années d'immersion terrain condensées dans une méthode propriétaire.
        </p>

        {/* Philosophical quote */}
        <p className="mt-4 text-xs italic text-brand-orange/80 font-medium">
          "L'expérience est le seul professeur qui nous fait passer l'examen avant de nous donner la leçon."
        </p>
      </motion.div>

      {/* Timeline - Compact */}
      <div className="relative max-w-3xl mx-auto">
        {/* Progress Line */}
        <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 md:-translate-x-1/2">
          <motion.div 
            style={{ height: lineProgress }}
            className="w-full bg-gradient-to-b from-brand-orange to-brand-navy"
          />
        </div>

        <div className="space-y-6 sm:space-y-7">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Marker */}
              <div className="absolute left-3 md:left-1/2 w-2.5 h-2.5 bg-white border-2 border-brand-navy rounded-full md:-translate-x-1/2 z-10" />

              {/* Content Card */}
              <div className="ml-10 md:ml-0 md:w-1/2 md:px-6">
                <div className={`timeline-card p-4 rounded-xl transition-all duration-200 ${
                  item.highlight ? 'bg-brand-navy text-white shadow-lg' : 'bg-white border border-slate-100'
                } ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  
                  {item.highlight && (
                    <span className="inline-block bg-brand-orange text-white px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider mb-2">
                      L'Aboutissement
                    </span>
                  )}

                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                      item.highlight ? 'bg-white/10 text-brand-orange' : 'bg-brand-navy text-white'
                    }`}>
                      <item.icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-wider text-brand-orange">{item.year}</span>
                  </div>

                  <h3 className={`text-sm font-bold mb-1 ${
                    item.highlight ? 'text-white' : 'text-brand-navy'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs leading-relaxed ${
                    item.highlight ? 'text-white/70' : 'text-slate-500'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </div>
              
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA - Compact */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12 sm:mt-14 p-5 sm:p-7 bg-brand-navy rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-5 max-w-3xl mx-auto shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/20 rounded-full blur-3xl -mr-24 -mt-24" />
        
        <div className="relative z-10 flex items-center gap-4 text-center sm:text-left">
          <div className="w-11 h-11 rounded-xl bg-brand-orange flex items-center justify-center shrink-0 shadow-lg hidden sm:flex">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-0.5">Crédibilité Certifiée</h4>
            <p className="text-white/60 text-xs">RNCP Niveau 6 & Technicien PNL • Approche AVR®</p>
          </div>
        </div>
        
        <Link href="/prendre-rendez-vous">
          <button className="cta-button relative z-10 px-5 py-2.5 bg-white text-brand-navy rounded-full font-semibold text-sm shadow-lg flex items-center gap-2 whitespace-nowrap">
            Passer à l'action <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </Link>
      </motion.div>
    </section>
  );
}

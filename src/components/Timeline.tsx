"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Building2, TrendingUp, Users, Target, ShieldCheck, ArrowRight, Zap, Award } from "lucide-react";
import Link from "next/link";

const timelineData = [
  {
    year: "2000 - 2002",
    title: "Formation Initiale",
    description: "BTS Gestion commerciale & DEUG Arts visuels",
    icon: GraduationCap,
  },
  {
    year: "2002 - 2012",
    title: "Leadership Opérationnel",
    description: "Directeur adjoint Go Sport — 10 ans de gestion d'équipes",
    icon: Building2,
  },
  {
    year: "2010",
    title: "Ingénierie Pédagogique",
    description: "Titre de Formateur professionnel niveau 5 (AFPA)",
    icon: GraduationCap,
  },
  {
    year: "2014 - 2020",
    title: "L'impulsion : STAF40",
    description: "Fondateur — Accompagnement stratégique dirigeants TPE/PME",
    icon: Target,
  },
  {
    year: "2017 - 2022",
    title: "Expertise Institutionnelle",
    description: "CCI des Landes — Formateur et Chargé d'affaires",
    icon: TrendingUp,
  },
  {
    year: "2021 - 2025",
    title: "Haute Performance",
    description: "Coach-consultant associé — Coaching collectif et individuel",
    icon: Users,
  },
  {
    year: "Depuis 2025",
    title: "STAF AFFAIRES",
    description: "Créateur de l'approche AVR® : Accélération, Valeur, Résilience",
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

  const lineProgress = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  return (
    <section ref={sectionRef} id="timeline" className="py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        
        {/* Header */}
        <motion.div 
          className="max-w-2xl mx-auto text-center mb-14 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-5">
            <Award className="w-4 h-4 text-brand-orange" />
            <span className="text-brand-orange font-semibold text-[11px] tracking-wide">
              Héritage & Vision
            </span>
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-4">
            La force de <span className="text-brand-orange">l'expérience</span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-500 max-w-lg mx-auto leading-relaxed">
            25 années d'immersion terrain condensées dans une méthode propriétaire.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress Line - Center */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2">
            <motion.div 
              style={{ height: lineProgress }}
              className="w-full bg-gradient-to-b from-brand-orange via-brand-orange to-brand-navy"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`relative flex items-start md:items-center gap-6 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-white border-2 border-brand-navy rounded-full md:-translate-x-1/2 z-10 mt-2 md:mt-0">
                  {item.highlight && (
                    <span className="absolute inset-0 bg-brand-orange rounded-full animate-ping opacity-50" />
                  )}
                </div>

                {/* Content Card */}
                <div className="flex-1 ml-10 md:ml-0 md:w-1/2 md:px-8">
                  <div className={`timeline-card p-5 sm:p-6 rounded-2xl transition-all duration-300 ${
                    item.highlight 
                      ? 'bg-brand-navy text-white shadow-xl' 
                      : 'bg-white border border-slate-100 hover:border-slate-200 hover:shadow-lg'
                  } ${index % 2 === 0 ? "md:mr-auto md:text-left" : "md:ml-auto md:text-left md:md:text-right"}`}>
                    
                    {item.highlight && (
                      <span className="inline-block bg-brand-orange text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3">
                        L'Aboutissement
                      </span>
                    )}

                    <div className={`flex items-center gap-3 mb-3 ${
                      index % 2 !== 0 ? "md:flex-row-reverse md:justify-end" : ""
                    }`}>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        item.highlight 
                          ? 'bg-white/10 text-brand-orange' 
                          : 'bg-brand-navy/5 text-brand-navy'
                      }`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className={`text-[11px] font-bold tracking-wider ${
                        item.highlight ? 'text-brand-orange' : 'text-brand-orange'
                      }`}>
                        {item.year}
                      </span>
                    </div>

                    <h3 className={`text-lg font-bold mb-2 ${
                      item.highlight ? 'text-white' : 'text-brand-navy'
                    }`}>
                      {item.title}
                    </h3>
                    
                    <p className={`text-sm leading-relaxed ${
                      item.highlight ? 'text-white/70' : 'text-slate-500'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-20"
        >
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-brand-navy" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-[100px]" />
            
            {/* Content */}
            <div className="relative z-10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="w-14 h-14 rounded-2xl bg-brand-orange flex items-center justify-center shrink-0 shadow-lg hidden sm:flex">
                  <ShieldCheck className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">Crédibilité Certifiée</h4>
                  <p className="text-white/60 text-sm">RNCP Niveau 6 • Technicien PNL • Approche AVR®</p>
                </div>
              </div>
              
              <Link href="/prendre-rendez-vous">
                <button className="cta-button px-6 py-3.5 bg-white text-brand-navy rounded-full font-semibold text-sm shadow-lg flex items-center gap-2 whitespace-nowrap hover:bg-brand-orange hover:text-white transition-all duration-300">
                  Passer à l'action
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

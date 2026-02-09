"use client";

import { motion } from "framer-motion";
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
  return (
    <section id="timeline" className="container mx-auto px-4 sm:px-6 overflow-visible relative">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-10 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-orange/10 rounded-full mb-4"
        >
          <Zap className="w-3 h-3 text-brand-orange" />
          <span className="text-brand-orange font-semibold text-xs">
            Héritage & Vision
          </span>
        </motion.div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy leading-tight mb-3">
          La force de <span className="text-brand-orange">l'expérience</span>
        </h2>
        
        <p className="text-sm text-slate-500 max-w-lg mx-auto">
          40 années d'immersion terrain condensées dans une méthode propriétaire au service de votre transformation.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Progress Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full bg-gradient-to-b from-brand-orange to-brand-navy"
          />
        </div>

        <div className="space-y-6 sm:space-y-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Marker */}
              <div className="absolute left-4 md:left-1/2 w-2.5 h-2.5 bg-white border-2 border-brand-navy rounded-full md:-translate-x-1/2 z-10" />

              {/* Content Card */}
              <div className="ml-10 md:ml-0 md:w-1/2 md:px-6">
                <div className={`p-4 rounded-xl transition-all duration-300 hover:shadow-md ${
                  item.highlight ? 'bg-brand-navy text-white shadow-lg' : 'bg-white border border-slate-100'
                } ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  
                  {item.highlight && (
                    <span className="inline-block bg-brand-orange text-white px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider mb-2">
                      L'Aboutissement
                    </span>
                  )}

                  <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 ${
                      item.highlight ? 'bg-white/10 text-brand-orange' : 'bg-brand-navy text-white'
                    }`}>
                      <item.icon className="w-3.5 h-3.5" />
                    </div>
                    <span className={`text-[10px] font-semibold tracking-wider ${
                      item.highlight ? 'text-brand-orange' : 'text-brand-orange'
                    }`}>{item.year}</span>
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

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 sm:mt-16 p-5 sm:p-8 bg-brand-navy rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/20 rounded-full blur-3xl -mr-24 -mt-24" />
        
        <div className="relative z-10 flex items-center gap-4 text-center sm:text-left">
          <div className="w-12 h-12 rounded-xl bg-brand-orange flex items-center justify-center shrink-0 shadow-lg hidden sm:flex">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-base sm:text-lg font-bold mb-0.5">Crédibilité Certifiée</h4>
            <p className="text-white/60 text-xs">RNCP Niveau 6 & Technicien PNL • Approche AVR®</p>
          </div>
        </div>
        
        <Link href="/prendre-rendez-vous">
          <button className="relative z-10 px-5 py-2.5 bg-white text-brand-navy rounded-full font-semibold text-sm hover:bg-brand-orange hover:text-white transition-all shadow-lg flex items-center gap-2 whitespace-nowrap">
            Passer à l'action <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </motion.div>
    </section>
  );
}

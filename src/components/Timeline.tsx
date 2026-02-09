"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Building2, TrendingUp, Users, Target, ShieldCheck, ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

const timelineData = [
  {
    year: "2000 - 2002",
    title: "Formation Initiale",
    description: "BTS Gestion commerciale & DEUG Arts visuels. L'équilibre précoce entre rigueur stratégique et créativité visuelle.",
    icon: GraduationCap,
  },
  {
    year: "2002 - 2012",
    title: "Leadership Opérationnel",
    description: "Directeur adjoint chez Go Sport (10 ans). Gestion d'équipes et pilotage P&L sur des volumes d'affaires majeurs.",
    icon: Building2,
  },
  {
    year: "2010",
    title: "Ingénierie Pédagogique",
    description: "Titre de Formateur professionnel niveau 5 (AFPA). L'art de transmettre pour transformer les comportements.",
    icon: GraduationCap,
  },
  {
    year: "2014 - 2020",
    title: "L'impulsion : STAF40",
    description: "Fondateur. Accompagnement stratégique et formation pour les dirigeants de TPE/PME en quête de croissance.",
    icon: Target,
  },
  {
    year: "2017 - 2022",
    title: "Expertise Institutionnelle",
    description: "CCI des Landes. Formateur et Chargé d'affaires. Audit et déploiement de stratégies commerciales territoriales.",
    icon: TrendingUp,
  },
  {
    year: "2021 - 2025",
    title: "Haute Performance",
    description: "Coach-consultant associé. Spécialisation dans le coaching de performance collective et individuelle.",
    icon: Users,
  },
  {
    year: "Depuis 2025",
    title: "L'Efficience : STAF AFFAIRES",
    description: "Aboutissement de 40 ans d'expérience. Créateur de l'approche AVR® : Accélération, Valeur, Résilience.",
    icon: Zap,
    highlight: true,
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="container mx-auto px-4 sm:px-6 overflow-visible relative">
      <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24 md:mb-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-brand-orange/10 rounded-full mb-6 sm:mb-8"
        >
          <Zap className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-brand-orange" />
          <span className="text-brand-orange font-black uppercase tracking-widest text-[9px] sm:text-[10px]">
            Héritage & Vision
          </span>
        </motion.div>
        
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-navy leading-[0.9] tracking-tighter uppercase mb-6 sm:mb-8 md:mb-12 px-2">
          La force de <br />
          <span className="text-brand-orange italic">l'expérience</span>, <br />
          <span className="text-brand-navy">le sens en plus.</span>
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-500 leading-relaxed max-w-2xl mx-auto font-medium px-2">
          40 années d'immersion terrain condensées dans une méthode propriétaire au service de votre transformation.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Progress Line */}
        <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="w-full bg-gradient-to-b from-brand-orange via-brand-orange to-brand-navy"
          />
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-24">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Marker */}
              <motion.div 
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
                className="absolute left-4 sm:left-6 md:left-1/2 w-3 sm:w-4 h-3 sm:h-4 bg-white border-3 sm:border-4 border-brand-navy rounded-full md:-translate-x-1/2 z-10 shadow-lg" 
              />

              {/* Content Card */}
              <div className="ml-10 sm:ml-16 md:ml-0 md:w-1/2 md:px-8 lg:px-16 group">
                <div className={`p-5 sm:p-6 md:p-8 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] transition-all duration-700 hover:shadow-2xl hover:shadow-brand-navy/5 relative ${
                  item.highlight ? 'bg-brand-navy text-white shadow-xl' : 'bg-slate-50'
                } ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  
                  {item.highlight && (
                    <div className="absolute -top-3 sm:-top-4 left-4 sm:left-auto sm:-right-4 bg-brand-orange text-white px-3 sm:px-4 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-black uppercase tracking-widest shadow-lg">
                      L'Aboutissement
                    </div>
                  )}

                  <div className={`flex items-center gap-3 sm:gap-4 md:gap-5 mb-4 sm:mb-5 md:mb-6 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                    <div className={`w-10 sm:w-11 md:w-12 h-10 sm:h-11 md:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-500 transform group-hover:rotate-12 shrink-0 ${
                      item.highlight ? 'bg-white/10 text-brand-orange' : 'bg-brand-navy text-white'
                    }`}>
                      <item.icon className="w-5 sm:w-5.5 md:w-6 h-5 sm:h-5.5 md:h-6" />
                    </div>
                    <span className={`text-[10px] sm:text-[11px] md:text-xs font-black tracking-[0.15em] sm:tracking-[0.2em] ${
                      item.highlight ? 'text-brand-orange' : 'text-brand-orange'
                    }`}>{item.year}</span>
                  </div>

                  <h3 className={`text-base sm:text-lg md:text-xl font-black mb-2 sm:mb-3 md:mb-4 uppercase tracking-tight ${
                    item.highlight ? 'text-white' : 'text-brand-navy'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-xs sm:text-sm md:text-base leading-relaxed font-medium ${
                    item.highlight ? 'text-white/70' : 'text-slate-600'
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

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 sm:mt-28 md:mt-40 p-6 sm:p-8 md:p-12 lg:p-16 bg-brand-navy rounded-[32px] sm:rounded-[40px] md:rounded-[60px] text-white flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto shadow-2xl relative overflow-hidden group"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-orange/10 via-transparent to-brand-orange/5 opacity-50" />
        <div className="relative z-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 md:gap-10 text-center sm:text-left">
          <div className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 rounded-xl sm:rounded-2xl bg-brand-orange flex items-center justify-center shrink-0 shadow-2xl rotate-3 group-hover:rotate-6 transition-transform">
            <ShieldCheck className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 text-white" />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tight mb-1 sm:mb-2">Crédibilité Certifiée</h4>
            <p className="text-white/60 font-bold text-xs sm:text-sm md:text-base italic tracking-wide">RNCP Niveau 6 & Technicien PNL • Approche AVR®</p>
          </div>
        </div>
        <Link href="/prendre-rendez-vous">
          <button className="relative z-10 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white text-brand-navy rounded-full font-black uppercase tracking-wider sm:tracking-widest hover:bg-brand-orange hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl flex items-center gap-2 sm:gap-3 text-xs sm:text-sm whitespace-nowrap">
            Passer à l'action <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>
        </Link>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Building2, TrendingUp, Users, Target, ShieldCheck } from "lucide-react";

const timelineData = [
  {
    year: "2000 - 2002",
    title: "Formation Initiale",
    description: "BTS Gestion commerciale & DEUG Arts visuels (Univ. Montpellier). Les bases de la stratégie et de l'image.",
    icon: GraduationCap,
  },
  {
    year: "2002 - 2012",
    title: "Leadership Opérationnel",
    description: "Directeur adjoint chez Go Sport (10 ans). Gestion d'équipes et pilotage P&L sur des volumes majeurs.",
    icon: Building2,
  },
  {
    year: "2010",
    title: "Expertise Pédagogique",
    description: "Titre de Formateur professionnel niveau 5 (AFPA). L'art de transmettre et d'engager.",
    icon: GraduationCap,
  },
  {
    year: "2014 - 2020",
    title: "Entrepreneuriat : STAF40",
    description: "Fondateur. Accompagnement stratégique et formation pour les dirigeants de TPE/PME.",
    icon: Target,
  },
  {
    year: "2017 - 2022",
    title: "Institutionnel : CCI des Landes",
    description: "Formateur et Chargé d'affaires. Audit et déploiement de stratégies commerciales territoriales.",
    icon: TrendingUp,
  },
  {
    year: "2021 - 2025",
    title: "Conseil : CCITY Groupe",
    description: "Coach-consultant associé. Spécialisation dans le coaching collectif de performance.",
    icon: Users,
  },
  {
    year: "Depuis 2025",
    title: "STAF Affaires",
    description: "CEO. L'aboutissement de 40 ans d'expérience au service de l'humain et du business.",
    icon: Target,
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="container mx-auto px-6 overflow-visible">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-orange font-black uppercase tracking-[0.3em] text-xs mb-4 block"
        >
          Un parcours de conviction
        </motion.span>
        <h2 className="text-4xl md:text-6xl font-black text-brand-navy leading-[1.1] tracking-tighter uppercase mb-8">
          40 ans d'expertise <br/><span className="text-brand-gold italic">cumulée</span>
        </h2>
        <p className="text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
          Du terrain à la direction, de la formation au coaching certifié : une trajectoire dédiée à l'excellence commerciale et managériale.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Progress Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-slate-200 md:-translate-x-1/2 overflow-hidden">
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full bg-gradient-to-b from-brand-orange via-brand-gold to-brand-navy"
          />
        </div>

        <div className="space-y-24">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline Marker */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-white border-2 border-brand-navy rounded-full md:-translate-x-1/2 z-10" />

              {/* Content Card */}
              <div className="ml-12 md:ml-0 md:w-1/2 md:px-12 group">
                <div className={`p-8 rounded-[40px] transition-all duration-500 hover:shadow-2xl hover:shadow-brand-navy/5 ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}>
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-black text-brand-orange tracking-widest">{item.year}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-3 text-brand-navy uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
              
              {/* Spacer for the other side on desktop */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 p-12 bg-slate-50 rounded-[50px] border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-12 max-w-5xl mx-auto"
      >
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-brand-gold/10 flex items-center justify-center">
            <ShieldCheck className="w-10 h-10 text-brand-gold" />
          </div>
          <div>
            <h4 className="text-2xl font-black text-brand-navy uppercase leading-tight">Crédibilité Absolue</h4>
            <p className="text-slate-500 font-medium italic">Certification RNCP Niveau 6 & Technicien PNL</p>
          </div>
        </div>
        <button 
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-10 py-5 bg-brand-navy text-white rounded-full font-bold hover:bg-brand-orange transition-all shadow-xl shadow-brand-navy/10 active:scale-95 whitespace-nowrap"
        >
          Voir les certifications
        </button>
      </motion.div>
    </section>
  );
}

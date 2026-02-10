"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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

// Timeline Card avec animations internes
function TimelineCard({ item, index, isInView }: { item: typeof timelineData[0]; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div
      className={`relative flex items-start md:items-center gap-6 md:gap-0 ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Timeline Dot avec animation pulse */}
      <motion.div 
        className="absolute left-4 md:left-1/2 w-3 h-3 bg-white border-2 border-brand-navy rounded-full md:-translate-x-1/2 z-10 mt-2 md:mt-0"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ 
          duration: 0.4, 
          delay: 0.3 + index * 0.15,
          type: "spring",
          stiffness: 200
        }}
      >
        {item.highlight && (
          <span className="absolute inset-0 bg-brand-orange rounded-full animate-ping opacity-50" />
        )}
        {/* Glow effect on dot */}
        <motion.span
          className="absolute inset-[-4px] bg-brand-orange/30 rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: [0, 1.5, 0], opacity: [0, 0.6, 0] } : {}}
          transition={{ 
            duration: 1,
            delay: 0.5 + index * 0.15,
            ease: "easeOut"
          }}
        />
      </motion.div>

      {/* Content Card */}
      <div className="flex-1 ml-10 md:ml-0 md:w-1/2 md:px-8">
        <motion.div 
          className={`timeline-card p-5 sm:p-6 rounded-2xl overflow-hidden relative ${
            item.highlight 
              ? 'bg-brand-navy text-white shadow-xl' 
              : 'bg-white border border-slate-100'
          } ${isEven ? "md:mr-auto md:text-left" : "md:ml-auto md:text-left md:md:text-right"}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.2 + index * 0.15,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ 
            boxShadow: item.highlight 
              ? "0 25px 50px -12px rgba(197, 160, 89, 0.25)" 
              : "0 20px 40px -12px rgba(10, 25, 47, 0.15)",
            transition: { duration: 0.3 }
          }}
        >
          {/* Background shimmer effect */}
          <motion.div
            className={`absolute inset-0 ${item.highlight ? 'bg-gradient-to-r from-transparent via-white/5 to-transparent' : 'bg-gradient-to-r from-transparent via-brand-orange/5 to-transparent'}`}
            initial={{ x: "-100%" }}
            animate={isHovered ? { x: "100%" } : { x: "-100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
          
          {item.highlight && (
            <motion.span 
              className="inline-block bg-brand-orange text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 relative z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + index * 0.15, duration: 0.4 }}
            >
              L'Aboutissement
            </motion.span>
          )}

          <div className={`flex items-center gap-3 mb-3 relative z-10 ${
            !isEven ? "md:flex-row-reverse md:justify-end" : ""
          }`}>
            <motion.div 
              className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                item.highlight 
                  ? 'bg-white/10 text-brand-orange' 
                  : 'bg-brand-navy/5 text-brand-navy'
              }`}
              initial={{ rotate: -10, opacity: 0 }}
              animate={isInView ? { rotate: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                transition: { duration: 0.2 }
              }}
            >
              <item.icon className="w-5 h-5" />
            </motion.div>
            <motion.span 
              className={`text-[11px] font-bold tracking-wider ${
                item.highlight ? 'text-brand-orange' : 'text-brand-orange'
              }`}
              initial={{ opacity: 0, x: isEven ? -10 : 10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.45 + index * 0.15, duration: 0.4 }}
            >
              {item.year}
            </motion.span>
          </div>

          <motion.h3 
            className={`text-lg font-bold mb-2 relative z-10 ${
              item.highlight ? 'text-white' : 'text-brand-navy'
            }`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
          >
            {item.title}
          </motion.h3>
          
          <motion.p 
            className={`text-sm leading-relaxed relative z-10 ${
              item.highlight ? 'text-white/70' : 'text-slate-500'
            }`}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.55 + index * 0.15, duration: 0.4 }}
          >
            {item.description}
          </motion.p>
        </motion.div>
      </div>
      
      {/* Spacer for alternating layout */}
      <div className="hidden md:block md:w-1/2" />
    </div>
  );
}

export function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="timeline" className="py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14 sm:mb-16">
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-5"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.div
              animate={isInView ? { rotate: [0, 10, -10, 0] } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Award className="w-4 h-4 text-brand-orange" />
            </motion.div>
            <span className="text-brand-orange font-semibold text-[11px] tracking-wide">
              Héritage & Vision
            </span>
          </motion.span>
          
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            La force de{" "}
            <motion.span 
              className="text-brand-orange inline-block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              l'expérience
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-base sm:text-lg text-slate-500 max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            25 années d'immersion terrain condensées dans une méthode propriétaire.
          </motion.p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Progress Line - Center */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2">
            <motion.div 
              className="w-full bg-gradient-to-b from-brand-orange via-brand-orange to-brand-navy"
              initial={{ height: "0%" }}
              animate={isInView ? { height: "100%" } : { height: "0%" }}
              transition={{ 
                duration: 2,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {timelineData.map((item, index) => (
              <TimelineCard 
                key={index} 
                item={item} 
                index={index} 
                isInView={isInView}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-16 sm:mt-20"
        >
          <motion.div 
            className="relative rounded-3xl overflow-hidden"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background */}
            <div className="absolute inset-0 bg-brand-navy" />
            <motion.div 
              className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/20 rounded-full blur-[100px]"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            {/* Content */}
            <div className="relative z-10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-brand-orange flex items-center justify-center shrink-0 shadow-lg hidden sm:flex"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <ShieldCheck className="w-7 h-7 text-white" />
                </motion.div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">Crédibilité Certifiée</h4>
                  <p className="text-white/60 text-sm">RNCP Niveau 6 • Technicien PNL • Approche AVR®</p>
                </div>
              </div>
              
              <Link href="/prendre-rendez-vous">
                <motion.button 
                  className="cta-button px-6 py-3.5 bg-white text-brand-navy rounded-full font-semibold text-sm shadow-lg flex items-center gap-2 whitespace-nowrap"
                  whileHover={{ 
                    backgroundColor: "#ff6b4a",
                    color: "#ffffff",
                    scale: 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  Passer à l'action
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Building2, TrendingUp, Users, Target, ShieldCheck, ArrowRight, Zap, Award, Rocket, Sparkles } from "lucide-react";
import Link from "next/link";

const timelineData = [
  {
    year: "2000 - 2002",
    title: "Formation Initiale",
    description: "BTS Gestion commerciale & DEUG Arts visuels",
    icon: GraduationCap,
    side: "left",
  },
  {
    year: "2002 - 2012",
    title: "Leadership Opérationnel",
    description: "Directeur adjoint Go Sport — 10 ans de gestion d'équipes",
    icon: Building2,
    side: "right",
  },
  {
    year: "2010",
    title: "Ingénierie Pédagogique",
    description: "Titre de Formateur professionnel niveau 5 (AFPA)",
    icon: GraduationCap,
    side: "left",
  },
  {
    year: "2014 - 2020",
    title: "L'impulsion : STAF40",
    description: "Fondateur — Accompagnement stratégique dirigeants TPE/PME",
    icon: Target,
    side: "right",
  },
  {
    year: "2017 - 2022",
    title: "Expertise Institutionnelle",
    description: "CCI des Landes — Formateur et Chargé d'affaires",
    icon: TrendingUp,
    side: "left",
  },
  {
    year: "2021 - 2025",
    title: "Haute Performance",
    description: "Coach-consultant associé — Coaching collectif et individuel",
    icon: Users,
    side: "right",
  },
  {
    year: "Depuis 2025",
    title: "STAF AFFAIRES",
    description: "Créateur de l'approche AVR® : Accélération, Valeur, Résilience",
    icon: Rocket,
    highlight: true,
    side: "center",
  },
];

function TimelineItem({ item, index }: { item: typeof timelineData[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className={`relative flex items-center gap-8 md:gap-0 ${
        item.highlight ? 'justify-center' : item.side === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-20">
        <motion.div 
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 300 }}
          className={`w-4 h-4 rounded-full border-3 ${
            item.highlight 
              ? 'bg-brand-orange border-brand-orange shadow-lg shadow-brand-orange/50' 
              : 'bg-white border-brand-navy'
          }`}
        >
          {item.highlight && (
            <span className="absolute inset-0 bg-brand-orange rounded-full animate-ping opacity-40" />
          )}
        </motion.div>
      </div>

      {/* Content Card */}
      {item.highlight ? (
        // Highlight card - Full width centered
        <motion.div 
          className="w-full max-w-2xl mx-auto ml-10 md:ml-0 md:px-8"
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative bg-brand-navy text-white p-8 sm:p-10 rounded-3xl overflow-hidden"
            style={{
              boxShadow: '0 25px 60px -15px rgba(10,25,47,0.4)'
            }}
          >
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/20 rounded-full blur-[80px] -mr-24 -mt-24" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-salmon/10 rounded-full blur-[60px] -ml-16 -mb-16" />
            
            <div className="relative z-10">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.4 }}
                className="inline-flex items-center gap-2 bg-brand-orange text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                L'Aboutissement
              </motion.span>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-7 h-7 text-brand-orange" />
                </div>
                <div>
                  <span className="text-brand-orange text-sm font-bold tracking-wider block mb-1">
                    {item.year}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-white/70 text-base sm:text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </motion.div>
      ) : (
        // Regular card
        <div className={`flex-1 ml-10 md:ml-0 md:w-1/2 ${item.side === 'left' ? 'md:pr-12' : 'md:pl-12'}`}>
          <motion.div 
            className="timeline-card bg-white p-6 sm:p-7 rounded-2xl"
            whileHover={{ y: -4, boxShadow: '0 20px 40px -12px rgba(10,25,47,0.12)' }}
            transition={{ duration: 0.3 }}
            style={{
              boxShadow: '0 4px 24px -4px rgba(10,25,47,0.08), 0 0 0 1px rgba(10,25,47,0.04)'
            }}
          >
            <div className={`flex items-center gap-4 mb-4 ${
              item.side === 'right' ? 'md:flex-row-reverse md:text-right' : ''
            }`}>
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                <item.icon className="w-6 h-6 text-brand-navy" />
              </div>
              <span className="text-brand-orange text-xs font-bold tracking-wider">
                {item.year}
              </span>
            </div>
            
            <h3 className={`text-lg font-bold text-brand-navy mb-2 ${
              item.side === 'right' ? 'md:text-right' : ''
            }`}>
              {item.title}
            </h3>
            
            <p className={`text-sm text-slate-500 leading-relaxed ${
              item.side === 'right' ? 'md:text-right' : ''
            }`}>
              {item.description}
            </p>
          </motion.div>
        </div>
      )}
      
      {/* Spacer for alternating layout */}
      {!item.highlight && <div className="hidden md:block md:w-1/2" />}
    </motion.div>
  );
}

export function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const lineProgress = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);
  const y = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={sectionRef} id="timeline" className="py-20 sm:py-28 overflow-hidden">
      <motion.div 
        className="container mx-auto px-4 sm:px-6 max-w-5xl"
        style={{ opacity }}
      >
        
        {/* Header */}
        <motion.div 
          className="max-w-2xl mx-auto text-center mb-16 sm:mb-20"
          style={{ y }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-brand-orange/8 rounded-full mb-6 border border-brand-orange/15">
              <Award className="w-4 h-4 text-brand-orange" />
              <span className="text-brand-orange font-semibold text-xs tracking-wide">
                Héritage & Vision
              </span>
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight mb-5"
          >
            La force de{" "}
            <span className="text-brand-orange relative">
              l'expérience
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 180 8" fill="none">
                <motion.path 
                  d="M2 6C45 2 135 2 178 6" 
                  stroke="#ff6b4a" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </svg>
            </span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-500 max-w-lg mx-auto leading-relaxed"
          >
            25 années d'immersion terrain condensées dans une méthode propriétaire.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress Line - Center */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2">
            <div className="absolute inset-0 bg-slate-200" />
            <motion.div 
              style={{ height: lineProgress }}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-brand-orange via-brand-orange to-brand-navy"
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-10 md:space-y-16">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-20 sm:mt-28"
        >
          <div className="relative rounded-[2rem] overflow-hidden"
            style={{
              boxShadow: '0 25px 60px -15px rgba(10,25,47,0.3)'
            }}
          >
            {/* Background */}
            <div className="absolute inset-0 bg-brand-navy" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/15 rounded-full blur-[120px] -mr-40 -mt-40" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-salmon/10 rounded-full blur-[80px] -ml-24 -mb-24" />
            
            {/* Content */}
            <div className="relative z-10 p-8 sm:p-10 lg:p-12 flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-5 text-center sm:text-left">
                <motion.div 
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-salmon flex items-center justify-center shrink-0 shadow-xl hidden sm:flex"
                  whileHover={{ scale: 1.05, rotate: 3 }}
                >
                  <ShieldCheck className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-bold text-white mb-2">Crédibilité Certifiée</h4>
                  <p className="text-white/50 text-base">RNCP Niveau 6 • Technicien PNL • Approche AVR®</p>
                </div>
              </div>
              
              <Link href="/prendre-rendez-vous">
                <motion.button 
                  className="cta-button px-8 py-4 bg-white text-brand-navy rounded-full font-semibold shadow-xl flex items-center gap-3 whitespace-nowrap group"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Passer à l'action
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

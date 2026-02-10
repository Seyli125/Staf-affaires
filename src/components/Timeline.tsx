"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
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
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
      // Animate line progressively
      const duration = 3000; // 3 seconds total
      const steps = 100;
      const stepDuration = duration / steps;
      let currentStep = 0;
      
      const interval = setInterval(() => {
        currentStep++;
        setLineHeight((currentStep / steps) * 100);
        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isInView, hasAnimated]);

  // Container variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  // Item variants with elegant entrance
  const itemVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -60 : 60,
      y: 20,
      scale: 0.95,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  // Dot variants with pop effect
  const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (index: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.3 + index * 0.15,
      },
    }),
  };

  // Header variants
  const headerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  // Badge floating animation
  const floatingVariants = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Icon subtle rotation
  const iconVariants = {
    animate: {
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Card hover glow effect
  const cardVariants = {
    initial: { 
      boxShadow: "0 0 0 rgba(197, 160, 89, 0)",
    },
    hover: {
      boxShadow: "0 10px 40px rgba(197, 160, 89, 0.15)",
      y: -4,
      transition: { duration: 0.3 },
    },
  };

  // CTA variants
  const ctaVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        delay: timelineData.length * 0.15 + 0.5,
      },
    },
  };

  return (
    <section ref={sectionRef} id="timeline" className="py-16 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        
        {/* Header */}
        <motion.div 
          className="max-w-2xl mx-auto text-center mb-14 sm:mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/10 rounded-full mb-5"
            variants={floatingVariants}
            animate="animate"
          >
            <motion.div variants={iconVariants} animate="animate">
              <Award className="w-4 h-4 text-brand-orange" />
            </motion.div>
            <span className="text-brand-orange font-semibold text-[11px] tracking-wide">
              Héritage & Vision
            </span>
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-4">
            La force de <motion.span 
              className="text-brand-orange inline-block"
              animate={isInView ? { 
                backgroundSize: ["100% 0%", "100% 100%"],
              } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >l'expérience</motion.span>
          </h2>
          
          <motion.p 
            className="text-base sm:text-lg text-slate-500 max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            25 années d'immersion terrain condensées dans une méthode propriétaire.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Progress Line - Center */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2">
            <motion.div 
              className="w-full bg-gradient-to-b from-brand-orange via-brand-orange to-brand-navy"
              style={{ height: `${lineHeight}%` }}
              initial={{ height: "0%" }}
            />
            {/* Glowing tip */}
            <motion.div
              className="absolute w-3 h-3 -left-[5px] bg-brand-orange rounded-full shadow-lg"
              style={{ top: `${lineHeight}%` }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { 
                opacity: [0.5, 1, 0.5],
                scale: [0.8, 1.2, 0.8],
                boxShadow: [
                  "0 0 10px rgba(255, 107, 74, 0.5)",
                  "0 0 20px rgba(255, 107, 74, 0.8)",
                  "0 0 10px rgba(255, 107, 74, 0.5)",
                ],
              } : {}}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Timeline Items */}
          <motion.div 
            className="space-y-8 md:space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                className={`relative flex items-start md:items-center gap-6 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <motion.div 
                  className="absolute left-4 md:left-1/2 w-3 h-3 bg-white border-2 border-brand-navy rounded-full md:-translate-x-1/2 z-10 mt-2 md:mt-0"
                  custom={index}
                  variants={dotVariants}
                >
                  {item.highlight && (
                    <motion.span 
                      className="absolute inset-0 bg-brand-orange rounded-full"
                      animate={{ 
                        scale: [1, 2, 1],
                        opacity: [0.6, 0, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  )}
                </motion.div>

                {/* Content Card */}
                <div className="flex-1 ml-10 md:ml-0 md:w-1/2 md:px-8">
                  <motion.div 
                    className={`timeline-card p-5 sm:p-6 rounded-2xl transition-colors duration-300 ${
                      item.highlight 
                        ? 'bg-brand-navy text-white shadow-xl' 
                        : 'bg-white border border-slate-100'
                    } ${index % 2 === 0 ? "md:mr-auto md:text-left" : "md:ml-auto md:text-left md:md:text-right"}`}
                    variants={cardVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    
                    {item.highlight && (
                      <motion.span 
                        className="inline-block bg-brand-orange text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3"
                        animate={{ 
                          boxShadow: [
                            "0 0 0 rgba(255, 107, 74, 0)",
                            "0 0 20px rgba(255, 107, 74, 0.4)",
                            "0 0 0 rgba(255, 107, 74, 0)",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        L'Aboutissement
                      </motion.span>
                    )}

                    <div className={`flex items-center gap-3 mb-3 ${
                      index % 2 !== 0 ? "md:flex-row-reverse md:justify-end" : ""
                    }`}>
                      <motion.div 
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                          item.highlight 
                            ? 'bg-white/10 text-brand-orange' 
                            : 'bg-brand-navy/5 text-brand-navy'
                        }`}
                        whileHover={{ 
                          rotate: [0, -10, 10, 0],
                          scale: 1.1,
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <item.icon className="w-5 h-5" />
                      </motion.div>
                      <motion.span 
                        className={`text-[11px] font-bold tracking-wider ${
                          item.highlight ? 'text-brand-orange' : 'text-brand-orange'
                        }`}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.15 }}
                      >
                        {item.year}
                      </motion.span>
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
                  </motion.div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          variants={ctaVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
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
                x: [0, 30, 0],
                y: [0, -20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-48 h-48 bg-brand-gold/10 rounded-full blur-[80px]"
              animate={{
                x: [0, -20, 0],
                y: [0, 20, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            
            {/* Content */}
            <div className="relative z-10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <motion.div 
                  className="w-14 h-14 rounded-2xl bg-brand-orange flex items-center justify-center shrink-0 shadow-lg hidden sm:flex"
                  animate={{
                    boxShadow: [
                      "0 10px 30px rgba(255, 107, 74, 0.3)",
                      "0 10px 50px rgba(255, 107, 74, 0.5)",
                      "0 10px 30px rgba(255, 107, 74, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
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
                    scale: 1.05,
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

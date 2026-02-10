"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Target, GraduationCap, Users, CheckCircle2, ArrowRight, Sparkles, Zap, Crown } from "lucide-react";

const services = [
  {
    title: "Coaching & Préparation Mentale",
    subtitle: "Libérez votre potentiel",
    description: "Accompagnement neuro-psychologique pour aligner performance et sérénité intérieure.",
    items: [
      "Individuel ou collectif haute performance",
      "Mindset & gestion de l'énergie",
      "Préparation mentale personnalisée",
      "Accompagnement sur 3, 4 ou 6 mois"
    ],
    icon: Target,
    gradient: "from-brand-navy via-brand-navy to-brand-navy/90",
    accentColor: "bg-brand-navy",
    badge: "Le plus demandé",
    badgeIcon: Crown,
  },
  {
    title: "Formation-Action",
    subtitle: "Apprenez en faisant",
    description: "Sessions immersives pour transformer vos compétences commerciales durablement.",
    items: [
      "Audit et recueil des besoins sur mesure",
      "Animation en entreprise ou à distance",
      "Contenu pédagogique exclusif",
      "Mise en pratique opérationnelle"
    ],
    icon: GraduationCap,
    gradient: "from-brand-orange via-brand-orange to-brand-orange/90",
    accentColor: "bg-brand-orange",
    badge: "Formaction®",
    badgeIcon: Zap,
  },
  {
    title: "Mentorat & Management",
    subtitle: "Expertise externalisée",
    description: "Partenaire stratégique pour piloter votre croissance commerciale avec expertise.",
    items: [
      "Pilotage d'équipes commerciales B2B",
      "Conseil stratégique en affaires",
      "Audit des processus de vente",
      "Accompagnement opérationnel"
    ],
    icon: Users,
    gradient: "from-slate-800 via-slate-700 to-slate-600",
    accentColor: "bg-slate-700",
    badge: "Premium",
    badgeIcon: Sparkles,
  },
];

const specialities = [
  "Développer la posture du 'Chargé d'affaires aligné'",
  "Optimiser vos taux de propositions commerciales",
  "Sécuriser vos signatures et augmenter le panier moyen",
  "Déployer une stratégie commerciale impactante"
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.3], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <motion.section 
      ref={sectionRef}
      id="services" 
      className="py-20 sm:py-28"
      style={{ opacity }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <motion.div 
          className="max-w-2xl mx-auto text-center mb-16 sm:mb-20"
          style={{ y }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="inline-flex items-center gap-2.5 text-brand-orange font-semibold text-xs mb-5 px-5 py-2.5 bg-brand-orange/8 rounded-full border border-brand-orange/15">
              <Sparkles className="w-4 h-4" />
              Expertise & Excellence
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-navy mb-5 leading-[1.1] tracking-tight"
          >
            Propulsez votre{" "}
            <span className="text-brand-orange relative">
              performance
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <motion.path 
                  d="M2 6C50 2 150 2 198 6" 
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
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-lg sm:text-xl text-slate-500 max-w-xl mx-auto leading-relaxed"
          >
            Trois piliers complémentaires pour une transformation durable, 
            alliant posture mentale et efficacité terrain.
          </motion.p>
        </motion.div>

        {/* Services Cards - Redesigned */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20 sm:mb-28">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.15, 
                ease: [0.25, 0.1, 0.25, 1] 
              }}
              className="service-card group relative bg-white rounded-3xl overflow-hidden"
              style={{
                boxShadow: '0 4px 24px -4px rgba(10,25,47,0.08), 0 0 0 1px rgba(10,25,47,0.04)'
              }}
            >
              {/* Top gradient bar with glow */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${service.gradient} relative`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} blur-sm opacity-50`} />
              </div>
              
              {/* Badge - positioned on top right */}
              <div className="absolute top-5 right-5 z-10">
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-gradient-to-r ${service.gradient} text-white shadow-lg`}
                >
                  <service.badgeIcon className="w-3 h-3" />
                  {service.badge}
                </motion.span>
              </div>
              
              {/* Content */}
              <div className="p-7 sm:p-8">
                {/* Icon with enhanced styling */}
                <motion.div 
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 service-icon shadow-lg relative overflow-hidden`}
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <service.icon className="w-7 h-7 text-white relative z-10" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-brand-navy mb-1.5 group-hover:text-brand-orange transition-colors duration-400">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-400 font-semibold mb-4 uppercase tracking-widest">
                  {service.subtitle}
                </p>
                <p className="text-base text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Items with better styling */}
                <div className="space-y-3 mb-8">
                  {service.items.map((item, i) => (
                    <motion.div 
                      key={item} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="flex items-start gap-3 text-sm text-slate-600 group/item"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:bg-emerald-100 transition-colors">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
                
                {/* CTA Button - Enhanced */}
                <Link href="/prendre-rendez-vous" className="block">
                  <motion.button 
                    className="service-cta w-full py-4 text-sm font-semibold text-brand-navy bg-slate-50 rounded-2xl flex items-center justify-center gap-2.5 group-hover:bg-brand-navy group-hover:text-white transition-all duration-400 border border-slate-100 group-hover:border-brand-navy"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    En savoir plus
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </motion.button>
                </Link>
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  boxShadow: 'inset 0 0 0 2px rgba(255,107,74,0.1)'
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Focus Operationnel - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative rounded-[2rem] overflow-hidden"
        >
          {/* Background with layered effects */}
          <div className="absolute inset-0 bg-brand-navy" />
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-slate-900" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/15 blur-[150px] rounded-full -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-salmon/10 blur-[100px] rounded-full -ml-48 -mb-48" />
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px]" />
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-8 sm:p-12 lg:p-16">
            <div className="grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-center">
              
              {/* Left Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 bg-white/8 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6"
                >
                  <Zap className="w-4 h-4 text-brand-orange" />
                  <span className="text-brand-orange text-xs font-semibold tracking-wide">Approche AVR®</span>
                </motion.div>
                
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-[1.1] tracking-tight"
                >
                  Focus{" "}
                  <span className="text-brand-orange">Opérationnel</span>
                </motion.h3>
                
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-white/60 text-lg mb-10 max-w-xl leading-relaxed"
                >
                  Des leviers concrets pour vos résultats quotidiens. 
                  Une méthode éprouvée pour transformer votre approche commerciale.
                </motion.p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {specialities.map((spec, i) => (
                    <motion.div 
                      key={spec}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                      className="speciality-item flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/8 backdrop-blur-sm hover:bg-white/10 hover:border-white/15 transition-all duration-300"
                    >
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange/80 flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-lg">
                        {i + 1}
                      </div>
                      <span className="text-sm font-medium text-white/90 leading-snug">{spec}</span>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                >
                  <Link href="/prendre-rendez-vous">
                    <motion.button 
                      className="cta-button inline-flex items-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-full font-semibold shadow-xl shadow-brand-orange/25 hover:shadow-2xl hover:shadow-brand-orange/30 transition-all duration-300 group"
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Découvrir l'approche AVR®
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>
              
              {/* Right - Portrait with enhanced styling */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, x: 40 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                className="hidden lg:block"
              >
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -inset-4 border border-white/10 rounded-3xl" />
                  <div className="absolute -inset-8 border border-white/5 rounded-[2rem]" />
                  
                  {/* Main image */}
                  <div className="relative aspect-[3/4] w-full max-w-[280px] mx-auto rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/said-meeting.jpg"
                      alt="Saïd Taaroust"
                      fill
                      className="object-cover object-top"
                      sizes="280px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
                    
                    {/* Floating quote */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                      className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20"
                    >
                      <p className="text-white/90 text-xs font-medium italic leading-relaxed">
                        "L'excellence est un choix quotidien."
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

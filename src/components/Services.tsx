"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Target, GraduationCap, Users, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

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
    gradient: "from-brand-navy to-brand-navy/80",
    badge: "Le plus demandé",
    accent: "bg-brand-navy"
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
    gradient: "from-brand-orange to-brand-orange/80",
    badge: "Formaction®",
    accent: "bg-brand-orange"
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
    gradient: "from-slate-700 to-slate-600",
    badge: "Premium",
    accent: "bg-slate-700"
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

  const y = useTransform(scrollYProgress, [0, 0.3], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <motion.section 
      ref={sectionRef}
      id="services" 
      className="container mx-auto px-4 sm:px-6 max-w-6xl"
      style={{ opacity }}
    >
      {/* Header */}
      <motion.div 
        className="max-w-2xl mx-auto text-center mb-12 sm:mb-16"
        style={{ y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 text-brand-orange font-semibold text-[11px] mb-4 px-4 py-2 bg-brand-orange/10 rounded-full">
            <Sparkles className="w-3.5 h-3.5" />
            Expertise & Excellence
          </span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-4 leading-tight"
        >
          Propulsez votre <span className="text-brand-orange">performance</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed"
        >
          Trois piliers complémentaires pour une transformation durable, 
          alliant posture mentale et efficacité terrain.
        </motion.p>
      </motion.div>

      {/* Services Cards */}
      <div className="grid md:grid-cols-3 gap-5 sm:gap-6 mb-16 sm:mb-20">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="service-card group relative bg-white rounded-2xl border border-slate-100 overflow-hidden"
          >
            {/* Top accent bar */}
            <div className={`h-1 w-full ${service.accent}`} />
            
            {/* Badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-gradient-to-r ${service.gradient} text-white shadow-sm`}>
                {service.badge}
              </span>
            </div>
            
            {/* Content */}
            <div className="p-6">
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 service-icon`}>
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-bold text-brand-navy mb-1 group-hover:text-brand-orange transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-xs text-slate-400 font-medium mb-3 uppercase tracking-wider">
                {service.subtitle}
              </p>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                {service.description}
              </p>
              
              {/* Items */}
              <div className="space-y-2.5 mb-6">
                {service.items.map((item) => (
                  <div 
                    key={item} 
                    className="flex items-start gap-2.5 text-sm text-slate-600"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <Link href="/prendre-rendez-vous" className="block">
                <button className="service-cta w-full py-3 text-sm font-semibold text-brand-navy bg-slate-50 rounded-xl flex items-center justify-center gap-2 group-hover:bg-brand-navy group-hover:text-white transition-all duration-300">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Focus Operationnel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative rounded-3xl overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-brand-navy" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-salmon/10 blur-[80px] rounded-full" />
        
        {/* Content */}
        <div className="relative z-10 p-6 sm:p-10 lg:p-12">
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-block text-brand-orange text-[11px] font-semibold tracking-[0.15em] uppercase mb-4"
              >
                Approche AVR®
              </motion.span>
              
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Focus <span className="text-brand-orange">Opérationnel</span>
              </h3>
              
              <p className="text-white/60 text-base mb-8 max-w-lg">
                Des leviers concrets pour vos résultats quotidiens. 
                Une méthode éprouvée pour transformer votre approche commerciale.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {specialities.map((spec, i) => (
                  <motion.div 
                    key={spec}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="speciality-item flex items-center gap-3 bg-white/5 p-3.5 rounded-xl border border-white/5 backdrop-blur-sm"
                  >
                    <div className="w-7 h-7 rounded-lg bg-brand-orange/20 flex items-center justify-center text-brand-orange font-bold text-sm shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-sm font-medium text-white/90">{spec}</span>
                  </motion.div>
                ))}
              </div>
              
              <Link href="/prendre-rendez-vous">
                <button className="cta-button inline-flex items-center gap-2.5 bg-brand-orange hover:bg-white hover:text-brand-navy px-6 py-3.5 rounded-full font-semibold text-sm shadow-lg transition-all duration-300">
                  Découvrir l'approche AVR®
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
            
            {/* Right - Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="hidden lg:block"
            >
              <div className="relative aspect-[3/4] max-w-[260px] mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/images/said-meeting.jpg"
                  alt="Saïd Taaroust"
                  fill
                  className="object-cover object-top"
                  sizes="260px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

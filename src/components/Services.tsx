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
    description: "Accompagnement neuro-psychologique pour aligner performance et sérénité.",
    items: [
      "Individuel ou collectif haute performance",
      "Mindset & gestion de l'énergie",
      "Préparation mentale personnalisée",
      "Accompagnement sur 3, 4 ou 6 mois"
    ],
    icon: Target,
    gradient: "from-brand-navy to-brand-navy/80",
    badge: "Le plus demandé",
  },
  {
    title: "Formation-Action",
    subtitle: "Apprenez en faisant",
    description: "Sessions immersives pour transformer vos compétences commerciales.",
    items: [
      "Audit et recueil des besoins sur mesure",
      "Animation en entreprise ou à distance",
      "Contenu pédagogique exclusif",
      "Mise en pratique opérationnelle immédiate"
    ],
    icon: GraduationCap,
    gradient: "from-brand-orange to-brand-orange/80",
    badge: "Formaction®",
  },
  {
    title: "Mentorat & Management",
    subtitle: "Expertise externalisée",
    description: "Partenaire stratégique pour piloter votre croissance commerciale.",
    items: [
      "Pilotage d'équipes commerciales B2B",
      "Conseil stratégique en affaires",
      "Audit des processus de vente",
      "Accompagnement opérationnel durable"
    ],
    icon: Users,
    gradient: "from-slate-700 to-slate-600",
    badge: "Premium",
  },
];

const specialities = [
  "Développer la posture du 'Chargé d'affaires aligné'",
  "Optimiser vos taux de propositions commerciales",
  "Sécuriser vos signatures et augmenter le panier moyen",
  "Déployer et piloter une stratégie commerciale impactante"
];

// Smooth spring animation config
const smoothSpring = {
  type: "spring" as const,
  stiffness: 100,
  damping: 30,
  mass: 1
};

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.2], [60, 0]);

  return (
    <motion.section 
      ref={sectionRef}
      id="services" 
      className="container mx-auto px-4 sm:px-6 overflow-visible"
      style={{ opacity }}
    >
      {/* Header */}
      <motion.div 
        className="max-w-2xl mx-auto text-center mb-12 sm:mb-16"
        style={{ y }}
      >
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...smoothSpring, delay: 0.1 }}
          className="inline-flex items-center gap-2 text-brand-orange font-semibold text-xs mb-4 px-4 py-2 bg-brand-orange/10 rounded-full"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Expertise & Excellence
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...smoothSpring, delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy mb-4 leading-tight text-balance"
        >
          Propulsez votre performance
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...smoothSpring, delay: 0.3 }}
          className="text-base sm:text-lg text-slate-500 max-w-xl mx-auto leading-relaxed"
        >
          Trois piliers complémentaires pour une transformation durable, alliant posture mentale et efficacité terrain.
        </motion.p>

        {/* Philosophical touch */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-6 text-sm italic text-brand-orange/80 font-medium"
        >
          "L'excellence n'est pas un acte, mais une habitude."
        </motion.p>
      </motion.div>

      {/* Services Cards - Balanced proportions */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ ...smoothSpring, delay: index * 0.15 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative bg-white rounded-2xl border border-slate-100 hover:border-slate-200 hover:shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Badge */}
            <div className="absolute top-4 right-4 z-10">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-gradient-to-r ${service.gradient} text-white shadow-md`}>
                {service.badge}
              </span>
            </div>
            
            {/* Icon Header - Reduced height */}
            <div className={`relative h-20 bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
              <motion.div
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <service.icon className="w-9 h-9 text-white/90" />
              </motion.div>
            </div>
            
            {/* Content - Improved spacing */}
            <div className="p-6">
              <h3 className="text-lg font-bold text-brand-navy mb-1.5 group-hover:text-brand-orange transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-slate-400 font-medium mb-3">
                {service.subtitle}
              </p>
              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                {service.description}
              </p>
              
              {/* Items */}
              <div className="space-y-2.5">
                {service.items.map((item, i) => (
                  <motion.div 
                    key={item} 
                    className="flex items-start gap-2.5 text-sm text-slate-600"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA */}
              <Link href="/prendre-rendez-vous" className="block mt-6">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 text-sm font-semibold text-brand-navy bg-slate-50 hover:bg-brand-navy hover:text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Focus Operationnel - Balanced layout */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ ...smoothSpring }}
        className="bg-brand-navy rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/20 blur-[120px] -mr-40 -mt-40 rounded-full" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-brand-salmon/10 blur-[100px] -ml-30 -mb-30 rounded-full" />
        
        <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
          {/* Image - Smaller, balanced */}
          <motion.div 
            className="relative order-2 md:order-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ...smoothSpring, delay: 0.2 }}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 max-w-[180px] mx-auto">
              <Image
                src="/images/said-casual.jpg"
                alt="Saïd Taaroust"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
            </div>
            <motion.div 
              className="absolute -bottom-3 -right-3 bg-brand-orange text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg hidden sm:block"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Méthode AVR®
            </motion.div>
          </motion.div>
          
          {/* Content */}
          <div className="order-1 md:order-2">
            <motion.h3 
              className="text-2xl sm:text-3xl font-bold mb-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.1 }}
            >
              Focus <span className="text-brand-orange">Opérationnel</span>
            </motion.h3>
            
            <motion.p 
              className="text-white/60 text-base mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.2 }}
            >
              Des leviers concrets pour vos résultats quotidiens.
            </motion.p>
            
            <div className="grid gap-3 mb-6">
              {specialities.map((spec, i) => (
                <motion.div 
                  key={spec}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...smoothSpring, delay: 0.1 + i * 0.1 }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 hover:bg-white/10 transition-all duration-300 cursor-default"
                >
                  <div className="w-7 h-7 rounded-lg bg-brand-orange/20 flex items-center justify-center text-brand-orange font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-sm font-medium">{spec}</span>
                </motion.div>
              ))}
            </div>
            
            <Link href="/prendre-rendez-vous">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-brand-orange px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-brand-navy transition-all duration-300 text-sm shadow-lg"
              >
                Découvrir l'approche AVR® 
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

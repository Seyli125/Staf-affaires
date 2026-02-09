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

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={sectionRef} id="services" className="container mx-auto px-4 sm:px-6 overflow-visible">
      {/* Header - Reduced */}
      <div className="max-w-xl mx-auto text-center mb-10 sm:mb-12">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="inline-flex items-center gap-1.5 text-brand-orange font-semibold text-[10px] mb-3 px-3 py-1.5 bg-brand-orange/10 rounded-full"
        >
          <Sparkles className="w-3 h-3" />
          Expertise & Excellence
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-brand-navy mb-3 leading-tight"
        >
          Propulsez votre performance
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto leading-relaxed"
        >
          Trois piliers complémentaires pour une transformation durable, alliant posture mentale et efficacité terrain.
        </motion.p>
      </div>

      {/* Services Cards - Reduced */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-16">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              ease: [0.25, 0.4, 0.25, 1]
            }}
            whileHover={{ y: -5, transition: { duration: 0.25 } }}
            className="group relative bg-white rounded-xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-lg transition-all duration-400 overflow-hidden"
          >
            {/* Badge */}
            <div className="absolute top-3 right-3 z-10">
              <motion.span 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.08, type: "spring", stiffness: 200, damping: 15 }}
                className={`text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-gradient-to-r ${service.gradient} text-white shadow-sm`}
              >
                {service.badge}
              </motion.span>
            </div>
            
            {/* Icon Header - Reduced height */}
            <div className={`relative h-16 bg-gradient-to-br ${service.gradient} flex items-center justify-center overflow-hidden`}>
              <motion.div 
                className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"
                style={{ y: backgroundY }}
              />
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <service.icon className="w-7 h-7 text-white/90" />
              </motion.div>
            </div>
            
            {/* Content - Reduced */}
            <div className="p-4">
              <h3 className="text-sm font-bold text-brand-navy mb-1 group-hover:text-brand-orange transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[10px] text-slate-400 font-medium mb-2">
                {service.subtitle}
              </p>
              <p className="text-[11px] text-slate-600 mb-3 leading-relaxed">
                {service.description}
              </p>
              
              {/* Items - Reduced */}
              <div className="space-y-1.5">
                {service.items.map((item, i) => (
                  <motion.div 
                    key={item} 
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.04 }}
                    className="flex items-start gap-1.5 text-[10px] text-slate-600"
                  >
                    <CheckCircle2 className="w-3 h-3 text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA - Reduced */}
              <Link href="/prendre-rendez-vous" className="block mt-4">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2 text-[10px] font-semibold text-brand-navy bg-slate-50 hover:bg-brand-navy hover:text-white rounded-lg transition-all duration-300 group/btn flex items-center justify-center gap-1.5"
                >
                  En savoir plus
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Focus Operationnel - Reduced */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className="bg-brand-navy rounded-2xl p-5 sm:p-6 text-white relative overflow-hidden shadow-xl"
      >
        <motion.div 
          className="absolute top-0 right-0 w-48 h-48 bg-brand-orange/15 blur-[80px] -mr-24 -mt-24 rounded-full"
          initial={{ opacity: 0.15 }}
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="relative z-10 grid md:grid-cols-5 gap-5 items-center">
          {/* Image - Smaller */}
          <div className="md:col-span-2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg border border-white/10 max-w-[140px] mx-auto"
            >
              <Image
                src="/images/said-casual.jpg"
                alt="Saïd Taaroust"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 15 }}
              className="absolute -bottom-1.5 -right-1.5 bg-brand-orange text-white px-2 py-1 rounded-full text-[8px] font-bold uppercase tracking-wider shadow-md hidden sm:block"
            >
              Méthode AVR®
            </motion.div>
          </div>
          
          {/* Content - Reduced */}
          <div className="md:col-span-3">
            <motion.h3 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-base sm:text-lg font-bold mb-1.5"
            >
              Focus <span className="text-brand-orange">Opérationnel</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-white/60 text-[10px] mb-4"
            >
              Des leviers concrets pour vos résultats quotidiens.
            </motion.p>
            
            {/* Philosophical quote */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-[9px] italic text-white/40 mb-3 border-l border-brand-orange/40 pl-2"
            >
              "L'excellence n'est pas un acte, mais une habitude cultivée chaque jour."
            </motion.p>
            
            <div className="grid gap-2 mb-5">
              {specialities.map((spec, i) => (
                <motion.div 
                  key={spec}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.3 + i * 0.08,
                    ease: [0.25, 0.4, 0.25, 1]
                  }}
                  whileHover={{ x: 3, backgroundColor: "rgba(255,255,255,0.08)" }}
                  className="flex items-center gap-2 bg-white/5 p-2.5 rounded-lg border border-white/5 transition-all duration-300 cursor-default"
                >
                  <div className="w-5 h-5 rounded-md bg-brand-orange/20 flex items-center justify-center text-brand-orange font-bold text-[10px] shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-[10px] font-medium">{spec}</span>
                </motion.div>
              ))}
            </div>
            
            <Link href="/prendre-rendez-vous">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-1.5 bg-brand-orange px-5 py-2.5 rounded-full font-semibold hover:bg-white hover:text-brand-navy transition-all duration-300 text-xs shadow-md"
              >
                Découvrir l'approche AVR® 
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

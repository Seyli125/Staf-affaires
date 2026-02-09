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

// Premium easing curve
const premiumEase = [0.25, 0.4, 0.25, 1] as const;

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={sectionRef} id="services" className="container mx-auto px-4 sm:px-6 overflow-visible">
      {/* Header - Compact */}
      <div className="max-w-lg mx-auto text-center mb-8 sm:mb-10">
        <motion.span 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: premiumEase }}
          className="inline-flex items-center gap-1.5 text-brand-orange font-semibold text-[9px] mb-2.5 px-2.5 py-1 bg-brand-orange/10 rounded-full"
        >
          <Sparkles className="w-2.5 h-2.5" />
          Expertise & Excellence
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: premiumEase }}
          className="text-lg sm:text-xl md:text-2xl font-bold text-brand-navy mb-2.5 leading-tight"
        >
          Propulsez votre performance
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: premiumEase }}
          className="text-[10px] sm:text-[11px] text-slate-500 max-w-sm mx-auto leading-relaxed"
        >
          Trois piliers complémentaires pour une transformation durable, alliant posture mentale et efficacité terrain.
        </motion.p>
        
        {/* Philosophical touch */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: premiumEase }}
          className="text-[9px] italic text-slate-400 mt-2.5 max-w-xs mx-auto"
        >
          "La vraie performance naît de l'équilibre entre ambition et sérénité."
        </motion.p>
      </div>

      {/* Services Cards - Compact */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-12">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.08,
              ease: premiumEase
            }}
            whileHover={{ y: -4, transition: { duration: 0.3, ease: premiumEase } }}
            className="group relative bg-white rounded-xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-md transition-all duration-400 overflow-hidden"
          >
            {/* Badge */}
            <div className="absolute top-2.5 right-2.5 z-10">
              <motion.span 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + index * 0.06, duration: 0.4, ease: premiumEase }}
                className={`text-[7px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-gradient-to-r ${service.gradient} text-white shadow-sm`}
              >
                {service.badge}
              </motion.span>
            </div>
            
            {/* Icon Header - Compact */}
            <div className={`relative h-12 bg-gradient-to-br ${service.gradient} flex items-center justify-center overflow-hidden`}>
              <motion.div 
                className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"
                style={{ y: backgroundY }}
              />
              <motion.div
                whileHover={{ scale: 1.12 }}
                transition={{ duration: 0.4, ease: premiumEase }}
              >
                <service.icon className="w-5 h-5 text-white/90" />
              </motion.div>
            </div>
            
            {/* Content - Compact */}
            <div className="p-3">
              <h3 className="text-[11px] font-bold text-brand-navy mb-0.5 group-hover:text-brand-orange transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[8px] text-slate-400 font-medium mb-1.5">
                {service.subtitle}
              </p>
              <p className="text-[9px] text-slate-600 mb-2.5 leading-relaxed">
                {service.description}
              </p>
              
              {/* Items - Compact */}
              <div className="space-y-1">
                {service.items.map((item, i) => (
                  <motion.div 
                    key={item} 
                    initial={{ opacity: 0, x: -6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + i * 0.03, duration: 0.4, ease: premiumEase }}
                    className="flex items-start gap-1 text-[8px] text-slate-600"
                  >
                    <CheckCircle2 className="w-2.5 h-2.5 text-green-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA - Compact */}
              <Link href="/prendre-rendez-vous" className="block mt-3">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-1.5 text-[9px] font-semibold text-brand-navy bg-slate-50 hover:bg-brand-navy hover:text-white rounded-lg transition-all duration-300 group/btn flex items-center justify-center gap-1"
                >
                  En savoir plus
                  <ArrowRight className="w-2.5 h-2.5 group-hover/btn:translate-x-0.5 transition-transform duration-300" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Focus Operationnel - Compact */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, ease: premiumEase }}
        className="bg-brand-navy rounded-xl p-4 sm:p-5 text-white relative overflow-hidden shadow-lg"
      >
        <motion.div 
          className="absolute top-0 right-0 w-40 h-40 bg-brand-orange/15 blur-[80px] -mr-20 -mt-20 rounded-full pointer-events-none"
        />
        
        <div className="relative z-10 grid md:grid-cols-5 gap-4 items-center">
          {/* Image - Smaller & Better Proportioned */}
          <div className="md:col-span-2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: premiumEase }}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-md border border-white/10 max-w-[120px] mx-auto"
            >
              <Image
                src="/images/said-casual.jpg"
                alt="Saïd Taaroust"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/35 via-transparent to-transparent" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5, ease: premiumEase }}
              className="absolute -bottom-1 -right-1 bg-brand-orange text-white px-1.5 py-0.5 rounded-full text-[7px] font-bold uppercase tracking-wider shadow-md hidden sm:block"
            >
              Méthode AVR®
            </motion.div>
          </div>
          
          {/* Content - Compact */}
          <div className="md:col-span-3">
            <motion.h3 
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15, ease: premiumEase }}
              className="text-sm sm:text-base font-bold mb-1"
            >
              Focus <span className="text-brand-orange">Opérationnel</span>
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: premiumEase }}
              className="text-white/60 text-[9px] mb-3"
            >
              Des leviers concrets pour vos résultats quotidiens.
            </motion.p>
            
            {/* Philosophical quote */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: premiumEase }}
              className="text-[8px] italic text-white/40 mb-2.5 border-l border-brand-orange/40 pl-2"
            >
              "L'excellence n'est pas un acte, mais une habitude cultivée chaque jour."
            </motion.p>
            
            <div className="grid gap-1.5 mb-4">
              {specialities.map((spec, i) => (
                <motion.div 
                  key={spec}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.3 + i * 0.06,
                    ease: premiumEase
                  }}
                  whileHover={{ x: 2, backgroundColor: "rgba(255,255,255,0.06)" }}
                  className="flex items-center gap-1.5 bg-white/5 p-2 rounded-lg border border-white/5 transition-all duration-300 cursor-default"
                >
                  <div className="w-4 h-4 rounded-md bg-brand-orange/20 flex items-center justify-center text-brand-orange font-bold text-[8px] shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-[9px] font-medium">{spec}</span>
                </motion.div>
              ))}
            </div>
            
            <Link href="/prendre-rendez-vous">
              <motion.button 
                whileHover={{ scale: 1.02, boxShadow: "0 10px 20px -5px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-1.5 bg-brand-orange px-4 py-2 rounded-full font-semibold hover:bg-white hover:text-brand-navy transition-all duration-300 text-[10px] shadow-md"
              >
                Découvrir l'approche AVR® 
                <ArrowRight className="w-3 h-3" />
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

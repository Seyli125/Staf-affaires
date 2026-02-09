"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Zap, Brain, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const credentials = [
  { title: "RNCP Niveau 6", description: "Certification d'excellence", icon: Award },
  { title: "Technicien PNL", description: "Expertise psychologique", icon: Brain },
  { title: "Approche AVR®", description: "Méthode propriétaire", icon: Zap },
  { title: "Expertise B2B", description: "25 ans de terrain", icon: Users },
];

const smoothSpring = {
  type: "spring" as const,
  stiffness: 100,
  damping: 30,
  mass: 1
};

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section ref={sectionRef} id="features" className="container mx-auto px-4 sm:px-6 relative overflow-hidden">
      {/* Decorative background */}
      <motion.div 
        className="absolute top-1/2 left-0 w-96 h-96 bg-brand-orange/5 blur-[100px] -translate-y-1/2 -translate-x-1/2 rounded-full pointer-events-none"
        style={{ y: useTransform(scrollYProgress, [0, 1], [100, -100]) }}
      />
      
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left: Image - Balanced size */}
        <motion.div
          style={{ y: imageY }}
          className="relative order-1 lg:order-1"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...smoothSpring }}
            className="relative"
          >
            {/* Main Image - Controlled max size */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white max-w-xs lg:max-w-sm mx-auto">
              <Image 
                src="/images/said-meeting.jpg"
                alt="Saïd TAAROUST - Expert Performance B2B"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 via-transparent to-transparent" />
            </div>
            
            {/* Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.4 }}
              className="absolute -bottom-4 -right-4 bg-brand-orange p-4 rounded-2xl text-white shadow-xl hidden sm:block"
            >
              <div className="text-center">
                <span className="text-3xl font-bold block">25+</span>
                <span className="text-[9px] font-medium uppercase tracking-wide opacity-90">Années B2B</span>
              </div>
            </motion.div>

            {/* RNCP Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.3 }}
              className="absolute -top-4 -left-4 z-20 w-18 h-18 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white p-2 hidden sm:block"
            >
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1769789503636.png?width=8000&height=8000&resize=contain"
                alt="Certification RNCP"
                fill
                className="object-contain p-1"
              />
            </motion.div>
          </motion.div>

          {/* Mobile badges */}
          <div className="flex sm:hidden justify-center gap-2 mt-5">
            <span className="bg-brand-orange text-white px-4 py-2 rounded-full text-xs font-semibold shadow-md">
              25+ ans d'expertise
            </span>
            <span className="bg-brand-navy text-white px-4 py-2 rounded-full text-xs font-semibold shadow-md">
              RNCP Niveau 6
            </span>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          style={{ y: contentY }}
          className="relative z-10 order-2 lg:order-2"
        >
          {/* Header */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...smoothSpring }}
          >
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-0.5 bg-brand-orange mb-4"
            />
            <span className="text-brand-orange font-semibold text-sm mb-3 block">
              La Signature d'un Expert
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy leading-tight mb-3">
              Saïd <span className="text-brand-orange">TAAROUST</span>
            </h2>
            <p className="text-base text-slate-500 font-medium">
              Coach d'Élite • Expert Performance Commerciale & Leadership B2B
            </p>
          </motion.div>

          {/* Quote - Philosophical touch */}
          <motion.div 
            className="relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-5 mb-6 border border-slate-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...smoothSpring, delay: 0.2 }}
          >
            <Quote className="absolute top-4 right-4 w-6 h-6 text-brand-orange/20" />
            <p className="text-base font-medium text-brand-navy italic leading-relaxed">
              "Transformer vos défis complexes en leviers de croissance, tout en préservant votre équilibre."
            </p>
            <p className="text-xs text-brand-orange mt-2 font-semibold">— Philosophie STAF AFFAIRES</p>
          </motion.div>
          
          {/* Description */}
          <motion.div 
            className="space-y-4 text-slate-600 text-base leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...smoothSpring, delay: 0.3 }}
          >
            <p>
              Avec un parcours forgé au sein de structures de premier plan, Saïd Taaroust incarne l'alliance rare entre <span className="text-brand-navy font-semibold">rigueur stratégique</span> et <span className="text-brand-navy font-semibold">intelligence émotionnelle</span>. 
            </p>
            <p>
              Maître des dynamiques B2B depuis plus de 25 ans, il a propulsé des centaines de dirigeants vers l'excellence. Sa méthode <span className="text-brand-orange font-semibold">AVR®</span> garantit des résultats concrets et durables.
            </p>
          </motion.div>

          {/* Credentials Grid - Better balanced */}
          <motion.div 
            className="grid grid-cols-2 gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...smoothSpring, delay: 0.4 }}
          >
            {credentials.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors duration-300">
                  <item.icon className="w-4 h-4 text-brand-navy group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-brand-navy text-sm truncate">{item.title}</p>
                  <p className="text-xs text-slate-400 truncate">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...smoothSpring, delay: 0.5 }}
          >
            <Link href="/prendre-rendez-vous">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-navy text-white rounded-full font-semibold text-base hover:bg-brand-orange transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center"
              >
                Réserver votre session stratégique 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

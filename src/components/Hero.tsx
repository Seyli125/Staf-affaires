"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
    const yHeroText = useTransform(scrollY, [0, 500], [0, 100]);
    const yImage = useTransform(scrollY, [0, 600], [0, -100]);
    const opacityText = useTransform(scrollY, [0, 300], [1, 0.3]);
    const opacityImage = useTransform(scrollY, [0, 500], [1, 0]);
    const scaleImage = useTransform(scrollY, [0, 500], [1, 0.9]);

  return (
    <section 
      ref={containerRef}
      className="relative flex flex-col items-center overflow-hidden"
    >
      {/* 1. Main Visual Hero Area */}
      <div className="relative w-full h-[85vh] md:h-[95vh] flex flex-col items-center justify-center hero-gradient px-6">
          {/* Background Massive Text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 0.05, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="text-bg-massive font-black text-white whitespace-nowrap"
            >
              STAF
            </motion.h1>
          </div>

        {/* Main Person Image */}
        <motion.div
          style={{ y: yImage, opacity: opacityImage, scale: scaleImage }}
          className="relative w-full h-[85%] max-w-4xl z-10 flex items-center justify-center mt-24"
        >
          <div 
            className="relative w-full h-full flex items-center justify-center"
            style={{ 
              maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
            }}
          >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/SA2_LE_upscale_prime-1769783680736.jpg?width=8000&height=8000&resize=contain"
                alt="Saïd Taaroust - STAF Affaires"
                width={1200}
                height={1200}
                className="object-contain h-full w-auto drop-shadow-2xl"
                priority
              />
          </div>
        </motion.div>

        {/* Massive Foreground Name */}
        <div className="absolute bottom-2 left-0 w-full z-20 px-4">
              <motion.h2 
                style={{ opacity: opacityText, y: yHeroText }}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="text-massive font-black text-white text-center leading-[1.1] tracking-tighter uppercase"
              >
                SAÏD TAAROUST
              </motion.h2>
        </div>
      </div>

      {/* 2. Hero Content / Introduction */}
      <div className="w-full bg-white pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-[1.1] tracking-tight text-primary">
              Performer sans s'épuiser.<br />
              <span className="text-brand-gold">Manager et vendre avec sens.</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-medium">
              Coach certifié RNCP | Formateur | Expert en développement commercial depuis 25 ans
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button 
                size="lg" 
                className="bg-primary text-white hover:bg-primary/90 rounded-full px-10 py-8 text-xl font-bold group transition-all duration-300 shadow-xl"
              >
                Prendre rendez-vous
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 3. About Section (Bio) */}
      <div className="w-full bg-slate-50 py-32">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          {/* Left Content (Text) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-brand-gold" />
              <span className="text-sm font-bold uppercase tracking-widest text-brand-gold">
                Qui suis-je ?
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-black mb-8 leading-tight tracking-tight text-primary">
              Un expert humaniste pour votre performance durable.
            </h3>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Coach certifié en entreprise et formateur depuis 2011, j'accompagne les managers et vendeurs responsables pour atteindre leurs objectifs sans se renier ni s'épuiser.
              </p>
              <p>
                Avec 25 ans d'expérience en développement commercial et 15 ans dans l'accompagnement des organisations, j'aide les professionnels à vendre avec plaisir et responsabilité, manager sans négliger leur santé, et obtenir des résultats concrets et durables.
              </p>
              <p className="font-bold text-primary italic">
                "Ma philosophie : la performance ne se joue pas dans les méthodes et les processus — elle se joue dans le mindset, l'énergie et la capacité à incarner le professionnel qui impacte."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {[
                "Coach-consultant RNCP Niveau 6",
                "Spécialiste de l'approche AVR®",
                "Technicien PNL certifié",
                "Formateur professionnel agréé",
                "+300h de coaching certifié",
                "40 ans d'expérience cumulée"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
                  <span className="font-bold text-primary/80">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Content (Visual) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/SA2_LE_upscale_prime-1769783680736.jpg?width=8000&height=8000&resize=contain"
                alt="Saïd Taaroust Portrait"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 z-30"
            >
              <p className="text-4xl font-black text-primary mb-1">40</p>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Années d'expérience</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

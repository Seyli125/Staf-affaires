"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Zap, Brain, ArrowRight, Quote, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { number: "25+", label: "Années d'expertise", suffix: "" },
  { number: "500+", label: "Dirigeants accompagnés", suffix: "" },
  { number: "98", label: "De satisfaction", suffix: "%" },
];

const credentials = [
  { icon: Award, label: "Coach RNCP Niveau 6" },
  { icon: Brain, label: "Technicien PNL certifié" },
  { icon: Zap, label: "Créateur méthode AVR®" },
  { icon: Users, label: "Expert B2B 25 ans" },
];

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.3], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section 
      ref={sectionRef}
      id="biographie" 
      className="py-20 lg:py-28 relative overflow-hidden"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-orange/[0.02] to-transparent" />
      
      <motion.div 
        className="container mx-auto px-4 sm:px-6 max-w-6xl relative"
        style={{ opacity }}
      >
        
        {/* Opening Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16 lg:mb-20"
        >
          <Quote className="w-10 h-10 text-brand-orange/20 mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light text-brand-navy max-w-3xl mx-auto leading-snug tracking-tight">
            "La vraie performance, c'est celle qui vous fait{" "}
            <span className="text-brand-orange font-medium">grandir</span>{" "}
            sans vous <em className="font-serif">consumer</em>."
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />
            <span className="text-sm font-medium text-slate-500 tracking-wide">Saïd Taaroust</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent" />
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left: Portrait - 5 columns */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="sticky top-24">
              <div className="relative max-w-[320px] mx-auto lg:mx-0">
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 border-l-2 border-t-2 border-brand-orange/30 rounded-tl-2xl" />
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r-2 border-b-2 border-brand-navy/20 rounded-br-2xl" />
                
                {/* Main Image */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/said-casual.jpg"
                    alt="Saïd Taaroust"
                    fill
                    className="object-cover object-top"
                    sizes="320px"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/30 via-transparent to-transparent" />
                </div>
                
                {/* Floating Credential Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-brand-navy block">Coach Certifié</span>
                      <span className="text-xs text-slate-400">RNCP Niveau 6</span>
                    </div>
                  </div>
                </motion.div>

                {/* Rating badge */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="absolute top-4 -left-4 bg-brand-navy text-white px-3 py-2 rounded-lg shadow-lg"
                >
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold">5.0</span>
                  </div>
                  <span className="text-[10px] text-white/60">LinkedIn</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: Story Content - 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Section Label & Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "3rem" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-[2px] bg-brand-orange mb-5"
              />
              <span className="inline-block text-brand-orange text-[11px] font-semibold tracking-[0.2em] uppercase mb-3">
                Mon Histoire
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight">
                Un parcours forgé{" "}
                <span className="text-brand-orange">sur le terrain</span>
              </h2>
            </motion.div>

            {/* Story - Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                <span className="text-brand-navy font-semibold text-xl">Il y a 25 ans</span>, 
                je plongeais dans l'univers exigeant du commerce B2B. Des milliers de négociations, 
                des équipes à galvaniser, des objectifs à dépasser. J'ai connu les victoires 
                qui transcendent — mais aussi{" "}
                <em className="text-brand-navy font-medium">l'épuisement qui guette ceux qui donnent tout.</em>
              </p>
            </motion.div>

            {/* Story - Turning Point */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative pl-6 border-l-2 border-brand-orange/40"
            >
              <div className="absolute left-0 top-0 w-2 h-2 bg-brand-orange rounded-full -translate-x-[5px]" />
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                <span className="text-brand-navy font-semibold">Le déclic est venu d'une prise de conscience :</span>{" "}
                les meilleurs performeurs ne sont pas ceux qui s'épuisent le plus, 
                mais ceux qui savent préserver leur énergie pour les moments décisifs.
              </p>
            </motion.div>

            {/* Story - The Method */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg">
                C'est de cette révélation qu'est née la{" "}
                <span className="text-brand-orange font-bold">méthode AVR®</span> — 
                Accélération, Valeur, Résilience. Une approche qui ne vous demande pas 
                de choisir entre réussite et équilibre. Elle vous montre comment l'une nourrit l'autre.
              </p>
            </motion.div>

            {/* Key Numbers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 py-8 border-y border-slate-100"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-brand-navy">
                    {stat.number}<span className="text-brand-orange">{stat.suffix}</span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Credentials Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="grid grid-cols-2 gap-3"
            >
              {credentials.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
                  className="credential-item flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 hover:border-brand-orange/30 hover:bg-white transition-all duration-300"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-brand-orange" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{item.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4"
            >
              <Link href="/prendre-rendez-vous">
                <button className="group inline-flex items-center gap-3 px-7 py-4 bg-brand-navy text-white rounded-full font-semibold text-sm hover:bg-brand-orange transition-all duration-300 shadow-lg hover:shadow-xl">
                  Échanger avec Saïd
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <p className="mt-4 text-sm text-slate-400">
                30 min • Gratuit • Sans engagement
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

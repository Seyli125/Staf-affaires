"use client";

import { motion } from "framer-motion";
import { Award, Users, Zap, Brain, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Features() {
  return (
    <section id="biographie" className="py-24 lg:py-32 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-orange/[0.02] to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative">
        
        {/* Opening Quote - Emotional Hook */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <Quote className="w-8 h-8 text-brand-orange/30 mx-auto mb-6" />
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light text-brand-navy max-w-4xl mx-auto leading-snug">
            "La vraie performance, c'est celle qui vous fait <span className="text-brand-orange font-medium">grandir</span> sans vous <span className="italic">consumer</span>."
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-12 h-px bg-brand-orange/40" />
            <span className="text-sm font-medium text-slate-500">Saïd Taaroust</span>
            <div className="w-12 h-px bg-brand-orange/40" />
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* Left: Portrait - 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:col-span-2 relative"
          >
            <div className="relative max-w-[280px] mx-auto lg:mx-0">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-brand-orange/20 rounded-tl-3xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-brand-navy/10 rounded-br-3xl" />
              
              {/* Image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/said-casual.jpg"
                  alt="Saïd Taaroust"
                  fill
                  className="object-cover object-top"
                  sizes="280px"
                  priority
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/20 via-transparent to-transparent" />
              </div>
              
              {/* Floating credential */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-5 py-3 rounded-xl shadow-lg border border-slate-100"
              >
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-brand-orange" />
                  <span className="text-xs font-semibold text-brand-navy whitespace-nowrap">Coach Certifié RNCP</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Story Content - 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-brand-orange text-xs font-semibold tracking-[0.2em] uppercase mb-4">
                L'histoire
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy leading-tight">
                Un parcours forgé sur le terrain
              </h2>
            </motion.div>

            {/* Story - Chapter 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <p className="text-slate-600 leading-relaxed text-base">
                <span className="text-brand-navy font-semibold text-lg">Tout a commencé il y a 25 ans</span>, dans les tranchées 
                du commerce B2B. Des milliers de négociations, des équipes à motiver, des objectifs à dépasser. 
                J'ai tout vécu : les victoires qui galvanisent, mais aussi <em className="text-brand-navy">l'épuisement qui guette 
                ceux qui donnent tout.</em>
              </p>
            </motion.div>

            {/* Story - Turning Point */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative pl-6 border-l-2 border-brand-orange/30"
            >
              <p className="text-slate-600 leading-relaxed text-base">
                Un jour, j'ai compris une vérité que peu osent admettre : <span className="text-brand-navy font-medium">les meilleurs 
                performeurs ne sont pas ceux qui s'épuisent le plus, mais ceux qui savent préserver leur énergie 
                pour les moments décisifs.</span>
              </p>
            </motion.div>

            {/* Story - The Method */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4"
            >
              <p className="text-slate-600 leading-relaxed text-base">
                C'est de cette prise de conscience qu'est née la <span className="text-brand-orange font-semibold">méthode AVR®</span>. 
                Une approche qui ne vous demande pas de choisir entre réussite et équilibre — elle vous montre 
                comment l'une nourrit l'autre.
              </p>
            </motion.div>

            {/* Key Numbers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 py-6"
            >
              {[
                { number: "25+", label: "Années d'expertise" },
                { number: "500+", label: "Dirigeants accompagnés" },
                { number: "98%", label: "De satisfaction" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-brand-navy">{stat.number}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Credentials Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {[
                { icon: Brain, label: "Technicien PNL" },
                { icon: Zap, label: "Méthode AVR®" },
                { icon: Users, label: "Expert B2B" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100/80 rounded-full"
                >
                  <item.icon className="w-3.5 h-3.5 text-brand-orange" />
                  <span className="text-xs font-medium text-slate-600">{item.label}</span>
                </div>
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
                <button className="group inline-flex items-center gap-3 px-6 py-3.5 bg-brand-navy text-white rounded-full font-medium text-sm hover:bg-brand-navy/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px]">
                  Discuter avec Saïd
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <p className="mt-3 text-xs text-slate-400">
                30 min • Gratuit • Sans engagement
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

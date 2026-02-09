"use client";

import { motion } from "framer-motion";
import { Award, Users, Zap, Brain, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const credentials = [
  { label: "Coach Certifié RNCP 6", icon: Award },
  { label: "Technicien PNL", icon: Brain },
  { label: "Méthode AVR®", icon: Zap },
  { label: "25+ ans d'expertise B2B", icon: Users },
];

export function Features() {
  return (
    <section id="biographie" className="py-20 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-brand-orange text-xs font-semibold tracking-[0.2em] uppercase">
            À propos
          </span>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left: Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Image Container */}
            <div className="relative aspect-[4/5] max-w-sm mx-auto lg:mx-0">
              {/* Decorative frame */}
              <div className="absolute -inset-3 border border-brand-navy/10 rounded-2xl" />
              <div className="absolute -inset-6 border border-brand-orange/10 rounded-3xl" />
              
              {/* Main Image */}
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/said-casual.jpg"
                  alt="Saïd Taaroust - Expert en performance B2B"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 320px, 380px"
                  priority
                />
              </div>
              
              {/* Experience Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-4 -right-4 bg-brand-navy text-white px-5 py-3 rounded-xl shadow-lg"
              >
                <span className="text-2xl font-bold text-brand-orange">25+</span>
                <span className="text-xs text-white/80 ml-1.5">années d'expertise</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="lg:pt-4"
          >
            {/* Name & Title */}
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-2">
              Saïd Taaroust
            </h2>
            <p className="text-brand-orange font-medium text-sm mb-8">
              Coach d'Élite & Expert Performance B2B
            </p>

            {/* Bio Text - Editorial quality */}
            <div className="space-y-5 mb-10">
              <p className="text-slate-600 leading-relaxed">
                Après plus de deux décennies au cœur des plus grandes directions commerciales françaises, 
                j'ai acquis une conviction profonde : <span className="text-brand-navy font-medium">la performance durable 
                ne s'oppose pas à l'équilibre personnel — elle en dépend.</span>
              </p>
              
              <p className="text-slate-600 leading-relaxed">
                Cette conviction m'a conduit à créer la <span className="text-brand-orange font-semibold">méthode AVR®</span>, 
                une approche unique qui réconcilie ambition et sérénité. Mon rôle ? Vous accompagner 
                là où vous n'osez pas toujours aller seul, avec exigence et bienveillance.
              </p>
              
              <p className="text-slate-600 leading-relaxed">
                Chaque dirigeant, chaque entrepreneur porte en lui les ressources de sa transformation. 
                Mon travail est de les révéler, de les structurer, et de les mettre au service d'une 
                <span className="text-brand-navy font-medium"> réussite qui a du sens.</span>
              </p>
            </div>

            {/* Credentials - Clean inline list */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {credentials.map((item, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2 px-3 py-2 bg-slate-50 rounded-lg border border-slate-100"
                >
                  <item.icon className="w-4 h-4 text-brand-orange" />
                  <span className="text-xs font-medium text-brand-navy">{item.label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link href="/prendre-rendez-vous">
                <button className="group inline-flex items-center gap-3 px-6 py-3.5 bg-brand-navy text-white rounded-full font-medium text-sm hover:bg-brand-navy/90 transition-colors shadow-lg hover:shadow-xl">
                  Réserver un échange avec Saïd
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <p className="mt-4 text-xs text-slate-400">
                Session découverte de 30 min • Gratuit et sans engagement
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

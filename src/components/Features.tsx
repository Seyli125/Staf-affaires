"use client";

import { motion } from "framer-motion";
import { Play, CheckCircle2, Quote } from "lucide-react";
import Image from "next/image";

const whyUs = [
  {
    title: "Expérience Terrain",
    description: "Plus de 15 ans d'expérience concrète dans la gestion et le développement d'affaires.",
  },
  {
    title: "Plan de Croissance",
    description: "Des stratégies personnalisées basées sur vos objectifs, vos défis et les tendances du marché.",
  },
  {
    title: "Mindset & Stratégie",
    description: "L'alliance parfaite entre la force mentale et l'exécution stratégique rigoureuse.",
  },
];

const testimonials = [
  {
    name: "Jean Dupont",
    role: "CEO, TechFlow",
    text: "STAF AFFAIRES a transformé notre approche du management. Les résultats ont été visibles dès le premier mois.",
  },
  {
    name: "Marie Leroy",
    role: "Directrice RH, Novis",
    text: "Un accompagnement humain et percutant. Saïd comprend parfaitement les enjeux des entreprises modernes.",
  },
  {
    name: "Marc Antoine",
    role: "Fondateur, StartupBoost",
    text: "Le meilleur investissement pour ma croissance personnelle et celle de mon équipe.",
  },
];

export function Features() {
  return (
    <>
      {/* Video Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-6"
            >
              Regarder, apprendre et évoluer
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors z-10" />
            <Image 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2000"
              alt="Coaching session"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-2xl shadow-primary/40"
              >
                <Play className="w-10 h-10 text-white fill-white ml-1" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-6"
            >
              Pourquoi choisir STAF AFFAIRES ?
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 flex flex-col items-center text-center"
              >
                <CheckCircle2 className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-6"
            >
              Ce que disent nos clients
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary/30 p-10 rounded-3xl relative overflow-hidden group"
              >
                <Quote className="absolute -top-4 -right-4 w-24 h-24 text-primary/5 group-hover:text-primary/10 transition-colors" />
                <p className="text-lg italic mb-8 relative z-10">"{t.text}"</p>
                <div>
                  <h4 className="font-bold text-xl">{t.name}</h4>
                  <p className="text-primary font-medium">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

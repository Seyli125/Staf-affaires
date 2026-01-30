"use client";

import { motion } from "framer-motion";
import { Briefcase, Target, Brain } from "lucide-react";
import Image from "next/image";

const whyUs = [
  {
    title: "Expérience Terrain",
    description: "Mon accompagnement repose sur des années d'expérience concrète en entrepreneuriat, branding et croissance.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Plans de Croissance",
    description: "Je crée des stratégies de coaching sur mesure basées sur vos objectifs, vos défis et les tendances du marché.",
    icon: Target,
    image: "https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Mindset & Stratégie",
    description: "Je vous aide à briser les barrières mentales, à développer des habitudes de haute performance et à bâtir une confiance inébranlable.",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
  },
];

export function Features() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center mb-20 uppercase tracking-tighter"
          >
            Pourquoi choisir Saïd Taaroust ?
          </motion.h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {whyUs.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[40px] shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="w-12 h-12 bg-[#fcfcfc] rounded-xl flex items-center justify-center mb-8 border border-gray-100 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <item.icon className="w-6 h-6" />
              </div>
              
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-8">
                <Image 
                  src={item.image} 
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <h3 className="text-2xl font-black mb-4 tracking-tight leading-none group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

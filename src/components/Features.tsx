"use client";

import { motion } from "framer-motion";
import { Award, Users, Zap, Brain, ArrowRight, Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const credentials = [
  {
    title: "RNCP Niveau 6",
    description: "Certification d'excellence.",
    icon: Award,
  },
  {
    title: "Technicien PNL",
    description: "Expertise psychologique.",
    icon: Brain,
  },
  {
    title: "Approche AVR®",
    description: "Méthode propriétaire.",
    icon: Zap,
  },
  {
    title: "Expertise B2B",
    description: "25 ans de terrain.",
    icon: Users,
  },
];

export function Features() {
  return (
    <section id="features" className="container mx-auto px-6 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 w-[800px] h-[800px] bg-brand-orange/5 blur-[120px] -translate-y-1/2 -translate-x-1/2 rounded-full pointer-events-none" />
      
      <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center mb-32">
        {/* Left: Visual Impact */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="relative aspect-[4/5] rounded-[80px] overflow-hidden shadow-[0_48px_96px_-12px_rgba(10,25,47,0.3)] border-[16px] border-white z-10">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/SA2_LE_upscale_prime-1769783680736.jpg?width=8000&height=8000&resize=contain"
              alt="Saïd Taaroust - Expert Performance B2B"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-1000"
            />
            {/* Dark overlay for text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-40" />
          </div>
          
          {/* Experience Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -bottom-12 -right-12 bg-brand-gold p-12 rounded-[50px] text-white shadow-3xl z-20 hidden md:block max-w-[320px] border-8 border-white"
          >
            <div className="flex flex-col gap-1">
              <span className="text-6xl font-black italic tracking-tighter leading-none mb-2">40</span>
              <span className="text-xs font-black uppercase tracking-[0.2em] leading-tight opacity-90">
                Années d'expertise cumulée à votre service.
              </span>
            </div>
          </motion.div>

          {/* Quote mark decoration */}
          <div className="absolute -top-10 -left-10 text-brand-orange/10 z-0">
            <Quote className="w-48 h-48" />
          </div>
        </motion.div>

        {/* Right: Narrative Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="mb-12">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              className="h-1.5 bg-brand-orange mb-8"
            />
            <span className="text-brand-orange font-black uppercase tracking-[0.4em] text-xs mb-6 block">
              Vision & Engagement
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-brand-navy leading-[0.95] tracking-tighter uppercase mb-10">
              L'humain au <br />
              <span className="text-brand-gold italic">Cœur</span> du <br />
              <span className="text-brand-navy">Succès.</span>
            </h2>
          </div>

          <div className="space-y-8 mb-12">
            <p className="text-2xl font-bold text-brand-navy leading-tight italic border-l-4 border-brand-orange pl-8">
              "Je transforme la performance commerciale en une aventure humaine durable et épanouissante."
            </p>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
              <p>
                Coach certifié RNCP et expert en développement commercial depuis 25 ans, j'accompagne les leaders qui refusent de choisir entre <span className="text-brand-navy font-black">résultats</span> et <span className="text-brand-navy font-black">équilibre personnel</span>.
              </p>
              <p>
                Mon approche repose sur une conviction profonde : la technique de vente sans mindset n'est qu'un outil éphémère. Le véritable levier, c'est <span className="text-brand-orange font-bold">l'alignement intérieur</span>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-12">
            {credentials.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-6 rounded-[32px] bg-slate-50 hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group/card"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-navy/5 flex items-center justify-center shrink-0 group-hover/card:bg-brand-orange transition-colors duration-500">
                  <item.icon className="w-6 h-6 text-brand-navy group-hover/card:text-white transition-colors duration-500" />
                </div>
                <div>
                  <p className="font-black text-brand-navy text-xs uppercase tracking-wider">{item.title}</p>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Link href="/prendre-rendez-vous">
            <button 
              className="group inline-flex items-center gap-4 px-12 py-6 bg-brand-navy text-white rounded-full font-bold hover:bg-brand-orange transition-all shadow-[0_20px_40px_-10px_rgba(10,25,47,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(255,107,74,0.4)] transform hover:-translate-y-1 active:scale-95"
            >
              Échanger avec Saïd <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

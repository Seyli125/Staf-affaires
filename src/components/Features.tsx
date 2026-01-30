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
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand-orange/5 blur-[120px] -translate-y-1/2 -translate-x-1/2 rounded-full pointer-events-none" />
      
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-16">
        {/* Left: Visual Impact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden shadow-[0_32px_64px_-12px_rgba(10,25,47,0.2)] border-[12px] border-white z-10">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/SA2_LE_upscale_prime-1769783680736.jpg?width=8000&height=8000&resize=contain"
                alt="Saïd TAAROUST - Expert Performance B2B"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-40" />
            </div>
            
            {/* RNCP Badge - The "Beau Rond" Perfect Integration */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 md:-top-20 md:-left-20 z-40">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", damping: 12, stiffness: 100 }}
                className="relative w-52 h-52 rounded-full bg-brand-orange/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 overflow-hidden shadow-[0_20px_50px_rgba(10,25,47,0.1)] border-2 border-brand-orange/10"
              >
                {/* Clean background match */}
                <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
                
                <div className="relative w-full h-full flex items-center justify-center p-4">
                  <Image 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1769789503636.png?width=8000&height=8000&resize=contain"
                    alt="Certification RNCP Niveau 6"
                    width={500}
                    height={500}
                    className="w-[90%] h-[90%] object-contain mix-blend-multiply scale-110 drop-shadow-md"
                  />
                </div>
                
                {/* Subtle rotating glow */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border border-dashed border-brand-orange/20 pointer-events-none -m-1"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="mb-8">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 60 }}
                viewport={{ once: true }}
                className="h-1 bg-brand-orange mb-6"
              />
              <span className="text-brand-orange font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
                L'Excellence au Service de votre Transformation
              </span>
                <h2 className="text-4xl md:text-6xl font-black text-brand-navy leading-none tracking-tighter uppercase mb-2">
                  Saïd <span className="text-brand-orange">TAAROUST</span>
                </h2>
                <p className="text-xl md:text-2xl font-black text-brand-navy/90 mb-8 leading-tight uppercase tracking-tight">
                  L'Architecte de votre Performance Commerciale
                </p>
              </div>

              <div className="space-y-8 mb-10">
                <p className="text-xl font-bold text-brand-navy leading-relaxed italic border-l-8 border-brand-orange pl-8 bg-brand-orange/5 py-6 rounded-r-3xl">
                  "Je ne me contente pas de vous conseiller : je fusionne stratégie business et intelligence comportementale pour transformer durablement votre potentiel en excellence opérationnelle."
                </p>
                
                <div className="space-y-6 text-slate-600 text-base leading-relaxed font-medium">
                  <p>
                    Fort d'une trajectoire de <span className="text-brand-navy font-black underline decoration-brand-orange decoration-4 underline-offset-4">25 années d'expertise</span> sur les terrains les plus exigeants, j'ai accompagné des centaines de dirigeants vers des sommets de performance.
                  </p>
                  <p>
                    Ma double certification <span className="text-brand-navy font-black">RNCP (Niveau 6) et Technicien PNL</span> m'autorise à déployer des méthodes éprouvées qui lèvent les freins psychologiques et accélèrent vos résultats, tout en plaçant l'humain au cœur de la réussite.
                  </p>
                </div>
              </div>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {credentials.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-[20px] bg-white shadow-sm hover:shadow-xl transition-all border border-slate-100 group/card"
                >
                  <div className="w-9 h-9 rounded-xl bg-brand-navy/5 flex items-center justify-center shrink-0 group-hover/card:bg-brand-orange transition-colors duration-500">
                    <item.icon className="w-4 h-4 text-brand-navy group-hover/card:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <p className="font-black text-brand-navy text-[9px] uppercase tracking-wider">{item.title}</p>
                    <p className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          <Link href="/prendre-rendez-vous">
            <button 
              className="group inline-flex items-center gap-4 px-10 py-5 bg-brand-navy text-white rounded-full font-bold hover:bg-brand-orange transition-all shadow-xl hover:shadow-brand-orange/20 transform hover:-translate-y-1 active:scale-95 text-sm"
            >
              Réserver votre session stratégique <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

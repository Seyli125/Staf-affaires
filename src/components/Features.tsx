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
          <div className="relative group">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden shadow-[0_32px_64px_-12px_rgba(10,25,47,0.3)] border-[12px] border-white z-10">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/SA2_LE_upscale_prime-1769783680736.jpg?width=8000&height=8000&resize=contain"
                  alt="Saïd TAAROUST - Expert Performance B2B"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-40" />
              </div>
              
              {/* RNCP Badge - The "Beau Rond" Perfect Integration */}
              <div className="absolute -top-12 -left-6 md:-top-16 md:-left-12 z-40">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", damping: 15, stiffness: 100 }}
                  className="relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-brand-orange/10 backdrop-blur-md flex items-center justify-center shadow-[0_20px_50px_rgba(10,25,47,0.15)] border-4 border-white overflow-hidden group/badge"
                >
                  {/* Rotating decorative ring */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-2 rounded-full border border-dashed border-brand-orange/30"
                  />
                  
                  <div className="relative w-[85%] h-[85%] flex flex-col items-center justify-center text-center p-4">
                    <Image 
                      src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1769789503636.png?width=8000&height=8000&resize=contain"
                      alt="Certification RNCP Niveau 6"
                      width={400}
                      height={400}
                      className="w-full h-full object-contain mix-blend-multiply drop-shadow-sm transform group-hover/badge:scale-110 transition-transform duration-500"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Experience Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-10 -right-6 md:-right-12 z-20 bg-brand-navy p-6 md:p-8 rounded-[30px] shadow-2xl border border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl md:text-5xl font-black text-brand-orange">+25</div>
                <div className="text-white">
                  <p className="text-xs font-black uppercase tracking-widest leading-none mb-1">Années</p>
                  <p className="text-[10px] font-bold text-white/60 uppercase tracking-tighter">D'Expertise Terrain</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="mb-10">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: 80 }}
                viewport={{ once: true }}
                className="h-1.5 bg-brand-orange mb-8"
              />
              <h2 className="text-5xl md:text-7xl font-black text-brand-navy leading-[0.9] tracking-tighter uppercase mb-6">
                L'ÉLITE DU COACHING <br />
                <span className="text-brand-orange">B2B</span>
              </h2>
              <div className="inline-block px-4 py-2 bg-brand-navy text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-8">
                Saïd TAAROUST • Expert Certifié
              </div>
            </div>

            <div className="space-y-10 mb-12">
              <div className="relative">
                <Quote className="absolute -top-6 -left-6 w-12 h-12 text-brand-orange/10 -z-10" />
                <p className="text-2xl md:text-3xl font-black text-brand-navy leading-tight italic">
                  "Ma mission est simple : transformer vos barrières invisibles en leviers de croissance exponentielle."
                </p>
              </div>
              
              <div className="space-y-6 text-slate-700 text-lg leading-relaxed font-medium max-w-xl">
                <p>
                  Plus qu'un accompagnement, Saïd TAAROUST propose une véritable <span className="text-brand-navy font-black">révolution méthodologique</span>. Avec plus d'un quart de siècle d'expérience au cœur des enjeux commerciaux, il a forgé une vision unique où la psychologie rencontre la stratégie pure.
                </p>
                <p>
                  Architecte de la performance, il déploie la <span className="text-brand-orange font-black">Méthode AVR®</span> : un arsenal stratégique conçu pour les leaders qui refusent le statu quo. Sa double expertise en <span className="text-brand-navy font-black">PNL et Business Strategy</span> permet d'aligner l'état d'esprit avec les objectifs de chiffre d'affaires les plus ambitieux.
                </p>
                <p>
                  Aujourd'hui, il met ce savoir-faire au service d'une élite de dirigeants souhaitant <span className="text-brand-navy font-black italic">performer sans s'épuiser</span>.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {credentials.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-5 p-5 rounded-3xl bg-white shadow-[0_10px_30px_rgba(10,25,47,0.05)] hover:shadow-2xl transition-all border border-slate-100 group/card cursor-default"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-navy/5 flex items-center justify-center shrink-0 group-hover/card:bg-brand-orange transition-all duration-500 transform group-hover/card:rotate-6">
                    <item.icon className="w-6 h-6 text-brand-navy group-hover/card:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <p className="font-black text-brand-navy text-xs uppercase tracking-wider mb-0.5">{item.title}</p>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.description}</p>
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

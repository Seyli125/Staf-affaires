"use client";

import { motion } from "framer-motion";
import { Award, Users, Zap, Brain, ArrowRight } from "lucide-react";
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
          
          {/* Experience Badge - Reduced size and volume */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute -bottom-6 -right-6 bg-brand-orange p-6 rounded-[32px] text-white shadow-xl z-20 hidden md:block max-w-[220px] border-4 border-white"
          >
            <div className="flex flex-col gap-1 text-center">
              <span className="text-4xl font-black italic tracking-tighter leading-none mb-1">25+</span>
              <span className="text-[9px] font-black uppercase tracking-[0.2em] leading-tight opacity-90">
                Années d'expertise B2B au service de votre excellence.
              </span>
            </div>
          </motion.div>

          {/* RNCP Logo integration - Circular and clean */}
            <div className="absolute -top-12 -left-12 z-20">
              <motion.div 
                initial={{ opacity: 0, rotate: -10 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white flex items-center justify-center"
              >
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1769789503636.png?width=8000&height=8000&resize=contain"
                  alt="Certification RNCP Niveau 6"
                  fill
                  className="object-contain p-4"
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
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              className="h-1 bg-brand-orange mb-6"
            />
            <span className="text-brand-orange font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">
              La Signature d'un Expert
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-brand-navy leading-tight tracking-tighter uppercase mb-6">
              Saïd <span className="text-brand-orange italic">TAAROUST</span>
            </h2>
            <h3 className="text-lg md:text-xl font-bold text-brand-navy/80 mb-8 leading-relaxed">
              Coach d'Élite • Expert en Performance Commerciale & Leadership B2B
            </h3>
          </div>

          <div className="space-y-6 mb-10">
            <p className="text-lg font-bold text-brand-navy leading-snug italic border-l-4 border-brand-orange pl-6">
              "Mon obsession : transformer vos défis complexes en leviers de croissance massive, tout en préservant votre équilibre vital."
            </p>
            
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed font-medium">
              <p>
                Avec un parcours forgé au sein de structures de premier plan, Saïd Taaroust incarne l'alliance rare entre <span className="text-brand-navy font-black">rigueur stratégique</span> et <span className="text-brand-navy font-black">intelligence émotionnelle</span>. 
              </p>
              <p>
                Maître des dynamiques B2B depuis plus de <span className="text-brand-navy font-black">25 ans</span>, il a déjà propulsé des centaines de dirigeants vers l'excellence. Sa méthode exclusive, l'approche <span className="text-brand-orange font-black italic">AVR®</span>, est le fruit d'une expertise certifiée <span className="text-brand-navy font-bold">RNCP Niveau 6 et PNL</span>, garantissant des résultats concrets et durables.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-10">
            {credentials.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-[20px] bg-slate-50 hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-slate-100 group/card"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-navy/5 flex items-center justify-center shrink-0 group-hover/card:bg-brand-orange transition-colors duration-500">
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
              className="group inline-flex items-center gap-4 px-8 py-4 bg-brand-navy text-white rounded-full font-bold hover:bg-brand-orange transition-all shadow-xl hover:shadow-brand-orange/20 transform hover:-translate-y-1 active:scale-95 text-xs"
            >
              Réserver votre session stratégique <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

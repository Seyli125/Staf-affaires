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
      
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-12">
        {/* Left: Visual Impact */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden shadow-[0_24px_48px_-12px_rgba(10,25,47,0.15)] border-[8px] border-white z-10">
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
              className="absolute -bottom-4 -right-4 bg-brand-orange p-4 rounded-[24px] text-white shadow-lg z-20 hidden md:block max-w-[180px] border-3 border-white"
            >
              <div className="flex flex-col gap-1 text-center">
                <span className="text-3xl font-black italic tracking-tighter leading-none mb-1">25+</span>
                <span className="text-[8px] font-black uppercase tracking-[0.15em] leading-tight opacity-90">
                  Années d'expertise B2B
                </span>
              </div>
            </motion.div>

            {/* RNCP Logo integration - Circular and clean */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -top-4 -left-4 z-20 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white p-2"
            >
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1769789503636.png?width=8000&height=8000&resize=contain"
                alt="Certification RNCP Niveau 6"
                fill
                className="object-contain p-1"
              />
            </motion.div>
        </motion.div>

        {/* Right: Narrative Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <div className="mb-6">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: 32 }}
              viewport={{ once: true }}
              className="h-0.5 bg-brand-orange mb-4"
            />
            <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-[9px] mb-3 block">
              La Signature d'un Expert
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-brand-navy leading-tight tracking-tighter uppercase mb-4">
              Saïd <span className="text-brand-orange italic">TAAROUST</span>
            </h2>
            <h3 className="text-base md:text-lg font-bold text-brand-navy/80 mb-6 leading-relaxed">
              Coach d'Élite • Expert en Performance Commerciale & Leadership B2B
            </h3>
          </div>

          <div className="space-y-4 mb-8">
            <p className="text-base font-bold text-brand-navy leading-snug italic border-l-3 border-brand-orange pl-5">
              "Transformer vos défis complexes en leviers de croissance, tout en préservant votre équilibre."
            </p>
            
            <div className="space-y-3 text-slate-600 text-xs leading-relaxed font-medium">
              <p>
                Avec un parcours forgé au sein de structures de premier plan, Saïd Taaroust incarne l'alliance rare entre <span className="text-brand-navy font-black">rigueur stratégique</span> et <span className="text-brand-navy font-black">intelligence émotionnelle</span>. 
              </p>
              <p>
                Maître des dynamiques B2B depuis plus de <span className="text-brand-navy font-black">25 ans</span>, il a propulsé des centaines de dirigeants vers l'excellence. Sa méthode <span className="text-brand-orange font-black italic">AVR®</span> garantit des résultats concrets et durables.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-8">
            {credentials.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 p-3 rounded-[16px] bg-slate-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-slate-100 group/card"
              >
                <div className="w-7 h-7 rounded-lg bg-brand-navy/5 flex items-center justify-center shrink-0 group-hover/card:bg-brand-orange transition-colors duration-500">
                  <item.icon className="w-3.5 h-3.5 text-brand-navy group-hover/card:text-white transition-colors duration-500" />
                </div>
                <div>
                  <p className="font-black text-brand-navy text-[8px] uppercase tracking-wider">{item.title}</p>
                  <p className="text-[7px] text-slate-400 font-bold uppercase tracking-widest">{item.description}</p>
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

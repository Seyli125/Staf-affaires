"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Shield, GraduationCap, Zap, Brain } from "lucide-react";
import Image from "next/image";

const credentials = [
  {
    title: "RNCP Niveau 6",
    description: "La plus haute certification de coach-consultant.",
    icon: Award,
  },
  {
    title: "Technicien PNL",
    description: "Expertise certifiée par The Society Of NLP.",
    icon: Brain,
  },
  {
    title: "Approche AVR®",
    description: "Maître de l'approche propriétaire exclusive.",
    icon: Zap,
  },
  {
    title: "+300h Coaching",
    description: "Une expérience terrain solide et certifiée.",
    icon: Users,
  },
];

export function Features() {
  return (
    <section id="about" className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl border-8 border-white">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/SA2_LE_upscale_prime-1769783680736.jpg?width=8000&height=8000&resize=contain"
              alt="Saïd Taaroust"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-transparent to-transparent opacity-60" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-10 -right-10 bg-brand-gold p-8 rounded-[40px] text-white shadow-2xl hidden md:block max-w-[280px]"
          >
            <p className="text-4xl font-black mb-1">40 ANS</p>
            <p className="text-sm font-bold opacity-80 uppercase tracking-widest leading-tight">
              D'expérience cumulée au service de votre réussite.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div>
            <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-sm mb-4 block">L'humain au cœur de la performance</span>
            <h2 className="text-4xl md:text-6xl font-black text-brand-navy leading-[1.1] tracking-tighter uppercase mb-8">
              Saïd <span className="text-brand-gold underline decoration-brand-orange decoration-4 underline-offset-8">Taaroust</span>
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-2xl font-bold text-brand-navy leading-tight">
              "J'aide les professionnels à performer sans se renier, pour un succès qui a du sens."
            </p>
            
            <div className="h-px w-20 bg-brand-orange" />

            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                Coach certifié en entreprise et formateur depuis 2011, j'accompagne ceux qui refusent les <span className="text-brand-navy font-bold italic">"recettes magiques"</span> au profit d'un engagement authentique.
              </p>
              <p>
                Avec 25 ans en développement commercial et 15 ans dans l'accompagnement, je vous aide à vendre avec plaisir et manager sans négliger votre équilibre.
              </p>
              <p className="font-semibold text-brand-navy">
                Ma conviction : la performance durable naît du mindset, pas seulement des outils.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {credentials.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-3xl bg-white shadow-sm border border-slate-50"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-brand-navy" />
                </div>
                <div>
                  <p className="font-black text-brand-navy text-sm uppercase">{item.title}</p>
                  <p className="text-xs text-slate-400 font-medium">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 bg-brand-navy text-white rounded-full font-bold hover:bg-brand-orange transition-all shadow-xl shadow-brand-navy/20 active:scale-95"
          >
            Échanger avec Saïd
          </button>
        </motion.div>
      </div>
    </section>
  );
}

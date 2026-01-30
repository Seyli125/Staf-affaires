"use client";

import { motion } from "motion/react";
import { CheckCircle2, Award, Users, Shield, GraduationCap, Zap } from "lucide-react";
import Image from "next/image";

const credentials = [
  {
    title: "Formateur Agréé",
    description: "Formateur professionnel agréé (AFPA) depuis 2010.",
    icon: GraduationCap,
  },
  {
    title: "Expert PNL",
    description: "Technicien PNL certifié (The Society Of NLP).",
    icon: Brain,
  },
  {
    title: "RNCP Niveau 6",
    description: "Coach-consultant certifié RNCP Niveau 6 (CIC).",
    icon: Award,
  },
  {
    title: "Approche AVR®",
    description: "Spécialiste de l'approche propriétaire AVR®.",
    icon: Zap,
  },
  {
    title: "Expertise Certifiée",
    description: "+300 heures de coaching certifié réalisées.",
    icon: Users,
  },
  {
    title: "Éthique & Déontologie",
    description: "Respect strict de la charte éthique du coach.",
    icon: Shield,
  },
];

import { Brain } from "lucide-react";

export function Features() {
  return (
    <section className="py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter text-brand-navy">
              Qui suis-je ?
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p className="font-bold text-brand-orange text-xl">
                "Coach certifié en entreprise et formateur depuis 2011, j'accompagne les managers et vendeurs responsables pour atteindre leurs objectifs sans se renier ni s'épuiser."
              </p>
              <p>
                Avec 25 ans d'expérience en développement commercial et 15 ans dans l'accompagnement des organisations, j'aide les professionnels à vendre avec plaisir et responsabilité, manager sans négliger leur santé, et obtenir des résultats concrets et durables.
              </p>
              <p>
                Ma philosophie : la performance ne se joue pas dans les méthodes et les processus — elle se joue dans le <span className="font-bold text-brand-navy">mindset</span>, l'énergie et la capacité à incarner le professionnel qui impacte.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl"
          >
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/SA2_LE_upscale_prime-1769783680736.jpg?width=8000&height=8000&resize=contain"
              alt="Saïd Taaroust"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <p className="text-3xl font-black">Saïd Taaroust</p>
              <p className="text-brand-gold font-bold">Expert humaniste & Coach certifié</p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-brand-navy/5 hover:border-brand-gold/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-brand-navy/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:text-white transition-colors">
                <item.icon className="w-6 h-6 text-brand-navy group-hover:text-white" />
              </div>
              <h3 className="text-xl font-black mb-2 text-brand-navy">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

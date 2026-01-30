"use client";

import { motion } from "framer-motion";
import { Star, Quote, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Frédérique Laban-Bounayre",
    role: "Assistante chez Activ'Expertise Landes",
    date: "Janv. 2026",
    quote: "Saïd m'a accompagné à faire le point sur mon positionnement et à trouver l'équilibre vie perso/pro. Grâce à sa bienveillance et écoute, j'en ressors avec des véritables clés.",
    highlight: true,
  },
  {
    name: "Aurélie Durquet",
    role: "Sophrologue-Masseur",
    date: "Oct. 2025",
    quote: "Sa capacité à analyser ma problématique, ses outils et son expérience m'ont permis de dessiner de nouveaux contours professionnels et d'améliorer l'équilibre de mon travail.",
  },
  {
    name: "Mathilda V.",
    role: "Système & Réseau",
    date: "Avr. 2025",
    quote: "Saïd m'a accompagné au moment de ma reconversion. Sa bienveillance offre un support rassurant — le cadre idéal. Coaching 100% concluant !",
  },
  {
    name: "Charlotte Sarthou",
    role: "Directrice RH",
    date: "Mars 2025",
    quote: "Son expertise, sa pédagogie et sa capacité à créer un engagement ont fait la différence. Il sait allier théorie et mise en pratique — un véritable partenaire de confiance.",
    highlight: true,
  },
  {
    name: "Nathalie PERLATI",
    role: "Chargée d'affaires SNA",
    date: "Mars 2025",
    quote: "À chaque intervention : des échanges constructifs, une montée en compétence. Merci Said pour ton aide.",
  },
  {
    name: "Yael PELTIER COHEN",
    role: "Responsable adjointe",
    date: "Mars 2025",
    quote: "Saïd possède une grande maîtrise de son domaine et sait adapter son approche. Son professionnalisme, sa disponibilité et son enthousiasme sont remarquables.",
  },
  {
    name: "Guillaume Bourgier",
    role: "Fondateur Eventick",
    date: "Sep. 2023",
    quote: "M'a accompagné en coaching développement commercial. Cela m'a aidé à prendre du recul et mieux analyser les freins. Je recommande vivement Saïd.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="container mx-auto px-6 overflow-visible relative">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" />
                </div>
              ))}
            </div>
            <div className="h-8 w-px bg-slate-200 mx-2" />
            <div className="flex flex-col">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">Évaluation LinkedIn 5/5</span>
            </div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-brand-navy leading-[0.9] tracking-tighter uppercase"
          >
            L'excellence <br />
            <span className="text-brand-orange italic">reconnue</span> par <br />
            <span className="text-brand-navy">vos pairs.</span>
          </motion.h2>
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:max-w-sm"
        >
          <div className="p-6 bg-slate-50 rounded-[32px] border border-slate-100">
            <p className="text-base text-slate-600 leading-relaxed font-medium italic">
              "L'impact du coaching se mesure aux résultats durables et à l'épanouissement de ceux qui le vivent au quotidien."
            </p>
          </div>
        </motion.div>
      </div>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 mb-24">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              delay: index * 0.1,
              duration: 0.6,
              ease: "easeOut"
            }}
            whileHover={{ y: -5 }}
            className={`break-inside-avoid relative p-8 rounded-[32px] border transition-all duration-500 group shadow-sm ${
              item.highlight 
              ? 'bg-brand-navy text-white border-transparent shadow-3xl shadow-brand-navy/30' 
              : 'bg-white border-slate-100 hover:border-brand-orange/30 hover:shadow-2xl'
            }`}
          >
            <Quote className={`absolute top-8 right-8 w-12 h-12 transition-transform group-hover:rotate-12 duration-500 ${
              item.highlight ? 'text-white/5' : 'text-slate-50'
            }`} />
            
            <p className={`text-base leading-relaxed mb-10 relative z-10 ${
              item.highlight ? 'text-white/90 font-medium' : 'text-slate-700'
            }`}>
              "{item.quote}"
            </p>

            <div className="flex items-center gap-4 relative z-10 border-t pt-6 border-current/10">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-lg ${
                item.highlight ? 'bg-brand-orange text-white' : 'bg-brand-navy text-white'
              }`}>
                <span className="font-black text-lg italic">{item.name[0]}</span>
              </div>
              <div>
                <h4 className={`font-black uppercase tracking-tight text-sm ${
                  item.highlight ? 'text-white' : 'text-brand-navy'
                }`}>
                  {item.name}
                </h4>
                <p className={`text-[9px] font-black uppercase tracking-widest mt-1 opacity-80 ${
                  item.highlight ? 'text-brand-orange' : 'text-brand-orange'
                }`}>
                  {item.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-brand-orange rounded-[40px] p-10 md:p-16 text-white text-center shadow-3xl relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-brand-navy opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
        <h3 className="text-2xl md:text-4xl font-black mb-8 leading-tight tracking-tighter uppercase">
          Rejoignez ceux qui <br /> performent avec <span className="italic underline decoration-brand-navy decoration-4 underline-offset-8">Sens</span>.
        </h3>
        <Link href="/prendre-rendez-vous">
          <button className="bg-brand-navy text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-brand-navy transition-all transform hover:scale-105 active:scale-95 shadow-2xl text-sm">
            Commencer mon accompagnement
          </button>
        </Link>
      </motion.div>
    </section>
  );
}

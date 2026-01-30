"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Jean Dupont",
    role: "CEO, Tech Solutions",
    content: "L'accompagnement de Saïd a transformé notre vision stratégique. Sa capacité à identifier les blocages est impressionnante.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    name: "Marie Laurent",
    role: "Directrice RH, Global Corp",
    content: "Un coaching d'équipe puissant qui a soudé nos managers autour d'un objectif commun. Les résultats sont palpables.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
  },
  {
    name: "Thomas Bernard",
    role: "Fondateur, StartUp X",
    content: "Grâce à STAF AFFAIRES, j'ai retrouvé la clarté nécessaire pour scaler mon entreprise sans sacrifier mon bien-être.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            CE QUE DISENT <br />
            <span className="text-primary">NOS CLIENTS</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 relative group"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-black text-xl tracking-tight">{item.name}</h4>
                  <p className="text-sm font-bold text-primary uppercase tracking-widest">{item.role}</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground font-medium leading-relaxed italic">
                "{item.content}"
              </p>

              <div className="mt-8 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-brand-orange fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

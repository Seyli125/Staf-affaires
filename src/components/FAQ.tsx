"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Quelle est la durée des accompagnements ?",
    answer: "Chaque parcours est personnalisé. Selon vos objectifs, nous proposons généralement des cycles de 3, 4 ou 6 mois pour garantir des résultats concrets et durables.",
  },
  {
    question: "Comment se déroule une première séance ?",
    answer: "Nous commençons par un échange de découverte gratuit de 30 à 45 minutes. L'objectif est de comprendre vos enjeux, de vérifier notre compatibilité et de définir un plan d'action clair.",
  },
  {
    question: "Quel budget prévoir pour un coaching ?",
    answer: "Le budget varie selon le format (individuel, collectif, management externalisé) et la durée. Un devis sur mesure vous est proposé après notre premier échange de diagnostic.",
  },
  {
    question: "Quels résultats puis-je attendre ?",
    answer: "Une meilleure posture de leader, une augmentation de votre taux de conversion commerciale, une gestion du stress optimisée et une performance alignée avec vos valeurs.",
  },
  {
    question: "Management externalisé : c'est quoi exactement ?",
    answer: "C'est une solution flexible où j'interviens au sein de votre entreprise pour piloter vos équipes commerciales, structurer votre stratégie et assurer le suivi opérationnel sans le poids d'un recrutement fixe.",
  },
  {
    question: "L'approche AVR® : comment ça marche ?",
    answer: "L'Approche de la Vente Responsable est une méthode propriétaire qui remet l'humain et le sens au cœur du business. On apprend à vendre et manager avec impact, sans s'épuiser ni se renier.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-brand-orange" />
              <span className="text-sm font-bold uppercase tracking-widest text-brand-orange">
                FAQ
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase">
              Des réponses à vos <br />
              <span className="text-brand-orange">interrogations.</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium mb-12 max-w-md">
              Tout ce que vous devez savoir sur ma méthode, mes accompagnements et ma philosophie.
            </p>
            <div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
              <h4 className="font-black text-xl mb-4 tracking-tight uppercase">Encore un doute ?</h4>
              <p className="text-muted-foreground mb-8 font-medium">
                Si vous ne trouvez pas votre réponse ici, le plus simple reste d'en discuter de vive voix.
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform">
                Prendre rendez-vous →
              </button>
            </div>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-8 flex items-center justify-between text-left group"
                >
                  <span className={`text-lg md:text-xl font-black tracking-tight transition-colors uppercase ${openIndex === index ? 'text-brand-orange' : 'text-foreground group-hover:text-brand-orange/70'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all shrink-0 ml-4 ${openIndex === index ? 'bg-brand-orange border-brand-orange text-white rotate-180' : 'border-gray-200 text-gray-400 group-hover:border-brand-orange/50 group-hover:text-brand-orange'}`}>
                    {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-8 pb-8 text-muted-foreground text-lg font-medium leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Quelle est la durée moyenne d'un accompagnement ?",
    answer: "Tout dépend de vos besoins et de vos objectifs. Je propose généralement des parcours d'accompagnement intensifs de 3, 4 ou 6 mois pour garantir des résultats concrets et durables.",
  },
  {
    question: "Comment se déroule la première séance ?",
    answer: "Nous commençons par un entretien de découverte offert. Cet échange nous permet de faire le point sur votre situation, vos enjeux et de vérifier si mon approche correspond à vos attentes avant de définir un plan d'action.",
  },
  {
    question: "Quel budget faut-il prévoir ?",
    answer: "Le budget varie selon la nature de la mission (coaching individuel, formation en entreprise ou management externalisé) et sa durée. Un devis personnalisé vous sera remis après notre premier échange.",
  },
  {
    question: "Quels résultats puis-je espérer ?",
    answer: "Une meilleure posture de manager ou de vendeur, une augmentation de votre taux de transformation commerciale, une gestion du stress optimisée et, surtout, une performance alignée avec vos valeurs.",
  },
  {
    question: "Le management externalisé, c'est quoi exactement ?",
    answer: "C'est une solution flexible où j'interviens au sein de votre entreprise pour piloter ou co-piloter vos équipes commerciales, structurer vos processus et booster vos résultats sans le coût d'un recrutement fixe à plein temps.",
  },
  {
    question: "L'approche AVR®, comment ça marche ?",
    answer: "C'est mon approche propriétaire centrée sur l'Alignement, la Valeur et la Responsabilité. Elle permet de sortir des 'recettes magiques' pour se concentrer sur ce qui impacte réellement la performance : le mindset et l'énergie.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-gold font-bold text-sm uppercase tracking-widest">FAQ</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-navy mt-4 mb-8">
              Questions <br />
              <span className="text-brand-gold italic">Fréquentes</span>
            </h2>
            <p className="text-xl text-brand-navy/60 mb-12 max-w-md">
              Tout ce que vous devez savoir sur mes méthodes d'accompagnement et mon expertise.
            </p>
            <div className="bg-brand-offwhite p-8 rounded-3xl border border-brand-navy/5">
              <h4 className="font-bold text-xl mb-4 text-brand-navy">Besoin d'en savoir plus ?</h4>
              <p className="text-brand-navy/60 mb-6">
                Si vous ne trouvez pas votre réponse ici, n'hésitez pas à me contacter directement.
              </p>
              <Button asChild className="bg-brand-navy text-white hover:bg-brand-navy/90 rounded-full px-8">
                <a href="#contact">Me contacter</a>
              </Button>
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
                className="border-b border-brand-navy/5"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className={`text-lg font-bold transition-colors ${openIndex === index ? 'text-brand-gold' : 'text-brand-navy group-hover:text-brand-gold'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${openIndex === index ? 'bg-brand-gold border-brand-gold text-white rotate-180' : 'border-brand-navy/10 text-brand-navy/30 group-hover:border-brand-gold group-hover:text-brand-gold'}`}>
                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
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
                      <p className="pb-6 text-brand-navy/60 leading-relaxed">
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

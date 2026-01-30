"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "À qui s'adresse le coaching STAF AFFAIRES ?",
    answer: "Nos services sont conçus pour les entrepreneurs, les dirigeants de PME et les leaders d'équipes qui souhaitent franchir un cap dans leur performance, leur clarté stratégique et leur équilibre de vie.",
  },
  {
    question: "Quelle est la durée moyenne d'un accompagnement ?",
    answer: "Tout dépend de vos objectifs. Nous proposons des parcours intensifs de 3, 4 ou 6 mois, ainsi que des interventions ponctuelles pour des besoins spécifiques.",
  },
  {
    question: "Proposez-vous des séances à distance ?",
    answer: "Oui, la majorité de nos coachings individuels et mentorats peuvent être réalisés en visioconférence. Pour les coachings d'équipe, nous privilégions le présentiel pour un impact maximal.",
  },
  {
    question: "Comment se déroule la première séance ?",
    answer: "Nous commençons toujours par un appel de découverte gratuit. Cela nous permet de comprendre vos enjeux, de vérifier si nous sommes alignés et de définir les bases de notre collaboration.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">
              QUESTIONS <br />
              <span className="text-primary">FRÉQUENTES</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium mb-12 max-w-md">
              Tout ce que vous devez savoir sur nos méthodes d'accompagnement et notre expertise.
            </p>
            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
              <h4 className="font-black text-xl mb-4 tracking-tight">Besoin d'en savoir plus ?</h4>
              <p className="text-muted-foreground mb-6 font-medium">
                Si vous ne trouvez pas votre réponse ici, n'hésitez pas à nous contacter directement.
              </p>
              <button className="text-primary font-black uppercase tracking-widest text-sm hover:underline">
                Contactez-nous →
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
                className="border-b border-gray-100"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className={`text-xl font-bold tracking-tight transition-colors ${openIndex === index ? 'text-primary' : 'text-foreground group-hover:text-primary/70'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${openIndex === index ? 'bg-primary border-primary text-white rotate-180' : 'border-gray-200 text-gray-400 group-hover:border-primary/50 group-hover:text-primary'}`}>
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
                      <p className="pb-6 text-muted-foreground font-medium leading-relaxed">
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

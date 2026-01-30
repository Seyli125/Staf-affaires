"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Quelle est la durée des accompagnements ?",
    answer: "Les parcours intensifs durent généralement 3, 4 ou 6 mois selon vos objectifs et votre rythme de progression souhaité.",
  },
  {
    question: "Comment se déroule une première séance ?",
    answer: "Tout commence par une consultation gratuite de découverte. Cela nous permet de faire le point sur votre situation, d'identifier vos besoins et de vérifier si mon approche correspond à vos attentes.",
  },
  {
    question: "Quel budget faut-il prévoir ?",
    answer: "Les tarifs sont adaptés à la complexité et à la nature de l'accompagnement (individuel, collectif ou management externalisé). Un devis personnalisé et transparent est établi après notre premier échange.",
  },
  {
    question: "Quels résultats concrets puis-je attendre ?",
    answer: "Une posture de leader alignée, une meilleure gestion du stress et de l'énergie, une augmentation de votre taux de conversion commerciale et un management plus serein et impactant.",
  },
  {
    question: "Le management externalisé : c'est quoi exactement ?",
    answer: "Il s'agit du pilotage ou co-pilotage de vos équipes commerciales sur une période donnée. J'interviens pour structurer votre force de vente, former vos collaborateurs et accélérer vos résultats sans que vous ayez à recruter un directeur commercial à plein temps.",
  },
  {
    question: "L'approche AVR® : comment ça marche ?",
    answer: "L'AVR® est ma méthode propriétaire centrée sur l'Alignement, la Valeur et la Responsabilité. Elle permet de concilier haute performance commerciale et bien-être durable en travaillant d'abord sur la posture du professionnel.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-transparent">
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

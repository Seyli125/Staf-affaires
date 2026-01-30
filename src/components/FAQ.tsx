"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Quelle est la durée des accompagnements ?",
    answer: "Les parcours intensifs durent généralement 3, 4 ou 6 mois selon vos objectifs. L'approche AVR® privilégie des cycles de transformation profonds pour des résultats qui s'inscrivent dans la durée.",
  },
  {
    question: "Comment se déroule une première séance ?",
    answer: "Tout commence par une consultation de découverte gratuite de 45 minutes. C'est un audit stratégique où nous identifions vos blocages actuels et vérifions l'adéquation de mon approche avec vos ambitions.",
  },
  {
    question: "Quel budget faut-il prévoir ?",
    answer: "Les investissements sont adaptés à la nature de la mission (Coaching individuel, FORMACTION ou Management externalisé). Un devis précis et transparent est systématiquement remis après l'audit initial.",
  },
  {
    question: "Quels résultats concrets puis-je attendre ?",
    answer: "Un alignement posture/mindset, une sécurisation de vos cycles de vente, une augmentation du panier moyen et, surtout, une performance commerciale qui ne se fait plus au détriment de votre bien-être.",
  },
  {
    question: "C'est quoi exactement le management externalisé ?",
    answer: "C'est une direction commerciale 'à temps partagé'. Je pilote vos équipes, structure vos process et accélère vos ventes sans le coût d'un recrutement fixe, apportant 25 ans d'expertise B2B à votre service.",
  },
  {
    question: "L'approche AVR® : pourquoi est-ce différent ?",
    answer: "L'AVR® (Accélération, Valeur, Résilience) ne se contente pas de donner des outils. Elle travaille sur l'écologie du professionnel : être bien pour mieux faire, et durer pour mieux performer.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="container mx-auto px-6 overflow-visible relative">
      <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:sticky lg:top-32"
        >
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="w-5 h-5 text-brand-orange" />
            <span className="text-sm font-bold uppercase tracking-[0.4em] text-brand-navy/60">
              Clarification
            </span>
          </div>
          
            <h2 className="text-4xl md:text-6xl font-black text-brand-navy leading-[0.9] tracking-tighter uppercase mb-10">
              Réponses <br />
              <span className="text-brand-orange">Sans Filtre.</span>
            </h2>
            
            <p className="text-2xl text-slate-500 font-medium leading-relaxed mb-12 max-w-md">
              Parce que la clarté est la base de toute collaboration efficace. Tout ce que vous devez savoir avant de commencer.
            </p>

            <div className="bg-brand-navy p-10 rounded-[40px] text-white shadow-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 blur-3xl -mr-16 -mt-16 transition-colors" />
              <h4 className="font-black text-2xl mb-4 uppercase tracking-tight">Une autre question ?</h4>
              <p className="text-white/60 mb-8 font-medium leading-relaxed">
                Votre situation est unique. Parlons-en directement pour lever tous vos doutes.
              </p>
              <Link href="/prendre-rendez-vous">
                <button className="flex items-center gap-3 text-brand-orange font-black uppercase tracking-[0.2em] text-xs hover:text-white transition-colors group/link">
                  Réserver mon créneau <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-[32px] border transition-all duration-500 ${
                openIndex === index 
                ? 'bg-slate-50 border-slate-100 shadow-lg' 
                : 'bg-white border-transparent hover:border-slate-100'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-8 flex items-center justify-between text-left group"
              >
                <span className={`text-xl font-black uppercase tracking-tight transition-colors ${
                  openIndex === index ? 'text-brand-navy' : 'text-slate-500 group-hover:text-brand-navy'
                }`}>
                  {faq.question}
                </span>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  openIndex === index 
                  ? 'bg-brand-navy text-white rotate-180' 
                  : 'bg-slate-50 text-slate-400 group-hover:bg-brand-orange/10 group-hover:text-brand-orange'
                }`}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8">
                      <div className="h-px w-12 bg-brand-orange/30 mb-6" />
                      <p className="text-lg text-slate-600 font-medium leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

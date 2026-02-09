"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    question: "Puis-je devenir un bon commercial alors que je n'ai pas fait d'études commerciales et que je suis introverti ?",
    answer: "Un grand oui ! Être introverti est un état d'esprit : on puise son énergie dans la solitude. Les introvertis développent davantage de qualités d'écoute, essentielles pour comprendre les problèmes et enjeux des prospects. La démarche commerciale repose sur des process simples et s'apprend en pratiquant, ce qui permet de développer sa posture.",
  },
  {
    question: "Qu'est-ce que l'ART de la Vente Responsable ?",
    answer: "En affaires, la performance et les résultats sont indispensables. Les vendeurs responsables considèrent que la performance découle directement de méthodes vertueuses. Ils privilégient des actions et une posture qui créent des relations solides et durables. La confiance est l'ingrédient principal pour des partenariats durables et des clients satisfaits qui reviennent et deviennent ambassadeurs. L'AVR® (L'Art de la Vente Responsable) favorise : des relations interpersonnelles qualitatives, l'engagement et la confiance des prospects, le développement de la motivation des vendeurs, l'augmentation de la fidélisation et des recommandations, la réduction des pertes liées à la prospection froide et aux avis négatifs, la diminution du turnover, le respect des obligations RGPD.",
  },
  {
    question: "J'ai une bonne expérience en vente, que peut m'apporter la démarche AVR ?",
    answer: "L'AVR complète les approches traditionnelles. Elle permet de faire le point sur sa posture, développer des soft skills et entraîner son mental pour dépasser ses freins (motivation, affirmation de soi…).",
  },
  {
    question: "Je ne me sens pas à l'aise dans la démarche commerciale, suivre mes ressentis est-ce être aligné avec mes valeurs ?",
    answer: "Les ressentis indiquent qu'il y a quelque chose à explorer. Ne pas tirer de conclusions hâtives permet de dépasser les croyances limitantes et de trouver sa vraie vocation.",
  },
  {
    question: "La Vente Responsable est-elle compatible avec les exigences économiques et les forts enjeux commerciaux ?",
    answer: "Oui. L'AVR tient compte des résultats tout en renforçant la confiance, la fidélisation, les recommandations et la motivation des commerciaux.",
  },
  {
    question: "Pourquoi les formations STAF Affaires ne sont pas prises en charge par les OPCO ?",
    answer: "Après plus de 10 ans d'expérience et de normes (Datadock, Qualiopi…), nous faisons un choix responsable : simplifier, former et transformer plutôt que suivre une complexité inutile.",
  },
  {
    question: "Qu'est-ce que la FormAction et quelle différence avec une formation classique ?",
    answer: "Les études montrent qu'une formation traditionnelle a un faible taux de rétention. Nos programmes privilégient l'application et l'entraînement, avec des séances courtes et un suivi sur le moyen terme, pour développer de nouvelles habitudes efficacement.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="container mx-auto px-6 overflow-visible relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-4 h-4 text-brand-orange" />
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-brand-navy/60">
                FAQ
              </span>
            </div>
            
              <h2 className="text-3xl md:text-5xl font-black text-brand-navy leading-[0.9] tracking-tighter uppercase mb-8">
                Questions <br />
                <span className="text-brand-orange">Fréquentes</span>
              </h2>
              
              <p className="text-lg text-slate-500 font-medium leading-relaxed mb-10 max-w-md">
                Tout ce que vous devez savoir sur l'approche AVR® et nos accompagnements.
              </p>

              <div className="bg-brand-navy p-8 rounded-[32px] text-white shadow-3xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/20 blur-3xl -mr-12 -mt-12 transition-colors" />
                <h4 className="font-black text-xl mb-3 uppercase tracking-tight">Une autre question ?</h4>
                <p className="text-white/60 mb-6 font-medium leading-relaxed text-sm">
                  Votre situation est unique. Parlons-en directement pour lever tous vos doutes.
                </p>
                <Link href="/prendre-rendez-vous">
                  <button className="flex items-center gap-3 text-brand-orange font-black uppercase tracking-[0.2em] text-[10px] hover:text-white transition-colors group/link">
                    Réserver mon créneau <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`rounded-[24px] border transition-all duration-500 ${
                  openIndex === index 
                  ? 'bg-slate-50 border-slate-100 shadow-lg' 
                  : 'bg-white border-transparent hover:border-slate-100'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left group"
                >
                  <span className={`text-sm font-black uppercase tracking-tight transition-colors pr-4 ${
                    openIndex === index ? 'text-brand-navy' : 'text-slate-500 group-hover:text-brand-navy'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 shrink-0 ${
                    openIndex === index 
                    ? 'bg-brand-navy text-white rotate-180' 
                    : 'bg-slate-50 text-slate-400 group-hover:bg-brand-orange/10 group-hover:text-brand-orange'
                  }`}>
                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
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
                      <div className="px-6 pb-6">
                        <div className="h-px w-10 bg-brand-orange/30 mb-4" />
                        <p className="text-sm text-slate-600 font-medium leading-relaxed">
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

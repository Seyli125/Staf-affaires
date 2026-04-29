"use client";

import { motion } from "framer-motion";
import { HelpCircle, ArrowRight, Sparkles, MessageCircle, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useReducedMotion } from "@/lib/animations";

const ease = [0.2, 0.9, 0.2, 1] as const;
const easeOut = [0.16, 1, 0.3, 1] as const;

const quickQuestions = [
  "Comment se déroule un premier rendez-vous ?",
  "Quelle est la durée d'un accompagnement ?",
  "Quels résultats puis-je espérer ?",
];

export function FAQ() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="faq" className="">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 max-w-[1280px]">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
        >
              <motion.div
                  className="relative rounded-3xl overflow-hidden"
                initial={reducedMotion ? false : { opacity: 0, scale: 1.02 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: easeOut }}
            >
            <div className="absolute inset-0 bg-brand-navy" />
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full -mr-40 -mt-40 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,107,74,0.15) 0%, transparent 70%)" }} />
            <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full -ml-30 -mb-30 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,142,117,0.1) 0%, transparent 70%)" }} />
            
            <div className="absolute inset-0 opacity-[0.03]">
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="relative z-10 p-8 sm:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                
                <div className="text-center lg:text-left">
                  <motion.div
                      initial={reducedMotion ? false : { opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, duration: 0.5, ease: easeOut }}
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-2 mb-6"
                  >
                    <HelpCircle className="w-4 h-4 text-brand-orange" />
                    <span className="text-white/80 font-semibold text-xs tracking-wide">Questions fréquentes</span>
                  </motion.div>

                  <motion.h2
                    initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.7, ease }}
                    className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.15] tracking-tight mb-4"
                  >
                      Des questions sur{" "}
                      <span className="text-brand-orange italic">l'approche AVR®</span> ?
                  </motion.h2>

                  <motion.p
                    initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6, ease }}
                    className="text-base sm:text-lg text-white/60 mb-6 max-w-md mx-auto lg:mx-0"
                  >
                    Découvrez nos réponses aux questions les plus fréquentes 
                    sur nos méthodes et accompagnements.
                  </motion.p>

                  <div className="space-y-2 mb-8">
                    {quickQuestions.map((q, i) => (
                      <motion.div
                        key={i}
                        initial={reducedMotion ? false : { opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.5, ease }}
                        className="flex items-center gap-2 text-white/50 text-sm"
                      >
                        <ChevronRight className="w-4 h-4 text-brand-orange" />
                        <span>{q}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div
                  initial={reducedMotion ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.7, ease }}
                  className="flex flex-col gap-4 lg:pl-8"
                >
                  <Link href="/faq" className="block">
                    <button className="cta-magnetic touch-ripple w-full flex items-center justify-center gap-3 bg-brand-orange hover:bg-white hover:text-brand-navy text-white px-6 py-4 rounded-2xl font-semibold text-sm shadow-lg transition-all duration-300 group">
                      <Sparkles className="w-5 h-5" />
                      Consulter la FAQ complète
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                  
                  <Link href="/prendre-rendez-vous" className="block">
                    <button className="cta-magnetic w-full flex items-center justify-center gap-3 bg-white/10 text-white px-6 py-4 rounded-2xl font-semibold text-sm border border-white/10 hover:bg-white/20 transition-all duration-300">
                      <MessageCircle className="w-5 h-5" />
                      Poser une question directement
                    </button>
                  </Link>
                  
                  <div className="flex items-center justify-center gap-2 text-white/40 text-xs mt-2">
                    <span>Réponse sous 24h</span>
                    <span>•</span>
                    <span>Gratuit</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

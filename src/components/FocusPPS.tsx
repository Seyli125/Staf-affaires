"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Compass, Brain, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useReducedMotion } from "@/lib/animations";

const ease = [0.2, 0.9, 0.2, 1] as const;
const easeOut = [0.16, 1, 0.3, 1] as const;

const volets = [
  { number: 1, title: "Ancrer votre légitimité", description: "Développez une posture de Leader alignée avec votre personnalité et évitez les pièges de la sur-adaptation et de l\u2019isolement.", icon: Shield },
  { number: 2, title: "Structurer votre cadre", description: "Mettez en place un cadre managérial clair. Installez dès le départ des habitudes efficaces et durables.", icon: Compass },
  { number: 3, title: "Muscler votre mental", description: "Intégrez l\u2019Intelligence Émotionnelle et les outils de préparation mentale pour grandir et faire grandir vos équipes.", icon: Brain },
];

const benefices = [
  "ça coûte moins cher humainement et financièrement qu\u2019un turnover,",
  "ça sécurise les équipes,",
  "ça optimise la performance durable de l\u2019organisation,",
  "ça favorise la cohésion et le plaisir de travailler ensemble.",
];

export function FocusPPS() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reducedMotion = useReducedMotion();

  const show = inView && !reducedMotion;
  const instant = reducedMotion;

  return (
    <section id="focus-pps" className="relative">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 max-w-[1280px] relative z-10">
        <motion.div
          ref={ref}
          initial={instant ? false : { opacity: 0, y: 50, scale: 0.98 }}
          animate={show ? { opacity: 1, y: 0, scale: 1 } : instant ? { opacity: 1 } : {}}
          transition={{ duration: 0.9, ease }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-brand-navy" />

          <div className="relative z-10 p-5 sm:p-12 lg:p-14">
              <motion.div
                initial={instant ? false : { opacity: 0, x: -20 }}
                animate={show ? { opacity: 1, x: 0 } : instant ? { opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.7, ease: easeOut }}
              className="inline-flex items-center gap-2.5 mb-5 px-3.5 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/10"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
              <span className="text-brand-orange text-[11px] font-bold tracking-[0.18em] uppercase">Programme PPS®</span>
            </motion.div>

          <motion.h3
            initial={instant ? false : { opacity: 0, y: 20 }}
            animate={show ? { opacity: 1, y: 0 } : instant ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease }}
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-[1.15] tracking-tight"
            >
              Focus <span className="text-brand-orange italic">Opérationnel PPS®</span>
            </motion.h3>

            <motion.div
              initial={instant ? false : { opacity: 0, y: 15 }}
              animate={show ? { opacity: 1, y: 0 } : instant ? { opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white/55 text-[15px] mb-8 max-w-xl leading-relaxed"
            >
              <p className="mb-1">
                <span className="text-white/80 font-semibold">Prendre son Poste Sereinement en 3 Volets</span>
              </p>
              <p className="italic text-white/45">
                Pour devenir un manager légitime, confiant et influent en 4 mois
              </p>
            </motion.div>

              {/* 3 Volets — card-tilt cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
              {volets.map((volet, i) => {
                const Icon = volet.icon;
                return (
                  <motion.div
                    key={volet.number}
                    initial={instant ? false : { opacity: 0, y: 30, scale: 0.96 }}
                    animate={show ? { opacity: 1, y: 0, scale: 1 } : instant ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.12, duration: 0.7, ease }}
                      className="group/card relative bg-white/[0.04] rounded-xl p-4 sm:p-5 border border-white/[0.06] hover:bg-white/[0.08] hover:border-brand-orange/20 transition-all duration-200 ease-out"
                    style={{ transform: "translateZ(0)" }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl bg-gradient-to-r from-brand-orange to-brand-orange/40 scale-x-0 group-hover/card:scale-x-100 origin-left transition-transform duration-300 ease-out" />

                    <div className="flex items-center gap-3 mb-3">
                      <motion.div
                        className="w-9 h-9 rounded-lg bg-brand-orange/15 flex items-center justify-center shrink-0"
                        initial={instant ? false : { scale: 0, rotate: -30 }}
                        animate={show ? { scale: 1, rotate: 0 } : instant ? {} : {}}
                        transition={{ duration: 0.4, delay: 0.6 + i * 0.12, ease: [0.34, 1.56, 0.64, 1] }}
                      >
                        <Icon className="w-[18px] h-[18px] text-brand-orange" />
                      </motion.div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-orange/60">Volet {volet.number}</span>
                        <h4 className="text-[14px] font-bold text-white leading-tight">{volet.title}</h4>
                      </div>
                    </div>

                    <p className="text-[13px] text-white/50 leading-relaxed">{volet.description}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.p
              initial={instant ? false : { opacity: 0 }}
              animate={show ? { opacity: 1 } : instant ? { opacity: 1 } : {}}
              transition={{ delay: 0.85, duration: 0.5 }}
              className="text-white/50 text-[13px] italic mb-6"
            >
              Parce qu&apos;un manager aligné, outillé et accompagné fait toute la différence.
            </motion.p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefices.map((b, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 bg-white/[0.04] p-3.5 rounded-xl border border-white/[0.06] hover:bg-white/[0.08] hover:border-brand-orange/15 transition-all duration-200"
                  style={{ transform: "translateZ(0)" }}
                  initial={instant ? false : { opacity: 0, y: 16 }}
                  animate={show ? { opacity: 1, y: 0 } : instant ? { opacity: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.9 + i * 0.08, ease }}
                >
                  <div className="w-6 h-6 rounded-lg bg-brand-orange/20 flex items-center justify-center text-brand-orange font-bold text-[11px] shrink-0 mt-0.5">{i + 1}</div>
                  <span className="text-[13px] font-medium text-white/70 leading-relaxed">{b}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={instant ? false : { opacity: 0, y: 15 }}
              animate={show ? { opacity: 1, y: 0 } : instant ? { opacity: 1 } : {}}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <Link href="/prendre-rendez-vous">
                <button className="cta-magnetic touch-ripple relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm text-white overflow-hidden active:scale-[0.97] group" style={{ transform: "translateZ(0)" }}>
                  <div className="absolute inset-0 bg-brand-orange" />
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
                  <span className="relative z-10">Réserver un entretien découverte</span>
                  <ArrowRight className="relative z-10 w-4 h-4" />
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

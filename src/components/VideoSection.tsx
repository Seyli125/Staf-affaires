"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Play, ArrowRight, Video, X, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useReducedMotion } from "@/lib/animations";

const ease = [0.2, 0.9, 0.2, 1] as const;
const easeOut = [0.16, 1, 0.3, 1] as const;

export function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const reducedMotion = useReducedMotion();

  return (
    <section ref={sectionRef} id="video" className="section-vignette">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 max-w-[1280px]">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <motion.div
              initial={reducedMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: easeOut }}
              className="h-[2px] bg-brand-orange mb-6 w-12"
              style={{ transformOrigin: "left" }}
            />

            <div className="flex items-center gap-2 mb-4">
              <Video className="w-4 h-4 text-brand-orange" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400 dark:text-white/40">
                Immersion &amp; M&eacute;thode
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy dark:text-white leading-tight mb-5">
              La preuve{" "}
              <span className="text-brand-orange">par l&apos;impact</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-500 dark:text-white/50 leading-relaxed mb-6 max-w-md">
              D&eacute;couvrez en vid&eacute;o comment l&apos;approche STAF AFFAIRES transforme
              le leadership et la croissance des entreprises B2B.
            </p>

            {/* Citation */}
            <div className="relative pl-5 border-l-2 border-brand-orange/30 mb-6">
              <p className="text-sm italic text-slate-600 dark:text-white/60 leading-relaxed">
                &quot;Le succ&egrave;s n&apos;est pas la cl&eacute; du bonheur.
                Le bonheur est la cl&eacute; du succ&egrave;s.&quot;
              </p>
              <span className="text-xs text-brand-orange font-medium mt-2 block">
                &mdash; Albert Schweitzer
              </span>
            </div>

            {/* Proof pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { icon: Users, label: "1 000+ spectateurs" },
                { label: "Masterclass Paris 2025" },
                { label: "98% de satisfaction" },
              ].map((pill, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold bg-brand-navy/[0.05] dark:bg-white/[0.06] text-brand-navy/60 dark:text-white/55 border border-brand-navy/[0.07] dark:border-white/[0.08]"
                >
                  {pill.icon && <pill.icon className="w-3 h-3 text-brand-orange" />}
                  {pill.label}
                </span>
              ))}
            </div>

            <Button
              variant="outline"
              className="cta-magnetic rounded-full border-2 border-brand-navy dark:border-white/20 text-brand-navy dark:text-white font-semibold hover:bg-brand-navy hover:text-white dark:hover:bg-white dark:hover:text-brand-navy transition-all duration-300 px-6 py-3 text-sm group"
            >
              Plus de vid&eacute;os
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Right Video Area — no scroll-driven parallax */}
          <div className="relative">
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
              className="relative group"
            >
              <div className="absolute -inset-3 border border-brand-orange/10 rounded-3xl" />

              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl dark:shadow-black/40 bg-brand-navy">
                <Image
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200"
                  alt="Sa\u00efd Taaroust en conf\u00e9rence"
                  fill
                  className="object-cover opacity-80"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="video-play-btn relative"
                    aria-label="Lancer la vidéo"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-brand-orange rounded-full flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                    </div>
                    <span className="absolute inset-0 bg-brand-orange rounded-full opacity-30" />
                    <span className="absolute inset-[-8px] border-2 border-white/20 rounded-full" />
                  </button>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 bg-gradient-to-t from-brand-navy via-brand-navy/80 to-transparent">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">Performer sans s&apos;&eacute;puiser</h3>
                      <p className="text-white/60 text-sm font-medium">Session Masterclass &mdash; Paris 2025</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-navy bg-slate-200 overflow-hidden">
                            <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="" loading="lazy" width={32} height={32} className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                      <div className="w-8 h-8 rounded-full border-2 border-brand-navy bg-brand-orange flex items-center justify-center">
                        <span className="text-[9px] font-bold text-white">+1k</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-4 left-4 bg-black/40 text-white px-3 py-1.5 rounded-full text-xs font-semibold border border-white/10 flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  Live disponible
                </div>
              </div>

              {/* Floating stat badge */}
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute -bottom-6 -right-6 bg-white dark:bg-[#2C2C2E] p-5 rounded-xl shadow-xl dark:shadow-black/30 border border-slate-100 dark:border-white/10 hidden lg:block"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-navy dark:text-white">98%</div>
                  <div className="text-xs font-medium text-slate-400 dark:text-white/40 mt-1">Satisfaction</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsPlaying(false)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            onClick={() => setIsPlaying(false)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-white/50">
              <p>Vid&eacute;o en cours de chargement&hellip;</p>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
}

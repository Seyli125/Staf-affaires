"use client";

import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Award, Users, Zap, Brain, ArrowRight, Star, Target, Lightbulb, TrendingUp, MessageCircle, Briefcase } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useReducedMotion } from "@/lib/animations";

const ease = [0.2, 0.9, 0.2, 1] as const;
const easeOut = [0.16, 1, 0.3, 1] as const;

const stats = [
  { number: 25, label: "Années d'expertise terrain", suffix: "+", prefix: "" },
  { number: 12, label: "Années de management opérationnel", suffix: "", prefix: "" },
  { number: 15, label: "Années de formation & coaching", suffix: "+", prefix: "" },
];

function AnimatedNumber({ value, suffix, prefix }: { value: number; suffix: string; prefix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionVal = useMotionValue(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView || reducedMotion) {
      if (ref.current) ref.current.textContent = `${prefix}${value}${suffix}`;
      return;
    }
    const controls = animate(motionVal, value, {
      duration: 1.4,
      ease: [0.25, 0.1, 0.25, 1],
    });
    const unsubscribe = motionVal.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${prefix}${Math.round(v)}${suffix}`;
    });
    return () => {
      controls.stop();
      unsubscribe();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

const piliers = [
  { icon: Brain, label: "Préparation Mentale & Intelligence Émotionnelle" },
  { icon: Lightbulb, label: "Programmation Neuro-Linguistique (PNL)" },
  { icon: Star, label: "Approche Talents" },
  { icon: MessageCircle, label: "Communication Non Violente" },
  { icon: Briefcase, label: "Outils de coaching professionnel" },
];

const confiance = [
  { icon: TrendingUp, label: "25+ ans d'expérience terrain" },
  { icon: Target, label: "Approche holistique & sur-mesure" },
  { icon: Users, label: "Environnements variés (PME, ETI, grands groupes)" },
];

const viewport = { once: true, margin: "-60px" } as const;

export function Features() {
  const reducedMotion = useReducedMotion();

  const fadeUp = (delay = 0) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 } as const,
          whileInView: { opacity: 1, y: 0 },
          viewport,
          transition: { duration: 0.55, delay, ease },
        };

  return (
      <section id="biographie" className="relative overflow-hidden py-12 sm:py-16 lg:py-20 section-vignette">
      <div className="absolute inset-0 bg-transparent dark:bg-[#1C1C1E]" />
      {/* Subtle warm texture — top right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-[0.03]" style={{ background: "radial-gradient(circle at top right, #ff6b4a, transparent 70%)" }} />

      <div className="mx-auto px-6 sm:px-8 lg:px-12 max-w-[1280px] relative">

        {/* HEADER */}
        <motion.div {...fadeUp(0)} className="text-center mb-10 sm:mb-14 lg:mb-16">
          <span className="inline-block text-brand-orange text-[11px] font-semibold tracking-[0.25em] uppercase mb-5">
            Biographie
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy dark:text-white leading-[1.15] tracking-tight max-w-3xl mx-auto">
            Toute performance durable est le résultat d&apos;une{" "}
            <span className="text-brand-orange italic">transformation intérieure</span>
          </h2>
          <p className="mt-5 text-slate-500 dark:text-white/50 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Les compétences et les méthodes ne suffisent pas... Il faut se connaître, se pratiquer, se trans-former. C'EST DU VÉCU !
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <motion.div
              className="w-16 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent"
              initial={reducedMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewport}
              transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
            />
            <span className="text-sm font-medium text-slate-400 dark:text-white/40 tracking-wide">Saïd Taaroust</span>
            <motion.div
              className="w-16 h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent"
              initial={reducedMotion ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewport}
              transition={{ duration: 0.8, delay: 0.4, ease: easeOut }}
            />
          </div>
        </motion.div>

        {/* PORTRAIT + INTRO */}
          <div className="grid lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 items-start mb-12 sm:mb-16 lg:mb-20">

          {/* Photo */}
          <motion.div
            {...fadeUp(0.05)}
            className="relative mx-auto lg:mx-0 w-52 sm:w-60 lg:w-72 shrink-0"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl border border-brand-orange/10" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl dark:shadow-black/40">
                <Image
                  src="/images/said-casual.jpg"
                  alt="Saïd Taaroust - Coach Business & Préparateur Mental"
                  width={288}
                  height={360}
                  className="w-full h-auto aspect-[4/5] object-cover"
                  sizes="(max-width: 640px) 208px, (max-width: 1024px) 240px, 288px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent" />
              </div>
              <motion.div
                {...fadeUp(0.3)}
                className="absolute -bottom-3 -right-3 bg-white dark:bg-[#2C2C2E] px-3 py-2 rounded-xl shadow-lg dark:shadow-black/20 border border-slate-100 dark:border-white/10 flex items-center gap-2"
              >
                <Award className="w-4 h-4 text-brand-orange" />
                <span className="text-xs font-bold text-brand-navy dark:text-white">Certifié RNCP</span>
              </motion.div>
            </div>
            <div className="mt-6 text-center lg:text-left">
              <p className="text-base font-bold text-brand-navy dark:text-white">Saïd Taaroust</p>
              <p className="text-xs text-slate-400 dark:text-white/40 mt-1">Coach &middot; Formateur &middot; Préparateur mental</p>
            </div>
          </motion.div>

          {/* Intro text */}
          <motion.div
            {...fadeUp(0.1)}
            className="space-y-5"
          >
            <div>
              <motion.div
                initial={reducedMotion ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: 0.2, ease: easeOut }}
                className="h-[2px] bg-brand-orange mb-4 w-12"
                style={{ transformOrigin: "left" }}
              />
              <span className="inline-block text-brand-orange text-[11px] font-semibold tracking-[0.2em] uppercase mb-3">
                Le Parcours
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-brand-navy dark:text-white leading-[1.2] tracking-tight">
                Forgé par{" "}
                <span className="text-brand-orange italic">le terrain</span>,{" "}
                passionné par{" "}
                <span className="text-brand-orange italic">les sciences humaines</span>{" "}
                et l&apos;entrepreneuriat
              </h3>
            </div>

              {/* Version A — Desktop : aérée, intertitres, emphases */}
              <div className="hidden sm:block space-y-5">
                <div>
                  <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-brand-orange/70 mb-1.5 block">25 ans de terrain</span>
                  <p className="text-slate-600 dark:text-white/60 leading-[1.8] text-[15px] lg:text-base">
                    <span className="text-brand-navy dark:text-white font-semibold">Coach certifié RNCP, formateur professionnel depuis 2011 et préparateur mental</span> — Saïd Taaroust cumule{" "}
                    <span className="font-semibold text-brand-navy dark:text-white">25 ans d&apos;expériences dans des univers variés</span> :{" "}
                    vendeur expert, manager de centre de profits, chargé d&apos;affaires, consultant en entreprise et entrepreneur.
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-brand-orange/70 mb-1.5 block">La naissance de STAF Affaires</span>
                  <p className="text-slate-600 dark:text-white/60 leading-[1.8] text-[15px] lg:text-base">
                    Après <span className="font-semibold text-brand-navy dark:text-white">10 ans à la Chambre de Commerce et d&apos;Industrie</span>, il fonde en 2025 la société{" "}
                    <span className="text-brand-orange font-semibold">STAF Affaires</span> avec pour ambition de partager ses 2 terrains de jeu :{" "}
                    <span className="italic">l&apos;Art de la Vente Responsable</span> et <span className="italic">la prise de poste des managers</span>.
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-brand-orange/70 mb-1.5 block">Une posture d&apos;allié</span>
                  <p className="text-slate-600 dark:text-white/60 leading-[1.8] text-[15px] lg:text-base">
                    Saïd ne se positionne jamais en <span className="italic">expert distant</span>. Il prend le rôle d&apos;allié, pas d&apos;un sachant —{" "}
                    avec <span className="font-semibold text-brand-navy dark:text-white">l&apos;exigence de celui qui connaît le terrain</span> et{" "}
                    <span className="font-semibold text-brand-navy dark:text-white">la bienveillance de celui qui comprend les enjeux humains</span>.
                  </p>
                </div>
              </div>

              {/* Version B — Mobile : sauts de ligne fréquents, lecture rapide */}
              <div className="sm:hidden space-y-4">
                <p className="text-slate-600 dark:text-white/60 leading-[1.9] text-[14px]">
                  <span className="text-brand-navy dark:text-white font-semibold block mb-0.5">Coach certifié RNCP · Formateur depuis 2011 · Préparateur mental</span>
                  25 ans d&apos;expériences terrain :<br />
                  vendeur expert, manager, chargé d&apos;affaires,<br />
                  consultant et entrepreneur.
                </p>

                <p className="text-slate-600 dark:text-white/60 leading-[1.9] text-[14px]">
                  10 ans à la CCI.<br />
                  En 2025, il fonde <span className="text-brand-orange font-semibold">STAF Affaires</span> pour partager<br />
                  ses 2 terrains de jeu :<br />
                  <span className="italic">l&apos;Art de la Vente Responsable</span><br />
                  <span className="italic">et la prise de poste des managers.</span>
                </p>

                <p className="text-slate-600 dark:text-white/60 leading-[1.9] text-[14px]">
                  Pas un expert distant.<br />
                  Un allié — pas un sachant.<br />
                  <span className="font-semibold text-brand-navy dark:text-white">L&apos;exigence du terrain.</span>{" "}
                  <span className="font-semibold text-brand-navy dark:text-white">La bienveillance des enjeux humains.</span>
                </p>
              </div>

            {/* Stats */}
              <div className="grid grid-cols-3 gap-3 pt-3">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    {...fadeUp(0.25 + i * 0.08)}
                    className="text-center py-4 rounded-xl border transition-colors duration-200"
                    style={{ background: i === 0 ? "linear-gradient(135deg, rgba(255,107,74,0.06) 0%, rgba(255,107,74,0.02) 100%)" : "rgba(10,25,47,0.03)", borderColor: i === 0 ? "rgba(255,107,74,0.15)" : "rgba(10,25,47,0.06)" }}
                  >
                    <div className="text-xl sm:text-2xl font-black text-brand-navy dark:text-white" style={i === 0 ? { background: "linear-gradient(135deg, #ff6b4a 0%, #e85d35 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" } : {}}>
                      <AnimatedNumber value={stat.number} suffix={stat.suffix} prefix={stat.prefix} />
                    </div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 dark:text-white/45 mt-1 px-2 leading-snug">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
          </motion.div>
        </div>

        {/* CITATION + CONVICTION */}
        <motion.div {...fadeUp(0)} className="mb-10 sm:mb-14 lg:mb-16 max-w-3xl mx-auto">
          <div className="flex flex-col gap-5">
            <div className="group relative flex items-start gap-4 sm:gap-5">
              <div className="shrink-0 mt-1">
                <div className="w-9 h-9 rounded-full bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-brand-orange" />
                </div>
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-orange/70 mb-1.5 block">Engagement</span>
                <p className="text-brand-navy dark:text-white/90 text-sm sm:text-[15px] leading-[1.75] font-medium italic">
                  &laquo;&nbsp;Créer, transmettre et accompagner les autres sont les motivations qui me guident depuis plus de 20 ans&nbsp;&raquo;
                </p>
              </div>
            </div>

            <div className="ml-[1.125rem] w-px h-4 bg-gradient-to-b from-brand-orange/20 to-transparent" />

            <div className="group relative flex items-start gap-4 sm:gap-5">
              <div className="shrink-0 mt-1">
                <div className="w-9 h-9 rounded-full bg-brand-orange/10 flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors duration-300">
                  <div className="w-2 h-2 rounded-full bg-brand-orange" />
                </div>
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-orange/70 mb-1.5 block">Conviction</span>
                <p className="text-brand-navy dark:text-white/90 text-sm sm:text-[15px] leading-[1.75] font-medium italic">
                  &laquo;&nbsp;Tout le monde sait comment faire… Peu savent comment être et durer sans s'épuiser.&nbsp;&raquo;
                </p>
                <p className="mt-1.5 text-slate-500 dark:text-white/45 text-xs sm:text-sm leading-relaxed">
                  Le Mindset et l&apos;Intelligence émotionnelle priment sur les méthodes et les outils.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PILIERS METHODOLOGIQUES */}
        <motion.div {...fadeUp(0)} className="mb-12 sm:mb-16 lg:mb-20 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block text-brand-orange text-[11px] font-semibold tracking-[0.25em] uppercase mb-3">Fondations</span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-brand-navy dark:text-white leading-[1.15] tracking-tight mb-3">
              Une approche fondée sur une posture et{" "}
              <span className="text-brand-orange italic">des outils essentiels</span>
            </h3>
            <p className="text-slate-500 dark:text-white/50 text-sm sm:text-base max-w-xl mx-auto">
              J&apos;adapte ces outils en fonction de votre personnalité, de votre contexte et de vos objectifs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {piliers.map((item, i) => (
              <motion.div
                key={i}
                {...fadeUp(0.08 + i * 0.06)}
                className="group relative bg-white dark:bg-[#2C2C2E] rounded-xl p-5 sm:p-6 border border-slate-100 dark:border-white/10 hover:border-brand-orange/25 dark:hover:border-brand-orange/25 transition-all duration-300 shadow-sm hover:shadow-md text-center"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-orange/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-orange/15 transition-colors duration-300">
                  <item.icon className="w-5 h-5 text-brand-orange" />
                </div>
                <span className="text-[13px] sm:text-sm font-semibold text-brand-navy dark:text-white leading-snug block">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

          {/* CTA */}
        <motion.div {...fadeUp(0)} className="text-center">
          <Link href="/prendre-rendez-vous">
            <button className="cta-magnetic touch-ripple group inline-flex items-center gap-3 px-8 py-4 bg-brand-navy text-white rounded-full font-semibold text-sm hover:bg-brand-orange transition-colors duration-300 shadow-lg hover:shadow-xl">
              Échanger avec Saïd
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
          <p className="mt-4 text-sm text-slate-400 dark:text-white/40">
            45 min &middot; Gratuit &middot; Sans engagement
          </p>
        </motion.div>

      </div>
    </section>
  );
}

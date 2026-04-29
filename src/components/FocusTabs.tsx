"use client";

import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Target, GraduationCap, Shield, Compass, Brain, ArrowRight,
  TrendingUp, TrendingDown, Zap, Repeat2, Flame,
} from "lucide-react";
import Link from "next/link";
import { useReducedMotion } from "@/lib/animations";

const ease = [0.2, 0.9, 0.2, 1] as const;
const easeOut = [0.16, 1, 0.3, 1] as const;

/* ─── AVR data ─────────────────────────────────────────────────────────────── */
const leviers = [
  {
    n: "1",
    text: <>La <span className="text-white/90 font-medium">connaissance et la conscience de soi</span> (ses talents et ses blocages)</>,
    textLight: <>La <span className="text-brand-navy/90 font-medium">connaissance et la conscience de soi</span> (ses talents et ses blocages)</>,
  },
  {
    n: "2",
    text: <>La <span className="text-white/90 font-medium">capacité à passer à l&apos;action</span> (même quand c&apos;est inconfortable)</>,
    textLight: <>La <span className="text-brand-navy/90 font-medium">capacité à passer à l&apos;action</span> (même quand c&apos;est inconfortable)</>,
  },
  {
    n: "3",
    text: <>Le <span className="text-white/90 font-medium">développement de la confiance</span> (en soi, en sa solution et en les autres)</>,
    textLight: <>Le <span className="text-brand-navy/90 font-medium">développement de la confiance</span> (en soi, en sa solution et en les autres)</>,
  },
  {
    n: "4",
    text: <>La <span className="text-white/90 font-medium">mobilisation et la gestion de son énergie</span> (compétences émotionnelles)</>,
    textLight: <>La <span className="text-brand-navy/90 font-medium">mobilisation et la gestion de son énergie</span> (compétences émotionnelles)</>,
  },
];

const objectifs = [
  {
    icon: Zap,
    label: "Posture AVR®",
    sub: "en moins de 3 mois",
    color: "#ff6b4a",
  },
  {
    icon: TrendingUp,
    label: "Ratio propositions",
    sub: "sans s'épuiser",
    color: "#C5A059",
  },
  {
    icon: Repeat2,
    label: "Taux de conversion",
    sub: "sans prospecter plus",
    color: "#4ade80",
  },
  {
    icon: Flame,
    label: "Motivation",
    sub: "vous & vos équipes",
    color: "#818cf8",
  },
];

/* ─── PPS data ─────────────────────────────────────────────────────────────── */
const volets = [
  { number: 1, title: "Ancrer votre légitimité", description: "Développez une posture de Leader alignée avec votre personnalité et évitez les pièges de la sur-adaptation et de l'isolement.", icon: Shield },
  { number: 2, title: "Structurer votre cadre", description: "Mettez en place un cadre managérial clair. Installez dès le départ des habitudes efficaces et durables.", icon: Compass },
  { number: 3, title: "Muscler votre mental", description: "Intégrez l'Intelligence Émotionnelle et les outils de préparation mentale pour grandir et faire grandir vos équipes.", icon: Brain },
];


/* ─── Tab switcher ──────────────────────────────────────────────────────────── */
type Tab = "avr" | "pps";

const tabs: { id: Tab; label: string; icon: React.ElementType; badge: string }[] = [
  { id: "avr", label: "Programme AVR®", icon: Target, badge: "Art de la Vente Responsable" },
  { id: "pps", label: "Programme PPS®", icon: GraduationCap, badge: "Prise de Poste Sereinement" },
];

/* ─── SVG arrow connectors — dark (navy bg) & light (white bg) ──────────────── */
function ArrowH({ dark = false }: { dark?: boolean }) {
  const c1 = dark ? "rgba(255,255,255,0.14)" : "rgba(10,25,47,0.15)";
  const c2 = dark ? "rgba(255,255,255,0.20)" : "rgba(10,25,47,0.20)";
  return (
    <svg width="28" height="12" viewBox="0 0 28 12" fill="none" aria-hidden>
      <line x1="0" y1="6" x2="20" y2="6" stroke={c1} strokeWidth="1.5" strokeDasharray="3 2"/>
      <path d="M18 3l4 3-4 3" stroke={c2} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function ArrowV({ dark = false }: { dark?: boolean }) {
  const c1 = dark ? "rgba(255,255,255,0.14)" : "rgba(10,25,47,0.15)";
  const c2 = dark ? "rgba(255,255,255,0.20)" : "rgba(10,25,47,0.20)";
  return (
    <svg width="12" height="28" viewBox="0 0 12 28" fill="none" aria-hidden>
      <line x1="6" y1="0" x2="6" y2="20" stroke={c1} strokeWidth="1.5" strokeDasharray="3 2"/>
      <path d="M3 18l3 4 3-4" stroke={c2} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ─── Objectif bubble (AVR — fond blanc) ────────────────────────────────────── */
function ObjectifBubble({ item, index }: { item: typeof objectifs[0]; index: number }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.82 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, delay: 0.08 * index, ease: easeOut }}
      className="group flex flex-col items-center gap-2 cursor-default"
    >
      <div
        className="relative w-[72px] h-[72px] rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
        style={{
          background: `radial-gradient(circle at 35% 35%, ${item.color}22, ${item.color}0a)`,
          border: `2px solid ${item.color}55`,
        }}
      >
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ boxShadow: `0 0 18px 4px ${item.color}30` }}
        />
        <Icon className="relative z-10 w-[26px] h-[26px] transition-colors duration-200" style={{ color: item.color }} strokeWidth={1.8} />
      </div>
      <div className="text-center">
        <p className="text-[11.5px] font-bold leading-tight mb-0.5" style={{ color: item.color }}>{item.label}</p>
        <p className="text-[10.5px] text-brand-navy/40 leading-tight">{item.sub}</p>
      </div>
    </motion.div>
  );
}

/* ─── Objectifs 2×2 grid (AVR) ──────────────────────────────────────────────── */
function ObjectifsGrid() {
  /* Each column is exactly 72px wide (bubble width).
     The arrow gap between columns is 28px (ArrowH svg width).
     Total row width = 72 + 28 + 72 = 172px.
     The vertical arrow row mirrors this: col-0 center = 36px, col-1 center = 36 + 28 + 72 - 36 = 136px
     We replicate by giving each ArrowV wrapper the same width as its column. */
  return (
    <div className="flex-shrink-0 flex flex-col items-center justify-center self-center">
      <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-brand-navy/30 mb-4">Résultats attendus</p>

      {/* Row 1 */}
      <div className="flex items-start" style={{ gap: 0 }}>
        <ObjectifBubble item={objectifs[0]} index={0} />
        <div className="flex items-center justify-center" style={{ width: 28, paddingTop: 23 }}><ArrowH dark={false} /></div>
        <ObjectifBubble item={objectifs[1]} index={1} />
      </div>

      {/* Arrow row — widths match the bubble columns exactly */}
      <div className="flex items-start" style={{ gap: 0, marginTop: 2, marginBottom: 2 }}>
        <div className="flex justify-center" style={{ width: 72 }}><ArrowV dark={false} /></div>
        <div style={{ width: 28 }} />
        <div className="flex justify-center" style={{ width: 72 }}><ArrowV dark={false} /></div>
      </div>

      {/* Row 2 */}
      <div className="flex items-start" style={{ gap: 0 }}>
        <ObjectifBubble item={objectifs[2]} index={2} />
        <div className="flex items-center justify-center" style={{ width: 28, paddingTop: 23 }}><ArrowH dark={false} /></div>
        <ObjectifBubble item={objectifs[3]} index={3} />
      </div>
    </div>
  );
}

/* ─── PPS benefice data ─────────────────────────────────────────────────────── */
const beneficeItems = [
  { icon: TrendingDown, label: "Moins cher humainement", sub: "et financièrement qu'un turnover", color: "#ff6b4a" },
  { icon: Shield,     label: "Sécurise les équipes",   sub: "stabilité et confiance collective", color: "#C5A059" },
  { icon: Zap,        label: "Performance durable",    sub: "optimise l'organisation",           color: "#4ade80" },
  { icon: Flame,      label: "Cohésion & plaisir",     sub: "travailler ensemble",               color: "#818cf8" },
];

/* ─── Benefice bubble (PPS — fond navy) ─────────────────────────────────────── */
function BeneficeBubble({ item, index }: { item: typeof beneficeItems[0]; index: number }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.82 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45, delay: 0.08 * index, ease: easeOut }}
      className="group flex flex-col items-center gap-2 cursor-default"
    >
      <div
        className="relative w-[72px] h-[72px] rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
        style={{
          background: `radial-gradient(circle at 35% 35%, ${item.color}28, ${item.color}0c)`,
          border: `2px solid ${item.color}55`,
        }}
      >
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ boxShadow: `0 0 18px 4px ${item.color}35` }}
        />
        <Icon className="relative z-10 w-[26px] h-[26px]" style={{ color: item.color }} strokeWidth={1.8} />
      </div>
      <div className="text-center">
        <p className="text-[11.5px] font-bold leading-tight mb-0.5" style={{ color: item.color }}>{item.label}</p>
        <p className="text-[10.5px] text-white/35 leading-tight">{item.sub}</p>
      </div>
    </motion.div>
  );
}

/* ─── Benefices grid (PPS — 4 bulles en dessous des volets) ─────────────────── */
function BeneficesGrid() {
  return (
    <div className="flex flex-col items-center mt-2 mb-8">
      <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-white/25 mb-5">Résultats attendus</p>

      {/* Desktop : 4 en ligne avec flèches H centrées sur les cercles */}
      <div className="hidden sm:flex items-start" style={{ gap: 0 }}>
        <BeneficeBubble item={beneficeItems[0]} index={0} />
        <div className="flex items-center justify-center" style={{ width: 28, paddingTop: 23 }}><ArrowH dark={true} /></div>
        <BeneficeBubble item={beneficeItems[1]} index={1} />
        <div className="flex items-center justify-center" style={{ width: 28, paddingTop: 23 }}><ArrowH dark={true} /></div>
        <BeneficeBubble item={beneficeItems[2]} index={2} />
        <div className="flex items-center justify-center" style={{ width: 28, paddingTop: 23 }}><ArrowH dark={true} /></div>
        <BeneficeBubble item={beneficeItems[3]} index={3} />
      </div>

      {/* Mobile : grille 2×2 */}
      <div className="flex sm:hidden flex-col items-center" style={{ gap: 0 }}>
        <div className="flex items-center" style={{ gap: 0 }}>
          <BeneficeBubble item={beneficeItems[0]} index={0} />
          <div className="flex items-center justify-center" style={{ width: 28 }}><ArrowH dark={true} /></div>
          <BeneficeBubble item={beneficeItems[1]} index={1} />
        </div>
        <div className="flex items-start" style={{ gap: 0, marginTop: 2, marginBottom: 2 }}>
          <div className="flex justify-center" style={{ width: 72 }}><ArrowV dark={true} /></div>
          <div style={{ width: 28 }} />
          <div className="flex justify-center" style={{ width: 72 }}><ArrowV dark={true} /></div>
        </div>
        <div className="flex items-center" style={{ gap: 0 }}>
          <BeneficeBubble item={beneficeItems[2]} index={2} />
          <div className="flex items-center justify-center" style={{ width: 28 }}><ArrowH dark={true} /></div>
          <BeneficeBubble item={beneficeItems[3]} index={3} />
        </div>
      </div>
    </div>
  );
}

/* ─── AVR panel ─────────────────────────────────────────────────────────────── */
function PanelAVR() {
  return (
    <div className="p-5 sm:p-10 lg:p-14">
      {/* top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl bg-gradient-to-r from-brand-orange via-brand-orange/60 to-transparent" />

      {/* badge */}
      <div className="inline-flex items-center gap-2.5 mb-5 px-3.5 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/8">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
        <span className="text-brand-orange text-[11px] font-bold tracking-[0.18em] uppercase">Approche AVR®</span>
      </div>

      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy mb-4 leading-[1.15] tracking-tight">
        Focus <span className="text-brand-orange italic">Opérationnel AVR®</span>
      </h3>

      {/* ── Two-column layout: leviers (left) + objectifs (right) ── */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12 mb-8">

        {/* LEFT — leviers */}
        <div className="flex-1 min-w-0">
          <p className="text-brand-navy/55 text-[13px] sm:text-[15px] mb-5 leading-relaxed">
            Au-delà des techniques et des outils, la performance durable est le résultat d&apos;une démarche reposant sur{" "}
            <span className="text-brand-navy/80 font-semibold">4 leviers</span> et{" "}
            <span className="text-brand-navy/80 font-semibold">10 fondements</span> :
          </p>
          <div className="flex flex-col gap-3">
            {leviers.map((item) => (
              <div key={item.n} className="flex items-start gap-3">
                <span
                  className="w-6 h-6 rounded-md flex items-center justify-center text-brand-orange font-bold text-[11px] shrink-0 mt-0.5 border border-brand-orange/30"
                  style={{ background: "rgba(255,107,74,0.08)" }}
                >
                  {item.n}
                </span>
                <span className="text-[13.5px] text-brand-navy/60 leading-snug">{item.textLight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — objectifs circulaires 2×2 */}
        <div
          className="hidden lg:block w-px self-stretch mx-2"
          style={{ background: "rgba(10,25,47,0.07)" }}
        />
        <ObjectifsGrid />
      </div>

      <Link href="/formulaire-avr">
        <button
          className="group relative inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-full font-bold text-sm text-white overflow-hidden active:scale-[0.97] transition-shadow duration-200 hover:shadow-[0_0_24px_4px_rgba(255,107,74,0.30)]"
          style={{ transform: "translateZ(0)", background: "#ff6b4a" }}
        >
          <span className="relative z-10">Téléchargez les 10 fondements de l&apos;Art de la Vente Responsable</span>
          <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </Link>
    </div>
  );
}

/* ─── PPS panel ─────────────────────────────────────────────────────────────── */
function PanelPPS() {
  return (
    <div className="p-5 sm:p-10 lg:p-14">
      {/* top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl bg-gradient-to-r from-brand-orange via-brand-orange/60 to-transparent" />

      {/* badge */}
      <div className="inline-flex items-center gap-2.5 mb-5 px-3.5 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/8">
        <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
        <span className="text-brand-orange text-[11px] font-bold tracking-[0.18em] uppercase">Programme PPS®</span>
      </div>

      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-[1.15] tracking-tight">
        Focus <span className="text-brand-orange italic">Opérationnel PPS®</span>
      </h3>

      <div className="text-white/55 text-[15px] mb-7 max-w-xl leading-relaxed">
        <p className="mb-1">
          <span className="text-white/80 font-semibold">Prendre son Poste Sereinement</span>
        </p>
        <p className="italic text-white/40">Pour devenir un manager légitime, confiant et influent en 4 mois</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-7">
        {volets.map((volet) => {
          const Icon = volet.icon;
          return (
            <div
              key={volet.number}
              className="group/card relative bg-white/[0.04] rounded-xl p-4 sm:p-5 border border-white/[0.08] hover:bg-brand-orange/[0.08] hover:border-brand-orange/30 transition-colors duration-200 overflow-hidden"
              style={{ transform: "translateZ(0)" }}
            >
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl bg-gradient-to-r from-brand-orange to-brand-orange/40 scale-x-0 group-hover/card:scale-x-100 origin-left transition-transform duration-300 ease-out" />
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-brand-orange/15 flex items-center justify-center shrink-0">
                  <Icon className="w-[18px] h-[18px] text-brand-orange" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-orange/80">Volet {volet.number}</span>
                  <h4 className="text-[14px] font-bold text-white leading-tight">{volet.title}</h4>
                </div>
              </div>
              <p className="text-[13px] text-white/55 leading-relaxed">{volet.description}</p>
            </div>
          );
        })}
      </div>

      <p className="text-white/40 text-[13px] italic mb-6">
        Parce qu&apos;un manager aligné et accompagné obtient plus de résultats et plus vite.
      </p>

      <BeneficesGrid />

      <Link href="/prendre-rendez-vous">
        <button
          className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-sm text-white overflow-hidden active:scale-[0.97] transition-shadow duration-200 hover:shadow-[0_0_24px_4px_rgba(255,107,74,0.30)]"
          style={{ transform: "translateZ(0)", background: "#ff6b4a" }}
        >
          <span className="relative z-10">Réserver un entretien découverte</span>
          <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </Link>
    </div>
  );
}

/* ─── Main export ───────────────────────────────────────────────────────────── */
export function FocusTabs() {
  const [active, setActive] = useState<Tab>("avr");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reducedMotion = useReducedMotion();

  const show = inView && !reducedMotion;
  const instant = reducedMotion;

  return (
    <section className="relative mx-auto px-6 sm:px-8 lg:px-12 max-w-[1280px]">
      <motion.div
        ref={ref}
        initial={instant ? false : { opacity: 0, y: 40 }}
        animate={show ? { opacity: 1, y: 0 } : instant ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease }}
      >
        {/* ── Header ──────────────────────────────────────────────────────────── */}
        <div className="text-center mb-10 sm:mb-14">
          <motion.div
            initial={instant ? false : { opacity: 0, x: -20 }}
            animate={show ? { opacity: 1, x: 0 } : instant ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="w-8 h-[2px] bg-brand-orange" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-orange">La preuve par l&apos;impact</span>
            <div className="w-8 h-[2px] bg-brand-orange" />
          </motion.div>

          <motion.h2
            initial={instant ? false : { opacity: 0, y: 24 }}
            animate={show ? { opacity: 1, y: 0 } : instant ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy dark:text-white leading-[1.1] tracking-tight"
          >
            Immersion &amp;{" "}
            <span className="relative inline-block">
              <span className="text-brand-orange">Méthode</span>
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-[3px] bg-brand-orange/30 rounded-full"
                initial={{ scaleX: 0 }}
                animate={show ? { scaleX: 1 } : instant ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.7, ease }}
                style={{ transformOrigin: "left" }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={instant ? false : { opacity: 0, y: 14 }}
            animate={show ? { opacity: 1, y: 0 } : instant ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="text-base sm:text-lg text-brand-navy/45 dark:text-white/45 mt-5 max-w-xl mx-auto leading-relaxed"
          >
            Deux programmes distincts, une même exigence de résultat
          </motion.p>
        </div>

        {/* ── Tab switcher ────────────────────────────────────────────────────── */}
        <motion.div
          initial={instant ? false : { opacity: 0, y: 16 }}
          animate={show ? { opacity: 1, y: 0 } : instant ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease }}
          className="flex items-stretch gap-3 sm:gap-4 mb-6 sm:mb-8 max-w-xl mx-auto"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className="relative flex-1 flex flex-col items-center gap-1.5 px-4 py-4 sm:py-5 rounded-2xl border-2 font-bold text-sm transition-colors duration-200 overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                style={{
                  transform: "translateZ(0)",
                  background: isActive
                    ? tab.id === "avr" ? "#FFFFFF" : "#0A192F"
                    : "transparent",
                  borderColor: isActive ? "#ff6b4a" : "rgba(10,25,47,0.12)",
                  color: isActive
                    ? tab.id === "avr" ? "#0A192F" : "#fff"
                    : "#0A192F",
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[3px] rounded-full bg-brand-orange"
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  />
                )}
                <Icon
                  className="w-5 h-5 transition-colors duration-200"
                  style={{ color: isActive ? "#ff6b4a" : "rgba(10,25,47,0.4)" }}
                />
                <span className="text-[13px] sm:text-[14px] font-bold leading-tight text-center">{tab.label}</span>
                <span
                  className="text-[10px] font-medium tracking-wide leading-tight text-center transition-colors duration-200"
                  style={{ color: isActive
                    ? tab.id === "avr" ? "rgba(10,25,47,0.45)" : "rgba(255,255,255,0.45)"
                    : "rgba(10,25,47,0.35)" }}
                >
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </motion.div>

          {/* ── Panel ───────────────────────────────────────────────────────────── */}
          <motion.div
            className="relative rounded-3xl overflow-hidden border-2"
            animate={{
              background: active === "avr" ? "#FFFFFF" : "#0A192F",
              borderColor: active === "avr" ? "rgba(10,25,47,0.08)" : "rgba(255,107,74,0.18)",
            }}
            transition={{ duration: 0.55, ease: [0.2, 0.9, 0.2, 1] }}
            style={{ boxShadow: active === "avr" ? "0 4px 40px -8px rgba(10,25,47,0.08)" : "0 4px 40px -8px rgba(10,25,47,0.30)" }}
          >
            {/* AVR — fond blanc : accent orange discret */}
            {active === "avr" && (
              <>
                <div
                  className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(255,107,74,0.06) 0%, transparent 60%)" }}
                />
                <div
                  className="absolute top-1/2 -right-32 w-80 h-80 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(197,160,89,0.05) 0%, transparent 60%)" }}
                />
              </>
            )}
            {/* PPS — froid : glow navy/orange discret */}
            {active === "pps" && (
              <>
                <div
                  className="absolute -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(255,107,74,0.10) 0%, transparent 65%)" }}
                />
                <div
                  className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(circle, rgba(197,160,89,0.07) 0%, transparent 65%)" }}
                />
              </>
            )}

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28, ease: easeOut }}
              >
                {active === "avr" ? <PanelAVR /> : <PanelPPS />}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
    </section>
  );
}

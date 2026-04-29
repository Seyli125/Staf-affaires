"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ease = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

const ventePoints = [
  {
    number: "01",
    hook: "De brillantes solutions restent invisibles.",
    insight: "Pas par manque de valeur...",
    body: "Mais sans posture commerciale claire, même l'offre la plus solide n'atteint pas sa cible.",
    tag: "Invisibilité",
    tagColor: "#e85535",
    accent: "#e85535",
  },
  {
    number: "02",
      hook: "Le client ne choisit pas le meilleur prestataire.",
    insight: "Il choisit celui qui inspire confiance...",
    body: "Celui qui parle son langage. Celui qui l'accompagne.",
    tag: "Réalité",
    tagColor: "#ff8c5a",
    accent: "#ff8c5a",
  },
  {
    number: "04",
      hook: "« Vendre » est devenu un gros mot.",
      insight: "À cause de pratiques peu éthiques...",
    body: "Mais la vente est passionnante lorsque c'est du gagnant-gagnant.",
    tag: "Tabou",
    tagColor: "#e85535",
    accent: "#e85535",
  },
  {
    number: "05",
    hook: "Trop de prospects frustrés. Trop de clients déçus.",
    insight: "Pas à cause de la solution...",
    body: "Mais à cause de démarches obsolètes et des expériences mal vécues.",
    tag: "Coût caché",
    tagColor: "#ff6b4a",
    accent: "#ff6b4a",
  },
];

const managementPoints = [
  {
    number: "01",
    hook: "Moins de 2 ans.",
    insight: "C'est la durée de carrière moyenne d'un manager livré à lui-même.",
      body: "Pas par incompétence mais par manque d'accompagnement.",
    tag: "Chiffre réel",
    accent: "#0A192F",
  },
  {
    number: "02",
    hook: "Bon technicien ≠ bon manager.",
    insight: "Cette confusion coûte cher — humainement et financièrement.",
    body: "Promouvoir sans accompagner, c'est sacrifier deux postes en un.",
    tag: "Erreur systémique",
    accent: "#1e3a5f",
  },
  {
    number: "03",
    hook: "Les managers apprennent sur le tas.",
    insight: "Sans accompagnement, ils rejouent ce qu'ils ont vécu.",
    body: "Sans tenir compte de la complexité humaine ni de leurs propres angles morts.",
    tag: "Héritage subi",
    accent: "#0A192F",
  },
  {
    number: "04",
    hook: "Le syndrome de l'imposteur, en filigrane.",
    insight: "Ils portent le titre. Mais pas encore la posture.",
    body: "Ils peinent à occuper leur place. Et toute l'équipe le ressent.",
    tag: "Invisible mais réel",
    accent: "#1e3a5f",
  },
];

function StopIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    </svg>
  );
}

function CrossIcon({ color }: { color: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <line x1="3" y1="3" x2="17" y2="17" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="17" y1="3" x2="3" y2="17" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export function Observations() {
  return (
      <section
        className="relative py-0 bg-white"
      >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mx-auto px-5 sm:px-8 lg:px-12 max-w-[1280px]"
      >
        {/* ── Section Header ── */}
        <motion.div variants={item} className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-[1.5px] bg-brand-orange opacity-60" />
            <span className="text-[10.5px] font-black uppercase tracking-[0.22em] text-brand-orange">
              Ce que nous constatons
            </span>
            <div className="w-8 h-[1.5px] bg-brand-orange opacity-60" />
          </div>
          <h2 className="text-[1.65rem] sm:text-3xl lg:text-[2.5rem] font-extrabold text-brand-navy leading-[1.12] tracking-tight">
            Nos observations terrain{" "}
            <br className="hidden sm:block" />
            <span
              className="italic"
              style={{
                background: "linear-gradient(120deg, #ff6b4a 0%, #e05a2b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ces dernières années
            </span>
          </h2>
          <p className="mt-4 text-[14px] sm:text-[15px] text-brand-navy/45 max-w-xl mx-auto leading-relaxed font-medium">
            Des sch&eacute;mas v&eacute;cus et observ&eacute;s dans des centaines d&apos;entreprises.
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-7">

          {/* ── LEFT — Vente ── */}
          <motion.div
            variants={item}
            className="relative rounded-[20px] overflow-hidden bg-white"
            style={{
              boxShadow:
                "0 2px 0 0 rgba(255,107,74,0.12) inset, 0 8px 48px -12px rgba(255,107,74,0.14), 0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            {/* Accent bar */}
            <div
              className="h-[3px]"
              style={{
                background:
                  "linear-gradient(90deg, #ff6b4a 0%, #ffb347 55%, rgba(255,107,74,0.08) 100%)",
              }}
            />

            <div className="p-6 sm:p-8 lg:p-9">
              {/* Card header */}
              <div className="flex items-center gap-3.5 mb-8 pb-5 border-b border-orange-100/70">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #ff6b4a 0%, #e04a28 100%)",
                  }}
                >
                  <StopIcon className="w-4.5 h-4.5 text-white" />
                </div>
                <div>
                  <h3 className="text-[12px] font-black text-brand-navy tracking-[0.14em] uppercase">
                    Ventes & développement
                  </h3>
                  <p className="text-[11px] text-brand-navy/30 font-medium mt-0.5">
                    4 constats — observés. Documentés.
                  </p>
                </div>
              </div>

              {/* Points */}
              <div>
                  {ventePoints.map((point, i) => (
                    <div
                      key={i}
                      className="group relative py-4 border-b border-neutral-100 last:border-b-0 hover:bg-orange-50/40 -mx-2 px-2 rounded-lg transition-colors duration-200"
                    >
                        {/* Top row: cross + tag */}
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <CrossIcon color={point.accent} />
                          <span
                            className="text-[9.5px] font-black uppercase tracking-[0.1em] px-2 py-0.5 rounded-full"
                            style={{
                              background: point.tagColor + "12",
                              color: point.tagColor,
                              border: `1px solid ${point.tagColor}22`,
                            }}
                          >
                            {point.tag}
                          </span>
                        </div>

                      {/* Content */}
                      <div className="min-w-0">
                        <p className="text-[14px] font-extrabold text-brand-navy leading-snug tracking-[-0.015em] mb-0.5">
                          {point.hook}
                        </p>
                        <p
                          className="text-[12.5px] font-semibold leading-snug mb-1.5"
                          style={{ color: point.accent }}
                        >
                          {point.insight}
                        </p>
                        <p className="text-[12.5px] text-brand-navy/50 leading-[1.72] font-normal">
                          {point.body}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Stat callout */}
              <div className="mt-6 pt-6 border-t border-orange-100/70">
                <div
                  className="rounded-2xl px-5 py-4"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,107,74,0.04) 0%, rgba(255,107,74,0.08) 100%)",
                    border: "1px solid rgba(255,107,74,0.10)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-1 h-full min-h-[40px] rounded-full flex-shrink-0"
                      style={{ background: "linear-gradient(180deg, #ff6b4a 0%, #e04a28 100%)" }}
                    />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-orange mb-2">
                        Conséquence directe
                      </p>
                      <p className="text-[13px] text-brand-navy/75 leading-[1.68] font-medium">
                        En 2010, le monde titrait :{" "}
                        <strong className="text-brand-navy font-extrabold">
                          &laquo;&nbsp;incompétents et intrusifs, les français maudissent les vendeurs&nbsp;&raquo;
                        </strong>{" "}
                        <a
                          href="https://www.lemonde.fr/economie/article/2010/06/23/incompetents-et-intrusifs-les-francais-maudissent-les-vendeurs_1377603_3234.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-brand-navy/35 italic font-normal hover:text-brand-orange transition-colors duration-200 border-b border-dotted border-brand-navy/15 hover:border-brand-orange/40 ml-0.5"
                        >
                          Le Monde, 23/06/10 ↗
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT — Management ── */}
          <motion.div
            variants={item}
            className="relative rounded-[20px] overflow-hidden bg-white"
            style={{
              boxShadow:
                "0 2px 0 0 rgba(10,25,47,0.08) inset, 0 8px 48px -12px rgba(10,25,47,0.13), 0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            {/* Accent bar */}
            <div
              className="h-[3px]"
              style={{
                background:
                  "linear-gradient(90deg, #0A192F 0%, #1e3a5f 55%, rgba(10,25,47,0.08) 100%)",
              }}
            />

            <div className="p-6 sm:p-8 lg:p-9">
              {/* Card header */}
              <div className="flex items-center gap-3.5 mb-8 pb-5 border-b border-slate-100">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #0A192F 0%, #1e3a5f 100%)",
                  }}
                >
                  <ShieldIcon className="w-4.5 h-4.5 text-white" />
                </div>
                <div>
                  <h3 className="text-[12px] font-black text-brand-navy tracking-[0.14em] uppercase">
                    Management
                  </h3>
                  <p className="text-[11px] text-brand-navy/30 font-medium mt-0.5">
                    4 réalités — méconnues. Coûteuses.
                  </p>
                </div>
              </div>

              {/* Points */}
              <div>
                  {managementPoints.map((point, i) => (
                    <div
                      key={i}
                      className="group relative py-4 border-b border-neutral-100 last:border-b-0 hover:bg-slate-50/60 -mx-2 px-2 rounded-lg transition-colors duration-200"
                    >
                        {/* Top row: number + tag */}
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span
                            className="text-[11px] font-black tabular-nums"
                            style={{ color: point.accent, opacity: 0.45 }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span
                            className="text-[9.5px] font-black uppercase tracking-[0.1em] px-2 py-0.5 rounded-full"
                            style={{
                              background: "rgba(10,25,47,0.06)",
                              color: "#0A192F",
                              border: "1px solid rgba(10,25,47,0.10)",
                            }}
                          >
                            {point.tag}
                          </span>
                        </div>

                      {/* Content */}
                      <div className="min-w-0">
                        <p className="text-[14px] font-extrabold text-brand-navy leading-snug tracking-[-0.015em] mb-0.5">
                          {point.hook}
                        </p>
                        <p
                          className="text-[12.5px] font-semibold leading-snug mb-1.5"
                          style={{ color: point.accent }}
                        >
                          {point.insight}
                        </p>
                        <p className="text-[12.5px] text-brand-navy/50 leading-[1.72] font-normal">
                          {point.body}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Stat callout */}
              <div className="mt-6 pt-6 border-t border-slate-100">
                <div
                  className="rounded-2xl px-5 py-4"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(10,25,47,0.03) 0%, rgba(10,25,47,0.06) 100%)",
                    border: "1px solid rgba(10,25,47,0.06)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-1 h-full min-h-[40px] rounded-full flex-shrink-0"
                      style={{ background: "linear-gradient(180deg, #ff6b4a 0%, #0A192F 100%)" }}
                    />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-orange mb-2">
                        Conséquence directe
                      </p>
                      <p className="text-[13px] text-brand-navy/75 leading-[1.68] font-medium">
                        En 2025,{" "}
                        <strong className="text-brand-navy font-extrabold">
                          plus d&apos;un collaborateur sur deux
                        </strong>{" "}
                        refuse un poste de manager.{" "}
                        <a
                          href="https://www.lemonde.fr/emploi/article/2025/06/17/le-refus-d-etre-chef-est-un-phenomene-plus-marque-en-france-qu-ailleurs_6613660_1698637.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] text-brand-navy/35 italic font-normal hover:text-brand-orange transition-colors duration-200 border-b border-dotted border-brand-navy/15 hover:border-brand-orange/40 ml-0.5"
                        >
                          Le Monde, 17/06/25 ↗
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

          {/* ── Pull Quote + Photo ── */}
          <motion.div
            variants={item}
            className="mt-10 sm:mt-14 flex flex-col md:flex-row items-center gap-8 lg:gap-12 max-w-4xl mx-auto"
          >
            {/* Photo */}
            <div className="relative w-full md:w-[340px] lg:w-[380px] flex-shrink-0">
              <div
                className="relative rounded-[20px] overflow-hidden"
                style={{
                  aspectRatio: "4/5",
                  boxShadow: "0 12px 48px -8px rgba(255,107,74,0.18), 0 2px 8px rgba(0,0,0,0.06)",
                }}
              >
                  <Image
                    src="/said-portrait.jpg"
                    alt="Saïd Taaroust — Fondateur de STAF Affaires"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                {/* subtle orange overlay on bottom */}
                <div
                  className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(255,107,74,0.18) 0%, transparent 100%)",
                  }}
                />
              </div>
              {/* decorative dot */}
              <div
                className="absolute -top-3 -right-3 w-14 h-14 rounded-full opacity-10 pointer-events-none"
                style={{ background: "radial-gradient(circle, #ff6b4a 0%, transparent 70%)" }}
              />
              {/* name under photo */}
              <div className="mt-3 flex items-center gap-2 justify-center">
                <div className="w-5 h-[1.5px] bg-brand-orange opacity-50" />
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-brand-navy/40">
                  Saïd Taaroust — Fondateur de STAF Affaires
                </p>
              </div>
              </div>

              {/* Text */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-navy/20 mb-5">
                  — Point de vue —
                </p>
                <blockquote
                  className="text-[1.1rem] sm:text-[1.25rem] lg:text-[1.35rem] font-semibold italic text-brand-navy/60 leading-[1.8]"
                >
                  Ces réalités ne sont pas une fatalité.
                  <br />
                  Elles sont le signe d&apos;un besoin d&apos;une boussole plus{" "}
                  <span
                    className="not-italic font-extrabold"
                    style={{
                      background: "linear-gradient(120deg, #ff6b4a 0%, #e05a2b 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    humaine.
                  </span>
                </blockquote>
              </div>
            </motion.div>
          </motion.div>
        </section>
  );
}

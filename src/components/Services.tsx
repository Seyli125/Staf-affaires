
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Target, GraduationCap, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { useReducedMotion } from "@/lib/animations";

const ease = [0.2, 0.9, 0.2, 1] as const;
const easeOut = [0.16, 1, 0.3, 1] as const;

const services = [
  {
    title: "L'Art de la Vente Responsable AVR®",
    tagline: "Passez de la transaction à la relation",
    description: "Trois programmes pour vendre avec plaisir et performer durablement",
    items: [
      "Programme AVR® essentiel pour structurer votre processus commercial simple et aligné en 3 mois",
      "Programme AVR® expert en 6 mois pour augmenter vos ratios sans vous épuiser",
      "Programme AVR® mentorat pour déployer avec vous votre stratégie commerciale",
    ],
    boldPatterns: ["Programme AVR® essentiel", "Programme AVR® expert", "Programme AVR® mentorat"],
    icon: Target,
    badge: "Le plus demandé",
    accent: "orange" as const,
  },
  {
    title: "Prise de Poste du Manager PPS®",
    tagline: "Formalisez l'intégration de vos managers",
    description: "Pour ancrer votre légitimité, structurer votre cadre et muscler votre mental",
    items: [
      "Programme PPS® essentiel en 3 mois : il est plus facile de prendre de bonnes habitudes que d'en changer",
      "Programme PPS® mentorat : accompagnement personnalisé, holistique et opérationnel",
    ],
    boldPatterns: ["Programme PPS® essentiel", "Programme PPS® mentorat"],
    icon: GraduationCap,
    badge: "Formaction®",
    accent: "navy" as const,
  },
  {
    title: "Management d'équipe externalisé pour TPE & PME",
    tagline: "Un manager expérimenté à vos côtés.",
    description: "Déléguez l'accompagnement de vos équipes à temps partagé et prenez de la hauteur",
    items: [
      "Pilotage d'équipes à la mission",
      "Structurer un cadre managérial engageant",
      "Accompagner les transitions",
    ],
    boldPatterns: [] as string[],
    icon: Users,
    badge: "Premium",
    accent: "orange" as const,
  },
];

function renderWithBold(text: string, patterns: string[]) {
  if (!patterns.length) return text;
  const regex = new RegExp(
    `(${patterns.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`,
    "gi"
  );
  const parts = text.split(regex);
  return parts.map((part, i) =>
    patterns.some((p) => p.toLowerCase() === part.toLowerCase()) ? (
      <strong key={i} className="font-bold">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function ServiceCard({
  service,
  index,
  show,
  instant,
}: {
  service: (typeof services)[0];
  index: number;
  show: boolean;
  instant: boolean;
}) {
  const isOrange = service.accent === "orange";
  const Icon = service.icon;

  return (
    <motion.div
      initial={instant ? false : { opacity: 0, y: 50 }}
      animate={show ? { opacity: 1, y: 0 } : instant ? { opacity: 1 } : {}}
      transition={{ duration: 0.75, delay: index * 0.12, ease }}
      className="group relative"
      style={{ willChange: "opacity, transform" }}
    >
      {/* Hover shadow — CSS only, no JS */}
      <div
        className={`absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isOrange
            ? "shadow-[0_24px_80px_-12px_rgba(255,107,74,0.22)]"
            : "shadow-[0_24px_80px_-12px_rgba(10,25,47,0.22)]"
        }`}
      />
      {/* Hover border — CSS only */}
      <div
        className={`absolute inset-0 rounded-3xl pointer-events-none border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isOrange ? "border-brand-orange" : "border-brand-navy"
        }`}
      />

      <div
        className="relative h-full rounded-3xl overflow-hidden bg-white dark:bg-[#2C2C2E] border-2 border-transparent shadow-[0_4px_40px_-8px_rgba(10,25,47,0.06)]"
        style={{ transform: "translateZ(0)" }}
      >
        {/* Top accent bar */}
        <motion.div
          className="h-[3px]"
          style={{
            background: isOrange
              ? "linear-gradient(90deg, #ff6b4a 0%, #ffb347 60%, rgba(255,107,74,0.15) 100%)"
              : "linear-gradient(90deg, #0A192F 0%, #1e3a5f 60%, rgba(10,25,47,0.1) 100%)",
            transformOrigin: "left",
            willChange: "transform",
          }}
          initial={instant ? false : { scaleX: 0 }}
          animate={show ? { scaleX: 1 } : instant ? {} : {}}
          transition={{ duration: 0.55, delay: 0.25 + index * 0.12, ease: easeOut }}
        />

        {/* Badge + Icon */}
        <div className="px-5 sm:px-8 pt-5 sm:pt-7 flex items-center justify-between">
          <div className="relative w-12 h-12 rounded-2xl overflow-hidden">
            <div
              className={`absolute inset-0 rounded-2xl transition-colors duration-300 ${
                isOrange
                  ? "bg-brand-orange/8 group-hover:bg-brand-orange"
                  : "bg-brand-navy/5 group-hover:bg-brand-navy dark:bg-white/5 dark:group-hover:bg-brand-navy"
              }`}
            />
            <div className="relative flex items-center justify-center w-full h-full">
              <Icon
                className={`w-5 h-5 transition-all duration-300 group-hover:text-white group-hover:scale-105 ${
                  isOrange ? "text-brand-orange" : "text-brand-navy dark:text-white/70"
                }`}
              />
            </div>
          </div>

          <span
            className={`text-[10px] font-bold uppercase tracking-[0.14em] px-3.5 py-1.5 rounded-full ${
              isOrange
                ? "bg-brand-orange/8 text-brand-orange"
                : "bg-brand-navy/5 dark:bg-white/5 text-brand-navy/60 dark:text-white/60"
            }`}
          >
            {service.badge}
          </span>
        </div>

        <div className="px-5 sm:px-8 pt-5 sm:pt-6 pb-6 sm:pb-8">
          <p
            className={`text-[10px] font-semibold uppercase tracking-[0.14em] mb-1.5 ${
              isOrange ? "text-brand-orange/70" : "text-brand-navy/35 dark:text-white/35"
            }`}
          >
            {service.tagline}
          </p>

          <h3 className="text-[1.1rem] font-extrabold text-brand-navy dark:text-white leading-snug mb-2 tracking-tight">
            {service.title}
          </h3>

          <p className="text-[13px] text-brand-navy/45 dark:text-white/45 leading-relaxed mb-6 italic">
            {service.description}
          </p>

          {/* Items — CSS transitions only, no per-item motion */}
          <div className="space-y-3.5 mb-8">
            {service.items.map((item, i) => (
              <div
                key={item}
                className="flex items-start gap-3 transition-opacity duration-300"
                style={{
                  opacity: show || instant ? 1 : 0,
                  transitionDelay: show ? `${0.45 + index * 0.12 + i * 0.06}s` : "0s",
                }}
              >
                <CheckCircle2
                  className={`w-[18px] h-[18px] mt-0.5 shrink-0 ${
                    isOrange ? "text-brand-orange" : "text-brand-navy/30 dark:text-white/30"
                  }`}
                />
                <span className="text-[13.5px] text-brand-navy/65 dark:text-white/65 leading-snug font-medium">
                  {renderWithBold(item, service.boldPatterns)}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link href="/prendre-rendez-vous" className="block">
            <div
              className={`relative flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm overflow-hidden transition-colors duration-300 ${
                isOrange
                  ? "bg-brand-orange/8 text-brand-orange hover:bg-brand-orange hover:text-white"
                  : "bg-brand-navy/5 text-brand-navy hover:bg-brand-navy hover:text-white dark:bg-white/5 dark:text-white dark:hover:bg-brand-navy"
              }`}
              style={{ transform: "translateZ(0)" }}
            >
              Réserver un entretien <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  // Single observer for the whole section — no per-card observers
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();

  const show = inView && !reducedMotion;
  const instant = reducedMotion;

  return (
    <section ref={sectionRef} id="services" className="relative section-vignette">
      <div className="mx-auto px-6 sm:px-8 lg:px-12 max-w-[1280px] relative z-10">
        {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
          <motion.div
            initial={instant ? false : { opacity: 0, x: -20 }}
            animate={show ? { opacity: 1, x: 0 } : instant ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.05, ease: easeOut }}
            className="flex items-center justify-center gap-3 mb-5"
            style={{ willChange: "opacity, transform" }}
          >
            <div className="w-8 h-[2px] bg-brand-orange" />
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-orange">
              Nos expertises
            </span>
            <div className="w-8 h-[2px] bg-brand-orange" />
          </motion.div>

          <motion.h2
            initial={instant ? false : { opacity: 0, y: 24 }}
            animate={show ? { opacity: 1, y: 0 } : instant ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy dark:text-white leading-[1.1] tracking-tight"
            style={{ willChange: "opacity, transform" }}
          >
            Optez pour une performance{" "}
            <span className="relative inline-block">
              <span className="text-brand-orange">durable</span>
              <motion.span
                className="absolute -bottom-1 left-0 h-[3px] bg-brand-orange/30 rounded-full"
                initial={{ scaleX: 0 }}
                animate={show ? { scaleX: 1 } : instant ? { scaleX: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.65, ease }}
                style={{ transformOrigin: "left", willChange: "transform" }}
              />
            </span>
          </motion.h2>

          <motion.p
            initial={instant ? false : { opacity: 0, y: 14 }}
            animate={show ? { opacity: 1, y: 0 } : instant ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.25, ease }}
            className="text-base sm:text-lg text-brand-navy/45 dark:text-white/45 mt-5 max-w-xl mx-auto leading-relaxed"
            style={{ willChange: "opacity, transform" }}
          >
            Trois leviers concrets pour performer sans s&apos;épuiser
          </motion.p>
        </div>

          <div className="grid md:grid-cols-3 gap-6 mb-0">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              show={show}
              instant={instant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

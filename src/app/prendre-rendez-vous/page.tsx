"use client";

import { Navbar } from "@/components/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Clock,
  User,
  Sparkles,
  Phone,
  Mail,
  Shield,
  ChevronLeft,
  ChevronRight,
  Star,
  Video,
  Zap,
  Heart,
  Rocket,
  Brain,
  Briefcase,
  MessageCircle,
  Eye,
  Flame,
  PenLine,
} from "lucide-react";

const CalendlyInline = dynamic(() => import("@/components/CalendlyInline"), { ssr: false });

// ─── Questions ─────────────────────────────────────

type AccentType = "orange" | "navy";

interface StepOption {
  value: string;
  label: string;
  icon: React.ElementType;
  desc: string;
  accent: AccentType;
}

interface Step {
  id: string;
  label: string;
  question: string;
  subtitle: string;
  options: StepOption[];
}

const stepsVentes: Step[] = [
  {
    id: "frein",
    label: "Frein",
    question: "Soyons honnêtes — qu'est-ce qui vous freine vraiment ?",
    subtitle: "Pas de bonne ou mauvaise réponse. Ce qui compte, c'est ce que vous ressentez sincèrement.",
    options: [
      { value: "methode", label: "Le manque de méthode", icon: Brain, desc: "Je tourne en rond, je n'ai pas de boussole commerciale claire", accent: "navy" },
      { value: "discipline", label: "Le manque de discipline / régularité", icon: Flame, desc: "Je sais ce que je devrais faire — mais je ne le fais pas", accent: "orange" },
      { value: "pression", label: "La pression mentale", icon: Heart, desc: "Le stress et le doute m'épuisent avant même d'agir", accent: "navy" },
      { value: "entretien_frein", label: "On en parlera à l'entretien", icon: MessageCircle, desc: "C'est plus complexe, je préfère l'expliquer de vive voix", accent: "orange" },
    ],
  },
  {
    id: "pression",
    label: "Sous pression",
    question: "Face à un prospect exigeant, que se passe-t-il en vous ?",
    subtitle: "Ces moments révèlent beaucoup. Reconnaître sa réaction, c'est déjà le premier pas.",
    options: [
      { value: "justifie", label: "Je me justifie et multiplie les arguments", icon: MessageCircle, desc: "Je cherche à convaincre à tout prix, parfois trop", accent: "navy" },
      { value: "suradapte", label: "Je me sur-adapte", icon: Zap, desc: "Je change de posture pour plaire — et je perds le fil", accent: "orange" },
      { value: "crispe", label: "Je me crispe intérieurement", icon: Flame, desc: "Le stress me bloque et m'empêche d'être à mon meilleur", accent: "navy" },
      { value: "entretien_pression", label: "On en parle à l'entretien", icon: Eye, desc: "Ma réaction est difficile à résumer en une option", accent: "orange" },
    ],
  },
  {
    id: "ambition",
    label: "Ambition",
    question: "Au fond, qu'est-ce que vous voulez vraiment ?",
    subtitle: "Derrière les objectifs chiffrés, il y a toujours quelque chose de plus profond. Qu'est-ce qui vous anime ?",
    options: [
      { value: "resultats", label: "Plus de résultats", icon: Rocket, desc: "Augmenter mon chiffre, performer, prouver ma valeur", accent: "orange" },
      { value: "alignement", label: "Plus d'alignement", icon: Heart, desc: "Vendre sans me trahir, être en cohérence avec qui je suis", accent: "navy" },
      { value: "les_deux", label: "Les deux — sans compromis", icon: Sparkles, desc: "Des résultats solides ET une posture qui me ressemble", accent: "orange" },
    ],
  },
  {
    id: "engagement",
    label: "Engagement",
    question: "Une dernière chose, et c'est important.",
    subtitle: "Chez STAF Affaires, on ne travaille pas que la technique. On touche à la posture, à l'émotion, à la relation à la valeur. Cela demande de s'impliquer vraiment.",
    options: [
      { value: "oui_exactement", label: "Oui — c'est exactement ce que je cherche", icon: Rocket, desc: "Je suis prêt(e) à aller en profondeur, pas juste en surface", accent: "orange" },
      { value: "oui_si_concret", label: "Oui, si c'est concret et applicable", icon: Briefcase, desc: "Je veux du fond — mais ancré dans la vraie vie", accent: "navy" },
      { value: "comprendre", label: "Je veux d'abord comprendre comment ça fonctionne", icon: Eye, desc: "Je ne m'engage pas à l'aveugle, je préfère découvrir", accent: "navy" },
    ],
  },
];

const stepsManager: Step[] = [
  {
    id: "situation",
    label: "Situation",
    question: "Dans quel contexte arrivez-vous à ce poste ?",
    subtitle: "Chaque situation de prise de poste est unique. La vôtre mérite d'être comprise dès le départ.",
    options: [
      { value: "promotion", label: "Promotion interne", icon: Rocket, desc: "J'évolue depuis un poste opérationnel dans la même organisation", accent: "orange" },
      { value: "recrutement", label: "Recrutement externe", icon: Briefcase, desc: "Je rejoins une nouvelle entreprise avec un rôle managérial", accent: "navy" },
      { value: "creation", label: "Création de poste", icon: Sparkles, desc: "Ce poste a été créé pour moi — tout est à construire", accent: "orange" },
    ],
  },
  {
    id: "tension",
    label: "Tension",
    question: "Qu'est-ce qui vous pèse le plus en ce moment ?",
    subtitle: "Nommer ce qui vous tension, c'est déjà commencer à le désamorcer. Osez être précis.",
    options: [
      { value: "legitimite", label: "Trouver ma légitimité", icon: Shield, desc: "Je doute d'être vraiment à ma place, d'être reconnu(e)", accent: "navy" },
      { value: "cadre", label: "Poser un cadre managérial clair", icon: Brain, desc: "Je ne sais pas encore comment établir les règles du jeu", accent: "orange" },
      { value: "personnalites", label: "Gérer les personnalités", icon: MessageCircle, desc: "Les dynamiques humaines dans l'équipe me challengent", accent: "navy" },
      { value: "objectifs", label: "Gérer la pression des objectifs", icon: Flame, desc: "Tenir les résultats sans m'épuiser ni épuiser mon équipe", accent: "orange" },
    ],
  },
  {
    id: "challenge",
    label: "Challenge",
    question: "Quand un collaborateur vous challenge — que se passe-t-il ?",
    subtitle: "Ces instants de friction sont révélateurs. Il n'y a pas de réponse parfaite, juste la vôtre.",
    options: [
      { value: "tends", label: "Je me tends", icon: Zap, desc: "La confrontation me met sous pression, je perds ma fluidité", accent: "navy" },
      { value: "convaincs", label: "Je cherche à convaincre", icon: MessageCircle, desc: "Je multiplie les arguments pour garder le contrôle", accent: "orange" },
      { value: "evite", label: "J'évite le conflit", icon: Eye, desc: "Je contourne la tension pour ne pas envenimer la situation", accent: "navy" },
      { value: "entretien_challenge", label: "On en parle à l'entretien", icon: Heart, desc: "Ma réaction dépend du contexte, je préfère l'expliquer", accent: "orange" },
    ],
  },
  {
    id: "construction",
    label: "Vision",
    question: "Dans 6 mois, qu'est-ce que vous voulez avoir construit ?",
    subtitle: "Derrière chaque prise de poste, il y a une vision. Quelle est la vôtre ?",
    options: [
      { value: "autorite", label: "Une autorité naturelle", icon: Flame, desc: "Être respecté(e) sans avoir à l'imposer — inspirer confiance", accent: "orange" },
      { value: "equipe", label: "Une équipe vraiment engagée", icon: Heart, desc: "Des collaborateurs qui donnent le meilleur d'eux-mêmes", accent: "navy" },
      { value: "performance", label: "Une performance durable", icon: Rocket, desc: "Des résultats solides qui tiennent dans le temps", accent: "orange" },
      { value: "les_trois", label: "Les trois — c'est mon ambition", icon: Sparkles, desc: "Autorité, engagement et performance : rien à sacrifier", accent: "navy" },
    ],
  },
  {
    id: "engagement_manager",
    label: "Engagement",
    question: "Avant de nous rencontrer, une chose essentielle.",
    subtitle: "Chez STAF Affaires, on ne forme pas qu'aux outils de management. On travaille la posture légitime, la stabilité intérieure et la vraie responsabilité de manager.",
    options: [
      { value: "recherche", label: "C'est exactement ce que je recherche", icon: Rocket, desc: "Je veux aller en profondeur — pas juste des techniques", accent: "orange" },
      { value: "curieux", label: "Je suis curieux(se) et ouvert(e)", icon: Eye, desc: "Cette approche m'intrigue, je veux en savoir plus", accent: "navy" },
      { value: "voir", label: "Je veux voir si ça me correspond", icon: Brain, desc: "Je ne m'engage pas à l'aveugle — je veux d'abord comprendre", accent: "navy" },
    ],
  },
];

const accentStyles = {
  orange: {
    icon: "bg-brand-orange",
    bar: "bg-brand-orange",
    selected: "border-brand-orange bg-brand-orange/[0.04]",
    badge: "bg-brand-orange",
  },
  navy: {
    icon: "bg-brand-navy",
    bar: "bg-brand-navy",
    selected: "border-brand-navy bg-brand-navy/[0.04]",
    badge: "bg-brand-navy",
  },
};

const timeSlots = [
  { time: "09:00", period: "Matin" },
  { time: "09:45", period: "Matin" },
  { time: "10:30", period: "Matin" },
  { time: "11:15", period: "Matin" },
  { time: "14:00", period: "Après-midi" },
  { time: "14:45", period: "Après-midi" },
  { time: "15:30", period: "Après-midi" },
  { time: "16:15", period: "Après-midi" },
  { time: "17:00", period: "Après-midi" },
];

const DAYS_FR = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
const MONTHS_FR = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre",
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  const d = new Date(year, month, 1).getDay();
  return d === 0 ? 6 : d - 1;
}
function isWeekend(year: number, month: number, day: number) {
  const d = new Date(year, month, day).getDay();
  return d === 0 || d === 6;
}
function isPast(year: number, month: number, day: number) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(year, month, day) <= today;
}

// ─── Component ──────────────────────────────────────

export default function PrendreRendezVousPage() {

    // Track selection: null = not chosen, "ventes" | "manager"
    const [track, setTrack] = useState<"ventes" | "manager" | null>(null);
    const steps = track === "ventes" ? stepsVentes : track === "manager" ? stepsManager : stepsVentes;

    // Step 0 = track selection, 1..n = questions, n+1 = calendar, n+2 = form
    const TOTAL_STEPS = steps.length + 3; // +1 for track, +1 for calendar, +1 for form
    const TRACK_STEP = 0;
    const CALENDAR_STEP = steps.length + 1;
    const FORM_STEP = steps.length + 2;

    const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [otherTexts, setOtherTexts] = useState<Record<string, string>>({});
  const [showOther, setShowOther] = useState<Record<string, boolean>>({});
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [formData, setFormData] = useState({
      firstName: "",
      fonction: "",
      entreprise: "",
      email: "",
      phone: "",
      message: "",
      consent: false,
      newsletter: false,
    });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [direction, setDirection] = useState(1);

  const now = new Date();
  const [calMonth, setCalMonth] = useState(now.getMonth());
  const [calYear, setCalYear] = useState(now.getFullYear());

  const progress = ((currentStep + 1) / TOTAL_STEPS) * 100;
  const daysInMonth = useMemo(() => getDaysInMonth(calYear, calMonth), [calYear, calMonth]);
  const firstDay = useMemo(() => getFirstDayOfMonth(calYear, calMonth), [calYear, calMonth]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep]);

  const goNext = useCallback(() => {
    setDirection(1);
    setCurrentStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
  }, [TOTAL_STEPS]);

  const goBack = useCallback(() => {
    setDirection(-1);
    setCurrentStep((s) => Math.max(s - 1, 0));
  }, []);

  const handleAnswer = useCallback(
    (stepId: string, value: string) => {
      setAnswers((prev) => ({ ...prev, [stepId]: value }));
      if (value !== "autre") {
        setShowOther((prev) => ({ ...prev, [stepId]: false }));
        setTimeout(() => goNext(), 350);
      } else {
        setShowOther((prev) => ({ ...prev, [stepId]: true }));
      }
    },
    [goNext]
  );

  const goNextMonth = useCallback(() => {
    if (calMonth === 11) {
      setCalMonth(0);
      setCalYear((y) => y + 1);
    } else setCalMonth((m) => m + 1);
  }, [calMonth]);

  const goPrevMonth = useCallback(() => {
    const n = new Date();
    if (calYear === n.getFullYear() && calMonth === n.getMonth()) return;
    if (calMonth === 0) {
      setCalMonth(11);
      setCalYear((y) => y - 1);
    } else setCalMonth((m) => m - 1);
  }, [calMonth, calYear]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) return;
    setIsSubmitting(true);

    const dateLabel = selectedDate
      ? selectedDate.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
      : "Non précisée";

    const allSteps = track === "ventes" ? stepsVentes : stepsManager;
    const questionnaire = allSteps
      .map((step, i) => {
        const raw = answers[step.id];
        const option = step.options.find((o) => o.value === raw);
        const answer = option
          ? option.label
          : raw === "autre"
          ? otherTexts[step.id] || "Réponse libre"
          : raw || "Non répondu";
        return `Q${i + 1} — ${step.question}\n→ ${answer}`;
      })
      .join("\n\n");

    try {
      const payload: Record<string, string> = {
        _subject: `Nouvelle réservation — ${formData.firstName}`,
        _replyto: formData.email,
        "01 - Prénom": formData.firstName,
        "02 - Adresse e-mail": formData.email,
        "03 - Téléphone": formData.phone || "Non renseigné",
        "04 - Fonction": formData.fonction || "Non renseignée",
        "05 - Entreprise": formData.entreprise || "Non renseignée",
        "06 - Date du rendez-vous": dateLabel,
        "07 - Heure du rendez-vous": selectedTime ?? "Non précisée",
        "08 - Réponses au questionnaire": questionnaire,
        "09 - Message libre": formData.message || "Aucun message",
      };

      await fetch("https://formspree.io/f/mnjlvneb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (err) {
      console.error("Failed to send booking email:", err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const formatDateFull = (d: Date) =>
    d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  const formatDateShort = (d: Date) =>
    d.toLocaleDateString("fr-FR", { weekday: "short", day: "numeric", month: "short" });

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 50 : -50, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d < 0 ? 50 : -50, opacity: 0 }),
  };

  const stepLabels = ["Parcours", ...steps.map((s) => s.label), "Créneau", "Confirmation"];

  // ─── Confirmation ────────────────────────────────

  if (isSubmitted) {
    return (
        <main className="min-h-screen bg-[#FFFFFF] dark:bg-[#1D1D1F]">
          <Navbar />
          <section className="min-h-[85vh] flex items-center justify-center pt-28 pb-16">
          <div className="container mx-auto px-6 text-center max-w-xl">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="mb-8"
            >
              <div className="w-24 h-24 bg-brand-orange rounded-full flex items-center justify-center mx-auto shadow-xl shadow-brand-orange/25">
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </motion.div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl font-black text-brand-navy tracking-tight mb-4"
            >
              C&apos;est confirmé !
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-brand-navy/60 mb-1"
            >
              Votre entretien avec Saïd est prévu le
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="text-lg font-bold text-brand-navy mb-8"
            >
              {selectedDate && formatDateFull(selectedDate)} à {selectedTime}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
                className="bg-white dark:bg-[#2C2C2E] rounded-2xl p-6 border border-brand-navy/10 dark:border-white/8 text-left mb-8"
            >
              <h3 className="font-bold text-brand-navy text-sm mb-5 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-orange" />
                Pour préparer votre entretien
              </h3>
              <ul className="space-y-3">
                {[
                  "Vérifiez vos emails pour le lien de connexion",
                  "Préparez vos 3 questions les plus importantes",
                  "Installez-vous dans un endroit calme",
                  "Notez vos objectifs pour les 90 prochains jours",
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.08 }}
                    className="flex items-start gap-2.5 text-brand-navy/60 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}>
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-brand-navy text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-brand-navy/90 transition-all hover:-translate-y-0.5"
              >
                Retour à l&apos;accueil
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    );
  }

  // ─── Main flow ────────────────────────────────────

  return (
    <main className="min-h-screen bg-[#FFFFFF] dark:bg-[#1D1D1F] relative">
      <Navbar />

      {/* Progress bar */}
        <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-brand-navy/5 dark:bg-white/5">
        <motion.div
          className="h-full bg-brand-orange"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      {/* Header */}
      <section className="pt-28 pb-6">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {/* Info bar */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between mb-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-navy flex items-center justify-center">
                  <Video className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-brand-navy font-bold text-sm">Entretien stratégique</p>
                  <p className="text-brand-navy/40 text-xs flex items-center gap-1.5">
                    <Clock className="w-3 h-3" /> 45 min · Gratuit · Visio
                  </p>
                </div>
              </div>

                <div className="hidden sm:flex items-center gap-1 bg-white dark:bg-[#2C2C2E] rounded-full px-3.5 py-1.5 border border-brand-navy/10 dark:border-white/8">
                <span className="text-brand-navy font-black text-sm">{currentStep + 1}</span>
                <span className="text-brand-navy/20 text-xs">/</span>
                <span className="text-brand-navy/40 text-sm">{TOTAL_STEPS}</span>
              </div>
            </motion.div>

            {/* Stepper pills */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="flex items-center gap-1.5 mb-1 overflow-x-auto pb-2 scrollbar-hide"
            >
              {stepLabels.map((label, i) => {
                const isActive = i === currentStep;
                const isDone = i < currentStep;
                return (
                    <motion.div
                      key={label}
                      animate={{
                          backgroundColor: isActive ? "#0A192F" : isDone ? "#ff6b4a" : "#ffffff",
                          borderColor: isActive ? "#0A192F" : isDone ? "#ff6b4a" : "rgba(10,25,47,0.1)",
                      }}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-bold whitespace-nowrap"
                    >
                    {isDone ? (
                      <CheckCircle2 className="w-3 h-3 text-white" />
                    ) : (
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black ${
                          isActive ? "bg-white/20 text-white" : "bg-brand-navy/5 text-brand-navy/30"
                        }`}
                      >
                        {i + 1}
                      </span>
                    )}
                      <span className={isActive || isDone ? "text-white" : "text-brand-navy/30 dark:text-white/25"}>
                      {label}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
      <div className="container mx-auto px-6">
            <div className={currentStep === CALENDAR_STEP ? "max-w-4xl mx-auto" : "max-w-2xl mx-auto"}>
                <AnimatePresence mode="wait" custom={direction}>
                {/* ─── Track Selection ─── */}
                {currentStep === TRACK_STEP && (
                  <motion.div
                    key="track"
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="mb-8">
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="inline-flex items-center gap-1.5 text-brand-orange text-[11px] font-bold uppercase tracking-[0.15em] mb-4"
                      >
                        <Sparkles className="w-3 h-3" />
                        Étape 1 sur {TOTAL_STEPS}
                      </motion.span>
                      <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.04 }}
                        className="text-2xl md:text-3xl font-black text-brand-navy tracking-tight leading-tight mb-3"
                      >
                        Quel est votre objectif principal ?
                      </motion.h2>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.08 }}
                        className="text-brand-navy/40 text-sm md:text-base"
                      >
                        Choisissez le parcours qui correspond à votre situation.
                      </motion.p>
                    </div>

                    <motion.div
                      initial="initial"
                      animate="animate"
                      variants={{ animate: { transition: { staggerChildren: 0.08 } } }}
                      className="grid md:grid-cols-2 gap-4"
                    >
                      {[
                        {
                          value: "ventes" as const,
                          label: "Développer mes ventes avec AVR®",
                          icon: Rocket,
                          desc: "Méthode, posture commerciale et régulation sous pression",
                          accent: "orange" as AccentType,
                          steps: stepsVentes.length,
                        },
                        {
                          value: "manager" as const,
                          label: "Prendre mon poste de manager",
                          icon: Briefcase,
                          desc: "Légitimité, cadre managérial et autorité naturelle",
                          accent: "navy" as AccentType,
                          steps: stepsManager.length,
                        },
                      ].map((option) => {
                        const Icon = option.icon;
                        const style = accentStyles[option.accent];
                        const isSelected = track === option.value;
                        return (
                          <motion.button
                            key={option.value}
                            variants={{
                              initial: { opacity: 0, y: 15 },
                              animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                            }}
                            onClick={() => {
                              setTrack(option.value);
                              setAnswers({});
                              setDirection(1);
                              setCurrentStep(1);
                            }}
                            whileHover={{ y: -3, transition: { duration: 0.2 } }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative text-left"
                          >
                            <div
                              className={`relative p-6 rounded-2xl border-2 transition-all duration-200 ${
                                isSelected
                                  ? style.selected + " border-2"
                                  : "border-brand-navy/[0.06] bg-white dark:bg-[#2C2C2E] hover:border-brand-navy/15"
                              }`}
                            >
                              <div className={`absolute top-0 left-4 right-4 h-[2px] ${style.bar} rounded-b transition-opacity ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`} />
                              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${style.icon} shadow-sm`}>
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <h3 className="font-bold text-brand-navy text-base mb-2 leading-snug">{option.label}</h3>
                              <p className="text-brand-navy/40 text-sm leading-relaxed">{option.desc}</p>
                              <div className="mt-4 flex items-center gap-1.5 text-brand-navy/25 text-xs font-medium">
                                <span>{option.steps + 2} questions</span>
                                <span>·</span>
                                <span>5 min</span>
                              </div>
                              {isSelected && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ type: "spring", stiffness: 400 }}
                                  className={`absolute top-4 right-4 w-6 h-6 ${style.badge} rounded-full flex items-center justify-center`}
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                                </motion.div>
                              )}
                            </div>
                          </motion.button>
                        );
                      })}
                    </motion.div>
                  </motion.div>
                )}

                {/* ─── Questions ─── */}
                {currentStep > TRACK_STEP && currentStep < CALENDAR_STEP && (
                <motion.div
                  key={`step-${currentStep}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="mb-8">
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="inline-flex items-center gap-1.5 text-brand-orange text-[11px] font-bold uppercase tracking-[0.15em] mb-4"
                    >
                      <Sparkles className="w-3 h-3" />
                        Étape {currentStep + 1} sur {TOTAL_STEPS}
                      </motion.span>

                      <motion.h2
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.04 }}
                        className="text-2xl md:text-3xl font-black text-brand-navy tracking-tight leading-tight mb-3"
                      >
                        {steps[currentStep - 1].question}
                      </motion.h2>

                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.08 }}
                        className="text-brand-navy/40 text-sm md:text-base"
                      >
                        {steps[currentStep - 1].subtitle}
                      </motion.p>
                    </div>

                        {/* Options list */}
                        <motion.div
                          initial="initial"
                          animate="animate"
                          variants={{ animate: { transition: { staggerChildren: 0.06 } } }}
                          className="space-y-3"
                        >
                          {steps[currentStep - 1].options.map((option, idx) => {
                            const isSelected = answers[steps[currentStep - 1].id] === option.value;
                            const Icon = option.icon;
                            return (
                              <motion.button
                                key={option.value}
                                variants={{
                                  initial: { opacity: 0, y: 14 },
                                  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                                }}
                                onClick={() => handleAnswer(steps[currentStep - 1].id, option.value)}
                                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                                whileTap={{ scale: 0.985 }}
                                className="w-full text-left group"
                              >
                                <motion.div
                                  animate={{
                                    borderColor: isSelected ? "#ff6b4a" : "rgba(10,25,47,0.07)",
                                    backgroundColor: isSelected ? "rgba(255,107,74,0.05)" : "#ffffff",
                                  }}
                                  transition={{ duration: 0.2 }}
                                  className="relative flex items-center gap-4 px-5 py-4 rounded-2xl border overflow-hidden"
                                  style={{ boxShadow: isSelected ? "0 4px 24px rgba(255,107,74,0.10)" : "0 1px 4px rgba(10,25,47,0.04)" }}
                                >
                                  {/* Accent bar gauche */}
                                  <motion.div
                                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full bg-brand-orange"
                                    animate={{ scaleY: isSelected ? 1 : 0, opacity: isSelected ? 1 : 0 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    style={{ transformOrigin: "top" }}
                                  />

                                  {/* Icône */}
                                  <motion.div
                                    animate={{
                                      backgroundColor: isSelected ? "#ff6b4a" : "rgba(10,25,47,0.05)",
                                    }}
                                    transition={{ duration: 0.2 }}
                                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                                  >
                                    <Icon className={`w-4.5 h-4.5 transition-colors duration-200 ${isSelected ? "text-white" : "text-brand-navy/30 group-hover:text-brand-navy/60"}`} style={{ width: 18, height: 18 }} />
                                  </motion.div>

                                  {/* Texte */}
                                  <div className="flex-1 min-w-0">
                                    <p className={`font-bold text-[15px] leading-snug transition-colors duration-200 ${
                                      isSelected ? "text-brand-navy" : "text-brand-navy/55 group-hover:text-brand-navy/80"
                                    }`}>
                                      {option.label}
                                    </p>
                                  </div>

                                  {/* Indicateur droit */}
                                  <div className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                                    isSelected ? "border-brand-orange bg-brand-orange" : "border-brand-navy/15 group-hover:border-brand-orange/40"
                                  }`}>
                                    {isSelected && (
                                      <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", stiffness: 600, damping: 20 }}
                                      >
                                        <CheckCircle2 className="w-3 h-3 text-white" strokeWidth={3} />
                                      </motion.div>
                                    )}
                                  </div>
                                </motion.div>
                              </motion.button>
                            );
                          })}

                          {/* "Autre" option */}
                          <motion.button
                            variants={{
                              initial: { opacity: 0, y: 14 },
                              animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
                            }}
                            onClick={() => handleAnswer(steps[currentStep - 1].id, "autre")}
                            whileHover={{ y: -2, transition: { duration: 0.2 } }}
                            whileTap={{ scale: 0.985 }}
                            className="w-full text-left group"
                          >
                            <div
                              className={`flex items-center gap-4 px-5 py-4 rounded-2xl border-2 border-dashed transition-all duration-200 ${
                                answers[steps[currentStep - 1].id] === "autre"
                                  ? "border-brand-orange/50 bg-brand-orange/[0.03]"
                                  : "border-brand-navy/[0.08] hover:border-brand-orange/25"
                              }`}
                            >
                              <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-200 ${
                                answers[steps[currentStep - 1].id] === "autre" ? "bg-brand-orange/10" : "bg-brand-navy/[0.03]"
                              }`}>
                                <PenLine className={`w-4 h-4 transition-colors duration-200 ${answers[steps[currentStep - 1].id] === "autre" ? "text-brand-orange" : "text-brand-navy/25 group-hover:text-brand-orange/50"}`} />
                              </div>
                              <p className={`font-medium text-[15px] transition-colors duration-200 ${answers[steps[currentStep - 1].id] === "autre" ? "text-brand-orange" : "text-brand-navy/35 group-hover:text-brand-navy/55"}`}>
                                Autre — je préfère l&apos;écrire
                              </p>
                            </div>
                          </motion.button>
                        </motion.div>

                  {/* "Autre" text area */}
                    <AnimatePresence>
                      {showOther[steps[currentStep - 1].id] && answers[steps[currentStep - 1].id] === "autre" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                            <div className="mt-4 bg-white dark:bg-[#2C2C2E] rounded-2xl border border-brand-navy/[0.06] dark:border-white/[0.06] p-5">
                            <label className="text-brand-navy text-xs font-bold uppercase tracking-[0.1em] mb-2 block">
                              Décrivez votre situation
                            </label>
                            <textarea
                              autoFocus
                              value={otherTexts[steps[currentStep - 1].id] || ""}
                              onChange={(e) =>
                                setOtherTexts((prev) => ({ ...prev, [steps[currentStep - 1].id]: e.target.value }))
                            }
                            rows={3}
                            className="w-full px-4 py-3 bg-[#FFFFFF] border border-brand-navy/[0.06] focus:border-brand-orange/40 rounded-xl text-sm text-brand-navy placeholder:text-brand-navy/25 outline-none transition-all resize-none"
                            placeholder="Expliquez librement votre besoin, votre défi ou ce que vous aimeriez aborder..."
                          />
                          <motion.button
                            onClick={goNext}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            className="mt-3 w-full py-3 rounded-xl bg-brand-navy text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-brand-navy/90 transition-all group"
                          >
                            Continuer
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Back */}
                  {currentStep > 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-8">
                      <button
                        onClick={goBack}
                          className="inline-flex items-center gap-1.5 text-brand-navy/30 dark:text-white/25 hover:text-brand-navy dark:hover:text-white text-sm font-medium transition-colors group"
                        >
                          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                          Retour
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                )}

  {/* ─── Calendar (Calendly) ─── */}
                  {currentStep === CALENDAR_STEP && (
                    <motion.div
                      key="calendar"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full"
                    >
                      <div className="mb-5">
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="inline-flex items-center gap-1.5 text-brand-orange text-[11px] font-bold uppercase tracking-[0.15em] mb-3"
                        >
                          <Calendar className="w-3 h-3" />
                          Étape {CALENDAR_STEP + 1} sur {TOTAL_STEPS}
                        </motion.span>

                        <motion.h2
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-2xl md:text-3xl font-black text-brand-navy tracking-tight leading-tight mb-2"
                        >
                          Choisissez votre créneau
                        </motion.h2>
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.08 }}
                          className="text-brand-navy/40 text-sm"
                        >
                          Sélectionnez le jour et l&apos;heure qui vous conviennent.
                        </motion.p>
                      </div>

                      {/* Calendly inline widget — full width, tall enough to show without scrolling */}
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="rounded-2xl overflow-hidden border border-brand-navy/[0.06] shadow-sm w-full"
                        style={{ minHeight: 660 }}
                      >
                          <CalendlyInline onEventScheduled={goNext} />
                      </motion.div>

                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }} className="mt-5">
                        <button
                          onClick={goBack}
                          className="inline-flex items-center gap-1.5 text-brand-navy/30 dark:text-white/25 hover:text-brand-navy dark:hover:text-white text-sm font-medium transition-colors group"
                        >
                          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                          Retour
                        </button>
                      </motion.div>
                    </motion.div>
                  )}

                {/* ─── Form ─── */}
              {currentStep === FORM_STEP && (
                <motion.div
                  key="form"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="grid lg:grid-cols-5 gap-6 items-start">
                    {/* Form */}
                    <div className="lg:col-span-3">
                      <div className="mb-6">
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="inline-flex items-center gap-1.5 text-brand-orange text-[11px] font-bold uppercase tracking-[0.15em] mb-4"
                        >
                          <User className="w-3 h-3" />
                          Dernière étape
                        </motion.span>

                        <motion.h2
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-2xl md:text-3xl font-black text-brand-navy tracking-tight leading-tight mb-3"
                        >
                          Finalisez votre réservation
                        </motion.h2>
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.08 }}
                          className="text-brand-navy/40 text-sm md:text-base"
                        >
                          Plus qu&apos;un formulaire rapide et votre créneau est réservé.
                        </motion.p>
                      </div>

                      <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12 }}
                        className="space-y-4"
                      >
                          <div>
                            <label className="text-brand-navy text-xs font-bold uppercase tracking-[0.1em] mb-1.5 block">
                              Prénom
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.firstName}
                              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                              className="w-full px-4 py-3.5 bg-white border border-brand-navy/[0.08] focus:border-brand-orange/40 rounded-xl text-sm font-medium text-brand-navy placeholder:text-brand-navy/20 outline-none transition-all focus:shadow-sm focus:shadow-brand-orange/5"
                              placeholder="Votre prénom"
                            />
                          </div>

                          <div className="grid sm:grid-cols-2 gap-3">
                            {[
                              { label: "Fonction", key: "fonction" as const, placeholder: "Votre fonction" },
                              { label: "Entreprise", key: "entreprise" as const, placeholder: "Votre entreprise" },
                            ].map((field) => (
                              <div key={field.key}>
                                <label className="text-brand-navy text-xs font-bold uppercase tracking-[0.1em] mb-1.5 block">
                                  {field.label}
                                </label>
                                <input
                                  type="text"
                                  value={formData[field.key]}
                                  onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                                  className="w-full px-4 py-3.5 bg-white border border-brand-navy/[0.08] focus:border-brand-orange/40 rounded-xl text-sm font-medium text-brand-navy placeholder:text-brand-navy/20 outline-none transition-all focus:shadow-sm focus:shadow-brand-orange/5"
                                  placeholder={field.placeholder}
                                />
                              </div>
                            ))}
                          </div>

                        <div>
                          <label className="text-brand-navy text-xs font-bold uppercase tracking-[0.1em] mb-1.5 flex items-center gap-1.5">
                            <Mail className="w-3 h-3 text-brand-orange" /> Email
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3.5 bg-white border border-brand-navy/[0.08] focus:border-brand-orange/40 rounded-xl text-sm font-medium text-brand-navy placeholder:text-brand-navy/20 outline-none transition-all focus:shadow-sm focus:shadow-brand-orange/5"
                            placeholder="votre@email.com"
                          />
                        </div>

                        <div>
                          <label className="text-brand-navy text-xs font-bold uppercase tracking-[0.1em] mb-1.5 flex items-center gap-1.5">
                            <Phone className="w-3 h-3 text-brand-orange" /> Téléphone
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3.5 bg-white border border-brand-navy/[0.08] focus:border-brand-orange/40 rounded-xl text-sm font-medium text-brand-navy placeholder:text-brand-navy/20 outline-none transition-all focus:shadow-sm focus:shadow-brand-orange/5"
                            placeholder="+33 6 00 00 00 00"
                          />
                        </div>

                          <div>
                            <label className="text-brand-navy text-xs font-bold uppercase tracking-[0.1em] mb-1.5 block">
                                Quelle situation vous met le plus en inconfort aujourd’hui ?{" "}
                                <span className="text-brand-navy/20 normal-case tracking-normal font-normal">(optionnel)</span>
                              </label>
                            <textarea
                              value={formData.message}
                              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                              rows={3}
                              className="w-full px-4 py-3.5 bg-white border border-brand-navy/[0.08] focus:border-brand-orange/40 rounded-xl text-sm font-medium text-brand-navy placeholder:text-brand-navy/20 outline-none transition-all resize-none focus:shadow-sm focus:shadow-brand-orange/5"
                              placeholder="Dans votre développement commercial, votre prise de poste..."
                            />
                        </div>

                        {/* RGPD */}
                        <div className="space-y-2.5 pt-1">
                          <label className="flex items-start gap-2.5 cursor-pointer group">
                            <input
                              type="checkbox"
                              required
                              checked={formData.consent}
                              onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                              className="mt-0.5 w-4 h-4 rounded border border-brand-navy/15 bg-white text-brand-orange focus:ring-brand-orange/20 cursor-pointer accent-brand-orange"
                            />
                            <span className="text-xs text-brand-navy/40 leading-relaxed group-hover:text-brand-navy/50 transition-colors">
                              J&apos;accepte que mes données soient traitées conformément à la{" "}
                              <Link href="/politique-de-confidentialite" className="text-brand-orange hover:underline font-medium">
                                politique de confidentialité
                              </Link>
                              . <span className="text-brand-orange">*</span>
                            </span>
                          </label>
                          <label className="flex items-start gap-2.5 cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={formData.newsletter}
                              onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                              className="mt-0.5 w-4 h-4 rounded border border-brand-navy/15 bg-white text-brand-orange focus:ring-brand-orange/20 cursor-pointer accent-brand-orange"
                            />
                            <span className="text-xs text-brand-navy/40 leading-relaxed group-hover:text-brand-navy/50 transition-colors">
                              J&apos;accepte de recevoir des communications de STAF AFFAIRES.
                            </span>
                          </label>
                        </div>

                        {/* Submit */}
                        <motion.button
                          type="submit"
                          disabled={isSubmitting || !formData.consent}
                          whileHover={{ scale: 1.01, y: -1 }}
                          whileTap={{ scale: 0.99 }}
                          className="w-full py-4 rounded-xl bg-brand-orange text-white font-black uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20 hover:shadow-xl hover:shadow-brand-orange/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                          {isSubmitting ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                            />
                          ) : (
                            <>
                              Confirmer mon entretien
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </>
                          )}
                        </motion.button>
                      </motion.form>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-2">
                      <motion.div
                        initial={{ opacity: 0, x: 15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 }}
                        className="bg-brand-navy rounded-2xl p-6 sticky top-24 overflow-hidden relative"
                      >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-[50px] pointer-events-none" />

                        <h3 className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em] mb-5 relative">
                          Récapitulatif
                        </h3>

                        <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white/5 border border-white/10 mb-5 relative">
                          <div className="w-9 h-9 bg-brand-orange rounded-lg flex items-center justify-center flex-shrink-0">
                            <Calendar className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-white text-sm capitalize">
                              {selectedDate && formatDateShort(selectedDate)}
                            </p>
                            <p className="text-white/40 text-xs">{selectedTime} — 45 min</p>
                          </div>
                        </div>

                        <div className="space-y-3 mb-5 relative">
                          {[
                            "Audit de votre situation actuelle",
                            "Identification des leviers clés",
                            "Suivi post-entretien",
                          ].map((item) => (
                            <div key={item} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange flex-shrink-0" />
                              <span className="text-xs text-white/60 font-medium">{item}</span>
                            </div>
                          ))}
                        </div>

                        <div className="border-t border-white/10 pt-4 mb-4 relative">
                          <div className="flex items-center justify-between">
                            <span className="text-white/30 text-xs font-bold uppercase tracking-[0.1em]">
                              Investissement
                            </span>
                            <div className="text-right">
                              <span className="font-black text-white text-lg">Offert</span>
                              <p className="text-white/25 text-[10px]">Sans engagement</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 text-white/25 text-xs relative">
                          <Shield className="w-3 h-3" />
                          <span>Données sécurisées & RGPD</span>
                        </div>
                      </motion.div>

                        <div className="mt-5">
                          <button
                            onClick={goBack}
                            className="inline-flex items-center gap-1.5 text-brand-navy/30 dark:text-white/25 hover:text-brand-navy dark:hover:text-white text-sm font-medium transition-colors group"
                          >
                          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                          Retour
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}

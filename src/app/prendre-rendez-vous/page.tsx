"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Calendar,
  Clock,
  User,
  Building,
  Target,
  TrendingUp,
  Sparkles,
  Phone,
  Mail,
  Shield,
  Award,
  Zap,
} from "lucide-react";
import {
  ScrollReveal,
  LineReveal,
  MagneticButton,
  AppleGlassCard,
  TiltCard,
} from "@/components/animations";

// Qualification questions
const qualificationSteps = [
  {
    question: "Quel est votre rôle actuel ?",
    options: [
      { value: "founder", label: "Fondateur / CEO", icon: Building },
      { value: "executive", label: "Cadre Dirigeant", icon: Target },
      { value: "entrepreneur", label: "Entrepreneur Solo", icon: User },
      { value: "other", label: "Autre", icon: Sparkles },
    ],
  },
  {
    question: "Quel est votre chiffre d'affaires annuel ?",
    options: [
      { value: "0-100k", label: "< 100K €", icon: TrendingUp },
      { value: "100k-500k", label: "100K - 500K €", icon: TrendingUp },
      { value: "500k-1m", label: "500K - 1M €", icon: TrendingUp },
      { value: "1m+", label: "> 1M €", icon: TrendingUp },
    ],
  },
  {
    question: "Quel est votre plus grand défi actuellement ?",
    options: [
      { value: "scaling", label: "Scaler mon business", icon: TrendingUp },
      { value: "leadership", label: "Leadership & équipe", icon: User },
      { value: "mindset", label: "Mindset & confiance", icon: Target },
      { value: "strategy", label: "Clarté stratégique", icon: Sparkles },
    ],
  },
];

// Available time slots
const timeSlots = [
  "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"
];

// Generate next 14 days
const generateDates = () => {
  const dates = [];
  const now = new Date();
  for (let i = 1; i <= 14; i++) {
    const date = new Date(now);
    date.setDate(now.getDate() + i);
    // Skip weekends
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      dates.push(date);
    }
  }
  return dates;
};

const formatDate = (date: Date) => {
  return date.toLocaleDateString("fr-FR", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
};

export default function PrendreRendezVousPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = qualificationSteps.length + 2; // +2 for calendar and contact form
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const dates = generateDates();

  const handleAnswer = useCallback((value: string) => {
    setAnswers((prev) => ({ ...prev, [currentStep]: value }));
    setTimeout(() => setCurrentStep((prev) => prev + 1), 300);
  }, [currentStep]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitted(true);
  };

  const canProceedToCalendar = Object.keys(answers).length >= qualificationSteps.length;
  const canProceedToForm = selectedDate && selectedTime;

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  // Confirmation page
  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-brand-navy overflow-hidden">
        <Navbar />

        <section className="min-h-[90vh] flex items-center justify-center relative">
          {/* Background effects */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: "radial-gradient(ellipse at center, rgba(255,107,74,0.3) 0%, transparent 50%)",
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <div className="container mx-auto px-6 text-center relative z-10">
            {/* Success icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="mb-10"
            >
              <div className="w-32 h-32 bg-brand-orange rounded-full flex items-center justify-center mx-auto shadow-[0_0_80px_rgba(255,107,74,0.5)]">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring" }}
                >
                  <CheckCircle2 className="w-16 h-16 text-white" />
                </motion.div>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6"
            >
              C'EST{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-salmon">
                CONFIRMÉ !
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-white/60 max-w-2xl mx-auto mb-8"
            >
              Votre appel stratégique avec Saïd Taaroust est réservé pour le{" "}
              <span className="text-white font-bold">
                {selectedDate && formatDate(selectedDate)} à {selectedTime}
              </span>
              .
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem] p-8 max-w-xl mx-auto mb-12"
            >
              <h3 className="font-black text-white text-xl mb-6">
                Préparez-vous pour l'appel
              </h3>
              <ul className="space-y-4 text-left">
                {[
                  "Vérifiez vos emails pour le lien de connexion",
                  "Préparez vos questions les plus importantes",
                  "Installez-vous dans un endroit calme",
                  "Notez vos objectifs pour les 90 prochains jours",
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    className="flex items-center gap-3 text-white/80"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <MagneticButton intensity={0.3} scale={1.05}>
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 bg-white text-brand-navy px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-brand-orange hover:text-white transition-colors shadow-xl"
                >
                  Retour à l'accueil
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* Hero section with progress */}
      <section className="pt-32 pb-12 bg-brand-navy relative overflow-hidden">
        {/* Background effects */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse at 30% 50%, rgba(255,107,74,0.4) 0%, transparent 50%)",
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 mb-6">
                <Calendar className="w-4 h-4 text-brand-orange" />
                <span className="text-white/80 font-bold uppercase tracking-[0.2em] text-xs">
                  Réservation
                </span>
              </div>
            </ScrollReveal>

            <LineReveal delay={0.2}>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
                RÉSERVEZ VOTRE{" "}
                <span className="text-brand-orange">APPEL STRATÉGIQUE</span>
              </h1>
            </LineReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-lg text-white/60 max-w-xl mx-auto">
                30 minutes pour analyser votre situation et définir votre plan d'action.
              </p>
            </ScrollReveal>
          </div>

          {/* Progress bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between text-xs text-white/40 font-bold uppercase tracking-widest mb-3">
              <span>Étape {currentStep + 1} / {totalSteps}</span>
              <span>{Math.round(progress)}% complété</span>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-orange to-brand-salmon rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main content area */}
      <section className="py-16 min-h-[60vh]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatePresence mode="wait" custom={1}>
              {/* Qualification Steps */}
              {currentStep < qualificationSteps.length && (
                <motion.div
                  key={`question-${currentStep}`}
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">
                      {qualificationSteps[currentStep].question}
                    </h2>
                    <p className="text-muted-foreground">
                      Sélectionnez la réponse qui vous correspond le mieux
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {qualificationSteps[currentStep].options.map((option, i) => (
                      <motion.button
                        key={option.value}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        onClick={() => handleAnswer(option.value)}
                        className={`p-6 rounded-[2rem] border-2 text-left transition-all duration-300 group ${answers[currentStep] === option.value
                            ? "border-brand-orange bg-brand-orange/5"
                            : "border-gray-100 hover:border-brand-orange/50 hover:bg-gray-50"
                          }`}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all ${answers[currentStep] === option.value
                              ? "bg-brand-orange text-white"
                              : "bg-gray-100 text-brand-navy group-hover:bg-brand-orange/10 group-hover:text-brand-orange"
                            }`}>
                            <option.icon className="w-6 h-6" />
                          </div>
                          <span className="font-bold text-lg text-brand-navy">
                            {option.label}
                          </span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Calendar Step */}
              {currentStep === qualificationSteps.length && (
                <motion.div
                  key="calendar"
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">
                      Choisissez votre <span className="text-brand-orange">créneau</span>
                    </h2>
                    <p className="text-muted-foreground">
                      Sélectionnez une date et un horaire qui vous conviennent
                    </p>
                  </div>

                  {/* Date selection */}
                  <div className="mb-10">
                    <h3 className="font-black uppercase tracking-widest text-xs text-muted-foreground mb-4">
                      Date
                    </h3>
                    <div className="flex gap-3 overflow-x-auto pb-4 -mx-2 px-2">
                      {dates.map((date, i) => (
                        <motion.button
                          key={date.toISOString()}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.05 }}
                          onClick={() => setSelectedDate(date)}
                          className={`flex-shrink-0 p-4 rounded-2xl border-2 text-center transition-all min-w-[100px] ${selectedDate?.toDateString() === date.toDateString()
                              ? "border-brand-orange bg-brand-orange text-white"
                              : "border-gray-100 hover:border-brand-orange/50"
                            }`}
                        >
                          <div className="text-xs font-bold uppercase tracking-widest opacity-60">
                            {date.toLocaleDateString("fr-FR", { weekday: "short" })}
                          </div>
                          <div className="text-2xl font-black">{date.getDate()}</div>
                          <div className="text-xs font-bold uppercase tracking-widest opacity-60">
                            {date.toLocaleDateString("fr-FR", { month: "short" })}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Time selection */}
                  {selectedDate && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <h3 className="font-black uppercase tracking-widest text-xs text-muted-foreground mb-4">
                        Horaire
                      </h3>
                      <div className="grid grid-cols-4 sm:grid-cols-7 gap-3">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`py-4 rounded-xl border-2 font-bold transition-all ${selectedTime === time
                                ? "border-brand-orange bg-brand-orange text-white"
                                : "border-gray-100 hover:border-brand-orange/50"
                              }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Continue button */}
                  {canProceedToForm && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-10 text-center"
                    >
                      <MagneticButton intensity={0.2} scale={1.02}>
                        <button
                          onClick={() => setCurrentStep(currentStep + 1)}
                          className="inline-flex items-center gap-3 bg-brand-navy text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-brand-orange transition-colors shadow-xl group"
                        >
                          Continuer
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </MagneticButton>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Contact Form Step */}
              {currentStep === qualificationSteps.length + 1 && (
                <motion.div
                  key="form"
                  custom={1}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">
                      Finalisez votre <span className="text-brand-orange">réservation</span>
                    </h2>
                    <p className="text-muted-foreground">
                      Plus qu'une étape pour confirmer votre appel
                    </p>
                  </div>

                  {/* Summary card */}
                  <TiltCard maxTilt={3} className="mb-10">
                    <div className="bg-brand-navy/5 p-6 rounded-[2rem] flex items-center gap-6">
                      <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center">
                        <Calendar className="w-8 h-8 text-brand-orange" />
                      </div>
                      <div>
                        <div className="font-black text-brand-navy text-lg">
                          {selectedDate && formatDate(selectedDate)} à {selectedTime}
                        </div>
                        <div className="text-sm text-muted-foreground font-medium">
                          Appel stratégique de 30 minutes avec Saïd Taaroust
                        </div>
                      </div>
                    </div>
                  </TiltCard>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                          Prénom
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                          className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-brand-orange/30 focus:bg-white rounded-2xl font-medium outline-none transition-all"
                          placeholder="Votre prénom"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                          Nom
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                          className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-brand-orange/30 focus:bg-white rounded-2xl font-medium outline-none transition-all"
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-brand-orange/30 focus:bg-white rounded-2xl font-medium outline-none transition-all"
                        placeholder="votre@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-brand-orange/30 focus:bg-white rounded-2xl font-medium outline-none transition-all"
                        placeholder="+33 6 00 00 00 00"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                        Message (optionnel)
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full px-6 py-4 bg-gray-50 border-2 border-transparent focus:border-brand-orange/30 focus:bg-white rounded-2xl font-medium outline-none transition-all resize-none"
                        placeholder="Parlez-nous de votre situation..."
                      />
                    </div>

{/* RGPD Consent */}
                      <div className="space-y-4 py-4">
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            required
                            className="mt-1 w-5 h-5 rounded border-2 border-gray-300 text-brand-orange focus:ring-brand-orange focus:ring-offset-0 cursor-pointer"
                          />
                          <span className="text-sm text-gray-600 leading-relaxed">
                            J'accepte que mes données personnelles soient collectées et traitées conformément à la{" "}
                            <Link href="/politique-de-confidentialite" className="text-brand-orange hover:underline font-medium">
                              politique de confidentialité
                            </Link>{" "}
                            de STAF AFFAIRES pour la gestion de ma demande de rendez-vous. <span className="text-red-500">*</span>
                          </span>
                        </label>
                        
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            className="mt-1 w-5 h-5 rounded border-2 border-gray-300 text-brand-orange focus:ring-brand-orange focus:ring-offset-0 cursor-pointer"
                          />
                          <span className="text-sm text-gray-600 leading-relaxed">
                            J'accepte de recevoir des communications de STAF AFFAIRES (actualités, offres, conseils). Vous pouvez vous désinscrire à tout moment.
                          </span>
                        </label>
                      </div>

                      {/* Trust indicators */}
                      <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground py-4">
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-brand-orange" />
                          <span>Données sécurisées</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-brand-orange" />
                          <span>Confirmation immédiate</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-brand-orange" />
                          <span>100% gratuit</span>
                        </div>
                      </div>

                      <p className="text-xs text-gray-500 text-center">
                        <span className="text-red-500">*</span> Champs obligatoires. Vos données sont protégées conformément au RGPD.
                      </p>

                      {/* Submit button */}
                    <MagneticButton intensity={0.2} scale={1.02} className="w-full">
                      <button
                        type="submit"
                        className="w-full py-6 rounded-2xl bg-brand-orange text-white font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-brand-navy transition-colors shadow-[0_10px_40px_rgba(255,107,74,0.3)] group"
                      >
                        Confirmer ma réservation
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </MagneticButton>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Back button */}
            {currentStep > 0 && !isSubmitted && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => setCurrentStep(currentStep - 1)}
                className="mt-8 inline-flex items-center gap-2 text-muted-foreground hover:text-brand-navy font-bold transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour
              </motion.button>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

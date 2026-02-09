"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  Plus,
  Minus,
  HelpCircle,
  ArrowRight,
  Sparkles,
  MessageCircle,
  Search,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/animations";

const faqCategories = [
  { id: "all", label: "Toutes", icon: HelpCircle },
  { id: "avr", label: "Méthode AVR®", icon: Sparkles },
  { id: "formation", label: "Formations", icon: MessageCircle },
  { id: "pratique", label: "Pratique", icon: Search },
];

const faqs = [
  {
    category: "avr",
    question: "Qu'est-ce que l'ART de la Vente Responsable (AVR®) ?",
    answer:
      "En affaires, la performance et les résultats sont indispensables. Les vendeurs responsables considèrent que la performance découle directement de méthodes vertueuses. Ils privilégient des actions et une posture qui créent des relations solides et durables. La confiance est l'ingrédient principal pour des partenariats durables et des clients satisfaits qui reviennent et deviennent ambassadeurs. L'AVR® favorise : des relations interpersonnelles qualitatives, l'engagement et la confiance des prospects, le développement de la motivation des vendeurs, l'augmentation de la fidélisation et des recommandations, la réduction des pertes liées à la prospection froide et aux avis négatifs, la diminution du turnover, le respect des obligations RGPD.",
  },
  {
    category: "pratique",
    question:
      "Puis-je devenir un bon commercial alors que je n'ai pas fait d'études commerciales et que je suis introverti ?",
    answer:
      "Un grand oui ! Être introverti est un état d'esprit : on puise son énergie dans la solitude. Les introvertis développent davantage de qualités d'écoute, essentielles pour comprendre les problèmes et enjeux des prospects. La démarche commerciale repose sur des process simples et s'apprend en pratiquant, ce qui permet de développer sa posture.",
  },
  {
    category: "avr",
    question: "J'ai une bonne expérience en vente, que peut m'apporter la démarche AVR ?",
    answer:
      "L'AVR complète les approches traditionnelles. Elle permet de faire le point sur sa posture, développer des soft skills et entraîner son mental pour dépasser ses freins (motivation, affirmation de soi…).",
  },
  {
    category: "pratique",
    question:
      "Je ne me sens pas à l'aise dans la démarche commerciale, suivre mes ressentis est-ce être aligné avec mes valeurs ?",
    answer:
      "Les ressentis indiquent qu'il y a quelque chose à explorer. Ne pas tirer de conclusions hâtives permet de dépasser les croyances limitantes et de trouver sa vraie vocation.",
  },
  {
    category: "avr",
    question:
      "La Vente Responsable est-elle compatible avec les exigences économiques et les forts enjeux commerciaux ?",
    answer:
      "Oui. L'AVR tient compte des résultats tout en renforçant la confiance, la fidélisation, les recommandations et la motivation des commerciaux.",
  },
  {
    category: "formation",
    question: "Pourquoi les formations STAF Affaires ne sont pas prises en charge par les OPCO ?",
    answer:
      "Après plus de 10 ans d'expérience et de normes (Datadock, Qualiopi…), nous faisons un choix responsable : simplifier, former et transformer plutôt que suivre une complexité inutile.",
  },
  {
    category: "formation",
    question:
      "Qu'est-ce que la FormAction et quelle différence avec une formation classique ?",
    answer:
      "Les études montrent qu'une formation traditionnelle a un faible taux de rétention. Nos programmes privilégient l'application et l'entraînement, avec des séances courtes et un suivi sur le moyen terme, pour développer de nouvelles habitudes efficacement.",
  },
  {
    category: "pratique",
    question: "Comment se déroule un accompagnement avec STAF Affaires ?",
    answer:
      "Chaque accompagnement débute par un diagnostic approfondi de votre situation. Nous définissons ensemble des objectifs clairs et mesurables. Les séances alternent entre apports théoriques, mises en situation pratiques et débriefs personnalisés. Un suivi régulier permet d'ajuster le parcours selon vos progrès.",
  },
  {
    category: "formation",
    question: "Quels résultats puis-je attendre d'un accompagnement ?",
    answer:
      "Nos clients constatent généralement une amélioration significative de leur taux de conversion, une réduction du stress lié à la prospection, une meilleure qualité relationnelle avec leurs clients et une augmentation de leur chiffre d'affaires. Les résultats varient selon l'implication et le contexte de chacun.",
  },
  {
    category: "pratique",
    question: "Les accompagnements se font-ils en présentiel ou à distance ?",
    answer:
      "Nous proposons les deux formats selon vos préférences et contraintes. Les sessions à distance sont tout aussi efficaces grâce à notre méthodologie adaptée. Certains programmes combinent les deux approches pour un maximum de flexibilité.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* ============================================
          HERO SECTION
      ============================================ */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-brand-navy">
        {/* Animated background gradient */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at 30% 20%, rgba(255,107,74,0.4) 0%, transparent 50%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(ellipse at 70% 80%, rgba(255,142,117,0.4) 0%, transparent 50%)",
            }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container mx-auto px-6 relative z-10 text-center pt-24">
          {/* Eyebrow */}
          <ScrollReveal delay={0.2}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 mb-8">
              <HelpCircle className="w-4 h-4 text-brand-orange" />
              <span className="text-white/80 font-bold uppercase tracking-[0.2em] text-xs">
                Centre d'aide
              </span>
            </div>
          </ScrollReveal>

          {/* Main Title */}
          <ScrollReveal delay={0.3}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-6">
              QUESTIONS
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-salmon">
                FRÉQUENTES
              </span>
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal delay={0.5}>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
              Tout ce que vous devez savoir sur l'approche AVR®, nos formations et
              accompagnements.
            </p>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 bg-brand-orange rounded-full"
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* ============================================
          SEARCH & FILTER SECTION
      ============================================ */}
      <section className="py-12 bg-gradient-to-b from-brand-navy to-brand-navy/95 sticky top-0 z-40">
        <div className="container mx-auto px-6">
          {/* Search Bar */}
          <ScrollReveal delay={0.1}>
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="Rechercher une question..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-14 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-orange/50 focus:bg-white/15 transition-all font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                  >
                    <Plus className="w-5 h-5 rotate-45" />
                  </button>
                )}
              </div>
            </div>
          </ScrollReveal>

          {/* Category Filters */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3">
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-brand-orange text-white shadow-lg shadow-brand-orange/25"
                      : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          FAQ ACCORDION SECTION
      ============================================ */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-brand-navy/5 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Results count */}
            <motion.div
              className="mb-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                {filteredFaqs.length} question{filteredFaqs.length > 1 ? "s" : ""} trouvée
                {filteredFaqs.length > 1 ? "s" : ""}
              </span>
            </motion.div>

            {/* FAQ Items */}
            <StaggerContainer className="space-y-4" staggerDelay={0.08}>
              {filteredFaqs.map((faq, index) => (
                <StaggerItem key={index}>
                  <motion.div
                    layout
                    className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
                      openIndex === index
                        ? "bg-white border-brand-orange/20 shadow-xl shadow-brand-orange/5"
                        : "bg-white/80 border-slate-100 hover:border-slate-200 hover:shadow-lg"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full p-6 md:p-7 flex items-start justify-between text-left group"
                    >
                      <div className="flex items-start gap-4 pr-4">
                        {/* Question number */}
                        <span
                          className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-black transition-all duration-300 ${
                            openIndex === index
                              ? "bg-brand-orange text-white"
                              : "bg-slate-100 text-slate-400 group-hover:bg-brand-orange/10 group-hover:text-brand-orange"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`text-base md:text-lg font-bold tracking-tight transition-colors leading-snug ${
                            openIndex === index
                              ? "text-brand-navy"
                              : "text-slate-600 group-hover:text-brand-navy"
                          }`}
                        >
                          {faq.question}
                        </span>
                      </div>
                      <div
                        className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-500 ${
                          openIndex === index
                            ? "bg-brand-navy text-white rotate-0"
                            : "bg-slate-100 text-slate-400 group-hover:bg-brand-orange/10 group-hover:text-brand-orange"
                        }`}
                      >
                        <motion.div
                          animate={{ rotate: openIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        >
                          {openIndex === index ? (
                            <Minus className="w-5 h-5" />
                          ) : (
                            <Plus className="w-5 h-5" />
                          )}
                        </motion.div>
                      </div>
                    </button>

                    <AnimatePresence mode="wait">
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 md:px-7 pb-6 md:pb-7">
                            <div className="pl-12">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "3rem" }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className="h-0.5 bg-gradient-to-r from-brand-orange to-brand-salmon mb-5"
                              />
                              <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.15 }}
                                className="text-slate-600 font-medium leading-relaxed text-base"
                              >
                                {faq.answer}
                              </motion.p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* No results message */}
            {filteredFaqs.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-600 mb-2">
                  Aucun résultat trouvé
                </h3>
                <p className="text-slate-400 font-medium">
                  Essayez avec d'autres mots-clés ou consultez toutes les questions.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="mt-6 px-6 py-3 bg-brand-orange text-white rounded-full font-bold text-sm uppercase tracking-wider hover:bg-brand-orange/90 transition-colors"
                >
                  Voir toutes les questions
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* ============================================
          CTA SECTION
      ============================================ */}
      <section className="py-24 md:py-32 bg-brand-navy relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-brand-salmon/10 rounded-full blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, 40, 0],
              scale: [1.1, 1, 1.1],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-10 md:p-14 text-center">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 bg-brand-orange/20 rounded-full px-5 py-2 mb-8">
                  <MessageCircle className="w-4 h-4 text-brand-orange" />
                  <span className="text-brand-orange font-bold uppercase tracking-[0.2em] text-xs">
                    Besoin d'aide ?
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tighter leading-tight">
                  VOUS N'AVEZ PAS TROUVÉ
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-salmon">
                    VOTRE RÉPONSE ?
                  </span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 font-medium leading-relaxed">
                  Votre situation est unique. Parlons-en directement pour lever tous vos
                  doutes et répondre à vos questions personnalisées.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/prendre-rendez-vous"
                    className="inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-brand-orange/90 transition-all shadow-lg shadow-brand-orange/25 group"
                  >
                    Réserver un appel gratuit
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 bg-white/10 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-white/20 transition-all border border-white/10"
                  >
                    Nous contacter
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

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
import { ScrollReveal } from "@/components/animations";

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
    <main className="min-h-screen bg-[#FFFFFF] dark:bg-[#1D1D1F] overflow-hidden">
      <Navbar />

      {/* ============================================
          HERO - Minimal & Elegant
      ============================================ */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 border border-brand-navy/10 rounded-full px-5 py-2 mb-8">
              <HelpCircle className="w-3.5 h-3.5 text-brand-orange" />
              <span className="text-brand-navy/50 font-bold uppercase tracking-[0.2em] text-[11px]">
                Centre d'aide
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-navy tracking-tighter uppercase leading-[0.95] mb-5">
              Questions
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-salmon">
                Fréquentes
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <p className="text-base md:text-lg text-brand-navy/45 max-w-lg mx-auto font-medium leading-relaxed">
              Tout ce que vous devez savoir sur l'approche AVR®, nos formations et
              accompagnements.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          SEARCH & FILTERS
      ============================================ */}
      <section className="pb-6">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Search */}
            <ScrollReveal delay={0.1}>
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-brand-navy/25" />
                <input
                  type="text"
                  placeholder="Rechercher une question..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white dark:bg-[#2C2C2E] border border-brand-navy/8 dark:border-white/8 rounded-xl px-12 py-3.5 text-brand-navy dark:text-white text-sm placeholder:text-brand-navy/30 dark:placeholder:text-white/25 focus:outline-none focus:border-brand-orange/40 focus:ring-2 focus:ring-brand-orange/5 transition-all font-medium shadow-sm dark:shadow-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-navy/30 hover:text-brand-navy transition-colors"
                  >
                    <Plus className="w-4 h-4 rotate-45" />
                  </button>
                )}
              </div>
            </ScrollReveal>

            {/* Category pills */}
            <ScrollReveal delay={0.15}>
              <div className="flex flex-wrap justify-center gap-2">
                {faqCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-300 ${
                        activeCategory === cat.id
                          ? "bg-brand-navy text-white shadow-md shadow-brand-navy/15"
                          : "bg-white dark:bg-[#2C2C2E] text-brand-navy/45 dark:text-white/40 hover:text-brand-navy/70 dark:hover:text-white/60 hover:bg-white/80 dark:hover:bg-white/[0.06] border border-brand-navy/8 dark:border-white/8"
                    }`}
                  >
                    <cat.icon className="w-3.5 h-3.5" />
                    {cat.label}
                  </button>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================
          FAQ ACCORDION
      ============================================ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Results count */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-xs font-semibold text-brand-navy/30 uppercase tracking-wider">
                {filteredFaqs.length} question{filteredFaqs.length > 1 ? "s" : ""} trouvée
                {filteredFaqs.length > 1 ? "s" : ""}
              </span>
            </motion.div>

            {/* FAQ Items */}
            <div className="space-y-3">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openIndex === index;
                const globalIndex = faqs.indexOf(faq);
                return (
                  <motion.div
                    key={globalIndex}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className={`rounded-2xl border transition-all duration-400 overflow-hidden ${
                        isOpen
                          ? "bg-white dark:bg-[#2C2C2E] border-brand-orange/15 shadow-lg shadow-brand-navy/[0.04] dark:shadow-black/20"
                          : "bg-white/70 dark:bg-white/[0.04] border-transparent hover:bg-white dark:hover:bg-white/[0.06] hover:border-brand-navy/6 dark:hover:border-white/6 hover:shadow-md hover:shadow-brand-navy/[0.03] dark:hover:shadow-black/15"
                      }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left group"
                    >
                      <div className="flex items-center gap-4 pr-4 flex-1 min-w-0">
                        {/* Accent bar */}
                        <div
                          className={`w-1 self-stretch rounded-full flex-shrink-0 transition-all duration-300 ${
                            isOpen
                              ? "bg-gradient-to-b from-brand-orange to-brand-salmon"
                              : "bg-brand-navy/8 group-hover:bg-brand-orange/30"
                          }`}
                        />
                        <span
                          className={`text-[15px] md:text-base font-semibold tracking-tight transition-colors leading-snug ${
                            isOpen
                              ? "text-brand-navy"
                              : "text-brand-navy/65 group-hover:text-brand-navy"
                          }`}
                        >
                          {faq.question}
                        </span>
                      </div>
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                          isOpen
                            ? "bg-brand-orange text-white"
                            : "bg-brand-navy/[0.04] text-brand-navy/30 group-hover:bg-brand-orange/10 group-hover:text-brand-orange"
                        }`}
                      >
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        >
                          {isOpen ? (
                            <Minus className="w-4 h-4" />
                          ) : (
                            <Plus className="w-4 h-4" />
                          )}
                        </motion.div>
                      </div>
                    </button>

                    <AnimatePresence mode="wait">
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5">
                              <div className="ml-5 pl-4 border-l border-brand-navy/[0.06] dark:border-white/[0.06]">
                              <motion.p
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="text-brand-navy/50 font-medium leading-[1.75] text-sm"
                              >
                                {faq.answer}
                              </motion.p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* No results */}
            {filteredFaqs.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-16"
              >
                <div className="w-16 h-16 bg-brand-navy/[0.04] rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Search className="w-6 h-6 text-brand-navy/25" />
                </div>
                <h3 className="text-lg font-bold text-brand-navy/60 mb-2">
                  Aucun résultat trouvé
                </h3>
                <p className="text-brand-navy/35 font-medium text-sm mb-6">
                  Essayez avec d'autres mots-clés ou consultez toutes les questions.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="px-5 py-2.5 bg-brand-navy text-white rounded-full font-semibold text-xs uppercase tracking-wider hover:bg-brand-navy/90 transition-colors"
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
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="relative bg-brand-navy rounded-3xl p-10 md:p-14 text-center overflow-hidden">
                {/* Subtle gradient orbs */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-48 h-48 bg-brand-salmon/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
                    <MessageCircle className="w-3.5 h-3.5 text-brand-orange" />
                    <span className="text-white/60 font-bold uppercase tracking-[0.2em] text-[10px]">
                      Besoin d'aide ?
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tight leading-tight">
                    Vous n'avez pas trouvé
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-salmon">
                      votre réponse ?
                    </span>
                  </h2>

                  <p className="text-sm md:text-base text-white/45 max-w-md mx-auto mb-8 font-medium leading-relaxed">
                    Votre situation est unique. Parlons-en directement pour lever tous vos
                    doutes et répondre à vos questions personnalisées.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link
                      href="/prendre-rendez-vous"
                      className="inline-flex items-center justify-center gap-2.5 bg-brand-orange text-white px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-brand-orange/90 transition-all shadow-lg shadow-brand-orange/25 group"
                    >
                      Réserver un appel gratuit
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2.5 bg-white/10 text-white px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-wider hover:bg-white/15 transition-all border border-white/10"
                    >
                      Nous contacter
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

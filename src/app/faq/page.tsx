"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";
import { 
  Plus, 
  Minus, 
  HelpCircle, 
  ArrowRight, 
  Sparkles,
  MessageCircle,
  Search,
  ChevronRight
} from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
  LineReveal,
} from "@/components/animations";

const faqCategories = [
  { id: "all", label: "Tout", icon: Sparkles },
  { id: "avr", label: "Méthode AVR", icon: HelpCircle },
  { id: "formation", label: "Formations", icon: MessageCircle },
  { id: "pratique", label: "Questions pratiques", icon: Search },
];

const faqs = [
  {
    id: 1,
    category: "avr",
    question: "Puis-je devenir un bon commercial alors que je n'ai pas fait d'études commerciales et que je suis introverti ?",
    answer: "Un grand oui ! Être introverti est un état d'esprit : on puise son énergie dans la solitude. Les introvertis développent davantage de qualités d'écoute, essentielles pour comprendre les problèmes et enjeux des prospects. La démarche commerciale repose sur des process simples et s'apprend en pratiquant, ce qui permet de développer sa posture.",
  },
  {
    id: 2,
    category: "avr",
    question: "Qu'est-ce que l'ART de la Vente Responsable ?",
    answer: "En affaires, la performance et les résultats sont indispensables. Les vendeurs responsables considèrent que la performance découle directement de méthodes vertueuses. Ils privilégient des actions et une posture qui créent des relations solides et durables. La confiance est l'ingrédient principal pour des partenariats durables et des clients satisfaits qui reviennent et deviennent ambassadeurs. L'AVR® (L'Art de la Vente Responsable) favorise : des relations interpersonnelles qualitatives, l'engagement et la confiance des prospects, le développement de la motivation des vendeurs, l'augmentation de la fidélisation et des recommandations, la réduction des pertes liées à la prospection froide et aux avis négatifs, la diminution du turnover, le respect des obligations RGPD.",
  },
  {
    id: 3,
    category: "avr",
    question: "J'ai une bonne expérience en vente, que peut m'apporter la démarche AVR ?",
    answer: "L'AVR complète les approches traditionnelles. Elle permet de faire le point sur sa posture, développer des soft skills et entraîner son mental pour dépasser ses freins (motivation, affirmation de soi…).",
  },
  {
    id: 4,
    category: "avr",
    question: "Je ne me sens pas à l'aise dans la démarche commerciale, suivre mes ressentis est-ce être aligné avec mes valeurs ?",
    answer: "Les ressentis indiquent qu'il y a quelque chose à explorer. Ne pas tirer de conclusions hâtives permet de dépasser les croyances limitantes et de trouver sa vraie vocation.",
  },
  {
    id: 5,
    category: "avr",
    question: "La Vente Responsable est-elle compatible avec les exigences économiques et les forts enjeux commerciaux ?",
    answer: "Oui. L'AVR tient compte des résultats tout en renforçant la confiance, la fidélisation, les recommandations et la motivation des commerciaux.",
  },
  {
    id: 6,
    category: "pratique",
    question: "Pourquoi les formations STAF Affaires ne sont pas prises en charge par les OPCO ?",
    answer: "Après plus de 10 ans d'expérience et de normes (Datadock, Qualiopi…), nous faisons un choix responsable : simplifier, former et transformer plutôt que suivre une complexité inutile.",
  },
  {
    id: 7,
    category: "formation",
    question: "Qu'est-ce que la FormAction et quelle différence avec une formation classique ?",
    answer: "Les études montrent qu'une formation traditionnelle a un faible taux de rétention. Nos programmes privilégient l'application et l'entraînement, avec des séances courtes et un suivi sur le moyen terme, pour développer de nouvelles habitudes efficacement.",
  },
  {
    id: 8,
    category: "formation",
    question: "Combien de temps dure un accompagnement type ?",
    answer: "La durée varie selon vos objectifs. Un coaching individuel peut s'étendre sur 3 à 6 mois avec des séances régulières. Les formations en groupe sont généralement plus condensées, de quelques jours à quelques semaines, avec un suivi post-formation pour ancrer les apprentissages.",
  },
  {
    id: 9,
    category: "pratique",
    question: "Comment se déroule le premier contact ?",
    answer: "Un premier échange téléphonique ou visio de 30 minutes permet de comprendre votre situation, vos enjeux et vos objectifs. Cet appel est sans engagement et permet de définir ensemble le format d'accompagnement le plus adapté à vos besoins.",
  },
  {
    id: 10,
    category: "formation",
    question: "Les accompagnements sont-ils disponibles en présentiel ou à distance ?",
    answer: "Les deux formats sont possibles. Le présentiel offre une immersion totale et favorise les interactions. Le distanciel permet plus de flexibilité et s'adapte à vos contraintes géographiques. Nous proposons également des formats hybrides combinant le meilleur des deux approches.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-brand-navy"
      >
        {/* Animated background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(ellipse at 30% 40%, rgba(255,107,74,0.4) 0%, transparent 50%)",
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
              background: "radial-gradient(ellipse at 70% 60%, rgba(255,142,117,0.4) 0%, transparent 50%)",
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

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto px-6 relative z-10 text-center pt-20"
        >
          <ScrollReveal delay={0.2}>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2 mb-8">
              <HelpCircle className="w-4 h-4 text-brand-orange" />
              <span className="text-white/80 font-bold uppercase tracking-[0.2em] text-xs">
                Centre d'aide
              </span>
            </div>
          </ScrollReveal>

          <div className="mb-8">
            <LineReveal delay={0.3}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                Questions
              </h1>
            </LineReveal>
            <LineReveal delay={0.5}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9] mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-salmon">
                  Fréquentes
                </span>
              </h1>
            </LineReveal>
          </div>

          <ScrollReveal delay={0.7}>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
              Tout ce que vous devez savoir sur notre approche, nos méthodes
              et nos accompagnements.
            </p>
          </ScrollReveal>
        </motion.div>

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

      {/* Search & Filter Section */}
      <section className="py-12 bg-slate-50/50 sticky top-0 z-40 backdrop-blur-xl border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher une question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl text-sm font-medium focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 transition-all"
              />
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {faqCategories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                    activeCategory === cat.id
                      ? "bg-brand-navy text-white shadow-lg"
                      : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-200"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Main FAQ List */}
            <div className="lg:col-span-8">
              <div className="mb-8">
                <span className="text-sm font-bold text-slate-400">
                  {filteredFaqs.length} question{filteredFaqs.length > 1 ? "s" : ""} trouvée{filteredFaqs.length > 1 ? "s" : ""}
                </span>
              </div>

              <StaggerContainer className="space-y-4" staggerDelay={0.08}>
                {filteredFaqs.map((faq, index) => (
                  <StaggerItem key={faq.id}>
                    <motion.div
                      className={`rounded-[20px] border-2 transition-all duration-500 overflow-hidden ${
                        openIndex === index
                          ? "bg-white border-brand-orange/20 shadow-xl shadow-brand-orange/5"
                          : "bg-white border-transparent hover:border-slate-100 hover:shadow-lg"
                      }`}
                      layout
                    >
                      <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full p-6 lg:p-8 flex items-start justify-between text-left group"
                      >
                        <div className="flex-1 pr-6">
                          <div className="flex items-center gap-3 mb-3">
                            <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full transition-colors ${
                              openIndex === index
                                ? "bg-brand-orange/10 text-brand-orange"
                                : "bg-slate-100 text-slate-400"
                            }`}>
                              {faqCategories.find(c => c.id === faq.category)?.label || "Général"}
                            </span>
                          </div>
                          <h3 className={`text-base lg:text-lg font-bold leading-snug transition-colors ${
                            openIndex === index
                              ? "text-brand-navy"
                              : "text-slate-700 group-hover:text-brand-navy"
                          }`}>
                            {faq.question}
                          </h3>
                        </div>
                        <motion.div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0 ${
                            openIndex === index
                              ? "bg-brand-orange text-white"
                              : "bg-slate-100 text-slate-400 group-hover:bg-brand-navy/5 group-hover:text-brand-navy"
                          }`}
                          animate={{ rotate: openIndex === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {openIndex === index ? (
                            <Minus className="w-5 h-5" />
                          ) : (
                            <Plus className="w-5 h-5" />
                          )}
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ 
                              duration: 0.4, 
                              ease: [0.23, 1, 0.32, 1],
                              opacity: { duration: 0.25 }
                            }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 lg:px-8 pb-8">
                              <motion.div
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1, duration: 0.3 }}
                              >
                                <div className="h-px w-full bg-gradient-to-r from-brand-orange/30 via-brand-orange/10 to-transparent mb-6" />
                                <p className="text-base text-slate-600 font-medium leading-relaxed">
                                  {faq.answer}
                                </p>
                              </motion.div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {filteredFaqs.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-20"
                >
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-700 mb-2">
                    Aucun résultat trouvé
                  </h3>
                  <p className="text-slate-500">
                    Essayez de modifier vos critères de recherche
                  </p>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-40 space-y-8">
                {/* Contact Card */}
                <ScrollReveal>
                  <div className="bg-brand-navy p-8 rounded-[28px] text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/20 blur-3xl -mr-16 -mt-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-salmon/10 blur-2xl -ml-12 -mb-12" />
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-brand-orange/20 rounded-2xl flex items-center justify-center mb-6">
                        <MessageCircle className="w-7 h-7 text-brand-orange" />
                      </div>
                      
                      <h4 className="font-black text-xl mb-3 uppercase tracking-tight">
                        Vous avez une autre question ?
                      </h4>
                      <p className="text-white/60 mb-8 font-medium leading-relaxed text-sm">
                        Votre situation est unique. Parlons-en directement pour lever tous vos doutes et définir ensemble la meilleure approche.
                      </p>
                      
                      <Link href="/prendre-rendez-vous">
                        <motion.button
                          className="w-full flex items-center justify-center gap-3 bg-white text-brand-navy px-6 py-4 rounded-xl font-black uppercase tracking-[0.15em] text-xs hover:bg-brand-orange hover:text-white transition-colors group"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Prendre rendez-vous
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Quick Links */}
                <ScrollReveal delay={0.1}>
                  <div className="bg-slate-50 p-6 rounded-[24px]">
                    <h4 className="font-black text-sm uppercase tracking-[0.2em] text-brand-navy mb-6">
                      Ressources utiles
                    </h4>
                    <div className="space-y-3">
                      {[
                        { label: "Découvrir nos services", href: "/#services" },
                        { label: "Notre philosophie", href: "/about" },
                        { label: "Témoignages clients", href: "/#testimonials" },
                      ].map((link) => (
                        <Link
                          key={link.label}
                          href={link.href}
                          className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-all group"
                        >
                          <span className="text-sm font-bold text-slate-700 group-hover:text-brand-navy transition-colors">
                            {link.label}
                          </span>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-orange group-hover:translate-x-1 transition-all" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-brand-navy via-brand-navy to-[#0d2340] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
              Prêt à passer à l'action ?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 font-medium">
              Réservez votre appel découverte gratuit et commençons à construire votre réussite ensemble.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Link href="/prendre-rendez-vous">
              <motion.button
                className="inline-flex items-center gap-3 bg-white text-brand-navy px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:bg-brand-orange hover:text-white transition-colors shadow-2xl group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Réserver mon créneau
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}

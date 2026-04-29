"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Download } from "lucide-react";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

export default function FormulaireAVR() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ nom: "", prenom: "", email: "", entreprise: "", telephone: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch("https://formspree.io/f/mnjlvneb", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Téléchargement AVR — ${form.prenom} ${form.nom}`,
          _replyto: form.email,
          "Prénom": form.prenom,
          "Nom": form.nom,
          "Email": form.email,
          "Entreprise": form.entreprise || "Non renseignée",
          "Téléphone": form.telephone || "Non renseigné",
          "Ressource": "Les 10 fondements de l'Art de la Vente Responsable",
        }),
      });
    } catch (err) {
      console.error("AVR form error:", err);
    }
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] dark:bg-[#1C1C1E] flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-lg">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-brand-navy/50 dark:text-white/50 hover:text-brand-orange transition-colors mb-8"
        >
          <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          Retour au site
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="bg-white dark:bg-[#2C2C2E] rounded-3xl border border-brand-navy/[0.06] dark:border-white/[0.06] shadow-[0_4px_40px_-8px_rgba(10,25,47,0.08)] p-8 sm:p-10"
        >
          {!submitted ? (
            <>
              {/* Header */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/10">
                  <Download className="w-3.5 h-3.5 text-brand-orange" />
                  <span className="text-brand-orange text-[11px] font-bold tracking-[0.14em] uppercase">
                    Ressource gratuite
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-navy dark:text-white leading-tight tracking-tight mb-3">
                  Les 10 fondements de l&apos;Art de la Vente Responsable
                </h1>
                <p className="text-sm text-brand-navy/50 dark:text-white/50 leading-relaxed">
                  Remplissez le formulaire ci-dessous pour recevoir le document complet par email.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="prenom" className="block text-xs font-semibold text-brand-navy/60 dark:text-white/60 mb-1.5">
                      Prénom *
                    </label>
                    <input
                      id="prenom"
                      type="text"
                      required
                      value={form.prenom}
                      onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-navy/[0.08] dark:border-white/[0.08] bg-[#FFFFFF] dark:bg-[#1C1C1E] text-sm text-brand-navy dark:text-white placeholder:text-brand-navy/30 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange/50 transition-all"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label htmlFor="nom" className="block text-xs font-semibold text-brand-navy/60 dark:text-white/60 mb-1.5">
                      Nom *
                    </label>
                    <input
                      id="nom"
                      type="text"
                      required
                      value={form.nom}
                      onChange={(e) => setForm({ ...form, nom: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-brand-navy/[0.08] dark:border-white/[0.08] bg-[#FFFFFF] dark:bg-[#1C1C1E] text-sm text-brand-navy dark:text-white placeholder:text-brand-navy/30 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange/50 transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-brand-navy/60 dark:text-white/60 mb-1.5">
                    Email professionnel *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-navy/[0.08] dark:border-white/[0.08] bg-[#FFFFFF] dark:bg-[#1C1C1E] text-sm text-brand-navy dark:text-white placeholder:text-brand-navy/30 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange/50 transition-all"
                    placeholder="vous@entreprise.com"
                  />
                </div>

                <div>
                  <label htmlFor="entreprise" className="block text-xs font-semibold text-brand-navy/60 dark:text-white/60 mb-1.5">
                    Entreprise
                  </label>
                  <input
                    id="entreprise"
                    type="text"
                    value={form.entreprise}
                    onChange={(e) => setForm({ ...form, entreprise: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-navy/[0.08] dark:border-white/[0.08] bg-[#FFFFFF] dark:bg-[#1C1C1E] text-sm text-brand-navy dark:text-white placeholder:text-brand-navy/30 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange/50 transition-all"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-xs font-semibold text-brand-navy/60 dark:text-white/60 mb-1.5">
                    Téléphone
                  </label>
                  <input
                    id="telephone"
                    type="tel"
                    value={form.telephone}
                    onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-brand-navy/[0.08] dark:border-white/[0.08] bg-[#FFFFFF] dark:bg-[#1C1C1E] text-sm text-brand-navy dark:text-white placeholder:text-brand-navy/30 dark:placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange/50 transition-all"
                    placeholder="06 00 00 00 00"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full relative flex items-center justify-center gap-2.5 px-7 py-4 mt-2 rounded-xl font-bold text-sm text-white bg-brand-orange hover:brightness-110 active:scale-[0.98] transition-all duration-200"
                  style={{ transform: "translateZ(0)" }}
                >
                  Recevoir les 10 fondements
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-brand-navy/35 dark:text-white/35 text-center mt-3 leading-relaxed">
                  Vos données restent confidentielles. Aucun spam, uniquement du contenu de valeur.
                </p>
              </form>
            </>
          ) : (
            /* Success state */
            <div className="text-center py-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </motion.div>
              <h2 className="text-2xl font-extrabold text-brand-navy dark:text-white mb-3">
                Merci {form.prenom} !
              </h2>
              <p className="text-sm text-brand-navy/50 dark:text-white/50 leading-relaxed mb-6">
                Vous allez recevoir les 10 fondements de l&apos;Art de la Vente Responsable par email dans quelques instants.
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:underline"
              >
                <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                Retour au site
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie, X, Settings, Check, ChevronDown, ChevronUp } from "lucide-react";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

const COOKIE_CONSENT_KEY = "staf_cookie_consent";
const COOKIE_PREFERENCES_KEY = "staf_cookie_preferences";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Délai pour afficher le bandeau après le chargement de la page
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    } else {
      const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);
      if (savedPreferences) {
        setPreferences(JSON.parse(savedPreferences));
      }
    }
  }, []);

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    });
  };

  const acceptNecessary = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    });
  };

  const saveCustomPreferences = () => {
    saveConsent(preferences);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return; // Les cookies nécessaires ne peuvent pas être désactivés
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const cookieTypes = [
    {
      id: "necessary" as const,
      name: "Cookies essentiels",
      description:
        "Ces cookies sont indispensables au fonctionnement du site. Ils permettent d'utiliser les fonctionnalités principales comme la navigation et l'accès aux zones sécurisées.",
      required: true,
    },
    {
      id: "analytics" as const,
      name: "Cookies analytiques",
      description:
        "Ces cookies nous aident à comprendre comment les visiteurs utilisent le site, en collectant des informations de manière anonyme. Ils nous permettent d'améliorer continuellement votre expérience.",
      required: false,
    },
    {
      id: "marketing" as const,
      name: "Cookies marketing",
      description:
        "Ces cookies sont utilisés pour suivre les visiteurs sur les sites web. L'intention est d'afficher des publicités pertinentes et engageantes pour l'utilisateur.",
      required: false,
    },
    {
      id: "preferences" as const,
      name: "Cookies de préférences",
      description:
        "Ces cookies permettent au site de se souvenir de vos choix (comme votre langue ou la région où vous vous trouvez) et de fournir des fonctionnalités améliorées et personnalisées.",
      required: false,
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="p-4 sm:p-6 border-b border-slate-100">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-orange/10 flex items-center justify-center shrink-0">
                    <Cookie className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-navy text-lg">
                      Gestion des cookies
                    </h3>
                    <p className="text-slate-600 text-sm mt-1">
                      Nous utilisons des cookies pour améliorer votre expérience
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="Fermer"
                >
                  <X className="w-5 h-5 text-slate-400" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Ce site utilise des cookies pour vous offrir une meilleure
                expérience de navigation, analyser le trafic et personnaliser le
                contenu. En cliquant sur "Accepter tout", vous consentez à
                l'utilisation de tous les cookies. Vous pouvez également
                personnaliser vos préférences ou consulter notre{" "}
                <Link
                  href="/politique-de-confidentialite"
                  className="text-brand-orange hover:underline font-medium"
                >
                  politique de confidentialité
                </Link>
                .
              </p>

              {/* Toggle Settings */}
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="flex items-center gap-2 text-sm text-brand-navy font-medium hover:text-brand-orange transition-colors mb-4"
              >
                <Settings className="w-4 h-4" />
                Personnaliser mes choix
                {showSettings ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {/* Cookie Settings */}
              <AnimatePresence>
                {showSettings && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3 mb-6 p-4 bg-slate-50 rounded-xl">
                      {cookieTypes.map((cookie) => (
                        <div
                          key={cookie.id}
                          className="flex items-start justify-between gap-4 p-3 bg-white rounded-lg border border-slate-100"
                        >
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-brand-navy text-sm">
                                {cookie.name}
                              </h4>
                              {cookie.required && (
                                <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                                  Requis
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                              {cookie.description}
                            </p>
                          </div>
                          <button
                            onClick={() => togglePreference(cookie.id)}
                            disabled={cookie.required}
                            className={`relative w-12 h-6 rounded-full transition-colors shrink-0 ${
                              preferences[cookie.id]
                                ? "bg-brand-orange"
                                : "bg-slate-200"
                            } ${cookie.required ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                            aria-label={`${preferences[cookie.id] ? "Désactiver" : "Activer"} ${cookie.name}`}
                          >
                            <span
                              className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${
                                preferences[cookie.id]
                                  ? "translate-x-7"
                                  : "translate-x-1"
                              }`}
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={acceptNecessary}
                  className="flex-1 px-4 py-3 border border-slate-200 text-slate-700 rounded-xl font-medium text-sm hover:bg-slate-50 transition-colors"
                >
                  Refuser les cookies optionnels
                </button>
                {showSettings ? (
                  <button
                    onClick={saveCustomPreferences}
                    className="flex-1 px-4 py-3 bg-brand-navy text-white rounded-xl font-medium text-sm hover:bg-brand-navy/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Enregistrer mes préférences
                  </button>
                ) : (
                  <button
                    onClick={acceptAll}
                    className="flex-1 px-4 py-3 bg-brand-orange text-white rounded-xl font-medium text-sm hover:bg-brand-orange/90 transition-colors flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Accepter tout
                  </button>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="px-4 sm:px-6 py-3 bg-slate-50 border-t border-slate-100">
              <p className="text-xs text-slate-500 text-center">
                En savoir plus sur notre{" "}
                <Link
                  href="/politique-de-confidentialite"
                  className="text-brand-orange hover:underline"
                >
                  politique de confidentialité
                </Link>{" "}
                et nos{" "}
                <Link href="/cgu" className="text-brand-orange hover:underline">
                  conditions d'utilisation
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Composant pour réouvrir les paramètres de cookies
export function CookieSettingsButton() {
  const reopenBanner = () => {
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    window.location.reload();
  };

  return (
    <button
      onClick={reopenBanner}
      className="text-white/40 hover:text-white transition-colors text-xs sm:text-sm font-bold uppercase tracking-tight flex items-center group"
    >
      <Cookie className="w-3 h-3 mr-2" />
      Gérer les cookies
    </button>
  );
}

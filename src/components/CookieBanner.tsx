"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Cookie, Check, ChevronDown, ChevronUp } from "lucide-react";

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
    saveConsent({ necessary: true, analytics: true, marketing: true, preferences: true });
  };

  const acceptNecessary = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false, preferences: false });
  };

  const saveCustomPreferences = () => {
    saveConsent(preferences);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return;
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const cookieTypes = [
    {
      id: "necessary" as const,
      name: "Essentiels",
      description: "Indispensables au fonctionnement du site.",
      required: true,
    },
    {
      id: "analytics" as const,
      name: "Analytiques",
      description: "Nous aident à améliorer votre expérience.",
      required: false,
    },
    {
      id: "marketing" as const,
      name: "Marketing",
      description: "Personnalisent le contenu affiché.",
      required: false,
    },
    {
      id: "preferences" as const,
      name: "Préférences",
      description: "Mémorisent vos choix personnels.",
      required: false,
    },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-[380px] z-50"
        >
          <div className="bg-white dark:bg-[#2C2C2E] rounded-2xl shadow-[0_8px_40px_-8px_rgba(10,25,47,0.15)] dark:shadow-[0_8px_40px_-8px_rgba(0,0,0,0.4)] border border-slate-100 dark:border-white/10 overflow-hidden">
            {/* Main content */}
            <div className="p-5">
              {/* Icon + title row */}
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center shrink-0">
                  <Cookie className="w-4 h-4 text-brand-orange" />
                </div>
                <h3 className="font-bold text-brand-navy dark:text-white text-sm leading-tight">Cookies</h3>
              </div>

              <p className="text-slate-500 dark:text-white/50 text-xs leading-relaxed mb-4">
                Nous utilisons des cookies pour améliorer votre expérience.{" "}
                <Link
                  href="/politique-de-confidentialite"
                  className="text-brand-orange hover:underline font-medium"
                >
                  En savoir plus
                </Link>
              </p>

              {/* Settings toggle */}
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="flex items-center gap-1.5 text-xs text-brand-navy/60 dark:text-white/50 font-medium hover:text-brand-navy dark:hover:text-white transition-colors mb-4"
              >
                Personnaliser
                {showSettings ? (
                  <ChevronUp className="w-3 h-3" />
                ) : (
                  <ChevronDown className="w-3 h-3" />
                )}
              </button>

              {/* Cookie Settings */}
              <AnimatePresence>
                {showSettings && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-2 mb-4">
                      {cookieTypes.map((cookie) => (
                        <div
                          key={cookie.id}
                          className="flex items-center justify-between gap-3 py-2 px-3 bg-slate-50 dark:bg-white/5 rounded-lg"
                        >
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="font-semibold text-brand-navy dark:text-white text-xs">
                                {cookie.name}
                              </span>
                              {cookie.required && (
                                <span className="text-[9px] bg-slate-200 dark:bg-white/10 text-slate-500 dark:text-white/50 px-1.5 py-0.5 rounded-full leading-none">
                                  Requis
                                </span>
                              )}
                            </div>
                            <p className="text-[10px] text-slate-400 dark:text-white/40 mt-0.5 leading-snug">
                              {cookie.description}
                            </p>
                          </div>
                          <button
                            onClick={() => togglePreference(cookie.id)}
                            disabled={cookie.required}
                              className={`relative w-9 h-5 rounded-full transition-colors shrink-0 ${
                              preferences[cookie.id]
                                ? "bg-brand-orange"
                                : "bg-slate-200 dark:bg-white/15"
                            } ${cookie.required ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                            aria-label={`${preferences[cookie.id] ? "Désactiver" : "Activer"} ${cookie.name}`}
                          >
                            <span
                              className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${
                                preferences[cookie.id]
                                  ? "translate-x-[18px]"
                                  : "translate-x-0.5"
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
              <div className="flex gap-2">
                <button
                  onClick={acceptNecessary}
                  className="flex-1 px-3 py-2.5 border border-slate-200 dark:border-white/15 text-slate-600 dark:text-white/60 rounded-xl font-semibold text-xs hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
                >
                  Refuser
                </button>
                {showSettings ? (
                  <button
                    onClick={saveCustomPreferences}
                    className="flex-1 px-3 py-2.5 bg-brand-navy text-white rounded-xl font-semibold text-xs hover:bg-brand-navy/90 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Check className="w-3 h-3" />
                    Enregistrer
                  </button>
                ) : (
                  <button
                    onClick={acceptAll}
                    className="flex-1 px-3 py-2.5 bg-brand-orange text-white rounded-xl font-semibold text-xs hover:bg-brand-orange/90 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Check className="w-3 h-3" />
                    Accepter
                  </button>
                )}
              </div>
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

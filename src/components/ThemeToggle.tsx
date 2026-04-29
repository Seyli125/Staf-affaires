'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    html.classList.add('theme-transition');
      
      // Double-RAF ensures the transition class is painted before the theme switch
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const next = !isDark;
          if (next) {
            html.classList.add('dark');
          } else {
            html.classList.remove('dark');
          }
          html.style.colorScheme = next ? 'dark' : 'light';
          setIsDark(next);
          localStorage.setItem('theme', next ? 'dark' : 'light');
        });
      });

      // Remove transition class after animation completes
      setTimeout(() => html.classList.remove('theme-transition'), 450);
  };

  if (!mounted) {
    // Render a placeholder to avoid layout shift
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Passer en mode clair' : 'Passer en mode sombre'}
      className="relative w-9 h-9 flex items-center justify-center rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors duration-200 cursor-pointer"
    >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ scale: 0.5, opacity: 0, rotate: 90 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotate: -90 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <Moon className="w-4 h-4 text-blue-300" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ scale: 0.5, opacity: 0, rotate: -90 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <Sun className="w-4 h-4 text-amber-500" />
            </motion.div>
          )}
        </AnimatePresence>
    </button>
  );
}

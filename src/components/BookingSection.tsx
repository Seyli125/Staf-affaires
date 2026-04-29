"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar as CalendarIcon, Clock, CheckCircle2, MessageSquare, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const timeSlots = [
  "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"
];

export function BookingSection() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setStep(3);
    }
  };

  return (
    <div id="booking" className="container mx-auto px-6 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-black text-brand-navy mb-6 tracking-tighter uppercase">
          Prêt à passer à l'action ?
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Réservez votre consultation stratégique de 45 minutes. Un moment privilégié pour analyser vos défis et dessiner vos premières solutions.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        <div className="lg:col-span-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#FFFFFF] dark:bg-[#2C2C2E] rounded-[40px] shadow-2xl shadow-brand-navy/10 dark:shadow-black/30 border border-brand-navy/5 dark:border-white/10 overflow-hidden"
          >
            <div className="p-8 bg-brand-navy text-white flex justify-between items-center">
              <div>
                <h3 className="text-xl font-bold">Janvier 2026</h3>
                <p className="text-white/60 text-sm">Consultation - 45 min</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 rounded-full hover:bg-white/10 transition-colors"><ChevronLeft className="w-5 h-5" /></button>
                <button className="p-2 rounded-full hover:bg-white/10 transition-colors"><ChevronRight className="w-5 h-5" /></button>
              </div>
            </div>

            <div className="p-8">
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="calendar"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    <div className="grid grid-cols-7 gap-2 mb-8 text-center text-xs font-bold text-slate-400 uppercase tracking-widest">
                      {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(d => <div key={d}>{d}</div>)}
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {days.map(day => (
                        <button
                          key={day}
                          onClick={() => { setSelectedDate(day); setStep(2); }}
                          className={`aspect-square rounded-2xl flex items-center justify-center text-sm font-bold transition-all ${
                            selectedDate === day 
                            ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30' 
                            : 'hover:bg-brand-navy/5 text-brand-navy'
                          } ${day > 25 ? 'opacity-20 cursor-not-allowed' : ''}`}
                          disabled={day > 25}
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="time"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <button onClick={() => setStep(1)} className="flex items-center gap-2 text-sm text-slate-400 hover:text-brand-navy transition-colors mb-6">
                      <ChevronLeft className="w-4 h-4" /> Retour au calendrier
                    </button>
                    <p className="text-lg font-bold text-brand-navy mb-6">Disponibilités pour le {selectedDate} Janvier</p>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map(time => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-4 rounded-2xl border-2 transition-all flex items-center justify-center gap-3 font-bold ${
                            selectedTime === time 
                            ? 'border-brand-orange bg-brand-orange/5 text-brand-orange' 
                            : 'border-slate-100 hover:border-brand-navy/20 text-brand-navy'
                          }`}
                        >
                          <Clock className="w-4 h-4" />
                          {time}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={handleBooking}
                      disabled={!selectedTime}
                      className="w-full mt-8 py-4 bg-brand-navy text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-brand-navy/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Confirmer le rendez-vous <ArrowRight className="w-5 h-5" />
                    </button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-black text-brand-navy mb-4">C'est réservé !</h3>
                    <p className="text-slate-600 mb-8 max-w-sm mx-auto">
                      Votre consultation avec Saïd est confirmée pour le <strong>{selectedDate} Janvier à {selectedTime}</strong>. Un email de confirmation vous a été envoyé.
                    </p>
                    <button onClick={() => setStep(1)} className="text-brand-navy font-bold hover:underline">
                      Réserver un autre créneau
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-gold/5 p-8 rounded-[40px] border border-brand-gold/20"
          >
            <h4 className="text-xl font-black text-brand-navy mb-4 flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-brand-gold" />
              Pas de créneau disponible ?
            </h4>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Si aucun horaire ne vous convient, n'attendez pas. Contactez Saïd directement via WhatsApp pour une réponse instantanée.
            </p>
            <a 
              href="https://wa.me/33600000000" 
              target="_blank" 
              className="w-full py-4 bg-[#25D366] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-[#25D366]/20 transition-all transform hover:-translate-y-1"
            >
              Discuter sur WhatsApp <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <div className="p-8">
            <h4 className="text-brand-navy font-black mb-6 uppercase tracking-widest text-sm">Pourquoi réserver ?</h4>
            <ul className="space-y-6">
              {[
                "Audit rapide de votre situation actuelle",
                "Identification de vos leviers de performance",
                "Plan d'action concret et immédiat",
                "Zéro engagement, 100% de valeur"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-navy text-white flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-slate-700 font-medium leading-tight">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

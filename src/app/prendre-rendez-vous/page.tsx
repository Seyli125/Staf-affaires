"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  CheckCircle2, 
  MessageSquare, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  User,
  Building2,
  Phone,
  ArrowLeft,
  ShieldCheck,
  Zap
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const timeSlots = [
  "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"
];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: ""
  });
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.company) {
      setStep(2);
    }
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setStep(4);
    }
  };

  const WhatsAppButton = () => (
    <a 
      href="https://wa.me/33600000000" 
      target="_blank" 
      className="inline-flex items-center gap-2 bg-[#25D366]/10 text-[#25D366] px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-[#25D366] hover:text-white transition-all group"
    >
      <MessageSquare className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" /> 
      WhatsApp Direct
    </a>
  );

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-navy transition-colors mb-8 font-bold uppercase tracking-[0.2em] text-[10px] group"
            >
              <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
              Retour
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-lg bg-brand-orange/10 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-brand-orange" />
                </div>
                <span className="text-brand-orange font-black uppercase tracking-[0.3em] text-[10px]">Session Stratégique Offerte</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-brand-navy mb-6 tracking-tighter uppercase leading-tight">
                Engagez votre <span className="text-brand-orange">Transformation</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-2xl leading-relaxed font-medium">
                Un échange privilégié de 45 minutes pour auditer vos processus, lever vos blocages et dessiner votre trajectoire de performance durable.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[40px] shadow-[0_32px_64px_-12px_rgba(10,25,47,0.1)] border border-brand-navy/5 overflow-hidden">
                {/* Progress Bar */}
                <div className="h-1.5 bg-slate-100 w-full flex">
                  <motion.div 
                    className="h-full bg-brand-orange" 
                    initial={{ width: "0%" }}
                    animate={{ width: `${(step / 4) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <div className="p-8 md:p-10">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <div className="flex justify-between items-center mb-8">
                          <h2 className="text-xl font-black text-brand-navy uppercase tracking-tight">Vos Coordonnées</h2>
                          <WhatsAppButton />
                        </div>
                        <form onSubmit={handleNextStep} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <User className="w-3 h-3" /> Prénom *
                              </label>
                              <input 
                                required
                                type="text"
                                value={formData.firstName}
                                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-orange/20 focus:bg-white outline-none transition-all font-bold text-sm"
                                placeholder="Jean"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <User className="w-3 h-3" /> Nom *
                              </label>
                              <input 
                                required
                                type="text"
                                value={formData.lastName}
                                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                                className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-orange/20 focus:bg-white outline-none transition-all font-bold text-sm"
                                placeholder="Dupont"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                              <Building2 className="w-3 h-3" /> Entreprise *
                            </label>
                            <input 
                              required
                              type="text"
                              value={formData.company}
                              onChange={(e) => setFormData({...formData, company: e.target.value})}
                              className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-orange/20 focus:bg-white outline-none transition-all font-bold text-sm"
                              placeholder="Votre société"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                              <Phone className="w-3 h-3" /> Téléphone
                            </label>
                            <input 
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-orange/20 focus:bg-white outline-none transition-all font-bold text-sm"
                              placeholder="06 00 00 00 00"
                            />
                          </div>
                          <button 
                            type="submit"
                            className="w-full py-5 rounded-2xl bg-brand-navy text-white font-black uppercase tracking-widest text-[11px] hover:bg-brand-orange transition-all shadow-xl shadow-brand-navy/20 active:scale-95"
                          >
                            Étape suivante <ArrowRight className="inline ml-2 w-4 h-4" />
                          </button>
                        </form>
                      </motion.div>
                    )}

                      {step === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                        >
                          <div className="flex items-center justify-between mb-8">
                            <h2 className="text-xl font-black text-brand-navy uppercase tracking-tight">Disponibilités</h2>
                            <WhatsAppButton />
                          </div>
                          
                          <div className="bg-brand-navy rounded-3xl p-6 text-white mb-8 border border-white/5">
                            <div className="flex justify-between items-center mb-6">
                              <h3 className="font-black uppercase tracking-widest text-xs">Janvier 2026</h3>
                              <div className="flex gap-2">
                                <button className="p-2 rounded-full hover:bg-white/10 transition-colors"><ChevronLeft className="w-4 h-4" /></button>
                                <button className="p-2 rounded-full hover:bg-white/10 transition-colors"><ChevronRight className="w-4 h-4" /></button>
                              </div>
                            </div>
                            <div className="grid grid-cols-7 gap-2 mb-4 text-center text-[8px] font-black text-white/30 uppercase tracking-[0.2em]">
                              {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(d => <div key={d}>{d}</div>)}
                            </div>
                            <div className="grid grid-cols-7 gap-2">
                              {days.map(day => (
                                <button
                                  key={day}
                                  onClick={() => { setSelectedDate(day); setStep(3); }}
                                  className={`aspect-square rounded-xl flex items-center justify-center text-[10px] font-black transition-all ${
                                    selectedDate === day 
                                    ? 'bg-brand-orange text-white' 
                                    : 'hover:bg-white/10 text-white/70'
                                  } ${day > 25 ? 'opacity-10 cursor-not-allowed' : ''}`}
                                  disabled={day > 25}
                                >
                                  {day}
                                </button>
                              ))}
                            </div>
                          </div>
                          <button 
                            onClick={() => setStep(1)}
                            className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-brand-navy transition-colors"
                          >
                            ← Modifier mes coordonnées
                          </button>
                        </motion.div>
                      )}

                      {step === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                        >
                          <div className="flex items-center justify-between mb-8">
                            <h2 className="text-xl font-black text-brand-navy uppercase tracking-tight">Créneaux Horaires</h2>
                            <WhatsAppButton />
                          </div>
                          
                          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-orange mb-6">Le {selectedDate} Janvier 2026</p>
                          
                          <div className="grid grid-cols-2 gap-3">
                            {timeSlots.map(time => (
                              <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={`p-4 rounded-xl border-2 transition-all flex items-center justify-center gap-3 font-bold text-xs ${
                                  selectedTime === time 
                                  ? 'border-brand-orange bg-brand-orange/5 text-brand-orange shadow-inner' 
                                  : 'border-slate-100 hover:border-brand-navy/20 text-brand-navy'
                                }`}
                              >
                                <Clock className="w-3.5 h-3.5" />
                                {time}
                              </button>
                            ))}
                          </div>
                          
                          <div className="flex flex-col gap-6 mt-10">
                            <button
                              onClick={handleBooking}
                              disabled={!selectedTime}
                              className="w-full py-5 bg-brand-navy text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-brand-orange transition-all shadow-xl shadow-brand-navy/20 disabled:opacity-50"
                            >
                              Finaliser le Rendez-vous
                            </button>
                            <button 
                              onClick={() => setStep(2)}
                              className="text-center text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-brand-navy transition-colors"
                            >
                              ← Retour au calendrier
                            </button>
                          </div>
                        </motion.div>
                      )}

                    {step === 4 && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-6"
                      >
                        <div className="w-20 h-20 bg-brand-orange/10 text-brand-orange rounded-full flex items-center justify-center mx-auto mb-8">
                          <CheckCircle2 className="w-10 h-10" />
                        </div>
                        <h2 className="text-2xl font-black text-brand-navy uppercase tracking-tight mb-4">C'est confirmé, {formData.firstName} !</h2>
                        <p className="text-base text-slate-600 mb-10 max-w-sm mx-auto leading-relaxed font-medium">
                          Votre consultation stratégique est réservée pour le <span className="text-brand-navy font-black">{selectedDate} Janvier à {selectedTime}</span>.
                        </p>
                        <div className="bg-slate-50 p-6 rounded-3xl mb-10 text-left space-y-4 border border-slate-100">
                          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Détails de la session</p>
                          <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                            <span className="text-[10px] font-bold text-slate-500 uppercase">Expert</span>
                            <span className="text-xs font-black text-brand-navy">Saïd TAAROUST</span>
                          </div>
                          <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                            <span className="text-[10px] font-bold text-slate-500 uppercase">Format</span>
                            <span className="text-xs font-black text-brand-navy">Visioconférence Privée</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-[10px] font-bold text-slate-500 uppercase">Durée</span>
                            <span className="text-xs font-black text-brand-navy">45 Minutes</span>
                          </div>
                        </div>
                        <Link href="/">
                          <button className="rounded-full px-10 py-5 font-black uppercase tracking-widest text-[11px] bg-brand-navy text-white hover:bg-brand-orange transition-all shadow-xl active:scale-95">
                            Retour au site
                          </button>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-brand-navy p-8 rounded-[40px] text-white relative overflow-hidden group shadow-2xl">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:rotate-12 transition-transform">
                  <ShieldCheck className="w-20 h-20" />
                </div>
                <h3 className="text-lg font-black uppercase tracking-tight mb-4 flex items-center gap-3">
                  Engagement Qualité
                </h3>
                <p className="text-white/60 mb-8 leading-relaxed font-bold text-sm">
                  Chaque session est soumise à une totale confidentialité. Saïd Taaroust est certifié RNCP Niveau 6 & PNL.
                </p>
                <div className="space-y-4">
                  {[
                    "Analyse personnalisée",
                    "Conseils activables",
                    "Discrétion absolue"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-white/80">
                      <div className="w-5 h-5 rounded-lg bg-brand-orange flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100">
                <h4 className="text-brand-navy font-black mb-6 uppercase tracking-widest text-[10px]">Besoin d'aide ?</h4>
                <p className="text-xs text-slate-500 font-bold leading-relaxed mb-6">
                  Une question sur votre accompagnement ou un besoin urgent ?
                </p>
                <a 
                  href="https://wa.me/33600000000" 
                  target="_blank" 
                  className="w-full py-4 bg-[#25D366] text-white rounded-2xl font-black uppercase tracking-widest text-[10px] flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-[#25D366]/20 transition-all active:scale-95"
                >
                  Contacter via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

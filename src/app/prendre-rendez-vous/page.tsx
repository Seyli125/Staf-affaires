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
  ArrowLeft
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

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-slate-400 hover:text-brand-navy transition-colors mb-8 font-medium group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Retour à l&apos;accueil
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-black text-brand-navy mb-6 tracking-tighter uppercase leading-tight">
                Prendre <span className="text-brand-orange">Rendez-vous</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                Réservez votre consultation stratégique de 45 minutes avec Saïd Taaroust. Analysons ensemble vos objectifs de performance.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-[40px] shadow-2xl shadow-brand-navy/10 border border-brand-navy/5 overflow-hidden">
                {/* Progress Bar */}
                <div className="h-2 bg-slate-100 w-full flex">
                  <motion.div 
                    className="h-full bg-brand-orange" 
                    initial={{ width: "0%" }}
                    animate={{ width: `${(step / 4) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <div className="p-8 md:p-12">
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <div className="flex justify-between items-center mb-8">
                          <h2 className="text-2xl font-bold text-brand-navy">Vos informations</h2>
                          <a 
                            href="https://wa.me/33600000000" 
                            target="_blank" 
                            className="flex items-center gap-2 text-[#25D366] font-bold text-sm hover:underline"
                          >
                            <MessageSquare className="w-4 h-4" /> WhatsApp direct
                          </a>
                        </div>
                        <form onSubmit={handleNextStep} className="space-y-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <User className="w-4 h-4" /> Prénom *
                              </label>
                              <input 
                                required
                                type="text"
                                value={formData.firstName}
                                onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-orange/20 focus:bg-white outline-none transition-all font-medium"
                                placeholder="Jean"
                              />
                            </div>
                            <div className="space-y-2">
                              <label className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <User className="w-4 h-4" /> Nom *
                              </label>
                              <input 
                                required
                                type="text"
                                value={formData.lastName}
                                onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-orange/20 focus:bg-white outline-none transition-all font-medium"
                                placeholder="Dupont"
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                              <Building2 className="w-4 h-4" /> Entreprise *
                            </label>
                            <input 
                              required
                              type="text"
                              value={formData.company}
                              onChange={(e) => setFormData({...formData, company: e.target.value})}
                              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-orange/20 focus:bg-white outline-none transition-all font-medium"
                              placeholder="Votre société"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                              <Phone className="w-4 h-4" /> Téléphone
                            </label>
                            <input 
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-brand-orange/20 focus:bg-white outline-none transition-all font-medium"
                              placeholder="06 00 00 00 00"
                            />
                          </div>
                          <Button 
                            type="submit"
                            className="w-full py-8 rounded-2xl bg-brand-navy text-white font-bold text-lg hover:scale-[1.02] transition-all shadow-xl shadow-brand-navy/20"
                          >
                            Continuer vers le calendrier <ArrowRight className="ml-2 w-5 h-5" />
                          </Button>
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
                            <h2 className="text-2xl font-bold text-brand-navy">Choisissez une date</h2>
                            <div className="flex items-center gap-4">
                              <a 
                                href="https://wa.me/33600000000" 
                                target="_blank" 
                                className="flex items-center gap-2 text-[#25D366] font-bold text-sm hover:underline"
                              >
                                <MessageSquare className="w-4 h-4" /> WhatsApp direct
                              </a>
                              <button onClick={() => setStep(1)} className="text-sm font-bold text-slate-400 hover:text-brand-navy transition-colors">Modifier mes infos</button>
                            </div>
                          </div>
                          
                          <div className="bg-brand-navy rounded-3xl p-6 text-white mb-8">
                            <div className="flex justify-between items-center mb-6">
                              <h3 className="font-bold">Janvier 2026</h3>
                              <div className="flex gap-2">
                                <button className="p-2 rounded-full hover:bg-white/10"><ChevronLeft className="w-5 h-5" /></button>
                                <button className="p-2 rounded-full hover:bg-white/10"><ChevronRight className="w-5 h-5" /></button>
                              </div>
                            </div>
                            <div className="grid grid-cols-7 gap-2 mb-4 text-center text-[10px] font-bold text-white/40 uppercase tracking-widest">
                              {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map(d => <div key={d}>{d}</div>)}
                            </div>
                            <div className="grid grid-cols-7 gap-2">
                              {days.map(day => (
                                <button
                                  key={day}
                                  onClick={() => { setSelectedDate(day); setStep(3); }}
                                  className={`aspect-square rounded-xl flex items-center justify-center text-sm font-bold transition-all ${
                                    selectedDate === day 
                                    ? 'bg-brand-orange text-white' 
                                    : 'hover:bg-white/10 text-white/80'
                                  } ${day > 25 ? 'opacity-20 cursor-not-allowed' : ''}`}
                                  disabled={day > 25}
                                >
                                  {day}
                                </button>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {step === 3 && (
                        <motion.div
                          key="step3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                        >
                          <div className="flex items-center justify-between mb-6">
                            <button onClick={() => setStep(2)} className="flex items-center gap-2 text-sm text-slate-400 hover:text-brand-navy transition-colors">
                              <ChevronLeft className="w-4 h-4" /> Retour au calendrier
                            </button>
                            <a 
                              href="https://wa.me/33600000000" 
                              target="_blank" 
                              className="flex items-center gap-2 text-[#25D366] font-bold text-sm hover:underline"
                            >
                              <MessageSquare className="w-4 h-4" /> WhatsApp direct
                            </a>
                          </div>
                          <h2 className="text-2xl font-bold text-brand-navy mb-2">Choisir l&apos;heure</h2>
                          <p className="text-slate-500 mb-8 font-medium">Pour le {selectedDate} Janvier 2026</p>
                          
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
                          <Button
                            onClick={handleBooking}
                            disabled={!selectedTime}
                            className="w-full mt-10 py-8 bg-brand-navy text-white rounded-2xl font-bold text-lg hover:scale-[1.02] transition-all shadow-xl shadow-brand-navy/20 disabled:opacity-50"
                          >
                            Confirmer la réservation <ArrowRight className="ml-2 w-5 h-5" />
                          </Button>
                        </motion.div>
                      )}

                    {step === 4 && (
                      <motion.div
                        key="step4"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                          <CheckCircle2 className="w-12 h-12" />
                        </div>
                        <h2 className="text-3xl font-black text-brand-navy mb-4">C&apos;est confirmé, {formData.firstName} !</h2>
                        <p className="text-xl text-slate-600 mb-10 max-w-sm mx-auto leading-relaxed">
                          Votre consultation est prévue pour le <strong>{selectedDate} Janvier à {selectedTime}</strong>.
                        </p>
                        <div className="bg-slate-50 p-6 rounded-3xl mb-10 text-left space-y-3">
                          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Récapitulatif</p>
                          <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                            <span className="text-slate-500 font-medium">Expert</span>
                            <span className="text-brand-navy font-bold">Saïd Taaroust</span>
                          </div>
                          <div className="flex justify-between items-center border-b border-slate-200 pb-3">
                            <span className="text-slate-500 font-medium">Durée</span>
                            <span className="text-brand-navy font-bold">45 Minutes</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-slate-500 font-medium">Lieu</span>
                            <span className="text-brand-navy font-bold">Visioconférence (Lien envoyé par email)</span>
                          </div>
                        </div>
                        <Link href="/">
                          <Button variant="outline" className="rounded-full px-10 py-6 font-bold border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white transition-all">
                            Retourner au site
                          </Button>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-brand-orange/5 p-8 rounded-[40px] border border-brand-orange/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                  <MessageSquare className="w-16 h-16" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4 flex items-center gap-3">
                  Urgence ?
                </h3>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                  Si aucun horaire ne vous convient ou si votre besoin est immédiat, contactez Saïd directement.
                </p>
                <a 
                  href="https://wa.me/33600000000" 
                  target="_blank" 
                  className="w-full py-5 bg-[#25D366] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-[#25D366]/30 transition-all transform hover:-translate-y-1"
                >
                  WhatsApp Instantané <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <div className="p-6">
                <h4 className="text-brand-navy font-black mb-8 uppercase tracking-widest text-xs">Préparer votre appel</h4>
                <ul className="space-y-6">
                  {[
                    "Listez vos 3 défis majeurs",
                    "Préparez vos indicateurs clés",
                    "Assurez-vous d&apos;être au calme",
                    "Prévoyez de quoi noter"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-navy/5 text-brand-navy flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-slate-600 font-medium leading-tight text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

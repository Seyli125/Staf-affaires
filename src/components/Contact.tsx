"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Facebook, Send, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-navy text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-gold font-bold text-sm uppercase tracking-widest">Contact</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mt-4 mb-8">
              Prêt à <span className="text-brand-gold italic">performer</span> <br />
              sans vous épuiser ?
            </h2>
            <p className="text-xl text-white/70 mb-12 max-w-md">
              Vous cherchez plus d'engagement, plus d'impact et moins d'usure ? Contactez-moi pour discuter de votre projet.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                  <Mail className="w-6 h-6 text-brand-gold group-hover:text-brand-navy" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">Email</p>
                  <a href="mailto:saidtaaroust@gmail.com" className="text-xl font-bold hover:text-brand-gold transition-colors">
                    saidtaaroust@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                  <Linkedin className="w-6 h-6 text-brand-gold group-hover:text-brand-navy" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">LinkedIn</p>
                  <a href="#" className="text-xl font-bold hover:text-brand-gold transition-colors">
                    Saïd Taaroust
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-brand-gold transition-colors">
                  <Facebook className="w-6 h-6 text-brand-gold group-hover:text-brand-navy" />
                </div>
                <div>
                  <p className="text-white/50 text-xs uppercase tracking-widest font-bold mb-1">Facebook</p>
                  <a href="#" className="text-xl font-bold hover:text-brand-gold transition-colors">
                    STAF Affaires
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl relative"
          >
            {/* Decorative element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-gold rounded-full flex items-center justify-center -rotate-12 shadow-xl z-10 hidden md:flex">
              <Calendar className="w-10 h-10 text-brand-navy" />
            </div>

            <h3 className="text-brand-navy text-2xl font-bold mb-8">Envoyez-moi un message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-brand-navy/50 text-xs font-bold uppercase tracking-widest">Nom</label>
                  <input 
                    type="text" 
                    className="w-full bg-brand-offwhite border-none rounded-xl p-4 text-brand-navy focus:ring-2 focus:ring-brand-gold transition-all"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-brand-navy/50 text-xs font-bold uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-brand-offwhite border-none rounded-xl p-4 text-brand-navy focus:ring-2 focus:ring-brand-gold transition-all"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-brand-navy/50 text-xs font-bold uppercase tracking-widest">Sujet</label>
                <select className="w-full bg-brand-offwhite border-none rounded-xl p-4 text-brand-navy focus:ring-2 focus:ring-brand-gold transition-all">
                  <option>Coaching Professionnel</option>
                  <option>Formation Action</option>
                  <option>Mentorat / Management</option>
                  <option>Autre demande</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-brand-navy/50 text-xs font-bold uppercase tracking-widest">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-brand-offwhite border-none rounded-xl p-4 text-brand-navy focus:ring-2 focus:ring-brand-gold transition-all"
                  placeholder="Comment puis-je vous aider ?"
                />
              </div>
              <Button className="w-full bg-brand-gold text-brand-navy hover:bg-brand-gold/90 rounded-xl py-8 font-bold text-lg group">
                Envoyer le message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

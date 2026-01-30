"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-primary overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 uppercase leading-none">
              CONTACTEZ <br />
              <span className="text-stroke-white text-transparent">STAFF AFFAIRES</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
              Prêt à franchir une nouvelle étape ? Parlons de vos projets et de comment nous pouvons vous aider à les réaliser.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-30" />
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-black tracking-tighter mb-8">COORDONNÉES</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-lg tracking-tight mb-1">Email</h4>
                    <p className="text-muted-foreground font-medium">contact@staffaffaires.fr</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-lg tracking-tight mb-1">Téléphone</h4>
                    <p className="text-muted-foreground font-medium">+33 (0)1 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-black text-lg tracking-tight mb-1">Localisation</h4>
                    <p className="text-muted-foreground font-medium">Paris, France (Disponible à l'international)</p>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-16 border-t border-gray-100">
                <h3 className="font-black text-xl mb-6 tracking-tight">SUIVEZ-NOUS</h3>
                <div className="flex gap-4">
                  {[Linkedin, Instagram, Twitter].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:text-primary hover:bg-primary/5 transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-10 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
            >
              <MessageSquare className="absolute -top-10 -right-10 w-40 h-40 text-primary/5 -rotate-12" />
              
              <form className="relative z-10 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">Nom</label>
                    <Input placeholder="Votre nom" className="bg-white border-transparent focus:border-primary h-14 rounded-xl font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">Email</label>
                    <Input placeholder="votre@email.com" className="bg-white border-transparent focus:border-primary h-14 rounded-xl font-medium" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">Sujet</label>
                  <Input placeholder="Comment pouvons-nous vous aider ?" className="bg-white border-transparent focus:border-primary h-14 rounded-xl font-medium" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-black uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                  <Textarea placeholder="Dites-nous en plus sur vos besoins..." className="bg-white border-transparent focus:border-primary min-h-[150px] rounded-xl font-medium" />
                </div>

                <Button className="w-full py-8 rounded-xl font-black uppercase tracking-widest text-lg group bg-primary hover:scale-[1.02] transition-all shadow-xl hover:shadow-primary/20">
                  Envoyer le message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4 animate-bounce" />
            <span className="font-black uppercase tracking-widest text-muted-foreground">Localisation : Paris, France</span>
          </div>
        </div>
        {/* Real Google Maps would go here in production */}
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      </section>
    </main>
  );
}

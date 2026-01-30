"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VideoSection() {
  return (
    <section className="container mx-auto px-6 overflow-visible">
      <div className="flex flex-col lg:flex-row items-start gap-16">
        {/* Left Content */}
        <div className="lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="sticky top-32"
          >
            <div className="flex items-center gap-3 mb-6">
              <Video className="w-5 h-5 text-brand-orange" />
              <span className="text-sm font-bold uppercase tracking-widest text-brand-navy/60">
                Immersion & Méthode
              </span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1] text-brand-navy uppercase">
              La preuve <br />
              <span className="text-brand-orange">par l'impact</span>
            </h2>
            
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10">
              Découvrez en vidéo comment l'approche STAF AFFAIRES transforme concrètement le leadership et la croissance des entreprises B2B.
            </p>

            <Button 
              variant="outline" 
              className="rounded-full border-2 border-brand-navy text-brand-navy font-bold hover:bg-brand-navy hover:text-white transition-all px-8 py-6 group"
            >
              Plus de vidéos
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Right Video Area */}
        <div className="lg:w-2/3 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Main Video Frame */}
            <div className="relative aspect-video rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(10,25,47,0.2)] bg-brand-navy">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" 
                alt="Saïd Taaroust en conférence"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-24 h-24 md:w-32 md:h-32 bg-brand-orange rounded-full flex items-center justify-center text-white shadow-2xl relative z-10 group/play"
                >
                  <Play className="w-8 h-8 md:w-12 md:h-12 fill-current ml-1" />
                  <div className="absolute inset-0 bg-brand-orange rounded-full animate-ping opacity-20" />
                </motion.button>
              </div>

              {/* Glassmorphism Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-8 md:p-12 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Performer sans s'épuiser</h3>
                    <p className="text-white/60 font-medium">Session Masterclass - Paris 2025</p>
                  </div>
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-navy bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-brand-navy bg-brand-orange flex items-center justify-center text-[10px] font-bold text-white uppercase">
                      +1k
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-white p-10 rounded-[32px] shadow-2xl hidden xl:block border border-slate-100"
            >
              <div className="flex flex-col gap-1">
                <span className="text-5xl font-black text-brand-navy tracking-tighter italic leading-none">98%</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Taux de satisfaction</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

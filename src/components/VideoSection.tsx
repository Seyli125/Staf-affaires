"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VideoSection() {
  return (
    <section className="container mx-auto px-4 sm:px-6 overflow-visible">
      <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="lg:w-1/3">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <div className="flex items-center gap-2 mb-4">
              <Video className="w-4 h-4 text-brand-orange" />
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Immersion & Méthode
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-navy leading-tight mb-4">
              La preuve <br />
              <span className="text-brand-orange">par l'impact</span>
            </h2>
            
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              Découvrez en vidéo comment l'approche STAF AFFAIRES transforme le leadership et la croissance des entreprises B2B.
            </p>

            <Button 
              variant="outline" 
              className="rounded-full border-2 border-brand-navy text-brand-navy font-semibold hover:bg-brand-navy hover:text-white transition-all px-5 py-2.5 text-sm group"
            >
              Plus de vidéos
              <ArrowRight className="ml-2 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Right Video Area */}
        <div className="lg:w-2/3 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            {/* Main Video Frame */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-brand-navy">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" 
                alt="Saïd Taaroust en conférence"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-orange rounded-full flex items-center justify-center text-white shadow-xl relative z-10"
                >
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-current ml-0.5" />
                  <div className="absolute inset-0 bg-brand-orange rounded-full animate-ping opacity-20" />
                </motion.button>
              </div>

              {/* Overlay */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-brand-navy via-brand-navy/60 to-transparent">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white mb-1">Performer sans s'épuiser</h3>
                    <p className="text-white/60 text-xs font-medium">Session Masterclass - Paris 2025</p>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-7 h-7 rounded-full border-2 border-brand-navy bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="w-7 h-7 rounded-full border-2 border-brand-navy bg-brand-orange flex items-center justify-center text-[8px] font-bold text-white">
                      +1k
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 -right-4 bg-white p-4 sm:p-5 rounded-xl shadow-lg hidden lg:block border border-slate-100"
            >
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold text-brand-navy leading-none">98%</span>
                <span className="text-[9px] font-medium uppercase tracking-wider text-slate-400">Satisfaction</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

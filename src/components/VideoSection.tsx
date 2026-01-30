"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VideoSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none">
              REGARDER, APPRENDRE <br />
              <span className="text-primary">& ÉVOLUER</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium">
              Découvrez ma méthode et l'impact du coaching STAFF AFFAIRES sur votre leadership et votre croissance d'entreprise.
            </p>
          </div>
          <Button variant="outline" className="rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all duration-300 group">
            Voir plus
            <Play className="ml-2 w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative group cursor-pointer"
        >
          {/* Video Placeholder/Thumbnail */}
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" 
              alt="Video Thumbnail"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-24 h-24 md:w-32 md:h-32 bg-primary rounded-full flex items-center justify-center text-white shadow-3xl relative"
              >
                <Play className="w-10 h-10 md:w-14 md:h-14 fill-current" />
                <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
              </motion.div>
            </div>
          </div>
          
          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-6 -right-6 md:bottom-12 md:-right-12 bg-white p-8 rounded-2xl shadow-2xl hidden sm:block border border-gray-100"
          >
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-black text-primary tracking-tighter">500+</span>
              <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Heures de Vidéo</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

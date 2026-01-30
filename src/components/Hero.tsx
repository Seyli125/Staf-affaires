"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-offwhite">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white -z-10" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-10"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-brand-navy/5 border border-brand-navy/10 rounded-full text-brand-navy font-bold text-xs uppercase tracking-widest mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
              </span>
              Coach certifié RNCP | Formateur | Expert en développement commercial
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-navy leading-[1.1] mb-6">
              Performer sans <br />
              <span className="text-brand-gold italic">s'épuiser.</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-light text-brand-navy/80 mb-8 leading-snug">
              Manager et vendre avec sens.
            </h2>

            <p className="text-lg text-brand-navy/60 mb-10 max-w-lg leading-relaxed">
              Coach certifié RNCP | Formateur | Expert en développement commercial depuis 25 ans.
              L'approche humaniste pour des résultats concrets et durables.
            </p>


          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-brand-navy text-white hover:bg-brand-navy/90 rounded-full px-8 py-7 text-lg font-bold group shadow-xl shadow-brand-navy/20"
            >
              <a href="#contact">
                Échanger avec Saïd
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-brand-navy/20 text-brand-navy hover:bg-brand-navy/5 rounded-full px-8 py-7 text-lg font-bold"
            >
              <Calendar className="mr-2 w-5 h-5" />
              Prendre rendez-vous
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-brand-offwhite flex items-center justify-center overflow-hidden">
                  <Image 
                    src={`https://i.pravatar.cc/100?img=${i + 20}`} 
                    alt="Client" 
                    width={40} 
                    height={40} 
                  />
                </div>
              ))}
            </div>
            <div className="text-sm">
              <p className="font-bold text-brand-navy">+300h de coaching certifié</p>
              <p className="text-brand-navy/60 font-medium">Approche AVR® exclusive</p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative lg:h-[80vh] flex items-center justify-center lg:justify-end"
        >
          <div className="relative w-full aspect-[4/5] lg:h-full lg:w-auto max-w-2xl">
            {/* Decorative frames */}
            <div className="absolute top-10 -left-10 w-full h-full border border-brand-gold/30 rounded-2xl -z-10" />
            <div className="absolute -bottom-10 right-10 w-full h-full bg-brand-navy/5 rounded-2xl -z-10" />
            
            <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/SA2_LE_upscale_prime-1769783680736.jpg?width=8000&height=8000&resize=contain"
                  alt="Saïd Taaroust - Expert en Coaching Professionnel"
                  width={1000}
                  height={1250}
                  className="w-full h-full object-cover transition-all duration-1000 hover:scale-105"
                  priority
                />

              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* Floating badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl z-20 max-w-[220px] border border-brand-navy/5"
            >
              <p className="text-brand-gold font-bold text-4xl mb-1">40 ans</p>
              <p className="text-brand-navy font-bold text-sm leading-tight uppercase tracking-wide">d'expérience cumulée</p>
              <p className="text-brand-navy/60 text-xs mt-2 italic">Performance & Bienveillance</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

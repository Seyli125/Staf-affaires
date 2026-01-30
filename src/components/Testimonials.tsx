"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const testimonial = {
  text: "Avant de travailler avec Saïd, j'étais bloqué. En seulement trois mois, j'ai triplé mes revenus et construit un système évolutif pour mon entreprise. Ses stratégies changent la donne !",
  author: "Michael Carter",
  role: "Entrepreneur",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
};

export function Testimonials() {
  return (
    <section className="py-32 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-black uppercase tracking-[0.4em] text-black mb-16"
        >
          Ce que disent nos clients
        </motion.h2>

        <div className="relative max-w-5xl mx-auto flex items-center justify-center">
          {/* Navigation Arrows */}
          <div className="absolute left-0 z-10 hidden md:block">
            <Button variant="outline" size="icon" className="rounded-full w-14 h-14 border-gray-200">
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>
          <div className="absolute right-0 z-10 hidden md:block">
            <Button variant="default" size="icon" className="rounded-full w-14 h-14 bg-black text-white">
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Testimonial Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center px-12 md:px-24"
          >
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="text-2xl md:text-3xl font-medium leading-relaxed mb-12 text-gray-800">
              "{testimonial.text}"
            </p>

            <div className="flex flex-col items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden shadow-lg border-2 border-white">
                <Image 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-black text-lg uppercase tracking-wider">{testimonial.author}</h4>
                <p className="text-sm font-bold text-primary/60 uppercase tracking-widest">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

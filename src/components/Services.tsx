"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const books = [
  {
    title: "The Invisible Advantage",
    rating: "4.9",
    description: "Transformez vos idées en avantages compétitifs durables.",
    color: "bg-[#e5f1e8]",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Seven Figure Blueprints",
    rating: "4.9",
    description: "Le guide étape par étape pour bâtir un empire rentable.",
    color: "bg-[#e8f1f8]",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "The Business Alchemy",
    rating: "4.9",
    description: "L'art de transformer n'importe quelle entreprise en or.",
    color: "bg-[#f8f1e8]",
    image: "https://images.unsplash.com/photo-1512820790803-73cad7a2593f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Nine Figure Mindset",
    rating: "4.9",
    description: "Maîtrisez les habitudes des plus grands entrepreneurs.",
    color: "bg-[#f8e8f1]",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop",
  },
];

export function Services() {
  return (
    <section className="py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black tracking-tighter uppercase"
            >
              Stratégies issues de mes <br /> best-sellers
            </motion.h2>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="rounded-full w-12 h-12">
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full w-12 h-12 bg-black text-white hover:bg-black/80">
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book, index) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`aspect-[3/4] rounded-3xl overflow-hidden mb-6 transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2 ${book.color} relative`}>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 shadow-sm z-10">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-[10px] font-black">{book.rating}</span>
                </div>
                <img 
                  src={book.image} 
                  alt={book.title}
                  className="w-full h-full object-cover mix-blend-multiply opacity-80 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-xl font-black mb-3 group-hover:text-brand-orange transition-colors">
                {book.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                {book.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button variant="default" className="rounded-full bg-black text-white px-10 py-6 font-bold hover:scale-105 transition-transform">
            Voir tout →
          </Button>
        </div>
      </div>
    </section>
  );
}

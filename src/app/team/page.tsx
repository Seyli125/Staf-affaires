"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { Linkedin, Instagram, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Saïd Taaroust",
    role: "Fondateur & Coach Principal",
    bio: "Expert en stratégie B2B et préparation mentale avec 15 ans d'expérience.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1746597689538-1769736766387.png",
  },
  {
    name: "Sarah Martin",
    role: "Coach d'Équipe",
    bio: "Spécialiste en dynamique de groupe et intelligence émotionnelle.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Marc Lavoie",
    role: "Mentor Business",
    bio: "Ancien entrepreneur ayant scalé plusieurs startups à l'international.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
  },
];

export default function TeamPage() {
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
            <span className="text-white/60 font-bold uppercase tracking-[0.3em] text-sm mb-6 block">
              Notre Force
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 uppercase leading-none">
              L'ÉQUIPE <br />
              <span className="text-stroke-white text-transparent">STAFF AFFAIRES</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto font-medium leading-relaxed">
              Une alliance d'experts passionnés par la transformation humaine et la réussite entrepreneuriale.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
      </section>

      {/* Team Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 shadow-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-10">
                    <div className="flex gap-4">
                      {[Linkedin, Instagram, Mail].map((Icon, i) => (
                        <motion.a
                          key={i}
                          href="#"
                          whileHover={{ scale: 1.2 }}
                          className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-lg"
                        >
                          <Icon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>

                <h3 className="text-3xl font-black tracking-tighter mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground font-medium leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white p-12 md:p-20 rounded-[3rem] shadow-3xl text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8">
              VOUS SOUHAITEZ <br />
              <span className="text-primary">NOUS REJOINDRE ?</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium mb-12">
              Nous sommes toujours à la recherche de coachs et de consultants talentueux pour renforcer notre impact.
            </p>
            <Button size="lg" className="rounded-full px-12 py-8 font-black uppercase tracking-widest bg-primary hover:scale-105 transition-transform shadow-2xl">
              Postuler maintenant
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

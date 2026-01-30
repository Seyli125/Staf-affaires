"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Award, Users, Target } from "lucide-react";

const stats = [
  { label: "Années d'expérience", value: "15+" },
  { label: "Clients accompagnés", value: "200+" },
  { label: "Taux de satisfaction", value: "98%" },
  { label: "Entreprises scalées", value: "50+" },
];

const values = [
  {
    title: "Excellence",
    description: "Nous visons le plus haut niveau de performance dans chaque interaction.",
    icon: Award,
  },
  {
    title: "Impact",
    description: "Chaque action est mesurée par les résultats concrets qu'elle génère.",
    icon: Target,
  },
  {
    title: "Humilité",
    description: "Le succès se construit avec une écoute active et une remise en question constante.",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-primary">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 uppercase">
              À PROPOS DE <br />
              <span className="text-stroke-white text-transparent">STAF AFFAIRES</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed">
              Découvrez la vision de Saïd Taaroust et comment nous transformons le paysage du leadership B2B.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-white opacity-20" />
      </section>

      {/* Biography Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
                alt="Saïd Taaroust Portrait"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6 block">
                Notre Fondateur
              </span>
              <h2 className="text-5xl font-black tracking-tighter mb-8 leading-none">
                SAÏD TAAROUST
              </h2>
              <div className="space-y-6 text-xl text-muted-foreground font-medium leading-relaxed">
                <p>
                  Avec plus de 15 ans d'expérience dans le conseil stratégique et le management, Saïd Taaroust a fondé STAF AFFAIRES pour répondre à un besoin crucial : l'alignement entre performance opérationnelle et mindset de leader.
                </p>
                <p>
                  "Je ne suis pas seulement un coach. Je suis un partenaire de croissance qui a vécu les réalités du terrain, les échecs et les succès qui forgent les plus grandes entreprises."
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Expertise en scale-up",
                    "Spécialiste en préparation mentale",
                    "Ancien cadre dirigeant",
                    "Mentor d'entrepreneurs"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary w-6 h-6" />
                      <span className="text-foreground font-bold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-7xl font-black text-primary tracking-tighter mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black tracking-tighter mb-6">NOS VALEURS</h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-10 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black tracking-tighter mb-4">{value.title}</h3>
                <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Footer is inherited if added to layout, but here we add a simple one or just end */}
      <footer className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-8 tracking-tighter">PRÊT À TRANSFORMER VOTRE BUSINESS ?</h2>
          <button className="bg-white text-primary px-10 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform">
            Prendre contact
          </button>
        </div>
      </footer>
    </main>
  );
}

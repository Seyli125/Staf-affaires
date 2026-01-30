"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  UserPlus, 
  Calendar, 
  Rocket, 
  Briefcase, 
  Brain 
} from "lucide-react";

const services = [
  {
    title: "Coaching individuel",
    description: "Un accompagnement sur mesure pour libérer votre plein potentiel de leader.",
    icon: UserPlus,
  },
  {
    title: "Coaching d’équipe",
    description: "Alignez vos talents et décuplez la force collective de votre organisation.",
    icon: Users,
  },
  {
    title: "Parcours collectifs",
    description: "Des programmes intensifs de 3, 4 ou 6 mois pour transformer votre vision.",
    icon: Calendar,
  },
  {
    title: "FormAction",
    description: "Des formations activables immédiatement pour des résultats concrets.",
    icon: Rocket,
  },
  {
    title: "Mentorat & Management",
    description: "Expertise externalisée pour piloter votre croissance avec assurance.",
    icon: Briefcase,
  },
  {
    title: "Préparation mentale",
    description: "Forgez un mental d'acier pour relever les plus grands défis du business.",
    icon: Brain,
  },
];

export function Services() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-sm font-bold uppercase tracking-widest text-primary">Nos approches</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black tracking-tight"
            >
              Nos approches de coaching
            </motion.h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500 group border border-border/50"
            >
              <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:rotate-12 transition-all duration-500">
                <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

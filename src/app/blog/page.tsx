"use client";

import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const articles = [
  {
    title: "Comment scaler son entreprise sans sacrifier sa vie personnelle",
    excerpt: "Découvrez les 5 piliers d'une croissance durable et les erreurs à éviter pour garder le contrôle.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    date: "15 Jan 2026",
    author: "Saïd Taaroust",
    category: "Leadership",
  },
  {
    title: "Le mindset du leader face à l'incertitude économique",
    excerpt: "Pourquoi la clarté mentale est votre meilleur atout dans un marché volatile.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    date: "10 Jan 2026",
    author: "Saïd Taaroust",
    category: "Stratégie",
  },
  {
    title: "Coaching d'équipe : transformer la résistance en engagement",
    excerpt: "Les techniques psychologiques pour aligner vos managers sur une vision commune.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    date: "05 Jan 2026",
    author: "Saïd Taaroust",
    category: "Management",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-6 block">
              Notre Expertise
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 uppercase leading-none">
              BLOG & <br />
              <span className="text-primary">CONSEILS</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
              Des articles exclusifs sur le leadership, la stratégie et la performance pour nourrir votre croissance.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-white opacity-40" />
      </section>

      {/* Featured Article Slider Placeholder / Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {articles.map((article, index) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden mb-6 shadow-xl">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-6 mb-4 text-sm font-bold text-muted-foreground uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    {article.author}
                  </div>
                </div>

                <h2 className="text-2xl font-black tracking-tighter mb-4 group-hover:text-primary transition-colors leading-tight">
                  {article.title}
                </h2>
                <p className="text-muted-foreground font-medium mb-6 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-2 text-primary font-black uppercase tracking-widest text-sm group-hover:gap-4 transition-all">
                  Lire la suite
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button size="lg" className="rounded-full px-12 py-8 font-black uppercase tracking-widest bg-primary hover:scale-105 transition-transform shadow-2xl">
              Voir tous les articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6">
          <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-3xl grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                REJOIGNEZ LA <br />
                <span className="text-primary">NEWSLETTER</span>
              </h2>
              <p className="text-xl text-muted-foreground font-medium">
                Recevez chaque semaine des conseils stratégiques directement dans votre boîte mail.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="votre@email.com" 
                className="flex-grow h-16 px-8 rounded-full bg-gray-100 border-transparent focus:bg-white focus:border-primary transition-all font-medium text-lg"
              />
              <Button className="h-16 px-10 rounded-full font-black uppercase tracking-widest bg-primary shadow-xl hover:scale-105 transition-transform">
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

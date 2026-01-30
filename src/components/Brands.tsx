"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "Forbes", logo: "Forbes" },
  { name: "Google", logo: "Google" },
  { name: "HubSpot", logo: "HubSpot" },
  { name: "Zapier", logo: "Zapier" },
  { name: "Slack", logo: "Slack" },
  { name: "Stripe", logo: "Stripe" },
];

export function Brands() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-bold uppercase tracking-[0.4em] text-muted-foreground mb-16"
        >
          Ils nous font confiance
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
              className="grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
            >
              <span className="text-3xl md:text-4xl font-black text-muted-foreground/40 hover:text-primary transition-colors">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

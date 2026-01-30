"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "Forbes", logo: "Forbes" },
  { name: "Google", logo: "Google" },
  { name: "HubSpot", logo: "HubSpot", highlighted: true },
  { name: "Zapier", logo: "Zapier" },
  { name: "Slack", logo: "Slack" },
  { name: "Stripe", logo: "Stripe" },
];

export function Brands() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm font-black uppercase tracking-[0.4em] text-black mb-16"
        >
          TRUSTED BY LEADING BRANDS
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className={`
                px-8 py-4 transition-all duration-300 cursor-pointer
                ${brand.highlighted ? 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-xl scale-110 z-10' : 'grayscale opacity-40 hover:opacity-100 hover:grayscale-0'}
              `}
            >
              <span className="text-2xl md:text-3xl font-black tracking-tighter">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Each logo has unique dimensions — width/height tuned per logo
// so they all appear visually balanced in the marquee
const partners = [
  { name: "VapoTech", logo: "/images/logos/vapotech.png", w: 160, h: 64 },
  { name: "Eco Transformation", logo: "/images/logos/eco-transformation.png", w: 140, h: 68 },
  { name: "France Travail", logo: "/images/logos/france-travail.png", w: 140, h: 88 },
  { name: "CCI Landes", logo: "/images/logos/cci-landes.png", w: 170, h: 52 },
  { name: "CCI Dordogne", logo: "/images/logos/cci-dordogne.png", w: 150, h: 46 },
  { name: "Scalandes", logo: "/images/logos/scalandes.png", w: 180, h: 46 },
];

function LogoItem({ name, logo, w, h }: { name: string; logo: string; w: number; h: number }) {
  return (
    <div className="flex-shrink-0 flex items-center justify-center h-20 sm:h-24 px-8 sm:px-12 lg:px-14 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
      <Image
        src={logo}
        alt={`Logo ${name}`}
        width={w}
        height={h}
        className="max-h-14 sm:max-h-16 lg:max-h-[72px] w-auto object-contain"
        loading="lazy"
      />
    </div>
  );
}

export function TrustedBy() {
  return (
    <section className="py-16 sm:py-20 overflow-hidden bg-white">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-14"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange mb-3">
              Ils nous ont fait confiance
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-navy dark:text-white leading-tight tracking-tight">
              Des partenaires qui partagent{" "}
              <span className="text-brand-orange italic">notre exigence</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              Chaque collaboration est une rencontre entre ambition et authenticite.
              Nous accompagnons ceux qui refusent le statu quo et choisissent de performer autrement.
            </p>
          </motion.div>
        </div>

      {/* Marquee — full-width, edge-to-edge */}
      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#FFFFFF] dark:from-[#1D1D1F] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#FFFFFF] dark:from-[#1D1D1F] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track">
          {/* Two identical sets for seamless loop */}
          <div className="marquee-content" aria-hidden="false">
            {partners.map((p) => (
              <LogoItem key={p.name} {...p} />
            ))}
          </div>
          <div className="marquee-content" aria-hidden="true">
            {partners.map((p) => (
              <LogoItem key={`dup-${p.name}`} {...p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

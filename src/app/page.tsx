import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Brands } from "@/components/Brands";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { VideoSection } from "@/components/VideoSection";
import { Testimonials } from "@/components/Testimonials";
import { InstagramSection } from "@/components/InstagramSection";
import { FAQ } from "@/components/FAQ";
import { Instagram, Twitter, Facebook } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* 1. White Section */}
      <section className="bg-white">
        <Hero />
        <Brands />
      </section>

      {/* Fade White to Orange */}
      <div className="h-48 bg-gradient-to-b from-white to-brand-orange" />

      {/* 2. Orange Section */}
      <section className="bg-brand-orange">
        <Services />
      </section>

      {/* Fade Orange to White */}
      <div className="h-48 bg-gradient-to-b from-brand-orange to-white" />

      {/* 3. White Section */}
      <section className="bg-white">
        <VideoSection />
      </section>

      {/* Fade White to Orange */}
      <div className="h-48 bg-gradient-to-b from-white to-brand-orange" />

      {/* 4. Orange Section */}
      <section className="bg-brand-orange">
        <Features />
      </section>

      {/* Fade Orange to White */}
      <div className="h-48 bg-gradient-to-b from-brand-orange to-white" />

      {/* 5. White Section */}
      <section className="bg-white">
        <Testimonials />
      </section>

      {/* Fade White to Orange */}
      <div className="h-48 bg-gradient-to-b from-white to-brand-orange" />

      {/* 6. Orange Section */}
      <section className="bg-brand-orange">
        <InstagramSection />
      </section>

      {/* Fade Orange to White */}
      <div className="h-48 bg-gradient-to-b from-brand-orange to-white" />

      {/* 7. White Section */}
      <section className="bg-white">
        <FAQ />
      </section>

      {/* Fade White to Orange */}
      <div className="h-48 bg-gradient-to-b from-white to-brand-orange" />
      
      {/* 8. Orange Section (Footer) */}
      <footer className="pt-32 pb-12 bg-brand-orange">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-24">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <Link href="/about" className="text-sm font-bold uppercase tracking-widest text-black/60 hover:text-black transition-colors">About Us</Link>
              <Link href="/services" className="text-sm font-bold uppercase tracking-widest text-black/60 hover:text-black transition-colors">Services</Link>
              <Link href="/team" className="text-sm font-bold uppercase tracking-widest text-black/60 hover:text-black transition-colors">Find a Tutor</Link>
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <span className="text-sm font-bold uppercase tracking-widest text-black">info@staffaffaires.fr</span>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              <Link href="/faq" className="text-sm font-bold uppercase tracking-widest text-black/60 hover:text-black transition-colors">FAQs</Link>
              <Link href="/pricing" className="text-sm font-bold uppercase tracking-widest text-black/60 hover:text-black transition-colors">Pricing</Link>
            </div>
          </div>

            {/* Massive Text */}
            <div className="w-full mb-20">
              <h2 className="text-[15vw] font-black text-black leading-[1.2] tracking-tighter text-center uppercase whitespace-nowrap">
                Saïd Taaroust
              </h2>
            </div>

          {/* Bottom Bar */}
          <div className="pt-12 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-[11px] font-bold uppercase tracking-widest text-black/40">
              © 2026 STAFF AFFAIRES. All Rights Reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-black/40">
              <Link href="#" className="hover:text-black transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-black transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

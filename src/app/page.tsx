import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Brands } from "@/components/Brands";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { VideoSection } from "@/components/VideoSection";
import { Testimonials } from "@/components/Testimonials";
import { Timeline } from "@/components/Timeline";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { BookingSection } from "@/components/BookingSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      {/* 1. Hero & Brands - LOCKED SECTION */}
      <section className="bg-white relative z-10">
        <Hero />
        <Brands />
      </section>

      {/* Rhythmic transitions instead of 600px gaps */}
      <div className="relative">
        {/* Subtle transition to Services */}
        <div className="h-32 bg-gradient-to-b from-white to-brand-navy/5" />
        
        {/* 2. Services Section */}
        <section className="bg-brand-navy/5 py-24">
          <Services />
        </section>

        {/* Transition to Video */}
        <div className="h-32 bg-gradient-to-b from-brand-navy/5 to-white" />

        {/* 3. Video Section */}
        <section className="bg-white py-24">
          <VideoSection />
        </section>

        {/* Transition to Features (Qui suis-je) */}
        <div className="h-32 bg-gradient-to-b from-white to-brand-orange/5" />

        {/* 4. Features (Qui suis-je) Section */}
        <section className="bg-brand-orange/5 py-24">
          <Features />
        </section>

        {/* Transition to Testimonials */}
        <div className="h-32 bg-gradient-to-b from-brand-orange/5 to-white" />

        {/* 5. Testimonials Section */}
        <section className="bg-white py-24">
          <Testimonials />
        </section>

        {/* Transition to Timeline */}
        <div className="h-32 bg-gradient-to-b from-white to-brand-gold/5" />

        {/* 6. Timeline Section */}
        <section className="bg-brand-gold/5 py-24">
          <Timeline />
        </section>

        {/* Transition to Booking */}
        <div className="h-32 bg-gradient-to-b from-brand-gold/5 to-white" />

        {/* 7. Booking Section (Interactive Calendar) */}
        <section className="bg-white py-24">
          <BookingSection />
        </section>

        {/* Transition to FAQ */}
        <div className="h-32 bg-gradient-to-b from-white to-slate-50" />

        {/* 8. FAQ Section */}
        <section className="bg-slate-50 py-24">
          <FAQ />
        </section>

        {/* Transition to Footer */}
        <div className="h-32 bg-gradient-to-b from-slate-50 to-brand-navy" />
      </div>
      
      <Footer />
    </main>
  );
}

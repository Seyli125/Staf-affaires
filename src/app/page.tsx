import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { VideoSection } from "@/components/VideoSection";
import { Testimonials } from "@/components/Testimonials";
import { Timeline } from "@/components/Timeline";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      
      {/* 1. Hero - LOCKED SECTION (Visual/Structure/Content) */}
      <section className="bg-white relative z-10">
        <Hero />
      </section>

        {/* Smooth transitions with premium spacing */}
        <div className="relative">
          {/* Transition to Services */}
          <div className="h-20 sm:h-28 bg-gradient-to-b from-white to-slate-50" />
          
          {/* Services Section */}
          <section className="bg-slate-50 py-20 sm:py-28">
            <Services />
          </section>

          {/* Transition to Video */}
          <div className="h-20 sm:h-28 bg-gradient-to-b from-slate-50 to-white" />

          {/* Video Section */}
          <section className="bg-white py-20 sm:py-28">
            <VideoSection />
          </section>

          {/* Transition to Features */}
          <div className="h-20 sm:h-28 bg-gradient-to-b from-white to-brand-orange/5" />

          {/* Features (Qui suis-je) Section */}
          <section className="bg-brand-orange/5 py-20 sm:py-28">
            <Features />
          </section>

          {/* Transition to Testimonials */}
          <div className="h-20 sm:h-28 bg-gradient-to-b from-brand-orange/5 to-white" />

          {/* Testimonials Section */}
          <section className="bg-white py-20 sm:py-28">
            <Testimonials />
          </section>

          {/* Transition to Timeline */}
          <div className="h-20 sm:h-28 bg-gradient-to-b from-white to-slate-50" />

          {/* Timeline Section */}
          <section className="bg-slate-50 py-20 sm:py-28">
            <Timeline />
          </section>

          {/* Transition to FAQ */}
          <div className="h-20 sm:h-28 bg-gradient-to-b from-slate-50 to-white" />

          {/* FAQ Section */}
          <section className="bg-white py-20 sm:py-28">
            <FAQ />
          </section>

          {/* Final Transition to Footer */}
          <div className="h-20 sm:h-28 bg-gradient-to-b from-white to-brand-navy" />
        </div>
      
      <Footer />
    </main>
  );
}

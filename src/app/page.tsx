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

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* 1. White Section */}
      <section className="bg-white">
        <Hero />
        <Brands />
      </section>

      {/* Fade White to Navy (Services) */}
      <div className="h-[600px] bg-gradient-to-b from-white to-brand-navy/5" />

      {/* 2. Services Section */}
      <section className="bg-brand-navy/5">
        <Services />
      </section>

      {/* Fade Section to White */}
      <div className="h-[600px] bg-gradient-to-b from-brand-navy/5 to-white" />

      {/* 3. White Section */}
      <section className="bg-white">
        <VideoSection />
      </section>

      {/* Fade White to Features */}
      <div className="h-[600px] bg-gradient-to-b from-white to-brand-orange/5" />

      {/* 4. Features (Qui suis-je) Section */}
      <section className="bg-brand-orange/5">
        <Features />
      </section>

      {/* Fade Section to White */}
      <div className="h-[600px] bg-gradient-to-b from-brand-orange/5 to-white" />

      {/* 5. White Section */}
      <section className="bg-white">
        <Testimonials />
      </section>

      {/* Fade White to Timeline */}
      <div className="h-[600px] bg-gradient-to-b from-white to-brand-gold/5" />

      {/* 6. Timeline Section */}
      <section className="bg-brand-gold/5">
        <Timeline />
      </section>

      {/* Fade Section to White */}
      <div className="h-[600px] bg-gradient-to-b from-brand-gold/5 to-white" />

      {/* 7. White Section */}
      <section className="bg-white">
        <FAQ />
      </section>

      {/* Fade White to Black (Footer) */}
      <div className="h-[600px] bg-gradient-to-b from-white to-black" />
      
      <Footer />
    </main>
  );
}

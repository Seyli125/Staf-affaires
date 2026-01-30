import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Brands } from "@/components/Brands";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { VideoSection } from "@/components/VideoSection";
import { Testimonials } from "@/components/Testimonials";
import { InstagramSection } from "@/components/InstagramSection";
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

      {/* Fade White to Orange (Main) */}
      <div className="h-[600px] bg-gradient-to-b from-white to-brand-orange" />

      {/* 2. Orange Section (Main) */}
      <section className="bg-brand-orange">
        <Services />
      </section>

      {/* Fade Orange (Main) to White */}
      <div className="h-[600px] bg-gradient-to-b from-brand-orange to-white" />

      {/* 3. White Section */}
      <section className="bg-white">
        <VideoSection />
      </section>

      {/* Fade White to Orange (Light) */}
      <div className="h-[600px] bg-gradient-to-b from-white to-brand-orange-light" />

      {/* 4. Orange Section (Light) */}
      <section className="bg-brand-orange-light">
        <Features />
      </section>

      {/* Fade Orange (Light) to White */}
      <div className="h-[600px] bg-gradient-to-b from-brand-orange-light to-white" />

      {/* 5. White Section */}
      <section className="bg-white">
        <Testimonials />
      </section>

      {/* Fade White to Orange (Light) */}
      <div className="h-[600px] bg-gradient-to-b from-white to-brand-orange-light" />

      {/* 6. Orange Section (Light) */}
      <section className="bg-brand-orange-light">
        <InstagramSection />
      </section>

      {/* Fade Orange (Light) to White */}
      <div className="h-[600px] bg-gradient-to-b from-brand-orange-light to-white" />

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

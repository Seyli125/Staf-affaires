import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Observations } from "@/components/Observations";
import { Services } from "@/components/Services";
import { Features } from "@/components/Features";
import { SaidVideoIntro } from "@/components/SaidVideoIntro";

import { Testimonials } from "@/components/Testimonials";

import { FocusTabs } from "@/components/FocusTabs";
import { TrustedBy } from "@/components/TrustedBy";
import { FinalCTA } from "@/components/FinalCTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">

        
        <Navbar />
        
        {/* 1. Hero - Promesse */}
        <Hero />

        {/* Content sections — uniform vertical rhythm */}
        <div className="relative">


           {/* Observations */}
           <section className="py-12 sm:py-16 lg:py-20">
             <Observations />
           </section>

           {/* Divider */}
           <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
             <div className="h-px divider-shimmer" />
           </div>

           {/* 2. Services - Valeur */}
           <section className="py-12 sm:py-16 lg:py-20">
             <Services />
           </section>

           {/* Divider */}
           <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
             <div className="h-px divider-shimmer" />
           </div>

            {/* Focus Opérationnel AVR® & PPS® */}
            <section className="py-12 sm:py-16 lg:py-20">
              <FocusTabs />
            </section>

           {/* Divider */}
           <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
             <div className="h-px divider-shimmer" />
           </div>

           {/* Vidéo de présentation - juste avant la biographie */}
           <SaidVideoIntro />

           {/* 4. Features (Biographie) - Connexion */}
           <section>
             <Features />
           </section>

           {/* Divider */}
           <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
             <div className="h-px divider-shimmer" />
           </div>

            {/* Testimonials Section */}
           <section className="py-12 sm:py-16 lg:py-20">
             <Testimonials />
           </section>

           {/* Trusted By / Social Proof Logos */}
           <TrustedBy />

           {/* Final CTA */}
           <FinalCTA />

           {/* Divider */}
           <div className="max-w-[1280px] mx-auto px-6 sm:px-8 lg:px-12">
             <div className="h-px divider-shimmer" />
           </div>

           {/* FAQ Section */}
           <section className="py-12 sm:py-16 lg:py-20">
             <FAQ />
           </section>

           {/* Final Transition to Footer */}
           <div className="h-12 sm:h-16 bg-gradient-to-b from-transparent to-brand-navy" />
        </div>
        
        <Footer />
      </main>
  );
}

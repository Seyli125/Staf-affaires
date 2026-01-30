import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Timeline } from "@/components/Timeline";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <Hero />
      
      <About />
      
      <Services />
      
      <Testimonials />
      
      <Timeline />
      
      <FAQ />
      
      <Contact />
      
      <Footer />
    </main>
  );
}

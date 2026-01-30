"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

export function InstagramSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-[#fafafa] rounded-[40px] overflow-hidden border border-gray-100 shadow-xl flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/1746597689538-1769736766387.png"
              alt="Follow me on Instagram"
              fill
              className="object-contain mt-10"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 p-12 md:p-20 flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none mb-10 uppercase">
              Suivez-moi sur IG pour plus de détails <br />& un mindset business
            </h2>
            
            <Button 
              size="lg"
              className="bg-black text-white hover:bg-black/80 rounded-full px-10 py-7 font-black text-lg group transition-all"
            >
              Suivre @Said_Taaroust
              <Instagram className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

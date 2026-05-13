import Image from "next/image";

import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import SelectionsSection from "@/components/home/SelectionsSection";
import CoursesSection from "@/components/home/CoursesSection";
import CampusSection from "@/components/home/CampusSection";
import DirectorSection from "@/components/home/DirectorSection";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FoldingButtons";

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white to-slate-50 py-3 lg:py-5">
        <div className="flex animate-marquee gap-3 lg:gap-6 px-4">
          {[
            "/images/ribbon/ribbon-image-2.png",
            "/images/ribbon/ribbon-image-4.png",
            "/images/ribbon/ribbon-image-6.png",
            "/images/ribbon/ribbon-image-3.png",
            "/images/ribbon/ribbon-image-7.png",
            "/images/ribbon/ribbon-image-1.png",
            "/images/ribbon/ribbon-image-10.png",
            "/images/ribbon/ribbon-image-5.png",
            "/images/ribbon/ribbon-image-11.png",
            "/images/selections/x-group-selection-1.png",
            "/images/ribbon/ribbon-image-2.png",
            "/images/ribbon/ribbon-image-4.png",
            "/images/ribbon/ribbon-image-6.png",
            "/images/ribbon/ribbon-image-3.png",
            "/images/ribbon/ribbon-image-7.png",
            "/images/ribbon/ribbon-image-1.png",
            "/images/ribbon/ribbon-image-10.png",
            "/images/ribbon/ribbon-image-5.png",
            "/images/ribbon/ribbon-image-11.png",
            "/images/selections/x-group-selection-1.png",
          ].map((image, index) => (
            <div
              key={index}
              className=" relative h-28 w-44 sm:h-32 sm:w-52 lg:h-44 lg:w-72 xl:h-48 xl:w-80 flex-shrink-0 overflow-hidden rounded-2xl border border-slate-200 shadow-sm"
            >
              <Image
                src={image}
                alt="IDA Classes Jaipur"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className="object-cover object-top transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <HeroSection />

      <SelectionsSection />
      <CoursesSection />
      <CampusSection />
      <DirectorSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
}

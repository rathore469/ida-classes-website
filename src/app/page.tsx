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

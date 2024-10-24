import CtaSection from "@/components/CTA";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";

export default function Home() {  
  return (
    <div className="bg-slate-200">
      <HeroSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

"use client"
import { Test } from "@/api/llama/test";
import CtaSection from "@/components/CTA";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Test(); // Automatically runs when component mounts
  }, []);  return (
    <div className="bg-slate-200">
      <HeroSection />
      <CtaSection />
      <Footer />
    </div>
  );
}

import Navbar from "@/components/Navbar";
import { div } from "framer-motion/client";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import About from "@/components/About";
export default function Home() {
  
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <About/>
      <Footer/>
    </main>
  );
}

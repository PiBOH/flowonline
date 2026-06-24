import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Languages } from "@/components/Languages";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { CodeShowcase } from "@/components/CodeShowcase";
import { WhyBrowser } from "@/components/WhyBrowser";
import { Faq } from "@/components/Faq";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#05070f] text-zinc-200 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Languages />
        <Features />
        <HowItWorks />
        <CodeShowcase />
        <WhyBrowser />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

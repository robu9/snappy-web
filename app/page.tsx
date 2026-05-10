import { Navbar } from "@/components/Navbar";
import { CustomCursor } from "@/components/CustomCursor";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <div className="min-h-screen bg-[var(--bg)]">
        <article className="pb-24 pt-20 text-center sm:pt-28">
          <div className="mx-auto max-w-[800px] px-6">
            <HeroSection />
            <FeaturesSection />
            <CTASection />
          </div>
        </article>
        <Footer />
      </div>
    </>
  );
}

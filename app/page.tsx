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
      <div className="flex min-h-dvh flex-col bg-[var(--bg)]">
        <article className="flex flex-1 flex-col pb-8 pt-20 text-center sm:pt-28">
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

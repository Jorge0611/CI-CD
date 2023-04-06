import { FaqSection } from "@/components/landing/FaqSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { HeroHeader } from "@/components/landing/HeroHeader";

export function LandingPage() {
  return (
    <>
      <HeroHeader />
      <FeaturesSection />
      <FaqSection />
    </>
  );
}

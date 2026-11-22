import { Footer } from "@/components/landing-page/footer";
import { Navbar } from "@/components/landing-page/navbar";
import { AboutSection } from "@/components/landing-page/about-section";
import { CTASection } from "@/components/landing-page/cta-section";
import { EngineeringApproach } from "@/components/landing-page/engineering-approach";
import { FeaturedProjects } from "@/components/landing-page/featured-projects";
import { HeroSection } from "@/components/landing-page/hero-section";
import { InsightsSection } from "@/components/landing-page/insights-section";
import { SolutionsSection } from "@/components/landing-page/solutions-section";
import { TechStack } from "@/components/landing-page/tech-stack";
import { TrustIndicators } from "@/components/landing-page/trust-indicators";
import { QuestionLab } from "@/components/landing-page/question-lab/question-lab";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TrustIndicators />
        <AboutSection />
        <SolutionsSection />
        <FeaturedProjects />
        
        <QuestionLab />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

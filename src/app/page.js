import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
import FeaturedServices from "@/components/FeaturedServices";
import TechStack from "@/components/TechStack";
import CTA from "@/components/CTA";
import ProjectsSection from "@/components/Projects";
import TestimonialsSection from "@/components/Testimonials";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";

export default function Home() {
  return (
    <InteractiveBackground>
      <HeroSection />
      <WhoWeAre />
      <FeaturedServices />
      <TechStack />
      <ProjectsSection />
      <TestimonialsSection />
      <CTA />
    </InteractiveBackground>
  );
}

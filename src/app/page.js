import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import HeroSection from "@/components/HeroSection";
import WhoWeAre from "@/components/WhoWeAre";
// import InteractiveBackground from "@/components/InteractiveBackground";
import FeaturedServices from '@/components/FeaturedServices';
import TechStack from '@/components/TechStack';
import ProjectsSection from '@/components/Projects';
import TestimonialsSection from '@/components/Testimonials';
import CTA from '@/components/CTA';

// Lazy load non-critical components for better performance
// const FeaturedServices = dynamic(() => import("@/components/FeaturedServices"), {
//   loading: () => <div className="h-96 bg-gradient-to-br from-slate-900 to-slate-800 animate-pulse rounded-lg"></div>
// });

// const TechStack = dynamic(() => import("@/components/TechStack"), {
//   loading: () => <div className="h-64 bg-gradient-to-br from-slate-900 to-slate-800 animate-pulse rounded-lg"></div>
// });

// const ProjectsSection = dynamic(() => import("@/components/Projects"), {
//   loading: () => <div className="h-96 bg-gradient-to-br from-slate-900 to-slate-800 animate-pulse rounded-lg"></div>
// });

// const TestimonialsSection = dynamic(() => import("@/components/Testimonials"), {
//   loading: () => <div className="h-96 bg-gradient-to-br from-slate-900 to-slate-800 animate-pulse rounded-lg"></div>
// });

// const CTA = dynamic(() => import("@/components/CTA"), {
//   loading: () => <div className="h-64 bg-gradient-to-br from-slate-900 to-slate-800 animate-pulse rounded-lg"></div>
// });

// const Footer = dynamic(() => import("@/components/Footer"), {
//   loading: () => <div className="h-32 bg-gradient-to-br from-slate-900 to-slate-800 animate-pulse rounded-lg"></div>
// });

export default function Home() {
  return (
    // <InteractiveBackground>
    <>
    
      <HeroSection />
      <WhoWeAre />
      
      {/* <Suspense fallback={<div className="h-96 bg-gradient-to-br from-slate-900 to-slate-800 animate-pulse rounded-lg my-8"></div>}> */}
        <FeaturedServices />
      {/* </Suspense> */}
      
      {/* <Suspense fallback={<div className="h-64 bg-gradient-to-br from-slate-900 to-slate-800 animate-pulse rounded-lg my-8"></div>}> */}
        <TechStack />
      {/* </Suspense> */}
      
      {/* <Suspense fallback={<div className="h-96 bg-gradient-to-br from-slate-900 to-slate-800 animate-pulse rounded-lg my-8"></div>}> */}
        <ProjectsSection />
      {/* </Suspense> */}
      
      {/* <Suspense fallback={<div className="h-96 bg-gradient-to-br from-slate-900 to-slate-800 animate-pulse rounded-lg my-8"></div>}> */}
        <TestimonialsSection />
      {/* </Suspense> */}
      
      {/* <Suspense fallback={<div className="h-64 bg-gradient-to-br from-slate-900 to-slate-800 animate-pulse rounded-lg my-8"></div>}> */}
        <CTA />
      {/* </Suspense> */}
    </>
      
    // </InteractiveBackground>
  );
}

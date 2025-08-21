import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import Team from "@/components/about/Team";
import Timeline from "@/components/about/Timeline";

export default function About() {
  return (
    <>
      <div className="bg-[#121212] pt-16 md:pt-20 pb-16 md:pb-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-100 mb-6 pt-10 md:pt-12">
            About <span className="text-blue-400">Fahracity</span>
          </h1>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-12"></div>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            We are a team of innovators, problem solvers, and tech enthusiasts dedicated to transforming how businesses operate in the digital world.
          </p>
        </div>
      </div>
      
      <MissionVision />
      <CoreValues />
      <Team />
      <Timeline />
    </>
  );
} 
'use client'
import FeaturedCourse from "@/components/FeaturedCourse";
import HeroSection from "@/components/HeroSection";
import Testimonial from "@/components/Testimonial";
import { UpcomingWeb } from "@/components/UpcomingWeb";
import {WhyChooseUs} from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-center text-white ">Chain aiur njn</h1> */}
       <HeroSection/>
       <FeaturedCourse/>
       <WhyChooseUs/>
       <Testimonial/>
       <UpcomingWeb/>
    </main>
    
  );
}

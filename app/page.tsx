import Image from "next/image";


import HeroSection from "@home/HeroSection";
import AboutSection from "@home/AboutSection";
import MenuSection from "@home/MenuSection";
import ReservationSection from "@home/ReservationSection";
import GallerySection from "@home/GallerySection";
import TestimonialsSection from "@home/TestimonialsSection";
import ContactSection from "@home/ContactSection";

import Footer from "@components/Footer";
export default function Home() {
  return (
    <div >
        <HeroSection />
        <AboutSection />
        <MenuSection />
      
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
    </div>
  );
}

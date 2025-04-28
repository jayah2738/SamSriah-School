import React from "react";
import Header from "@/components/Layout/Header";
import Hero from "@/components/Home/Hero";
import Courses from "@/components/Home/Courses";
import Mentor from "@/components/Home/Mentor";
import Testimonial from "@/components/Home/Testimonials";
import Contact from "@/components/Home/Contact";
import Footer from "@/components/Layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Metadata } from "next";
import Bus from "@/components/Home/Bus";
import Canteen from "@/components/Home/Canteen";
export const metadata: Metadata = {
  title: "SamSriah School",
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Courses />
      <Mentor />
      {/* <AskMe/> */}
      <Canteen/>
      <Bus/>
      <Testimonial />
      <Contact />
      <Footer />
      <ScrollToTop/>
    </main>
  );
}
import React from "react";
import Header from "@/components/Layout/Header";
import Hero from "@/components/Home/Hero";
import Courses from "@/components/Home/Courses";
import Mentor from "@/components/Home/Mentor";
import Testimonial from "@/components/Home/Testimonials";
import Newsletter from "@/components/Home/Newsletter";
import Footer from "@/components/Layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Metadata } from "next";
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
      <Testimonial />
      <Newsletter />
      <Footer />
      <ScrollToTop/>
    </main>
  );
}
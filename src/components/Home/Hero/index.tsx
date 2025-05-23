"use client";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";
import Link from "next/link";

const Hero = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home-section" className="w-full bg-gradient-to-br from-amber-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-amber-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-200 rounded-full opacity-20 blur-3xl" />
      </div>

      <div className="container ml-5 xl:ml-0 lg:pt-20 lg:max-w-screen-xl xl:max-w-screen-2xl md:max-w-screen-md relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="col-span-7 flex flex-col gap-8 px-4">
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center gap-3 bg-amber-100/50 px-4 py-2 rounded-full w-fit"
            >
              <Icon icon="solar:school-bold" className="text-amber-600 text-xl" />
              <span className="text-amber-600 font-medium">Welcome to SamSriah School</span>
            </motion.div>

            <motion.h1
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-gray-800 text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            >
              <span className="text-amber-500">From</span> NURSERY{" "}
              <br />
              <span className="text-amber-500">to</span> 12TH GRADE
            </motion.h1>

            <motion.p
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-gray-600 text-lg lg:text-xl leading-relaxed"
            >
              Where Learning Inspires the Future. Discover a place where academic excellence meets creativity, character, and community.
            </motion.p>

            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <div className="flex items-center gap-3 bg-white/80 px-4 py-2 rounded-lg shadow-sm">
                <Icon icon="solar:verified-check-bold" className="text-amber-500 text-xl" />
                <span className="text-gray-700 font-medium">Wisdom</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 px-4 py-2 rounded-lg shadow-sm">
                <Icon icon="solar:verified-check-bold" className="text-amber-500 text-xl" />
                <span className="text-gray-700 font-medium">Knowledge</span>
              </div>
              <div className="flex items-center gap-3 bg-white/80 px-4 py-2 rounded-lg shadow-sm">
                <Icon icon="solar:verified-check-bold" className="text-amber-500 text-xl" />
                <span className="text-gray-700 font-medium">Success</span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn("right", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center gap-4 pt-6"
            >
              <Link 
                href="/documentation" 
                className="group relative bg-amber-500 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden"
              >
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
              <a 
                href="#contact-form" 
                onClick={scrollToContact}
                className="group relative border-2 border-amber-500 text-amber-600 px-6 py-3 rounded-lg font-medium transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-amber-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="col-span-5 relative"
          >
            <div className="relative">
              <Image
                src="/images/banner/boyk.png"
                alt="Student learning"
                width={600}
                height={600}
                className="w-full h-auto object-contain"
              />
              <div className="absolute -bottom-6 right-4 bg-white p-4 rounded-xl shadow-lg max-w-[200px]">
                <div className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                    <Icon icon="solar:book-bold" className="text-amber-500 text-xl" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Enrollment Open</p>
                    <p className="text-amber-600 font-semibold">2025-2026</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { MentorData } from "@/app/api/data";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";
// import Link from "next/link";

const Mentor = () => {
  console.log('MentorData:', MentorData);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    speed: 100,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleViewClasses = () => {
    alert("Visit our school to explore our classes and meet our teachers in person. We'd love to show you around!");
  };

  const handleViewSchedule = () => {
    alert("Please visit our school to get detailed information about class schedules and availability. Our staff will be happy to assist you!");
  };

  const handleWhatsApp = (teacherName: string) => {
    // Map of teacher names to their WhatsApp numbers
    const whatsappNumbers: { [key: string]: string } = {
      'Mr.Haja': '261340000000', // Replace with actual number
      'Mr.Manou': '261340000001',
      'Mr.Tojo': '261340000002',
      'Mr.Vonjy': '261340000003',
      'Ms.Finaritra': '261340000004',
      'Mrs.Lova': '261340000005',
      'Ms.Lucy': '261340000006',
      'Mrs.Perline': '261340000007',
      'Ms.Ravaka': '261340000008'
    };

    const number = whatsappNumbers[teacherName];
    if (number) {
      window.open(`https://wa.me/${number}`, '_blank');
    } else {
      alert("WhatsApp number not available for this teacher. Please contact the school directly.");
    }
  };

  const handleTelegram = (teacherName: string) => {
    // Map of teacher names to their Telegram usernames
    const telegramUsernames: { [key: string]: string } = {
      'Mr.Haja': 'haja_teacher', // Replace with actual username
      'Mr.Manou': 'manou_teacher',
      'Mr.Tojo': 'tojo_teacher',
      'Mr.Vonjy': 'vonjy_teacher',
      'Ms.Finaritra': 'finaritra_teacher',
      'Mrs.Lova': 'lova_teacher',
      'Ms.Lucy': 'lucy_teacher',
      'Mrs.Perline': 'perline_teacher',
      'Ms.Ravaka': 'ravaka_teacher'
    };

    const username = telegramUsernames[teacherName];
    if (username) {
      window.open(`https://t.me/${username}`, '_blank');
    } else {
      alert("Telegram username not available for this teacher. Please contact the school directly.");
    }
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20" id="mentor">
      <div className="container mx-auto lg:max-w-screen-xl xl:max-w-screen-2xl md:max-w-screen-md px-4">
        <div className="text-center mb-16">
          <motion.h2
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4"
          >
            Meet Our Expert Mentors
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Our dedicated team of experienced educators is committed to nurturing your child's potential
          </motion.p>
        </div>

        <Slider {...settings}>
          {MentorData.map((items:any, i:any) => (
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              key={i}
              className="px-3"
            >
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <div className="aspect-square relative max-w-[140px] mx-auto mt-6">
                    <Image
                      src={items.imgSrc}
                      alt={`${items.name} - ${items.profession}`}
                      width={140}
                      height={140}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 rounded-full p-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                  </div>
                </div>

                <div className="p-6 text-center">
                  <motion.h3
                    whileHover={{ scale: 1.02 }}
                    className="text-xl font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors duration-300"
                  >
                    {items.name}
                  </motion.h3>
                  <p className="text-amber-600 font-medium mb-2">{items.profession}</p>
                  
                  <div className="min-h-[50px] mb-4 px-2">
                    <p className="text-gray-700 text-sm leading-relaxed font-medium">
                      {items.description}
                    </p>
                  </div>
                  
                  <div className="flex justify-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Icon icon="mdi:star" className="text-yellow-500" />
                      <span>4.9</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Icon icon="mdi:account-group" className="text-blue-500" />
                      <span>{items.StudentsNum}+ Students </span>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-center gap-3">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      onClick={handleViewClasses}
                      className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors duration-300 cursor-pointer"
                    >
                      <Icon icon="mdi:book-open-page-variant" className="text-xl" />
                      <span className="text-sm font-medium">View Classes</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      onClick={handleViewSchedule}
                      className="flex items-center gap-2 text-gray-600 hover:text-amber-600 transition-colors duration-300 cursor-pointer"
                    >
                      <Icon icon="mdi:calendar-check" className="text-xl" />
                      <span className="text-sm font-medium">Schedule</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Mentor;

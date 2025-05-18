"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { TestimonialData } from "@/app/api/data";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";

const Testimonial = () => {
  const settings = {
    dots: false,
    dotsClass: "slick-dots",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    speed: 1000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <div className="flex gap-1">
        {Array(fullStars).fill(
          <Icon
            icon="tabler:star-filled"
            className="text-yellow-500 text-xl"
          />
        )}
        {halfStars > 0 && (
          <Icon
            icon="tabler:star-half-filled"
            className="text-yellow-500 text-xl"
          />
        )}
        {Array(emptyStars).fill(
          <Icon
            icon="tabler:star-filled"
            className="text-gray-300 text-xl"
          />
        )}
      </div>
    );
  };

  return (
    <section id="testimonial" className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto lg:max-w-screen-xl xl:max-w-screen-2xl md:max-w-screen-md px-4">
        <div className="text-center mb-16">
          <motion.h2
            variants={fadeIn("right", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4"
          >
            What Our Students Say
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Hear from our students about their experiences at Samsriah School
          </motion.p>
        </div>

        <Slider {...settings}>
          {TestimonialData.map((items, i) => (
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              key={i}
              className="px-3"
            >
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                   
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                        {items.name}
                      </h3>
                      <p className="text-amber-600 font-medium">{items.profession}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    {renderStars(items.rating)}
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {items.comment}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Icon icon="mdi:calendar" className="text-amber-500" />
                      <span className="text-sm">{items.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Icon icon="mdi:school" className="text-amber-500" />
                    </div>
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

export default Testimonial;

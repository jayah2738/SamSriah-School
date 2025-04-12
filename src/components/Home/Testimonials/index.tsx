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
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
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
      <>
        {Array(fullStars).fill(
          <Icon
            icon="tabler:star-filled"
            className="text-yellow-500 text-xl inline-block"
          />
        )}
        {halfStars > 0 && (
          <Icon
            icon="tabler:star-half-filled"
            className="text-yellow-500 text-xl inline-block"
          />
        )}
        {Array(emptyStars).fill(
          <Icon
            icon="tabler:star-filled"
            className="text-gray-400 text-xl inline-block"
          />
        )}
      </>
    );
  };

  return (
    <section id="testimonial" className="bg-white">
      <div className="container mx-auto lg:max-w-screen-xl xl:max-w-screen-2xl  md:max-w-screen-md px-4">
        <motion.h2
          variants={fadeIn("right", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-midnight_text text-5xl font-semibold"
        >
          What our Students <br /> say.
        </motion.h2>
        <Slider {...settings}>
          {TestimonialData.map((items, i) => (
            <motion.div
            variants={fadeIn("up", 0.7)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.7 }}
            key={i}>
              <div
                className={`bg-white rounded-2xl  border-l-4 border-r-4 border-rose-500 m-4 p-5 my-20 relative ${
                  i % 2
                    ? "shadow-testimonial-shadow2"
                    : "shadow-testimonial-shadow1"
                }`}
              >
                <div className="absolute top-[-45px]">
                  <Image
                    src={items.imgSrc}
                    alt={items.name}
                    width={100}
                    height={100}
                    className="inline-block"
                  />
                </div>
                <h4 className="font-normal text-gray-500 my-4">
                  {items.comment}
                </h4>
                <div className="flex sm:flex-col flex-col-2 justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium text-slate-950 pt-4 pb-2">
                      {items.name}
                    </h3>
                    <h3 className="text-sm font-normal text-amber-950 pb-2">
                      {items.profession}
                    </h3>
                  </div>
                  <div className="flex">{renderStars(items.rating)}</div>
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

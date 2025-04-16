"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Image from "next/image";
import { MentorData } from "@/app/api/data";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";

const Mentor = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-rose-300 w-full" id="mentor">
      <div className="container mx-auto lg:max-w-screen-xl xl:max-w-screen-2xl  md:max-w-screen-md px-4 relative">
        <motion.h2
          variants={fadeIn("right", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-midnight_text text-5xl font-semibold"
        >
          Learn with our <br /> mentors.
        </motion.h2>

        <Slider {...settings}>
          {MentorData.map((items, i) => (
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              key={i}
            >
              <div className="m-3 py-14 md:my-10 text-center">
                <div className="relative">
                  <Image
                    src={items.imgSrc}
                    alt="user-image"
                    width={306}
                    height={0}
                    className="inline-block m-auto"
                  />
                  <div className="absolute translate-x-[18rem] bottom-[102px] bg-white rounded-full  py-3 px-1 ">
                    <Image
                      src={"/images/mentor/logo1.png"}
                      alt="linkedin-image"
                      width={50}
                      height={80}
                    />
                  </div>
                </div>
                <div className="-mt-10">
                  <h3 className="text-2xl font-semibold text-lightblack">
                    {items.name}
                  </h3>
                  <h4 className="text-lg font-normal text-lightblack pt-2 opacity-50">
                    {items.profession}
                  </h4>
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

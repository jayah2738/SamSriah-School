"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { courseData } from "@/app/api/data";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";

const Courses = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        speed: 1500,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const halfStars = rating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;

        return (
            <>
                {Array(fullStars).fill(<Icon icon="tabler:star-filled" className="text-yellow-500 text-xl inline-block" />)}
                {halfStars > 0 && <Icon icon="tabler:star-half-filled" className="text-yellow-500 text-xl inline-block" />}
                {Array(emptyStars).fill(<Icon icon="tabler:star-filled" className="text-gray-400 text-xl inline-block" />)}
            </>
        );
    };

    return (
        <section id="courses" className="bg-white">
            <div className='container mx-auto lg:max-w-screen-xl xl:max-w-screen-2xl  md:max-w-screen-md px-4'>
                <div className="sm:flex justify-between items-center ">
                    <motion.h2
                     variants={fadeIn("right", 0.7)}
                     initial="hidden"
                     whileInView={"show"}
                     viewport={{ once: false, amount: 0.7 }}
                    className="text-midnight_text text-4xl lg:text-5xl font-semibold sm:mb-0">Our Sections.</motion.h2>
                    <Link href={'/'} className="text-primary text-lg font-medium hover:tracking-widest duration-500">Explore more&nbsp;&gt;&nbsp;</Link>
                </div>
                <Slider {...settings}>
                    {courseData.map((items, i) => (
                        <motion.div 
                        variants={fadeIn("down", 0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        
                        key={i}>
                            <div className='bg-white m-3 mb-12 px-3 pt-3 pb-12 shadow-course-shadow rounded-2xl h-full'>
                                <div className="relative rounded-3xl">
                                    <Image src={items.imgSrc} alt="course-image" width={389} height={262} className="m-auto clipPath" />
                                    <div className="absolute right-5 -bottom-2 bg-rose-500 rounded-full p-4 shadow-lg">
                                        <h3 className="text-white uppercase text-center text-sm font-medium">The best <br /> Way</h3>
                                    </div>
                                </div>

                                <div className="px-3 pt-6">
                                    <Link href="#" className='text-2xl font-bold text-black max-w-75% inline-block'>{items.heading}</Link>
                                    {/* <h3 className='text-base font-normal pt-6 text-black/75'>{items.name}</h3> */}
                                    <div className="flex flex-col justify-between items-center py-6 border-b">
                                        <div className="flex items-center gap-6">
                                            <div className="flex">
                                                {renderStars(items.rating)} {/* Dynamic stars */}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-medium text-red-500">${items.price}/Grade</h3>
                                    </div>
                                   
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Courses;

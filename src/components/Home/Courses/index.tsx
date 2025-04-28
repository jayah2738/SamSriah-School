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
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        speed: 2000,
        cssEase: "ease-in-out",
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
            <div className="flex gap-1">
                {Array(fullStars).fill(<Icon icon="tabler:star-filled" className="text-yellow-500 text-xl inline-block" />)}
                {halfStars > 0 && <Icon icon="tabler:star-half-filled" className="text-yellow-500 text-xl inline-block" />}
                {Array(emptyStars).fill(<Icon icon="tabler:star-filled" className="text-gray-300 text-xl inline-block" />)}
            </div>
        );
    };

    return (
        <section id="courses" className="bg-gradient-to-b from-white to-gray-50 py-20">
            <div className='container mx-auto lg:max-w-screen-xl xl:max-w-screen-2xl md:max-w-screen-md px-4'>
                <div className="flex flex-col sm:flex-row justify-between items-center mb-12">
                    <motion.h2
                        variants={fadeIn("right", 0.7)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4 sm:mb-0"
                    >
                        Our Sections
                    </motion.h2>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.alert('Coming soon...')}
                        className="flex items-center gap-2 text-primary text-lg font-semibold hover:text-amber-600 transition-colors duration-300"
                    >
                        Explore more
                        <Icon icon="tabler:arrow-right" className="text-xl" />
                    </motion.button>
                </div>

                <Slider {...settings}>
                    {courseData.map((items, i) => (
                        <motion.div
                            key={i}
                            variants={fadeIn("up", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="px-3"
                        >
                            <div className='group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'>
                                <div className="relative overflow-hidden">
                                    <div className="aspect-w-16 aspect-h-9">
                                        <Image
                                            src={items.imgSrc}
                                            alt={`${items.heading} course`}
                                            width={389}
                                            height={262}
                                            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="absolute right-5 -bottom-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full p-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                        <h3 className="text-white uppercase text-center text-sm font-semibold">The best <br /> Way</h3>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <Link href="#" className='block'>
                                        <h3 className='text-2xl font-bold text-gray-900 hover:text-amber-600 transition-colors duration-300 mb-4'>{items.heading}</h3>
                                    </Link>
                                    
                                    <div className="space-y-4 py-4 border-t border-gray-100">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                {renderStars(items.rating)}
                                                <span className="text-gray-600 font-medium">{items.rating}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Icon icon="tabler:users" className="text-gray-600 text-xl" />
                                                <span className="text-gray-600 font-medium">{items.students} Students</span>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Icon icon="tabler:book" className="text-gray-600 text-xl" />
                                                <span className="text-gray-600 font-medium">{items.classes} Classes</span>
                                            </div>
                                            <div className="text-amber-600 font-bold text-lg">
                                                ${items.price}/mo
                                            </div>
                                        </div>
                                    </div>

                                    <Link href="/documentation">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full mt-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-amber-700 transition-all duration-300"
                                        >
                                            Learn More
                                        </motion.button>
                                    </Link>
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

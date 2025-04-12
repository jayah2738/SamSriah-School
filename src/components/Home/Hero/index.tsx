"use client";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";

const Hero = () => {
  return (
    <section id="home-section" className="bg-white">
      <div className="container mx-auto lg:pt-20 lg:max-w-screen-xl xl:max-w-screen-2xl md:max-w-screen-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex flex-col gap-8 ">
            <div className="flex gap-2 mx-auto lg:mx-0"></div>
            <motion.h1
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-gray-700 text-4xl sm:text-7xl font-bold pt-5 lg:pt-0"
            >
              <span className="text-amber-500"> From </span>KINDERGARTEN{" "}
              <span className="text-amber-500"> to </span>12TH GRADE
            </motion.h1>
            <motion.h3
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-black/70 text-lg pt-5 lg:pt-0"
            >
              <Icon
                icon="solar:verified-check-bold"
                className="text-success text-4xl inline-block me-2"
              />{" "}
              Entrust us with the Education of your child, his future will be
              ensure.
            </motion.h3>
            <motion.div
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="relative rounded-full pt-5 lg:pt-0"
            >
              <input
                type="Email address"
                name="q"
                className="py-5 lg:py-5 border border-sm pl-8 pr-20 text-lg w-full text-black rounded-full focus:outline-none shadow-input-shadow bg-white"
                placeholder="Search courses..."
                autoComplete="off"
              />
              <button className="bg-amber-500 p-6 rounded-full absolute right-3  lg:top-3 top-8 hover:bg-green-500">
                <Icon
                  icon="solar:magnifer-linear"
                  className="absolute top-3 right-3 p-5text-white text-2xl inline-block"
                />
              </button>
            </motion.div>
            <div className="flex items-center justify-between pt-10 lg:pt-4">
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex gap-2"
              >
                <Image
                  src="/images/banner/check-circle.png"
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-sm sm:text-lg font-normal text-black">
                  Wisdom
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex gap-2"
              >
                <Image
                  src="/images/banner/check-circle.png"
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-sm sm:text-lg font-normal text-black">
                  Knowledge
                </p>
              </motion.div>
              <motion.div
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex gap-2"
              >
                <Image
                  src="/images/banner/check-circle.png"
                  alt="check-image"
                  width={30}
                  height={30}
                  className="smallImage"
                />
                <p className="text-sm sm:text-lg font-normal text-black">
                  Success
                </p>
              </motion.div>
            </div>
          </div>
          <motion.div
             variants={fadeIn("left", 0.9)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.7 }}
          className="col-span-5 flex justify-center">
            <Image
              src="/images/banner/boyk.png"
              alt="nothing"
              width={1000}
              height={805}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

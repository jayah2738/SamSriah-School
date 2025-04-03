import React from "react";
import Grdbg from "/public/images/Users/gradeLists.png";
import { img } from "framer-motion/client";
import Link from "next/link";

const GradeLists: React.FC = () => {
  const sections = [
    {
      id: 1,
      title: "PreSchool",
      grades: ["TPS", "PS", "MS", "GS"],
    },
    {
      id: 2,
      title: "Primary School",
      grades: ["CP1", "CP2", "CM1", "CM2"],
    },
    {
      id: 3,
      title: "Middle School",
      grades: ["6Th", "7Th", "8Th", "9Th"],
    },
    {
      id: 4,
      title: "High School",
      grades: [
        "10Th",
        "11Th L",
        "11Th S",
        "11/ose",
        "12Th L",
        "12Th S",
        "12/ose",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-10">
      {sections.map((section) => (
        <div
          id={section.id.toString()}
          className="flex flex-col items-center w-full h-full pb-10"
        >
          <div className="flex items-center gap-8 md:gap-2 sm:gap-2">
            <p className="border border-2 border-gray-300 w-64 md:w-0 sm:w-0 lg:w-80 h-0"></p>{" "}
            <div className="text-gray-500 font-semibold text-4xl md:text-3xl sm:text-3xl">
              {section.title}{" "}
            </div>
            <p className="border border-2 border-gray-300 w-64 sm:w-0 lg:w-80 h-0"></p>
          </div>
          <div className="grid gap-4 transform md:grid-cols-2 sm:flex sm:flex-col ml-40 lg:grid lg:grid-cols-4 lg:ml-0">
              <div
                className="container w-[300px] h-[150px] md:w-[250px] md:h-[150px] cursor-pointer  hover:-translate-y-10 transition duration-900"
                style={{
                  backgroundImage: `url(${Grdbg.src})`,
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h1 className="text-5xl md:text-5xl sm:text-5xl text-gray-500 font-bold flex items-center justify-center mt-[5rem] md:mt-[4rem] hover:text-white">
                  {section.grades[0]}
                </h1>
              </div>
            <div
              className="container w-[300px] h-[150px] md:w-[250px] md:h-[150px] cursor-pointer  hover:-translate-y-10 transition duration-900"
              style={{
                backgroundImage: `url(${Grdbg.src})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1 className="text-5xl md:text-5xl sm:text-5xl text-gray-500 font-bold flex items-center justify-center mt-[5rem] md:mt-[4rem] hover:text-white">
                {section.grades[1]}
              </h1>
            </div>
            <div
              className="container w-[300px] h-[150px] md:w-[250px] md:h-[150px] cursor-pointer  hover:-translate-y-10 transition duration-900"
              style={{
                backgroundImage: `url(${Grdbg.src})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1 className="text-5xl md:text-5xl sm:text-5xl text-gray-500 font-bold flex items-center justify-center mt-[5rem] md:mt-[4rem] hover:text-white">
                {section.grades[2]}
              </h1>
            </div>
            <div
              className="container w-[300px] h-[150px] md:w-[250px] md:h-[150px] cursor-pointer  hover:-translate-y-10 transition duration-900"
              style={{
                backgroundImage: `url(${Grdbg.src})`,
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1 className="text-5xl md:text-5xl sm:text-5xl text-gray-500 font-bold flex items-center justify-center mt-[5rem] md:mt-[4rem] hover:text-white">
                {section.grades[3]}
              </h1>
            </div>
            {section.grades[4] && (
              <div
                className="container w-[300px] h-[150px] md:w-[250px] md:h-[150px] cursor-pointer hover:-translate-y-10 transition duration-900"
                style={{
                  backgroundImage: `url(${Grdbg.src})`,
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h1 className="text-5xl md:text-5xl sm:text-5xl text-gray-500 font-bold flex items-center justify-center mt-[5rem] md:mt-[4rem] hover:text-white">
                  {section.grades[4]}
                </h1>
              </div>
            )}
            {section.grades[5] && (
              <div
                className="container w-[300px] h-[150px] md:w-[250px] md:h-[150px] cursor-pointer hover:-translate-y-10 transition duration-900"
                style={{
                  backgroundImage: `url(${Grdbg.src})`,
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h1 className="text-5xl md:text-5xl sm:text-5xl text-gray-500 font-bold flex items-center justify-center mt-[5rem] md:mt-[4rem] hover:text-white">
                  {section.grades[5]}
                </h1>
              </div>
            )}
            {section.grades[6] && (
              <div
                className="container w-[300px] h-[150px] md:w-[250px] md:h-[150px] cursor-pointer hover:-translate-y-10 transition duration-900"
                style={{
                  backgroundImage: `url(${Grdbg.src})`,
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h1 className="text-5xl md:text-5xl sm:text-5xl text-gray-500 font-bold flex items-center justify-center mt-[5rem] md:mt-[4rem] hover:text-white">
                  {section.grades[6]}
                </h1>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GradeLists;

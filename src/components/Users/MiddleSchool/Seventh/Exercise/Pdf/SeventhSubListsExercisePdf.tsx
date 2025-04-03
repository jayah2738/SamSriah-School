import React from "react";
import Grdbg from "/public/images/Users/SubList.png";

const SeventhSubListsExercisePdf: React.FC = () => {
  const sections = [
    {
      id: "sevenmalagasyexercisepdf",
      subject: "MLG",
      href: "/",
    },
    {
      id: "sevenenglishexercisepdf",
      subject: "ENG",
      href: "/",
    },
    {
      id: "sevenfrenchexercisepdf",
      subject: "FRE",
      href: "/",
    },
    {
      id: "sevenmathsexercisepdf",
      subject: "MATH",
      href: "/",
    },
    {
      id: "sevenhistoryexercisepdf",
      subject: "HIST",
      href: "/",
    },
    {
      id: "sevengeographyexercisepdf",
      subject: "GEO",
      href: "/",
    },
    {
      id: "sevenphysicsexercisepdf",
      subject: "PHY",
      href: "/",
    },
    {
      id: "sevenchemistryexercisepdf",
      subject: "CHIM",
      href: "/",
    },
    {
      id: "sevensvtexercisepdf",
      subject: "SVT",
      href: "/",
    },
    {
      id: "seventechnologyexercisepdf",
      subject: "TECH",
      href: "/",
    },
    {
      id: "sevensportexercisepdf",
      subject: "SPORT",
      href: "/",
    },
  ];

  return (
    <>
      <div className="lg:grid md:grid transform flex flex-col grid-cols-2 md:px-10 lg:grid lg:grid-cols-5 lg:ml-0 justify-center w-full h-full p-10">
        {sections.map((section, index) => (
          <div
            id={`${section.id}-${index}-${Math.random().toString(36).substr(2, 9)}`}
            className="grid transform lg:ml-0"
          >
            <div className="grid transform ">
              <div
                className="container w-[300px] h-[150px] md:w-[250px] md:h-[150px] w-[200px] cursor-pointer  hover:-translate-y-8 transition duration-900"
                style={{
                  backgroundImage: `url(${Grdbg.src})`,
                  backgroundSize: "100%",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h1 className="text-5xl md:text-5xl mt-14 text-2xl text-white font-bold flex items-center justify-center lg:mt-18 hover:text-white">
                  {section.subject}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="p-10 flex items-center justify-center">
        <h1 className="text-lg">You are in the Grade 7 exercise Pdf section</h1>
      </div>
    </>
  );
};

export default SeventhSubListsExercisePdf;
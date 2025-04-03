import React from "react";
import Grdbg from "/public/images/Users/SubList.png";

const SeventhSubListsLessonVideo: React.FC = () => {
  const sections = [
    {
      id: "sevenmalagasylessonvideo",
      subject: "MLG",
      href: "/",
    },
    {
      id: "sevenenglishlessonvideo",
      subject: "ENG",
      href: "/",
    },
    {
      id: "sevenfrenchlessonvideo",
      subject: "FRE",
      href: "/",
    },
    {
      id: "sevenmathslessonvideo",
      subject: "MATH",
      href: "/",
    },
    {
      id: "sevenhistorylessonvideo",
      subject: "HIST",
      href: "/",
    },
    {
      id: "sevengeographylessonvideo",
      subject: "GEO",
      href: "/",
    },
    {
      id: "sevenphysicslessonvideo",
      subject: "PHY",
      href: "/",
    },
    {
      id: "sevenchemistrylessonvideo",
      subject: "CHIM",
      href: "/",
    },
    {
      id: "sevensvtlessonvideo",
      subject: "SVT",
      href: "/",
    },
    {
      id: "seventechnologylessonvideo",
      subject: "TECH",
      href: "/",
    },
    {
      id: "sevensportlessonvideo",
      subject: "SPORT",
      href: "/",
    },
  ];

  return (
    <>
    <div className="lg:grid md:grid transform flex flex-col grid-cols-2 md:px-10 lg:grid lg:grid-cols-5 lg:ml-0 justify-center w-full h-full p-10">
        {sections.map((section, index) => (
          <div id={`${section.id}-${index}-${Math.random().toString(36).substr(2, 9)}`} className="grid transform lg:ml-0">
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
        <h1 className="text-lg">Your are in the Grade 7 lesson Video section</h1>
      </div>
    </>
  );
};


export default SeventhSubListsLessonVideo;

"use client";
import Image from "next/image";
import preschool from "/public/images/documentation/PreSchool.png";
import kindergarten from "/public/images/documentation/Kindergarten.png";
import primaryschool from "/public/images/documentation/PrimarySchool.png";
import middleschool from "/public/images/documentation/MiddleSchool.png";
import highschool from "/public/images/documentation/HighSchool.png";
// import axiosImg from "/public/images/documentation/axios.svg";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { DocNavigation } from "./DocNavigation";

export const Introduction = () => {
  const [docNavbarOpen, setDocNavbarOpen] = useState(false);
  const PackageVersions = [
    {
      id: "1",
      packageName: "Eng-Fr",
      img: preschool,
      version: "PreSchool",
    },
    {
      id: "2",
      packageName: "Eng-Fr",
      img: kindergarten,
      version: "Kindergarten",
    },
    {
      id: "3",
      packageName: "Eng-Fr",
      img: primaryschool,
      version: "Primary ",
    },
    {
      id: "4",
      packageName: "Eng-Fr",
      img: middleschool,
      version: "Middle ",
    },
    {
      id: "5",
      packageName: "Eng-Fr",
      img: highschool,
      version: "High ",
    },
  ];
  return (
    <>
      <div id="version" className="md:scroll-m-[180px] scroll-m-28">
        {docNavbarOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
            onClick={() => setDocNavbarOpen(false)}
          />
        )}

        <div className="flex item-center justify-between">
          <h3 className=" text-2xl mt-16 lg:mt-4 font-semibold mb-6 text-green-700">
          Introduction | PreSchool
          </h3>
          <button onClick={() => setDocNavbarOpen(true)} className="p-0">
            {" "}
            <Icon icon="gg:menu-right" className="text-3xl lg:hidden block" />
          </button>
        </div>

        <div className="w-full grid grid-cols-2 lg:flex justify-between lg:gap-0 gap-6 lg:flex-nowrap flex-wrap p-2 rounded-md border border-dark_border border-opacity-60">
          {PackageVersions &&
            PackageVersions.map((item) => {
              return (
                <div
                  key={item.id}
                  className="lg:w-1/5 md:w-full text-center lg:border-b-0 border-b lg:border-e lg:last:border-e-0 last:border-b-0 border-dark_border border-opacity-70"
                >
                  <Image
                    src={item.img}
                    alt="npm-package"
                    className=" mx-auto w-40 h-36 border rounded-lg "
                  />
                  <h5 className="text-2xl font-bold mt-3.5 text-black-500">{`${item.version}`}</h5>
                  <p className="text-rose-500 font-medium text-muted">
                    {item.packageName}
                  </p>
                </div>
              );
            })}
        </div>
        <div className="mt-5">
          <p className="text-base font-medium text-muted text-opacity-60">
            <span className="text-amber-500 font-bold">SAMSRIAH SCHOOL</span> is an English and French expressions school.
          </p>
          <p className="text-base font-medium text-black text-opacity-60">
            It has been established for 10 years. So, our Teachers are dedicated.
          </p>
          <p className="text-base font-medium text-black text-opacity-60">
            This school follows Malagasy Ministry's Programs. But the communication's languages are English and French.
          </p>
        </div>

        <div className="mt-5">
          <p className="text-base font-medium text-black text-opacity-60">
            <span className="text-amber-500 font-bold">PreSchool</span> has four grades: <span className="text-red-500 font-bold">TPS</span> - <span className="text-red-500 font-bold">PS</span> - <span className="text-red-500 font-bold">MS</span> - <span className="text-red-500 font-bold">GS</span>
          </p>
          <p className="text-base font-medium text-black text-opacity-60">
            For each of those grades, kids have their own skills. The more they upgrade, the more skill they have
          </p>
        </div>
      </div>

      <div
        className={`lg:hidden block fixed top-0 right-0 h-full w-full bg-white dark:bg-dark shadow-lg transform transition-transform duration-300 max-w-xs ${docNavbarOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-lg font-bold text-midnight_text dark:text-black">
            Docs Menu
          </h2>
          <button
            onClick={() => setDocNavbarOpen(false)}
            aria-label="Close mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="dark:text-black"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="px-4">
          <DocNavigation />
        </nav>
      </div>
    </>
  );
};

"use client";
import Image from "next/image";
import preschool from "/public/images/courses/preschool.png";
import primaryschool from "/public/images/courses/primary.png";
import middleschool from "/public/images/courses/middle.png";
import highschool from "/public/images/courses/high.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { DocNavigation } from "./DocNavigation";

export const Introduction = () => {
  const [docNavbarOpen, setDocNavbarOpen] = useState(false);
  const SectionsImages = [
    {
      id: "1",
      packageName: "Eng-Fr",
      img: preschool,
      version: "PreSchool",
      description: "Foundational learning for young minds"
    },
    {
      id: "3",
      packageName: "Eng-Fr",
      img: primaryschool,
      version: "Primary",
      description: "Building strong academic foundations"
    },
    {
      id: "4",
      packageName: "Eng-Fr",
      img: middleschool,
      version: "Middle",
      description: "Developing critical thinking skills"
    },
    {
      id: "5",
      packageName: "Eng-Fr",
      img: highschool,
      version: "High",
      description: "Preparing for future success"
    },
  ];

  return (
    <>
      <div id="version" className="md:scroll-m-[100px] scroll-m-18">
        {docNavbarOpen && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
            onClick={() => setDocNavbarOpen(false)}
          />
        )}

        <div className="flex items-center justify-between mb-8">
          <div className="mt-24">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Introduction | PreSchool
            </h3>
            <p className="text-gray-600">Discover our comprehensive early education program</p>
          </div>
          <button 
            onClick={() => setDocNavbarOpen(true)} 
            className="lg:hidden block p-2 rounded-lg hover:bg-amber-50 transition-colors duration-300"
          >
            <Icon icon="gg:menu-right" className="text-3xl text-gray-600" />
          </button>
        </div>

        <div className="flex flex-col gap-8 xl:flex-row lg:flex-row md:flex-col ">
          {SectionsImages.map((item) => (
            <div
              key={item.id}
              className="w-72 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={item.img}
                  alt={item.version}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h5 className="text-xl font-bold text-gray-900 mb-1">{item.version}</h5>
                <p className="text-amber-500 font-medium mb-2">{item.packageName}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">About Our School</h4>
            <p className="text-gray-600 mb-4">
              <span className="text-amber-500 font-bold">SAMSRIAH SCHOOL</span> is an English and French bilingual school with a decade of excellence in education.
            </p>
            <p className="text-gray-600 mb-4">
              Our dedicated teachers follow the Malagasy Ministry's Programs while maintaining English and French as the languages of communication.
            </p>
          </div>
          <div className="postcard grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
              <div className="one_card w-full">
                <Image src='/images/cards/InfoCard - English.png' alt="img" width={500} height={100} />
              </div>
              <div className="one_card w-full">
                <Image src='/images/cards/InfoCard - French.png' alt="img" width={500} height={100} />
              </div>
              {/* <div className="one_card w-full">
                <Image src='/images/cards/InfoCard - Chinese.png' alt="img" width={500} height={100} />
              </div> */}
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Our Tuition fees</h4>
            <div className="text-gray-600 mb-4">
              <span className="text-green-500 font-bold">Enrollement:</span>
              <br /><div>
                <br /><li className="text-gray-600 "><span className="text-amber-600 font-bold">Enrollement fee:</span> 750.000fmg or 150.000MGA</li>
                <br /><li className="text-gray-600 "><span className="text-amber-600 font-bold">General fee:</span> 150.000fmg or 30.000MGA</li>
                <br /><li className="text-gray-600 "><span className="text-amber-600 font-bold">Tuition fee per month:</span> 500.000fmg or 100.000MGA</li>
                <br /><li className="text-gray-600 "><span className="text-amber-600 font-bold">PE (Physical Education) uniform:</span> 200.000fmg or 40.000MGA</li>
                <br /><li className="text-gray-600 "><span className="text-amber-600 font-bold">School bus fee per day:</span> 35.000fmg or 7.000MGA</li>
                <br /><li className="text-gray-600 "><span className="text-amber-600 font-bold">Canteen lunch fee per meal:</span> 35.000fmg or 7.000MGA</li>
                <br /><li className="text-gray-600 "><span className="text-amber-600 font-bold">Report Card:</span> 15.000fmg or 3.000MGA</li>
                <br /><li className="text-gray-600 "><span className="text-amber-600 font-bold">Correspondace book:</span> 15.000fmg or 3.000MGA</li>
              </div>
              <br /> <span className="text-green-500 font-bold">Re-Enrollement:</span>
              <br /><div>
                <br /><li className="text-gray-600 "><span className="text-amber-600 font-bold">Re-Enrollement fee:</span> 450.000fmg or 90.000MGA</li>
                <br /><li className="text-gray-600 "><span className="text-amber-600 font-bold">General fee:</span> 150.000fmg or 30.000MGA</li>
                <br /><li className="text-gray-600 "><span className="text-amber-600 font-bold">Tuition fee per month:</span> 500.000fmg or 100.000MGA</li>
                <br /><li className="text-gray-600 "><span className="text-amber-600 font-bold">PE (Physical Education) uniform:</span> 200.000fmg or 40.000MGA</li>
                <br /><li className="text-gray-600 "><span className="text-amber-600 font-bold">School bus fee per day:</span> 35.000fmg or 7.000MGA</li>
                <br /><li className="text-gray-600 "><span className="text-amber-600 font-bold">Canteen lunch fee per meal:</span> 35.000fmg or 7.000MGA</li>
                <br /><li className="text-gray-600 "><span className="text-amber-600 font-bold">Report Card:</span> 15.000fmg or 3.000MGA</li>
                <br /><li className="text-gray-600 "><span className="text-amber-600 font-bold">Correspondace book:</span> 15.000fmg or 3.000MGA</li>
              </div>
            </div>
            
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">PreSchool Program</h4>
            <p className="text-gray-600 mb-4">
              Our <span className="text-amber-500 font-bold">PreSchool</span> program includes four grades:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["TPS", "PS", "MS", "GS"].map((grade) => (
                <div key={grade} className="bg-amber-50 rounded-lg p-3 text-center">
                  <span className="text-amber-600 font-bold">{grade}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-4">
              Each grade level is designed to progressively develop essential skills, ensuring a strong foundation for future learning.
            </p>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden block fixed top-0 right-0 h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${
          docNavbarOpen ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900">School Programs</h2>
          <button
            onClick={() => setDocNavbarOpen(false)}
            className="p-2 rounded-lg hover:bg-amber-50 transition-colors duration-300"
          >
            <Icon icon="mdi:close" className="text-2xl text-gray-600" />
          </button>
        </div>
        <nav className="p-4">
          <DocNavigation />
        </nav>
      </div>
    </>
  );
};

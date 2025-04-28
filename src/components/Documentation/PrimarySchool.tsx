"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import tline from "/public/images/svgs/T-Line.svg";
import t_half_line from "/public/images/svgs/T-half_line.svg";
import straight_line from "/public/images/svgs/straight_group.svg";
import small_straight_line from "/public/images/svgs/smal_straight_line.svg";
import primaryschool from "/public/images/documentation/PrimarySchool.png";

export const PackageStructure = () => {
  const subjects = [
    {
      icon: "solar:book-bold",
      title: "Language Arts",
      description: "English and French language development, reading comprehension, and creative writing"
    },
    {
      icon: "solar:calculator-bold",
      title: "Mathematics",
      description: "Foundational math skills, problem-solving, and critical thinking"
    },
    {
      icon: "solar:atom-bold",
      title: "Science",
      description: "Basic scientific concepts, experiments, and environmental awareness"
    },
    {
      icon: "solar:globe-bold",
      title: "Social Studies",
      description: "Cultural awareness, history, and community understanding"
    }
  ];

  const features = [
    {
      title: "Interactive Learning",
      description: "Engaging classroom activities and hands-on projects"
    },
    {
      title: "Character Development",
      description: "Focus on values, ethics, and social skills"
    },
    {
      title: "Technology Integration",
      description: "Basic computer skills and digital literacy"
    },
    {
      title: "Physical Education",
      description: "Sports, games, and health education"
    }
  ];

  return (
    <div
      id="structure"
      className="md:scroll-m-[100px] scroll-m-18"
    >
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">
          Primary School Program
        </h3>
        <p className="text-gray-600">
          Building strong foundations for lifelong learning
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h4 className="text-xl font-semibold text-gray-900 mb-6">Core Subjects</h4>
          <div className="space-y-6">
            {subjects.map((subject, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon icon={subject.icon} className="text-2xl text-amber-600" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-1">{subject.title}</h5>
                  <p className="text-gray-600">{subject.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h4 className="text-xl font-semibold text-gray-900 mb-6">Program Features</h4>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon icon="solar:check-circle-bold" className="text-2xl text-amber-600" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h5>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-amber-50 rounded-2xl p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
            <Icon icon="solar:star-bold" className="text-3xl text-amber-600" />
          </div>
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Learning Outcomes</h4>
            <p className="text-gray-600">
              Our primary school program focuses on developing essential academic skills while fostering creativity, 
              critical thinking, and social-emotional growth. Students graduate with a strong foundation in core subjects 
              and the confidence to succeed in middle school.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

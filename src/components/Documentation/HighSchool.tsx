"use client";
import { Icon } from "@iconify/react/dist/iconify.js";

export const HighSchool = () => {
  const programs = [
    {
      icon: "solar:book-bold",
      title: "College Preparatory",
      description: "Advanced placement courses and rigorous academic curriculum"
    },
    {
      icon: "solar:atom-bold",
      title: "STEM Program",
      description: "Advanced science, technology, engineering, and mathematics courses"
    },
    {
      icon: "solar:globe-bold",
      title: "International Baccalaureate",
      description: "Global perspective and international education standards"
    },
    {
      icon: "solar:pen-bold",
      title: "Arts & Humanities",
      description: "Comprehensive arts, literature, and social sciences programs"
    }
  ];

  const support = [
    {
      icon: "solar:medal-ribbon-star-bold",
      title: "College Counseling",
      description: "Personalized guidance for college applications and career planning"
    },
    {
      icon: "solar:users-group-rounded-bold",
      title: "Leadership Development",
      description: "Opportunities for student government and community leadership"
    },
    {
      icon: "solar:laptop-bold",
      title: "Technology Integration",
      description: "Advanced computer science and digital media courses"
    },
    {
      icon: "solar:chart-2-bold",
      title: "Career Exploration",
      description: "Internship programs and career-focused electives"
    }
  ];

  return (
    <div
      id="configuration"
      className="md:scroll-m-[100px] scroll-m-18"
    >
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">
          High School Program
        </h3>
        <p className="text-gray-600">
          Preparing students for university success and future careers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h4 className="text-xl font-semibold text-gray-900 mb-6">Academic Programs</h4>
          <div className="space-y-6">
            {programs.map((program, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon icon={program.icon} className="text-2xl text-amber-600" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-1">{program.title}</h5>
                  <p className="text-gray-600">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h4 className="text-xl font-semibold text-gray-900 mb-6">Student Support</h4>
          <div className="space-y-6">
            {support.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon icon={item.icon} className="text-2xl text-amber-600" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h5>
                  <p className="text-gray-600">{item.description}</p>
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
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Program Excellence</h4>
            <p className="text-gray-600">
              Our high school program is designed to prepare students for success in higher education and beyond. 
              With a focus on academic excellence, personal growth, and career readiness, we provide a comprehensive 
              education that equips students with the skills and knowledge they need for the future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

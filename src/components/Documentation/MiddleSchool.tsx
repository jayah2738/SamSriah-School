"use client";
import { Icon } from "@iconify/react/dist/iconify.js";

export const QuickStart = () => {
  const curriculum = [
    {
      icon: "solar:book-bold",
      title: "Advanced Academics",
      description: "Rigorous curriculum in core subjects with emphasis on critical thinking"
    },
    {
      icon: "solar:atom-bold",
      title: "STEM Focus",
      description: "Hands-on science, technology, engineering, and mathematics projects"
    },
    {
      icon: "solar:globe-bold",
      title: "Global Studies",
      description: "World cultures, geography, and international perspectives"
    },
    {
      icon: "solar:pen-bold",
      title: "Language Arts",
      description: "Advanced reading, writing, and communication skills"
    }
  ];

  const activities = [
    {
      icon: "solar:medal-ribbon-star-bold",
      title: "Extracurricular Programs",
      description: "Sports, arts, music, and leadership opportunities"
    },
    {
      icon: "solar:users-group-rounded-bold",
      title: "Social Development",
      description: "Team-building activities and community service projects"
    },
    {
      icon: "solar:laptop-bold",
      title: "Technology Integration",
      description: "Digital literacy and computer science fundamentals"
    },
    {
      icon: "solar:chart-2-bold",
      title: "Career Exploration",
      description: "Introduction to various career paths and skill development"
    }
  ];

  return (
    <div
      id="start"
      className="md:scroll-m-[100px] scroll-m-18"
    >
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">
          Middle School Program
        </h3>
        <p className="text-gray-600">
          Preparing students for academic success and personal growth {""}  from <span className="font-bold text-amber-500">grade 6 </span> to <span className="font-bold text-amber-500">grade 9 </span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h4 className="text-xl font-semibold text-gray-900 mb-6">Academic Curriculum</h4>
          <div className="space-y-6">
            {curriculum.map((item, index) => (
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

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h4 className="text-xl font-semibold text-gray-900 mb-6">Student Activities</h4>
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon icon={activity.icon} className="text-2xl text-amber-600" />
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-gray-900 mb-1">{activity.title}</h5>
                  <p className="text-gray-600">{activity.description}</p>
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
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Program Highlights</h4>
            <p className="text-gray-600">
              Our middle school program bridges the gap between elementary and high school, 
              providing a challenging academic environment while supporting students' social 
              and emotional development. We prepare students for the rigors of high school 
              while helping them discover their passions and talents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

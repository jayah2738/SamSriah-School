"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";

export const DocNavigation = () => {
  const [navItem, setNavItem] = useState("pre-school");
  const pathname = usePathname();

  const DocsNav = [
    {
      name: "PreSchool",
      href: "/documentation#version",
      icon: "solar:school-bold",
    },
    {
      name: "Primary School",
      href: "/documentation#structure",
      icon: "solar:book-bold",
    },
    {
      name: "Middle School",
      href: "/documentation#start",
      icon: "solar:atom-bold",
    },
    {
      name: "High School",
      href: "/documentation#configuration",
      icon: "solar:graduation-cap-bold",
    },
  ];

  return (
    <div className="hidden lg:block fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 p-6 overflow-y-auto">
      <div className="h-full flex flex-col justify-center">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-2">School Programs</h2>
          <p className="text-gray-600">Explore our educational programs</p>
        </div>
        <nav className="space-y-2">
          {DocsNav.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setNavItem(item.name.toLowerCase())}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl ${
                navItem === item.name.toLowerCase()
                  ? "bg-amber-50 text-amber-600 shadow-sm"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <Icon
                icon={item.icon}
                className={`text-xl ${
                  navItem === item.name.toLowerCase() 
                    ? "text-amber-600 scale-110" 
                    : "text-gray-400"
                }`}
              />
              <span className="font-medium">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

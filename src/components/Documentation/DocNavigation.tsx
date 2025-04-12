"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const DocNavigation = () => {
  const [navItem, setNavItem] = useState("version");

  function getNavItem(item: string) {
    setNavItem(item);
  }

  useEffect(() => {
    console.log(navItem);
  }, [navItem]);

  const DocsNav = [
  
    {
      id: 1,
      navItem: "PreSchool",
      hash: "version",
    },
    {
      id: 2,
      navItem: "Primary School",
      hash: "structure",
    },
    {
      id: 3,
      navItem: "Middle School",
      hash: "start",
    },
    {
      id: 4,
      navItem: "High School",
      hash: "configuration",
    }
  ];

  return (
    <div className="flex flex-col gap-0.5 mt-4 items-start fixed pe-4">
      {DocsNav.map((item) => {
        return (
          <Link
            key={item.id}
            href={`#${item.hash}`}
            onClick={() => getNavItem(item.hash)}
            className={`py-2.5 hover:bg-amber-500 hover:text-white dark:hover:text-white xl:min-w-60 lg:min-w-52 min-w-full px-4 rounded-lg text-base font-medium  ${item.hash === navItem
              ? "bg-amber-500 text-white"
              : "text-black/60"
              }`}
          >
            {item.navItem}
          </Link>
        );
      })}
    </div>
  );
};

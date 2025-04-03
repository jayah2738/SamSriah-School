import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import tline from "/public/images/svgs/T-Line.svg";
import t_half_line from "/public/images/svgs/T-half_line.svg";
import straight_line from "/public/images/svgs/straight_group.svg";
import small_straight_line from "/public/images/svgs/smal_straight_line.svg";

export const PackageStructure = () => {
  const Counts = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  return (
    <div id="structure" className="md:scroll-m-[130px] scroll-m-28">
      <h3 className="text-2xl font-semibold mt-8 text-green-700">
        Primary School
      </h3>
      <div className="rounded-md p-6 pt-3 border border-dark_border border-opacity-60 mt-6">
        
      </div>
        
    </div>
  );
};

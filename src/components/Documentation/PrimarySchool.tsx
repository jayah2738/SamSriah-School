import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import tline from "/public/images/svgs/T-Line.svg";
import t_half_line from "/public/images/svgs/T-half_line.svg";
import straight_line from "/public/images/svgs/straight_group.svg";
import small_straight_line from "/public/images/svgs/smal_straight_line.svg";
import primaryschool from "/public/images/documentation/PrimarySchool.png";

export const PackageStructure = () => {
 
  return (
    <div id="structure" className="md:scroll-m-[130px] scroll-m-28">
      <h3 className="text-2xl font-semibold mt-8 text-green-500">
        Primary School
      </h3>
      <div className="rounded-md p-6 pt-3 border border-dark_border border-opacity-60 mt-6">
        <div className="mb-6" >
          <Image src={primaryschool} alt="" width={1000} height={500} />
        </div>
        <span className='text-amber-500 font-bold' >
        🧒 Primary School (Grades 1–5)
        <span className="text-gray-500 font-normal">
        Our Primary School provides a nurturing and joyful environment where children build 
        strong academic foundations and a lifelong love for learning. With caring teachers 
        and interactive lessons, we focus on core skills like reading, writing, math, and social
         development. Through play, creativity, and exploration, students grow in confidence and curiosity every day.
        </span>
        </span>
        
       
      </div>
        
    </div>
  );
};

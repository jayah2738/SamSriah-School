import React from 'react'
import highschool from "/public/images/documentation/HighSchool.png";
import Image from "next/image";
export const HighSchool = () => {
  return (
    <>
      <div className="pb-10 md:scroll-m-[180px] scroll-m-28" id="configuration">
        <h3 className="text-2xl font-semibold mt-4 text-green-500" >High School</h3>
        <div className="mb-6" >
          <Image src={highschool} alt="" width={1000} height={500} />
        </div>
         <span className='text-amber-500 font-bold' >
         🎓 High School (Grades 10–12)
        </span>
        
Our High School empowers students to thrive academically, socially, and personally. With a strong college-preparatory program, advanced courses, and personalized guidance, students are prepared for universities and future careers. We emphasize responsibility, innovation, and character—ensuring each graduate is ready to lead and succeed in the world ahead.
      </div>
    </>
  )
}
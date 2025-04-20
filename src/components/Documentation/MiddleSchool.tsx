import middleschool from "/public/images/documentation/MiddleSchool.png";
import Image from "next/image";
export const QuickStart = () => {
  return (
    <div className="pb-10 md:scroll-m-[180px] scroll-m-28" id="start">
      <h3 className=" text-green-500 text-2xl font-semibold mt-8">
        Middle School
      </h3>
      <div className="p-6 rounded-md border mt-6 border-dark_border border-opacity-60">
        <div className="mb-6">
          <Image src={middleschool} alt="" width={1000} height={500} />
        </div>
        <span className="text-amber-500 font-bold">
          👦👧 Middle School (Grades 6–9)
          <span className="text-gray-500 font-normal">
            Our Middle School bridges the journey from childhood to adolescence
            with a well-rounded curriculum that encourages critical thinking,
            independence, and collaboration. Students explore deeper concepts in
            science, math, literature, and the arts while building essential
            life skills. Leadership programs, clubs, and hands-on projects
            prepare them for high school and beyond.
          </span>
        </span>
      </div>
    </div>
  );
};

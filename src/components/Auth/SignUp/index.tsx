"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialSignUp from "../SocialSignUp";
import Logo from "@/components/Layout/Header/Logo";
import { useState } from "react";
import Loader from "@/components/Common/Loader";
const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setLoading(true);
    const data = new FormData(e.currentTarget);
    const value = Object.fromEntries(data.entries());
    const finalData = { ...value };

    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully registered");
        setLoading(false);
        router.push("/signin");
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };

  return (
    <>
      {/* <div className="mb-2 text-center mx-auto inline-block max-w-[200px]">
        <Logo />
      </div> */}

      {/* <SocialSignUp /> */}

      {/* <span className="z-1 relative my-4 block text-center before:content-[''] before:absolute before:h-px before:w-40% before:bg-black/60 before:left-0 before:top-3 after:content-[''] after:absolute after:h-px after:w-40% after:bg-black/60 after:top-3 after:right-0">
        <span className="relative z-10 inline-block px-3 text-base text-black">
          OR
        </span>
      </span> */}

      <form onSubmit={handleSubmit} className="w-full flex">
        <div className="">
          <div className="mb-[20px] gap-x-4 gap-y-6">
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              id="fullName"
              required
              className="w-full rounded-full border border-black/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-amber-500 focus-visible:shadow-none text-black dark:focus:border-amber-500"
            />
          </div>

          <div className="mb-[20px] gap-x-4 gap-y-6">
            <input
              type="text"
              placeholder="Username"
              name="username"
              id="username"
              required
              className="w-full rounded-full border border-black/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-amber-500 focus-visible:shadow-none text-black dark:focus:border-amber-500"
            />
          </div>

          <div className="mb-[20px] gap-x-4 gap-y-6">
            <input
              type="text"
              placeholder="Grade"
              name="grade"
              id="grade"
              required
              className="w-full rounded-full border border-black/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-amber-500 focus-visible:shadow-none text-black dark:focus:border-amber-500"
            />
          </div>

          <div className="mb-[20px] gap-x-4 gap-y-6">
            <input
              type="date"
              placeholder="Birthday"
              name="birthday"
              id="birthday"
              title="Enter your birthday"
              required
              className="w-full rounded-full border border-black/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-amber-500 focus-visible:shadow-none text-black dark:focus:border-amber-500"
            />
          </div>
          <div className="mb-[20px] gap-x-4 gap-y-6">
            <input
              type="text"
              placeholder="Place of Birth"
              name="birthdayPlace"
              id="birthdayPlace"
              title="Enter your birthday"
              required
              className="w-full rounded-full border border-black/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-amber-500 focus-visible:shadow-none text-black dark:focus:border-amber-500"
            />
          </div>

          <div className="mb-[20px] gap-x-4 gap-y-6">
            <input
              type="text"
              placeholder="Gender"
              name="gender"
              id="gender"
              required
              className="w-full rounded-full border border-black/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-amber-500 focus-visible:shadow-none text-black dark:focus:border-amber-500"
            />
          </div>

          <div className="mb-[20px] gap-x-4 gap-y-6">
            <input
              type="text"
              placeholder="Father's Name"
              name="fatherName"
              id="fatherName"
              required
              className="w-full rounded-full border border-black/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-amber-500 focus-visible:shadow-none text-black dark:focus:border-amber-500"
            />
          </div>

          <div className="mb-[20px] gap-x-4 gap-y-6">
            <input
              type="text"
              placeholder="Occupation"
              name="FatherOccupation"
              id="FatherOccupation"
              required
              className="w-full rounded-full border border-black/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-amber-500 focus-visible:shadow-none text-black dark:focus:border-amber-500"
            />
          </div>          
        </div>

        <div className="px-5">
        <div className="mb-[20px] gap-x-4 gap-y-6">
            <input
              type="number"
              placeholder="Phone Number"
              name="fatherPhoneNumber"
              id="fatherPhoneNumber"
              required
              className="w-full rounded-full border border-black/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-amber-500 focus-visible:shadow-none text-black dark:focus:border-amber-500"
            />
          </div>
        <div className="mb-[20px] gap-x-4 gap-y-6">
            <input
              type="email"
              placeholder="Email"
              name="fatherEmail"
              id="fatherEmail"
              required
              className="w-full rounded-full border border-black/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-amber-500 focus-visible:shadow-none text-black dark:focus:border-amber-500"
            />
          </div>
          <div className="mb-[20px] gap-x-4 gap-y-6">
            <input
              type="text"
              placeholder="Mother's Name"
              name="motherName"
              id="motherName"
              required
              className="w-full rounded-full border border-black/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-amber-500 focus-visible:shadow-none text-black dark:focus:border-amber-500"
            />
          </div>

          <div className="mb-[20px] gap-x-4 gap-y-6">
            <input
              type="text"
              placeholder="Occupation"
              name="motherOccupation"
              id="motherOccupation"
              required
              className="w-full rounded-full border border-black/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-amber-500 focus-visible:shadow-none text-black dark:focus:border-amber-500"
            />
          </div>

          <div className="mb-[20px] gap-x-4 gap-y-6">
            <input
              type="number"
              placeholder="Phone Number"
              name="motherPhoneNumber"
              id="motherPhoneNumber"
              required
              className="w-full rounded-full border border-black/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-amber-500 focus-visible:shadow-none text-black dark:focus:border-amber-500"
            />
          </div>

          <div className="mb-[20px] gap-x-4 gap-y-6">
            <input
              type="email"
              placeholder="Email"
              name="MotherEmail"
              id="MotherEmail"
              required
              className="w-full rounded-full border border-black/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-amber-500 focus-visible:shadow-none text-black dark:focus:border-amber-500"
            />
          </div>

          <div className="mb-[20px] gap-x-4 gap-y-6">
            <input
              type="text"
              placeholder="Address"
              name="address"
              id="address"
              required
              className="w-full rounded-full border border-black/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition placeholder:text-grey focus:border-amber-500 focus-visible:shadow-none text-black dark:focus:border-amber-500"
            />
          </div>

          <div className="mb-2 flex justify-end">
            <button
              type="submit"
              className="flex w-48 items-center shadow-lg shadow-black/70 hover:shadow-amber-500 text-18 font-medium justify-center rounded-full bg-amber-500 py-3 text-white transition duration-300 ease-in-out hover:bg-transparent hover:text-amber-500 border-amber-500 border "
            >
              Book a Place {loading && <Loader />}
            </button>
          </div>
        </div>
      </form>

      {/* <p className="text-body-secondary mb-4 text-black text-base">
        By creating an account you have to agree our{" "}
        <a href="/#" className="text-green-500 hover:underline">
          Privacy
        </a>{" "}
        and{" "}
        <a href="/#" className="text-green-500 hover:underline">
          Policy
        </a>
      </p> */}

      {/* <p className="text-body-secondary text-black text-base">
        Already have an account?
        <Link href="/" className="pl-2 text-rose-500 hover:underline">
          Sign In
        </Link>
      </p> */}
    </>
  );
};

export default SignUp;

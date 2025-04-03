"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import SocialSignIn from "../SocialSignIn";
import Logo from "@/components/Layout/Header/Logo";
import Loader from "@/components/Common/Loader";

const Signin = () => {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    username: "",
    grade: "",
    password: "",
    checkboxToggle: false,
  });
  const loginUser = () => {
    const username = loginData.username;
    const grade = loginData.grade;
    const password = loginData.password;
  
    if (username === "ok" && grade === "ok" && password === "ok") {
      try {
        router.push("/documentation");
        // window.alert("Login successful");
      } catch (error) {
        console.error("Navigation error:", error);
      }
    } else {
      window.alert("Login failed");
    }
  };

  const [loading, setLoading] = useState(false);

  // const loginUser = (e: any) => {
  //   e.preventDefault();

  //   setLoading(true);
  //   signIn("credentials", { ...loginData, redirect: false })
  //     .then((callback) => {
  //       if (callback?.error) {
  //         toast.error(callback?.error);
  //         console.log(callback?.error);
  //         setLoading(false);
  //         return;
  //       }

  //       if (callback?.ok && !callback?.error) {
  //         toast.success("Login successful");
  //         setLoading(false);
  //         document.location.href = "/users";
  //       }
  //     })
  //     .catch((err) => {
  //       setLoading(false);
  //       console.log(err.message);
  //       toast.error(err.message);
  //     });
  // };

  return (
    <>
      <div className=" text-center mx-auto inline-block max-w-[200px]">
        <Logo />
      </div>

      <SocialSignIn />

      <span className="z-1 relative my-4 block text-center before:content-[''] before:absolute before:h-px before:w-40% before:bg-black/15 before:left-0 before:top-3 after:content-[''] after:absolute after:h-px after:w-40% after:bg-black/15 after:top-3 after:right-0">
        <span className="text-body-secondary relative z-10 inline-block px-3 text-base text-black">
          OR
        </span>
      </span>

      <form onSubmit={loginUser}>
        <div className="mb-[22px]">
          <input
            type="text"
            placeholder="Enter your Username"
            required
            onChange={(e) =>
              setLoginData({ ...loginData, username: e.target.value })
            }
            className="w-full rounded-full border border-black/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition duration-900 placeholder:text-grey focus:border-amber-500 focus-visible:shadow-none text-black dark:focus:border-amber-500"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="text"
            placeholder="Enter your Grade"
            required
            onChange={(e) =>
              setLoginData({ ...loginData, grade: e.target.value })
            }
            className="w-full rounded-full border border-black/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition duration-900 placeholder:text-grey focus:border-amber-500 focus-visible:shadow-none text-black dark:focus:border-amber-500"
          />
        </div>
        <div className="mb-[22px]">
          <input
            type="password"
            placeholder="Enter your Password"
            required
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            className="w-full rounded-full border border-black/20 border-solid bg-transparent px-5 py-3 text-base text-dark outline-none transition duration-900 placeholder:text-grey focus:border-amber-500 focus-visible:shadow-none text-black dark:focus:border-amber-500"
          />
        </div>
        <div className="mb-9">
          <button
            onClick={loginUser}
            type="submit"
            className="bg-amber-500 w-64 transition duration-900 easy-in-out py-3 rounded-full text-18 font-medium hover:border-amber-500 hover:text-black hover:bg-amber-100 shadow-md shadow-rose-500"
          >
            Sign In {loading && <Loader />}
          </button>
        </div>
      </form>

      <Link
        href="/forgot-password"
        className="mb-2 inline-block text-base text-dark hover:text-red-500 text-gray-400 dark:hover:text-primary"
      >
        Forgot Password?
      </Link>
      <p className="text-black text-black text-base">
        Not a member yet?{" "}
        <Link href="/SocialSignUp" className="text-green-500 hover:underline">
          Sign Up
        </Link>
      </p>
    </>
  );
};

export default Signin;

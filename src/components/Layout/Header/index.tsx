"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import Signin from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const signInRef = useRef<HTMLDivElement>(null);
  const signUpRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setSticky(window.scrollY >= 80);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      signInRef.current &&
      !signInRef.current.contains(event.target as Node)
    ) {
      setIsSignInOpen(false);
    }
    if (
      signUpRef.current &&
      !signUpRef.current.contains(event.target as Node)
    ) {
      setIsSignUpOpen(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen, isSignInOpen, isSignUpOpen]);

  useEffect(() => {
    if (isSignInOpen || isSignUpOpen || navbarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isSignInOpen, isSignUpOpen, navbarOpen]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        bounce: 0.4,
        duration: .1,
        delay: 0.2,
        ease:[0.25,0.25,0.25,0.1]
      }}
      className={`fixed top-0 z-40 w-full flex justify-center pb-3 transition-all duration-300 bg-white ${
        sticky ? " shadow-lg py-3" : "shadow-none py-3"
      }`}
    >
      <div className="lg:py-0 py-2">
        <div className="container mx-auto lg:max-w-screen-xl xl:max-w-screen-2xl md:max-w-screen-md flex items-center justify-between">
          <Logo />
          <nav className="hidden lg:flex flex-grow items-center gap-6 ml-7 mr-7">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className="flex gap-4 ml-4 ">
            {/* <Link
              href="#"
              className="hidden lg:block bg-rose-400 text-white hover:bg-green-500 px-8 py-3 rounded-full text-lg font-medium"
              onClick={() => {
                setIsSignInOpen(true);
              }}
            >
              SignIn
            </Link> */}
            {isSignInOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-black/90 flex items-center justify-center z-50">
                <div
                  ref={signInRef}
                  className="relative mx-auto w-full max-w-md overflow-hidden rounded-lg px-8 pt-10 pb-8 text-center bg-white"
                >
                  <button
                    onClick={() => setIsSignInOpen(false)}
                    className="absolute top-0 right-0 mr-8 mt-8 dark:invert"
                    aria-label="Close Sign In Modal"
                  >
                    <Icon
                      icon="tabler:currency-xrp"
                      className="text-black hover:text-red-700 text-30 inline-block me-2"
                    />
                  </button>
                  <Signin />
                </div>
              </div>
            )}
            {/* <Link
              href="#"
              className="hidden lg:block bg-pink-600 hover:bg-green-500 text-white px-8 py-3 rounded-full text-lg font-medium"
              onClick={() => {
                setIsSignUpOpen(true);
              }}
            >
              SignUp
            </Link> */}
            {isSignUpOpen && (
              <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center z-50">
                <div
                  ref={signUpRef}
                  className="relative w-auto mx-auto rounded-lg bg-white backdrop-blur-md p-8 text-center"
                >
                  <button
                    onClick={() => setIsSignUpOpen(false)}
                    className="absolute top-0 right-0 mr-2 mt-2 dark:invert"
                    aria-label="Close Sign Up Modal"
                  >
                    <Icon
                      icon="tabler:currency-xrp"
                      className="text-black hover:text-red-700 text-30 inline-block "
                    />
                  </button>
                  <SignUp />
                </div>
              </div>
            )}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-black"></span>
              <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
              <span className="block w-6 h-0.5 bg-black mt-1.5"></span>
            </button>
          </div>
        </div>
        {navbarOpen && (
          <div className="fixed top-0 left-0 w-full h-[800px] bg-black bg-opacity-70 z-40" />
        )}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 border-2 border-red h-full w-full bg-white shadow-lg transform transition-transform duration-300 max-w-xs ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex items-center justify-between p-4">
            <h1 className=" mr-8">
              <Logo />
            </h1>

            {/*  */}

            {/* <button
              onClick={() => setNavbarOpen(false)}
              className="bg-[url('/images/closed.svg')] bg-no-repeat bg-contain w-5 h-5 absolute top-0 right-0 mr-4 mt-6 bg-red-500 px-3 py-3 rounded-full"
              aria-label="Close menu Modal"
            ></button> */}
          </div>
          <nav className="flex flex-col items-start p-4 text-gray-500 bg-white">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
            <div className="mt-4 flex text-white flex-col space-y-4 w-full">
              {/* <Link
                href="#"
                className="bg-pink-700  py-2 rounded-full text-center hover:bg-green-500"
                onClick={() => {
                  setIsSignInOpen(true);
                  setNavbarOpen(false);
                }}
              >
                Sign In
              </Link>
              <Link
                href="#"
                className="bg-rose-500 text-white  py-2 rounded-full text-center hover:bg-green-500"
                onClick={() => {
                  setIsSignUpOpen(true);
                  setNavbarOpen(false);
                }}
              >
                Sign Up
              </Link> */}
            </div>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;

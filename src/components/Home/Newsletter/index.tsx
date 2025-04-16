"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/components/variants";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    object: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setForm({ name: "", object: "", email: "", phone: "", message: "" });


    // Basic Validation
    if (
      !form.name ||
      !form.object ||
      !form.email ||
      !form.phone ||
      !form.message
    ) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      console.log("Response data:", data); 

      if (!res.ok) throw new Error(data.error || "Failed to send message");
      setSuccess("Message sent successfully!");
      setForm({ name: "", object: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <motion.section
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className=" sm:p-20 z-[-50] "
      style={{
        backgroundImage: "url('/images/newsletter/contactbg.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="lg:px-8 mx-auto">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <motion.div
          variants={fadeIn("right", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Contact Us
          </h2>
        </motion.div>
        <motion.form
          variants={fadeIn("right", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          action="#"
          method="POST"
          onSubmit={handleSubmit}
          className="mx-auto bg-white sm:m-0  rounded-[35px]  p-6 max-w-xl sm:mt-10"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="full-name"
                className="block text-sm/6 font-semibold ml-6 text-gray-900"
              >
                Full name
              </label>
              <div className="">
                <input
                  type="text"
                  name="name"
                  id="full-name"
                  placeholder="Enter your full name"
                  autoComplete="given-name"
                  onChange={handleChange}
                  className="block w-full border-2 rounded-full bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="object"
                className="block text-sm/6 font-semibold ml-6 text-gray-900"
              >
                object
              </label>
              <div className="">
                <input
                  type="text"
                  name="object"
                  id="object"
                  placeholder="object"
                  autoComplete="family-name"
                  onChange={handleChange}
                  className="block w-full border-2 rounded-full bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold ml-6 text-gray-900"
              >
                Email
              </label>
              <div className="">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="username@gmail.com"
                  autoComplete="email"
                  onChange={handleChange}
                  className="block w-full border-2 rounded-full bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-500"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm/6 font-semibold ml-6 text-gray-900"
              >
                Phone number
              </label>
              <div className="">
                <div className="flex border-2 rounded-full bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-amber-500">
                  <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country"
                      aria-label="Country"
                      className="col-start-1  row-start-1 w-full appearance-none border-amber-500 border-2 rounded-full py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-500 sm:text-sm/6 bg-white"
                    >
                      <option>US</option>
                      <option>CA</option>
                      <option>EU</option>
                      <option>CH</option>
                      <option>IN</option>
                      <option>MG</option>
                    </select>
                    <svg
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="number"
                    name="phone"
                    id="phone-number"
                    onChange={handleChange}
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6 rounded-full bg-white"
                    placeholder="123-456-7890"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Message
              </label>
              <div className="">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  placeholder="Write your message here..."
                  defaultValue={""}
                  onChange={handleChange}
                  className="block w-full border-2 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-amber-500"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <button
              type="submit"
              className="block w-[300px] rounded-full bg-amber-500 shadow-lg shadow-amber-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:text-black hover:bg-amber-100 border-2 border-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Let's talk
            </button>
          </div>
          {error && <p className="text-red-600 text-center mt-2">{error}</p>}
          {success && (
            <p className="text-green-600 text-center mt-2">{success}</p>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
};
export default Contact;

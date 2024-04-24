"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import profilePicture from "@/public/318786015_3445346489026605_2369336879307307385_n.jpg";
import { skillsData } from "@/lib/data";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  //Skills mapping
  const indicesToExclude = [0, 5, 9, 10, 11];
  const filteredSkills = skillsData.filter(
    (skill, index) => !indicesToExclude.includes(index)
  );

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={profilePicture}
              alt="Mak pic"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-25 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-2xl sm:text-3xl">Junaid Sajid Khan</div>
        <div className="text-lg sm:text-xl">Software Engineer</div>
        <div className="text-sm sm:text-lg text-zinc-600">
          Open for Remote Work
        </div>
        <motion.div className="flex flex-row sm:flex-row items-center justify-center gap-2 px-4 mt-8 text-lg font-medium">
          <Link
            href="https://github.com/jxkhan"
            target="_blank"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white bg-zinc-800 shadow-md transition duration-150 ease-in-out hover:scale-[1.15]  active:scale-105 cursor-pointer focus:ring-0 active:shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>

          <Link
            href="https://www.linkedin.com/in/junaid-sajid-khan"
            target="_blank"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white bg-blue-700 shadow-md transition duration-150 ease-in-out hover:scale-[1.15]  active:scale-105 cursor-pointer focus:ring-0 active:shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </Link>
          {/* <Link
            href="https://www.fiverr.com/jxkhan"
            target="_blank"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="mb-2 inline-block rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white bg-green-700 shadow-md transition duration-150 ease-in-out hover:scale-[1.15]  active:scale-105 cursor-pointer focus:ring-0 active:shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <g fill="currentColor">
                <path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z" />
                <circle cx="14.375" cy="1.875" r="1.875" />
              </g>
            </svg>
          </Link> */}
        </motion.div>
        <motion.div className="flex flex-wrap justify-center items-center gap-8 px-4 mt-4 text-lg font-medium">
          {filteredSkills.map((skill, index) => (
            <Image
              key={index}
              src={skill.icon}
              width={32}
              height={32}
              alt="javascipt-icon"
            ></Image>
          ))}
        </motion.div>

        {/* <motion.div className="flex flex-wrap justify-center">
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-white p-4 flex items-center gap-2 rounded-full  borderBlack dark:bg-white/10 dark:text-white/60">
              <BsLinkedin />
            </span>
          </div>

          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-white p-4 flex items-center gap-2 text-[1.35rem] rounded-full borderBlack dark:bg-white/10 dark:text-white/60">
              <FaGithubSquare />
            </span>
          </div>
        </motion.div> */}
        {/* <span className="font-bold">junaid sajid khan</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">mobile apps</span>. My focus is{" "}
        <span className="">Android and React Native</span>. */}
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-md font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-zinc-800 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 hover:bg-gray-950 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me
        </Link>

        <Link
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 transition cursor-pointer border-2 border-zinc-600 dark:bg-white/10"
          href="junaid_sajid_khan.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </Link>
      </motion.div>
    </section>
  );
}

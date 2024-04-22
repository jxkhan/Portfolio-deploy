"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div className="p-4 mb-3 bg-white border text-left border-zinc-400 rounded-xl">
        <ul className="list-disc list-inside">
          <li> Software Engineer</li>
          <li>Computer science degree</li>
          <li>Determined and energetic problem solver</li>
          <li>
            Core stack:{" "}
            <span className="font-medium">
               Node.js, Express.js, MongoDB
            </span>
          </li>
          {/* <li>
            Familiar with <span className="font-medium">TypeScript</span> and{" "}
            <span className="font-medium">Augmented Reality</span>
          </li> */}
          <li>Committed to personal and professional growth</li>
          <li>Seeking full-time software developer position</li>
        </ul>
        {/* <span className="font-medium"> 2 years</span> */}
        <p className="mt-4">
          <span className="italic ">When not coding, enjoys:</span>
        </p>
        <ul className="list-disc list-inside">
          <li>Playing video games</li>
          <li>Watching movies</li>
          <li>Traveling</li>
          <li>Cooking</li>
        </ul>
      </div>

      <div></div>
    </motion.section>
  );
}

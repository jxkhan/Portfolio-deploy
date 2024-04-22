// "use client";

// import React from "react";
// import SectionHeading from "./section-heading";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
// import { motion } from "framer-motion";
// import { experiencesData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";
// import { useTheme } from "@/context/theme-context";
// import Link from "next/link";

// interface StringObject {
//   [key: string]: string[];
// }

// interface State {
//   objects: StringObject[];
// }

// export default function Experience() {
//   const { ref } = useSectionInView("Experience");
//   const { theme } = useTheme();

//   return (
//     <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
//       <SectionHeading>My experience</SectionHeading>
//       <VerticalTimeline lineColor="">
//         {experiencesData.filter(Boolean).map((item, index) => (
//           <React.Fragment key={index}>
//             <VerticalTimelineElement
//               contentStyle={{
//                 background: "#ffffff",
//                 boxShadow: "none",
//                 border: "1px solid #c1c1c1",
//                 textAlign: "left",
//                 padding: "1.3rem 2rem",
//               }}
//               contentArrowStyle={{
//                 borderRight:
//                   theme === "light"
//                     ? "0.4rem solid #9ca3af"
//                     : "0.4rem solid rgba(255, 255, 255, 0.5)",
//               }}
//               date={item.date}
//               icon={item.icon}
//               iconStyle={{
//                 background: "#ffffff",
//                 fontSize: "1.5rem",
//               }}
//             >
//               <div className="font-semibold capitalize">{item.title}</div>
//               <div className="font-normal !mt-0">{item.location}</div>

//               <div className="!mt-1 !font-normal text-zinc-800 dark:text-white/75">
//                 {item.description.map((desc, descIndex) => (
//                   <li key={descIndex}>{desc}</li>
//                 ))}
//               </div>
//               <motion.div
//                 className="flex flex-col sm:flex-row items-start justify-start mt-4 text-lg font-medium"
//                 initial={{ opacity: 0, y: 100 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   delay: 0.1,
//                 }}
//               >
//                 {item.goTo?.link && item.goTo?.name ? (
//                   <Link
//                     className="group text-sm bg-white px-4 py-2 flex items-center gap-2 rounded-full outline-none hover:scale-110 transition cursor-pointer border-2 border-zinc-600 dark:bg-white/10"
//                     href={item.goTo?.link}
//                     target="_blank"
//                   >
//                     {item.goTo?.name}
//                   </Link>
//                 ) : (
//                   ""
//                 )}
//               </motion.div>
//             </VerticalTimelineElement>
//           </React.Fragment>
//         ))}
//       </VerticalTimeline>
//     </section>
//   );
// }

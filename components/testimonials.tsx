// "use client";

// import React from "react";
// import Image from "next/image";
// import SectionHeading from "./section-heading";
// import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";
// import { testimonialsData } from "@/lib/data";
// import Link from "next/link";

// import prevArrow from "@/public/prevArrow.png";
// import nextArrow from "@/public/nextArrow.png";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const NextArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <Image
//       className={className}
//       onClick={onClick}
//       src={prevArrow}
//       width={32}
//       height={32}
//       alt="javascipt-icon"
//     ></Image>
//   );
// };

// const PrevArrow = (props) => {
//   const { className, style, onClick } = props;
//   return (
//     <Image
//       className={className}
//       onClick={onClick}
//       src={nextArrow}
//       width={32}
//       height={32}
//       alt="javascipt-icon"
//     ></Image>
//   );
// };

// const settings = {
//   arrows: true,
//   nextArrow: <PrevArrow />,
//   prevArrow: <NextArrow />,
//   autoplay: true /* this is the new line */,
//   autoplaySpeed: 3000,
//   adaptiveHeight: true,
//   infinite: true,
//   speed: 1500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
// };

// // // // export default function Testimonials() {
// // // //   const { ref } = useSectionInView("Testimonials");

// // // //   return (
// // // //     <motion.section
// // // //       ref={ref}
// // // //       className="mb-16 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
// // // //       initial={{ opacity: 0, y: 100 }}
// // // //       animate={{ opacity: 1, y: 0 }}
// // // //       transition={{ delay: 0.175 }}
// // // //       id="testimonials"
// // // //     >
// // // //       <SectionHeading>What People Say</SectionHeading>
// // // //       <Slider
// // // //         className="px-4 py-6 max-w-xs mb-2 sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-2xl mx-auto bg-white border border-zinc-400 rounded-xl text-gray-800"
// // // //         {...settings}
// // // //       >
// // // //         {testimonialsData.map((item, index) => (
// // // //           <motion.div key={index} className="">
// // // //             <div className="text-2xl font-semibold">{item.name}</div>
// // // //             <motion.div className="flex text-center justify-center mt-4 space-x-2">
// // // //               <Image
// // // //                 src={item.flag}
// // // //                 className="w-8 h-8 align-middle"
// // // //                 width="0"
// // // //                 height="0"
// // // //                 sizes="10vw"
// // // //                 // width={28}
// // // //                 // height={24}
// // // //                 alt="icon"
// // // //               ></Image>

// // // //               <div>{item.country}</div>
// // // //             </motion.div>
// // // //             <div className="text-lg mt-4 align-middle">{item.review}</div>
// // // //           </motion.div>
// // //         ))}
// //       </Slider>
// //       <motion.div
// //         className="flex flex-col sm:flex-row items-center justify-center mt-4 text-lg font-medium"
// //         initial={{ opacity: 0, y: 100 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{
// //           delay: 0.1,
// //         }}
// //       >
// //         <Link
// //           className="group text-sm bg-white px-4 py-2 flex items-center gap-2 rounded-full outline-none hover:scale-110 transition cursor-pointer border-2 border-zinc-600 dark:bg-white/10"
// //           href="https://www.fiverr.com/jxkhan"
// //           target="_blank"
// //         >
// //           View More
// //         </Link>
// //       </motion.div>
// //     </motion.section>
// //   );
// //   {
// //     /* <div className="px-4 py-6 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto bg-gray-100 text-gray-800">
// //         <h1 className="text-2xl font-semibold">Your Title</h1>
// //         <p className="text-lg mt-4">
// //           Your description goes here. It can be a longer piece of text, and it
// //           will wrap to a new line on smaller screens.
// //         </p>
// //       </div> */
// //   }
// // }

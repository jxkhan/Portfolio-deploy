import React from "react";

import { MdWorkOutline } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";

//Projects
import ar_nav from "@/public/projects/ar_nav.jpg";
import blog_api from "@/public/projects/blog_api.png";
import car_value from "@/public/projects/car_value.png";
import expense_tracker from "@/public/projects/expense_tracker.png";
import netflix_clone from "@/public/projects/netflix_clone.png";
import photofilters from "@/public/projects/photofilters.jpg";
import portfolio_website from "@/public/projects/portfolio_website.png";
import restaurant_finder from "@/public/projects/restaurant_finder.gif";
import blog_rn from "@/public/projects/blog-rn.gif";

//Skills Icons
import js from "@/public/icons/javascript.svg";
import android from "@/public/icons/android.svg";
import rn from "@/public/icons/react-native.svg";
import ar from "@/public/icons/ar.png";
import expressjs from "@/public/icons/express-js.svg";
import git from "@/public/icons/git.svg";
import mongodb from "@/public/icons/mongodb.svg";
import nestjs from "@/public/icons/nestjs.svg";
import nodejs from "@/public/icons/nodejs.svg";
import redux from "@/public/icons/redux.svg";
import tailwind from "@/public/icons/tailwindcss.svg";
import ts from "@/public/icons/typescript.svg";
import firebase from "@/public/icons/firebase.svg";

//Country flags
import saudia from "@/public/flags/sa.svg";
import usa from "@/public/flags/us.svg";
import belarus from "@/public/flags/by.svg";
import uk from "@/public/flags/gb.svg";
import pakistan from "@/public/flags/pk.svg";
import canada from "@/public/flags/ca.svg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  // {
  //   //name: "Experience",
  //   hash: "#experience",
  // },
  // {
  //  // name: "Projects",
  //   hash: "#projects",
  // },

  // {
  //   //name: "Testimonials",
  //   hash: "#testimonials",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skillsData = [
  // {
  //   name: "Android",
  //   icon: android,
  // },
  {
    name: "Javascript",
    icon: js,
  },
  // {
  //   name: "Typescript",
  //   icon: ts,
  // },
  // {
  //   name: "React Native",
  //   icon: rn,
  // },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "ExpressJS",
    icon: expressjs,
  },
  // {
  //   name: "NestJS",
  //   icon: nestjs,
  // },
  // {
  //   name: "Firebase",
  //   icon: firebase,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Tailwind",
  //   icon: tailwind,
  // },
  // {
  //   name: "Redux",
  //   icon: redux,
  // },
  {
    name: "Git",
    icon: git,
  },
  // {
  //   name: "Augmented Reality",
  //   icon: ar,
  // },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Science in Computer Science",
    location: "University of Management and Technology Lahore - Pakistan",
    description: [
      "Algorithms / Data Structures",
      "Databases",
      "Programming Languages",
      "Software Architecture",
      "Entrepreneurship",
      "Calculus",
      "Operating Systems",
    ],
    goTo: null,
    icon: React.createElement(LuGraduationCap),
    date: "2016 - 2020",
  },
  {
    title: "Software Developer",
    location: "Freelance, Fiverr",
    description: [
      "Successfully led the end-to-end development and deployment of the app called 'I Was Here' ensuring its availability on both Android and iOS platforms",
      "Built and implemented core modules and features of the app, focusing on image tracking, object placement, and seamless video playback using augmented reality.",
      "Maintained good communication with stakeholders to ensure everyone was on the same page and the project was successful.",
      "Created mobile applications that work on different devices and use exciting augmented reality technology such as Vuforia.",
    ],
    // description:
    //   "Worked as an Android and iOS developer, where I focused on the platforms and architecture of a suite of apps. I successfully delivered production-level projects to clients worldwide, consistently meeting deadlines. My approach involved using cross-platform technologies like Unity and React Native for project development. I also specialized in location and marker-based augmented reality, building applications that seamlessly integrated APIs such as Google AR Core, ARFoundation, Firebase, and Vuforia to enhance user experiences.",
    goTo: {
      name: "Profile",
      link: "https://www.fiverr.com/jxkhan",
    },
    icon: React.createElement(MdWorkOutline),
    date: "2021 - present",
  },
  {
    title: "Software Developer",
    location: "Fusioncorp Design - USA",
    description: [
      "As a freelancer working remotely, I took on projects that involved designing and developing Android apps with functionalities like GPS location services, data management using Firebase, and comprehensive account management, including tasks related to authentication and authorization.",
      "Leveraged powerful APIs like Google AR Core, ARFoundation, Firebase, and Vuforia to create robust and feature-rich applications.",
      "Successfully delivered high-quality projects to global clients, consistently meeting strict deadlines and maintaining regular communication throughout the development cycle.",
    ],
    goTo: {
      name: "Experience Letter",
      link: "https://www.dropbox.com/s/ymul9mlq7ee7npb/Fusioncorp_experience_letter.pdf?dl=0",
    },
    icon: React.createElement(MdWorkOutline),
    date: "January 2022 - January 2023",
  },
] as const;

export const projectsData = [
  {
    imageUrl: "",
    title: "Task Management",
    category: "web",
    tags: ["NestJS", "JWT", "PostgreSQL", "TypeORM"],
    description:
      "A task management back-end application developed using NestJS features authentication, authorization, JWT ",
    goTo: {
      name: "Github",
      link: "https://github.com/jxkhan/task-management",
    },
  },
  {
    imageUrl: "",
    title: "NestJS Auth",
    category: "web",
    tags: ["NestJS", "Sessions", "SQLite", "TypeORM"],
    description:
      "NestJS developed API which provides features such as user authentication, authorization guards, session management and more.",
    goTo: {
      name: "Github",
      link: "https://github.com/jxkhan/nestjs-auth",
    },
  },
  {
    imageUrl: blog_api,
    title: "Blog API",
    category: "web",
    tags: ["Node", "Express", "MongoDB", "Mongoose", "JWT"],
    description:
      "The Node.js blog API features authentication, post management, comments, and auto-blocking inactive users. Admins and users can block others. It tracks post dates, user activity, and awards based on post count. Users can follow/unfollow, and metrics include profile views and post counts. Admins manage blocks, users update passwords, upload photos, and close accounts.",
    goTo: {
      name: "Github",
      link: "https://github.com/jxkhan/blog-web-app",
    },
  },

  {
    imageUrl: restaurant_finder,
    title: "Restaurant Finder",
    category: "mobile",
    tags: ["React Native", "Yelp API", "Hooks"],
    description:
      "This app is created with Expo, leveraging the Yelp API. It employs React hooks, Axios for API requests, and navigation features, enabling you to search for restaurants, access restaurant details, and explore different food options.",
    goTo: {
      name: "Github",
      link: "https://github.com/jxkhan/Restaurants-finder/",
    },
  },
  {
    imageUrl: blog_rn,
    title: "Blog App",
    category: "mobile",
    tags: ["React Native", "useContext", "React Navigation"],
    description:
      "App that enable users to create and manage blog posts leveraging the power of React Native, Expo, hooks, useContext, and React Navigation.",
    goTo: {
      name: "Github",
      link: "https://github.com/jxkhan/rn-blog",
    },
  },
  {
    imageUrl: ar_nav,
    title: "AR Routes and Navigation",
    category: "app",
    tags: ["Unity", "Vuforia", "AR", "GPS", "Mapbox"],
    description:
      "An app for Android and iPhone that shows you the way using augmented reality. As you walk, it tells you how far you have to go, which way to turn, and where to go next.",
    goTo: {
      name: "Demo",
      link: "https://www.dropbox.com/scl/fi/ibig2rgap1qg5dd4bto5b/AR-Routes-and-Navigation.mp4?rlkey=c867rh80y67zd4pnyuft8udse&dl=0",
    },
  },
  {
    imageUrl: car_value,
    title: "Car Value",
    category: "web",
    tags: ["Typescript", "NestJS", "TypeORM", "SQLite"],
    description: "",
    goTo: {
      name: "Github",
      link: "https://github.com/jxkhan/nest-js",
    },
  },
  {
    imageUrl: photofilters,
    title: "Photofilters",
    category: "app",
    tags: [
      "Android",
      "Augmented Reality",
      "Face-tracking",
      "Neural Style Transfer",
    ],
    description: "",
    goTo: {
      name: "Github",
      link: "https://github.com/jxkhan/PhotoFilters",
    },
  },
  {
    imageUrl: netflix_clone,
    title: "Netflix Clone",
    category: "web",
    tags: ["Javascript", "React", "Tailwind"],
    description: "",
    goTo: {
      name: "Github",
      link: "https://github.com/jxkhan/netflix-react-js",
    },
  },
  {
    imageUrl: portfolio_website,
    title: "Portfolio Website",
    category: "web",
    description: "",
    tags: ["Javascript", "React", "Hooks"],
    goTo: {
      name: "Github",
      link: "https://github.com/jxkhan/mak-portfolio",
    },
  },
  {
    imageUrl: expense_tracker,
    title: "Expense Tracker",
    category: "web",
    description: "",
    tags: ["Javascript", "React", "Hooks"],
    goTo: {
      name: "Github",
      link: "https://github.com/jxkhan/expense-tracker",
    },
  },
] as const;

export const testimonialsData = [
  {
    image:
      "https://img.icons8.com/arcade/64/000000/experimental-user-male-circle-arcade.png",
    name: "Vishnu Karinattu",
    country: "Saudi Arabia",
    flag: saudia,
    review:
      "He was clear and tried his best to explain and delivered before the expected time. would suggest as a friendly AR developer.",
  },
  {
    image:
      "https://img.icons8.com/arcade/64/000000/experimental-user-male-circle-arcade.png",
    name: "Usssay_007",
    country: "United Kingdom",
    flag: uk,
    review: "Great seller highly recommend very friendly and polite",
  },
  {
    image:
      "https://img.icons8.com/arcade/64/000000/experimental-user-male-circle-arcade.png",
    name: "Usssay_007",
    country: "United Kingdom",
    flag: uk,
    review: "great work and great seller",
  },
  {
    image:
      "https://img.icons8.com/arcade/64/000000/experimental-user-male-circle-arcade.png",
    name: "Shimmmer",
    country: "Belarus",
    flag: belarus,
    review: "Good job! Tnx, sir!",
  },
  {
    image:
      "https://img.icons8.com/arcade/64/000000/experimental-user-male-circle-arcade.png",
    name: "Ksoule",
    country: "Canada",
    flag: canada,
    review: "Great communication. Honest seller. Good at his craft. 5 stars!",
  },
  {
    image:
      "https://img.icons8.com/arcade/64/000000/experimental-user-male-circle-arcade.png",
    name: "Groganbaer112",
    country: "United States",
    flag: usa,
    review:
      "Excellent response time and great job making edits when necessary. Will hire again!",
  },
  {
    image:
      "https://img.icons8.com/arcade/64/000000/experimental-user-male-circle-arcade.png",
    name: "Khanxziv",
    country: "Pakistan",
    flag: pakistan,
    review:
      "Great seller. Good at augmented reality skills. Would work with him in future as well.",
  },
  {
    image:
      "https://img.icons8.com/arcade/64/000000/experimental-user-male-circle-arcade.png",
    name: "Ralph_martin03",
    country: "United States",
    flag: usa,
    review: "Great conversation and nice job.",
  },
  {
    image:
      "https://img.icons8.com/arcade/64/000000/experimental-user-male-circle-arcade.png",
    name: "Groganbaer112",
    country: "United States",
    flag: usa,
    review:
      "Great work - very responsive and excellent communication. We will be using him again!",
  },
  {
    image:
      "https://img.icons8.com/arcade/64/000000/experimental-user-male-circle-arcade.png",
    name: "Hayleylsteiner",
    country: "United States",
    flag: usa,
    review:
      "This freelancer is very professional and easy to work with. My project was to create an augmented reality app for both iOS and Android that would show markers in the real world. I told him there were only a couple but ended up being way more markers than I thought. He told my project was pretty big and that he may not be able to get it done by the day I requested. However, he ended up getting it done on that day and with more work then I originally told him it would be. He is very kind and made sure I was understanding what I was getting from him. He is a great communicator and a hard worker. I definitely recommend him to anyone who is looking for someone with skills in app development. ",
  },
  {
    image:
      "https://img.icons8.com/arcade/64/000000/experimental-user-male-circle-arcade.png",
    name: "Groganbaer112",
    country: "United States",
    flag: usa,
    review:
      "Very quick on the delivery, great work. I will be using jxkhan again!",
  },
  {
    image:
      "https://img.icons8.com/arcade/64/000000/experimental-user-male-circle-arcade.png",
    name: "Groganbaer112",
    country: "United States",
    flag: usa,
    review: "Always a great experience. Have used many times",
  },
  {
    image:
      "https://img.icons8.com/arcade/64/000000/experimental-user-male-circle-arcade.png",
    name: "Groganbaer112",
    country: "United States",
    flag: usa,
    review:
      "We have used junaid on several projects and he is very good, great at communicating and quick on the delivery - I will be using him again",
  },
  {
    image:
      "https://img.icons8.com/arcade/64/000000/experimental-user-male-circle-arcade.png",
    name: "Groganbaer112",
    country: "United States",
    flag: usa,
    review:
      "We will be using junaidsajidkhan again, very fast deliver and alway helpful, sends video of work complete before final approval of delivery. Great to work with!",
  },
] as const;

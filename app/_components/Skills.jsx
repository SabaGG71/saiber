"use client";
import Image from "next/image";
import React, { useState } from "react";
import bg from "../../public/bgVertical.svg";
import html from "../../public/html.svg";
import css from "../../public/css.svg";
import javaScript from "../../public/JavaScript.svg";
import tailwind from "../../public/tailwind.svg";
import react from "../../public/react.svg";
import next from "../../public/next.svg";
import php from "../../public/php.svg";
import mysql from "../../public/mysql.svg";
import java from "../../public/java.svg";
import graphql from "../../public/graphql.svg";
import supabase from "../../public/supabase.svg";
import downArrow from "../../public/downArrow.svg";
import SkillModal from "../_components/SkillModal";

const skillData = [
  {
    id: 1,
    name: "HTML",
    description:
      "Strong in HTML, building clean, semantic, and responsive websites.",
    modalText:
      "Strong in HTML, building clean, semantic, and responsive websites that prioritize accessibility and user experience. Proficient in creating modular, maintainable front-end components and optimizing for performance across all devices",
    icon: html,
    bgColor: "#0b0b0f",
  },
  {
    id: 2,
    name: "CSS",
    description:
      "Skilled in CSS, creating responsive designs and smooth animations.",
    modalText:
      "Experienced in CSS, proficient in creating visually appealing, responsive, and user-friendly designs. Skilled in CSS3, Flexbox, Grid, and animations to craft dynamic layouts. Strong understanding of design principles, cross-browser compatibility, and modular, maintainable stylesheets.",
    icon: css,
    bgColor: "#0f1016",
  },
  {
    id: 3,
    name: "Tailwind CSS",
    description:
      "Experienced in Tailwind CSS, building fast, responsive layouts with utility-first styling.",
    modalText:
      "Proficient in Tailwind CSS, skilled at building responsive, mobile-first designs with utility-first principles. Experienced in creating scalable, reusable components and implementing advanced layouts using Flexbox, Grid, and animations.",
    icon: tailwind,
    bgColor: "#0b0b0f",
  },
  {
    id: 4,
    name: "JavaScript",
    description:
      "Familiar with JavaScript, building basic interactive features and enhancing web functionality.",
    modalText:
      "Strong foundational knowledge of JavaScript, capable of building dynamic, interactive web applications. Comfortable with core concepts such as variables, functions, loops, and conditionals. Continuously expanding knowledge in modern JavaScript features like ES6+, async/await, and DOM manipulation, while ensuring code is clean, efficient, and scalable.",
    icon: javaScript,
    bgColor: "#0f1016",
  },
  {
    id: 5,
    name: "React",
    description:
      "Skilled in React, building dynamic UIs with reusable components.",
    modalText:
      "Experienced in React, with a solid understanding of building dynamic and interactive user interfaces. Comfortable working with React hooks like useState and useEffect, creating reusable components, and managing application state. Familiar with React Router for routing and integrating third-party libraries. Focused on writing clean, maintainable code and building responsive, scalable applications.",
    icon: react,
    bgColor: "#0f1016",
  },
  {
    id: 6,
    name: "Next.js",
    description:
      "Experienced with Next.js, building fast, scalable web apps with SSR and SSG.",
    modalText:
      "Skilled in using Next.js to build fast, server-side rendered React applications. Familiar with key features like static site generation (SSG), server-side rendering (SSR), and API routes. Comfortable with routing, dynamic imports, and optimizing performance with features like image optimization and automatic code splitting. Focused on creating seamless, scalable applications with efficient deployment strategies.",
    icon: next,
    bgColor: "#0b0b0f",
  },
  {
    id: 7,
    name: "PHP",
    description:
      "Currently learning PHP, focusing on backend development and dynamic web apps.",
    modalText:
      "Currently learning PHP, with a focus on building server-side applications and understanding core concepts such as form processing, database interaction, and session management. Gaining hands-on experience with MySQL for database queries and working on improving my understanding of secure coding practices, like input validation and prepared statements.",
    icon: php,
    bgColor: "#0f1016",
  },
  {
    id: 8,
    name: "MySQL",
    description:
      "Familiar with MySQL, managing databases and writing efficient queries for data storage and retrieval.",
    modalText:
      "Currently learning MySQL, with a focus on understanding database structure, writing basic SQL queries, and working with tables, columns, and rows. Gaining experience in creating, reading, updating, and deleting data (CRUD operations), and learning to use joins, filters, and simple aggregations to extract meaningful information from databases.",
    icon: mysql,
    bgColor: "#0b0b0f",
  },
  {
    id: 9,
    name: "Java",
    description:
      "Learning Java at university, focusing on OOP and application development.",
    modalText:
      "Currently learning Java at university, focusing on foundational programming concepts such as object-oriented programming (OOP), data structures, and algorithms. Gaining experience with Java syntax, working on building simple applications, and developing an understanding of Java's core libraries and frameworks.",
    icon: java,
    bgColor: "#0f1016",
  },
  {
    id: 10,
    name: "Supabase",
    description:
      "Familiar with Supabase, working with databases and authentication for building backend services.",
    modalText:
      "Have used Supabase in projects, gaining experience with its real-time database, authentication, and storage features. Familiar with integrating Supabase into web applications for managing backend data and user authentication, and learning to leverage its capabilities for building full-stack applications.",
    icon: supabase,
    bgColor: "#0b0b0f",
  },
  {
    id: 11,
    name: "GraphQL",
    description:
      "Currently learning GraphQL, focusing on querying and managing data efficiently.",
    modalText:
      "Familiar with the basics of GraphQL, including querying and manipulating data efficiently. Excited to dive deeper into its powerful features and how it can optimize data fetching in modern web applications.",
    icon: graphql,
    bgColor: "#0b0b0f",
  },
];

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [showLastThree, setShowLastThree] = useState(false);
  const [rotate, setRotate] = useState(false); // State to handle the rotation

  const openModal = (skill) => setSelectedSkill(skill);
  const closeModal = () => setSelectedSkill(null);

  const toggleLastThree = () => {
    setShowLastThree((prev) => !prev); // Toggle the visibility of the last three skills
    setRotate((prev) => !prev); // Toggle the rotation of the button
  };

  const initialSkills = skillData.slice(0, -3);
  const lastThreeSkills = skillData.slice(-3);

  return (
    <section className="relative pb-48">
      <div className="w-[100px] top-0 z-[-1] left-0 h-[400px] mt-[40px] blur-[200px] bg-accent-500 absolute"></div>
      <div className="w-[100px]  z-[-1] top-0 right-0 h-[400px] hidden md:block mt-[40px] blur-[200px] bg-[#b3b3b3] absolute"></div>
      <p className="text-center items-center text-white/50 mt-5 mb-9">
        <span className="text-[#fff]">✨</span> Click on a card to view{" "}
        <span className="text-[#f9c23c] font-bold">detailed</span> information.
      </p>
      <div className="container grid max-2xl:max-w-[90%] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {initialSkills.map((skill) => (
          <div
            key={skill.id}
            className={`box group boxHover hover:translate-y-[-5px] transition-all duration-300 cursor-pointer border border-primary-800 overflow-hidden relative bg-[${skill.bgColor}] rounded-3xl py-9 px-5`}
            onClick={() => openModal(skill)}
          >
            <Image
              src={bg}
              alt="bg-svg"
              className="absolute z-[-1] top-0 select-none left-0 rounded-3xl w-full h-auto opacity-[0.05]"
            />
            <div className="box-top flex items-center gap-4">
              <Image
                className="shadowEffectOnBox"
                width={43}
                height={43}
                src={skill.icon}
                alt={`${skill.name}-icon`}
              />
              <span className="font-bold text-[22px]">{skill.name}</span>
            </div>
            <div className="box-bottom">
              <p className="text-[16px] mt-[20px] text-white/70">
                {skill.description}
              </p>
            </div>
          </div>
        ))}

        {showLastThree &&
          lastThreeSkills.map((skill) => (
            <div
              key={skill.id}
              className={`box group boxHover hover:translate-y-[-5px] transition-all duration-300 cursor-pointer border border-primary-800 overflow-hidden relative bg-[${skill.bgColor}] rounded-3xl py-9 px-5`}
              onClick={() => openModal(skill)}
            >
              <Image
                src={bg}
                alt="bg-svg"
                className="absolute z-[-1] top-0 select-none left-0 rounded-3xl w-full h-auto opacity-[0.05]"
              />
              <div className="box-top flex items-center gap-4">
                <Image
                  className="shadowEffectOnBox"
                  width={43}
                  height={43}
                  src={skill.icon}
                  alt={`${skill.name}-icon`}
                />
                <span className="font-medium text-lg">{skill.name}</span>
              </div>
              <div className="box-bottom">
                <p className="text-[15px] mt-[17px] text-white/70">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
      </div>
      <div className="relative cursor-pointer mt-24">
        <div className="items-center relative flex justify-center">
          <div className="absolute hidden xl:block max-2xl:left-[48%] z-[-1] top-[-9%] left-[48.35%] rounded-full bg-accent-400 animate-ping 3xl:hidden w-[55px] h-[55px]"></div>
          <Image
            onClick={toggleLastThree}
            src={downArrow}
            alt="Toggle Skill Visibility"
            className={`${
              rotate ? "rotate-180" : ""
            } bg-accent-500 w-[50px] p-3 h-[50px] rounded-full transition-transform duration-300`}
          />
        </div>
      </div>

      {selectedSkill && (
        <SkillModal skill={selectedSkill} onClose={closeModal} />
      )}
    </section>
  );
}

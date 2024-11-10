"use client";

import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaPhp,
  FaDatabase,
} from "react-icons/fa";
import {
  SiLaravel,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

const Skill = () => {
  return (
    <div className="pt-24 flex flex-col justify-center items-center px-4">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center mb-6 text-white">
        My Skills
      </h1>

      {/* Skill Description */}
      <p className="sm:text-lg text-center mb-12 text-white max-w-2xl">
        I am passionate about building web applications using a wide range of
        technologies. Below are some of the programming languages and tools I
        have worked with and gained experience in. I continuously learn and
        explore new technologies to stay up-to-date and create efficient and
        scalable solutions.
      </p>

      {/* Skill Icons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-12 max-w-4xl mx-auto">
        {/* JavaScript */}
        <div className="flex flex-col items-center text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(253,216,53,0.8)] transition duration-300">
          <FaJs size={40} className="text-yellow-500 mb-4" />
          <span>JavaScript</span>
        </div>

        {/* React */}
        <div className="flex flex-col items-center text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition duration-300">
          <FaReact size={40} className="text-cyan-500 mb-4" />
          <span>React</span>
        </div>

        {/* Node.js */}
        <div className="flex flex-col items-center text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] transition duration-300">
          <FaNodeJs size={40} className="text-green-500 mb-4" />
          <span>Node.js</span>
        </div>

        {/* Python */}
        <div className="flex flex-col items-center text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(37,99,235,0.8)] transition duration-300">
          <FaPython size={40} className="text-blue-500 mb-4" />
          <span>Python</span>
        </div>

        {/* Git */}
        <div className="flex flex-col items-center text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(252,129,32,0.8)] transition duration-300">
          <FaGitAlt size={40} className="text-orange-500 mb-4" />
          <span>Git</span>
        </div>

        {/* Docker */}
        <div className="flex flex-col items-center text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition duration-300">
          <FaDocker size={40} className="text-blue-700 mb-4" />
          <span>Docker</span>
        </div>

        {/* PHP */}
        <div className="flex flex-col items-center text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(147,112,219,0.8)] transition duration-300">
          <FaPhp size={40} className="text-purple-600 mb-4" />
          <span>PHP</span>
        </div>

        {/* SQL Database */}
        <div className="flex flex-col items-center text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(72,209,204,0.8)] transition duration-300">
          <FaDatabase size={40} className="text-teal-500 mb-4" />
          <span>SQL</span>
        </div>

        {/* Laravel */}
        <div className="flex flex-col items-center text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(220,38,38,0.8)] transition duration-300">
          <SiLaravel size={40} className="text-red-600 mb-4" />
          <span>Laravel</span>
        </div>

        {/* Tailwind CSS */}
        <div className="flex flex-col items-center text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(14,165,233,0.8)] transition duration-300">
          <SiTailwindcss size={40} className="text-sky-400 mb-4" />
          <span>Tailwind CSS</span>
        </div>

        {/* TypeScript */}
        <div className="flex flex-col items-center text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(3,105,161,0.8)] transition duration-300">
          <SiTypescript size={40} className="text-blue-600 mb-4" />
          <span>TypeScript</span>
        </div>

        {/* Next.js */}
        <div className="flex flex-col items-center text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,255)] transition duration-300">
          <SiNextdotjs size={40} className="text-black mb-4" />
          <span>Next.js</span>
        </div>
      </div>
    </div>
  );
};

export default Skill;

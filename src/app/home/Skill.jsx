"use client";

import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaLivewire,
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
  SiLivewire,
} from "react-icons/si";

const Skill = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 pt-24">
      {/* Section Title */}
      <h1 className="mb-6 text-4xl font-bold text-center text-white">
        My Skills
      </h1>

      {/* Skill Description */}
      <p className="max-w-2xl mb-12 text-center text-white sm:text-lg">
        I am passionate about building web applications using a wide range of
        technologies. Below are some of the programming languages and tools I
        have worked with and gained experience in. I continuously learn and
        explore new technologies to stay up-to-date and create efficient and
        scalable solutions.
      </p>

      {/* Skill Icons */}
      <div className="grid max-w-4xl grid-cols-2 gap-12 mx-auto sm:grid-cols-3 lg:grid-cols-6">
        {/* JavaScript */}
        <div className="flex flex-col items-center text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(253,216,53,0.8)] transition duration-300">
          <FaJs size={40} className="mb-4 text-yellow-500" />
          <span>JavaScript</span>
        </div>

        {/* React */}
        <div className="flex flex-col items-center text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition duration-300">
          <FaReact size={40} className="mb-4 text-cyan-500" />
          <span>React</span>
        </div>

        {/* Node.js */}
        <div className="flex flex-col items-center text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] transition duration-300">
          <FaNodeJs size={40} className="mb-4 text-green-500" />
          <span>Node.js</span>
        </div>

        {/* Python */}
        <div className="flex flex-col items-center text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] transition duration-300">
          <SiLivewire size={40} className="mb-4 text-pink-500" />
          <span>Livewire</span>
        </div>

        {/* Git */}
        <div className="flex flex-col items-center text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(252,129,32,0.8)] transition duration-300">
          <FaGitAlt size={40} className="mb-4 text-orange-500" />
          <span>Git</span>
        </div>

        {/* Docker */}
        <div className="flex flex-col items-center text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition duration-300">
          <FaDocker size={40} className="mb-4 text-blue-700" />
          <span>Docker</span>
        </div>

        {/* PHP */}
        <div className="flex flex-col items-center text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(147,112,219,0.8)] transition duration-300">
          <FaPhp size={40} className="mb-4 text-purple-600" />
          <span>PHP</span>
        </div>

        {/* SQL Database */}
        <div className="flex flex-col items-center text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(72,209,204,0.8)] transition duration-300">
          <FaDatabase size={40} className="mb-4 text-teal-500" />
          <span>SQL</span>
        </div>

        {/* Laravel */}
        <div className="flex flex-col items-center text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(220,38,38,0.8)] transition duration-300">
          <SiLaravel size={40} className="mb-4 text-red-600" />
          <span>Laravel</span>
        </div>

        {/* Tailwind CSS */}
        <div className="flex flex-col items-center text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(14,165,233,0.8)] transition duration-300">
          <SiTailwindcss size={40} className="mb-4 text-sky-400" />
          <span>Tailwind CSS</span>
        </div>

        {/* TypeScript */}
        <div className="flex flex-col items-center text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(3,105,161,0.8)] transition duration-300">
          <SiTypescript size={40} className="mb-4 text-blue-600" />
          <span>TypeScript</span>
        </div>

        {/* Next.js */}
        <div className="flex flex-col items-center text-white hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,255)] transition duration-300">
          <SiNextdotjs size={40} className="mb-4 text-black" />
          <span>Next.js</span>
        </div>
      </div>
    </div>
  );
};

export default Skill;

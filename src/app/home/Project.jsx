"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

const Project = () => {
  const projects = [
    {
      title: "Project 1: E-Commerce Website",
      description:
        "A full-stack e-commerce platform built using React, Node.js, and MongoDB server client arsitektur.",
      link: "https://example.com/project1",
    },
    {
      title: "Project 2: Portfolio Website",
      description:
        "A personal portfolio website showcasing my skills and projects, built with Next.js and Tailwind CSS.",
      link: "https://example.com/project2",
    },
    {
      title: "Project 3: Blogging Platform",
      description:
        "A blogging platform that allows users to create and share posts, built with Laravel and Vue.js.",
      link: "https://example.com/project3",
    },
  ];

  return (
    <div className="pt-24 flex flex-col justify-center items-center px-4">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center mb-6 text-white">
        My Recent Projects
      </h1>

      {/* Project Description */}
      <p className="text-lg text-center mb-12 text-white max-w-2xl">
        Here are some of the recent projects I've worked on. These projects
        showcase my skills in building web applications, from frontend to
        backend. Feel free to explore them to learn more about my work.
      </p>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">
              {project.title}
            </h2>
            <p className="text-white/80 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-accent hover:text-accent-hover"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>

      <Link href="/work" className="mt-5">
        <Button className="rounded-full">See All Projects</Button>
      </Link>
    </div>
  );
};

export default Project;

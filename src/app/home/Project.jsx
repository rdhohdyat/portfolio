"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import ProjectCard from "@/components/ProjectCard";

const Project = () => {
  const projects = [
    {
      title: "Project 1: EBR UNITED PROFILE & EVENT MANAGEMENT",
      description:
        "A company profile and event management platform for EBR United, built with modern web technologies to manage events, schedules, and online presence effectively.",
      link: "https://ebr-united.id/",
      image: "/project/ebr.png",
    },
    {
      title: "Project 2: E-Commerce Percetakan",
      description:
        "An online printing service application that allows customers to order, customize, and track printing products with an integrated checkout and admin dashboard.",
      link: "https://example.com/project2",
      image: "/project/percetakkan.png",
    },
    {
      title: "Project 3: SIMRS Bakti Timah Medika",
      description:
        "A hospital information system designed to manage patients, doctors, and medical records with features administration.",
      link: "https://example.com/project3",
      image: "/project/smokdect.png",
    },
    {
      title: "Project 4: Website Inventaris Administrasi Kampus",
      description:
        "A campus inventory and administration management system for tracking assets, handling requests, and improving operational efficiency.",
      link: "https://example.com/project4",
      image: "/project/smokdect.png",
    },
    {
      title: "Project 5: Pasar Tradisional Online",
      description:
        "An online marketplace that brings traditional market sellers closer to buyers, enabling digital transactions and delivery services.",
      link: "https://example.com/project5",
      image: "/project/smokdect.png",
    },
    {
      title: "Project 6: Caffe Mobile POS SALE",
      description:
        "A mobile Point of Sale (POS) system for cafés to manage sales, menus, transactions, and reports directly from smartphones or tablets.",
      link: "https://example.com/project6",
      image: "/project/smokdect.png",
    },
    {
      title: "Project 7: Deep Learning SmokeDetect",
      description:
        "An AI-powered smoke detection system using deep learning models to identify smoke from images and video feeds for early fire prevention.",
      link: "https://example.com/project7",
      image: "/project/smokdect.png",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center px-4 pt-24">
      {/* Section Title */}
      <h1 className="mb-6 text-4xl font-bold text-center text-white">
        My Recent Projects
      </h1>

      {/* Project Description */}
      <p className="max-w-2xl mb-12 text-center text-white sm:text-lg">
        Here are some of the recent projects I've worked on. These projects
        showcase my skills in building web applications, from frontend to
        backend. Feel free to explore them to learn more about my work.
      </p>

      {/* Project Cards */}
      <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            index={index}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>

      <Link href="/work" className="mt-5">
        <Button className="rounded-full">See All Projects</Button>
      </Link>
    </div>
  );
};

export default Project;

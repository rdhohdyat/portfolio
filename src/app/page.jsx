"use client"

import { FiDownload } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import About from "./home/About";
import Skill from "./home/Skill";
import Project from "./home/Project";
import Stats from "@/components/Stats";
import Contact from "./home/Contact";
import Experience from "./home/Experience";
import Contribution from "@/components/Contribution";

export default function Home() {
   const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "cv.pdf";
    link.click();
  };

  
  return (
    <section className="h-full pt-28">
      <div className="container h-full mx-auto">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pb-28">
          <div className="order-2 mt-5 text-center xl:mt-0 xl:text-left xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="mb-6 h1">
              Hello I'm <br />{" "}
              <span className="text-accent">Ridho Hidayat</span>
            </h1>
            <p className="max-w-[500px] mb-8 text-white/80">
              Welcome to my Website, Discover more about what I do and how I can
              help you.
            </p>
            <div className="flex flex-col items-center gap-6 xl:flex-row">
              <Button onClick={handleDownload} variant="outline" className="rounded-full ">
                <span>Download CV</span>
                <FiDownload />
              </Button>

              <Social
                containerStyle="flex gap-5 justify-center"
                iconStyle="w-8 h-8 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
              />
            </div>
          </div>

          <div className="order-1 xl:order-none">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
      <About />
      <Skill/>
      <Contribution/>
      <Experience/>
      <Project/>
      <Contact/>
    </section>
  );
}

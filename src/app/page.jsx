import { FiDownload } from "react-icons/fi";

import { Button } from "@/components/ui/button";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import About from "./home/About";
import Skill from "./home/Skill";
import Project from "./home/Project";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full pt-28">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pb-28">
          <div className="text-center mt-5 xl:mt-0 xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Ridho Hidayat</span>
            </h1>
            <p className="max-w-[500px] mb-8 text-white/80">
              I’m a fullstack software developer with expertise in building both
              web and mobile applications. I specialize in using JavaScript to
              create platforms.
            </p>
            <div className="flex xl:flex-row flex-col items-center gap-6">
              <Button variant="outline" className=" rounded-full">
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
    </section>
  );
}

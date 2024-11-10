"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const About = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("about-section");
    if (element) {
      observer.observe(element);
    }

    // Cleanup observer when component unmounts
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []); // Empty dependency array ensures it only runs once when the component mounts

  return (
    <div
      id="about-section"
      className="flex flex-col justify-center items-center text-white px-6 py-12"
    >
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.8, ease: "easeIn" },
        }}
      >
        About Me
      </motion.h1>
      <motion.div
        className="max-w-3xl text-center"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.8, ease: "easeIn" },
        }}
      >
        <motion.p
          className="text-lg mb-4"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.8, ease: "easeIn" },
          }}
        >
          Hi, I'm{" "}
          <span className="font-semibold text-accent">Ridho Hidayat</span>. A
          passionate developer with a love for creating impactful web
          applications and exploring new technologies.
        </motion.p>
        <motion.p
          className="text-lg mb-4"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.8, ease: "easeIn" },
          }}
        >
          With a background in{" "}
          <span className="text-accent">full-stack development</span>, I
          specialize in building modern, responsive websites and applications
          that are both functional and user-friendly.
        </motion.p>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.8, ease: "easeIn" },
          }}
        >
          When I'm not coding, you can find me{" "}
          <span className="text-accent">exploring new hobbies</span> or
          collaborating on exciting projects with others.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default About;

"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "We provide web development services that are visually appealing and responsive, tailored to meet your business needs and create an optimal online experience.",
    href: "",
  },
  {
    num: "02",
    title: "Mobile Development",
    description:
      "Building intuitive and accessible mobile applications across platforms, we deliver a seamless, high-quality user experience.",
    href: "",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "Focusing on efficient and engaging user interface and experience design, we ensure every aspect enhances user interaction with your product.",
    href: "",
  },
  {
    num: "04",
    title: "Editing",
    description:
      "Developing reliable, secure, and integrated backend and frontend systems to support high-performance modern applications and websites.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh]  flex flex-col justify-center items-center pb-12 pt-28">
      <div className="container mx-auto mb-12">
        {/* Pengenalan Jasa */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.8, ease: "easeIn" },
          }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="mb-6 text-4xl font-bold text-white">Our Services</h1>
          <p className="mb-8 text-lg text-white">
            Do you need a web or mobile application that suits your business or
            project needs? I offer custom application development services, both
            for web and mobile platforms. With experience in various
            cutting-edge technologies, I can help you build applications that
            are user-friendly, efficient, and scalable.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                className="flex flex-col justify-center flex-1 gap-6 group"
                key={index}
              >
                <div className="flex items-center justify-between w-full">
                  <div className="text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[30px] h-[30px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-xl text-primary" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p>{service.description}</p>
                <div className="w-full border-b border-white/20"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

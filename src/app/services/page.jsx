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
    title: "API Development",
    description:
      "Developing reliable, secure, and integrated backend and frontend systems to support high-performance modern applications and websites.",
    href: "",
  },
  {
    num: "05",
    title: "Custom Application Development",
    description:
      "We specialize in creating custom web and mobile applications tailored to your specific business needs, ensuring scalability, security, and high performance.",
    href: "",
  },
  {
    num: "06",
    title: "E-commerce Solutions",
    description:
      "We help you build scalable, secure, and user-friendly e-commerce platforms to grow your online business, complete with payment gateway integrations and inventory management.",
    href: "",
  },
  {
    num: "07",
    title: "Consulting & Strategy",
    description:
      "Providing strategic advice and consulting services to help you align technology with business goals, streamline operations, and maximize ROI.",
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
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-lg text-white mb-8">
            We offer a comprehensive range of services designed to help your
            business grow and thrive in the digital world. From web and mobile
            development to UI/UX design and custom application creation, we are
            committed to delivering high-quality, tailor-made solutions that
            meet your unique needs. Whether you're looking to launch a new
            product, revamp an existing system, or enhance your user experience,
            we have the expertise to turn your vision into reality.
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
                className="flex-1 flex flex-col justify-center gap-6 group"
                key={index}
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[30px] h-[30px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p>{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

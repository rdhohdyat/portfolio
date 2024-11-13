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

const projectPrices = [
  {
    name: "Web",
    price: "Rp 10.000.000 - Rp 50.000.000",
    description:
      "Web development projects range from simple informational sites to complex, feature-rich web applications. The price depends on the scope",
    details: [
      "Responsive design",
      "E-commerce integration",
      "Content management systems (CMS)",
      "Custom web applications",
    ],
  },
  {
    name: "Mobile",
    price: "Rp 15.000.000 - Rp 75.000.000",
    description:
      "Mobile app development for both iOS and Android. Prices vary based on platform, app features, and integrations required.",
    details: [
      "Native apps for iOS/Android",
      "Cross-platform apps (e.g., React Native)",
      "App store deployment",
      "Push notifications and in-app purchases",
    ],
  },
  {
    name: "UI/UX Design",
    price: "Rp 5.000.000 - Rp 30.000.000",
    description:
      "UI/UX design focuses on the user experience and interface, ensuring that your product is intuitive, user-friendly, and visually appealing.",
    details: [
      "Wireframes and prototypes",
      "High-fidelity designs",
      "User testing and feedback integration",
      "Mobile-first design",
    ],
  },
  {
    name: "Editing",
    price: "Rp 2.000.000 - Rp 10.000.000",
    description:
      "Editing services for websites, mobile apps, and videos, ensuring they are polished, professional, and engaging.",
    details: [
      "Content editing and proofreading",
      "Video editing and post-production",
      "Bug fixing and performance optimization",
    ],
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

      <div className="container mx-auto pt-16 text-center">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Project List Price
          </h1>
          <p className="text-lg text-white/80 mb-12">
            Here is a list of project pricing. The cost depends on the
            complexity of the project and the technologies used. These prices
            are just an estimate and reflect the general pricing for such
            projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectPrices.map((project, index) => (
            <div
              key={index}
              className=" bg-white/5 p-6 rounded-xl shadow-xl transform hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">
                {project.name}
              </h2>
              <p className="text-white/90 mb-4">{project.description}</p>
              <div className="bg-accent text-black px-4 py-2 rounded-md font-semibold mb-4">
                {project.price}
              </div>
              <ul className="list-disc list-inside text-white/80">
                {project.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

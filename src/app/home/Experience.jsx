"use client";

import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "Jan 2022 - Present",
      description: [
        "Developed and maintained the front-end of a SaaS platform using React and TypeScript.",
        "Collaborated with designers to implement responsive and user-friendly interfaces.",
        "Improved application performance by optimizing component rendering and API integration.",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Creative Solutions",
      period: "Jun 2021 - Dec 2021",
      description: [
        "Assisted in building custom websites using HTML, CSS, and JavaScript.",
        "Worked closely with senior developers on front-end tasks and bug fixes.",
        "Enhanced website SEO and accessibility features to improve user engagement.",
      ],
    },
  ];

  return (
    <section className="container mx-auto pt-28 px-6 lg:px-12 text-white">
      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center mb-6">Experience</h1>

      {/* Experience List */}
      <div className="space-y-8 max-w-3xl mx-auto">
        {experiences.map((exp, index) => (
          <div key={index} className="p-6 rounded-lg bg-white/5">
            <h2 className="text-2xl font-semibold">{exp.title}</h2>
            <p className="text-lg text-accent">{exp.company}</p>
            <p className="text-sm text-white mb-4">{exp.period}</p>
            <ul className="list-disc list-inside space-y-2 text-white/80">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

"use client";

import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Freelance Web Developer",
      company: "Jokiin Aja",
      period: "Jan 2025 – Present",
      description: [
        "Developed and maintained responsive, user-friendly web applications.",
        "Collaborated with designers to translate UI/UX wireframes into functional components.",
        "Enhanced performance by optimizing API integration and state management.",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Rumah Sakit Bakti Timah Medika Pangkal Pinang",
      period: "Aug 2025 – Jan 2026",
      description: [
        "Assisted in building custom websites using Laravel, Livewire, Tailwind CSS, and Alpine.js.",
        "Supported senior developers in implementing front-end features and debugging issues.",
        "Improved website accessibility and usability to increase user engagement.",
      ],
    },
  ];

  return (
    <section className="container px-6 mx-auto text-white pt-28 lg:px-12">
      {/* Section Title */}
      <h1 className="mb-6 text-4xl font-bold text-center">Experience</h1>

      {/* Experience List */}
      <div className="max-w-3xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="p-6 rounded-lg bg-white/5">
            <h2 className="text-2xl font-semibold">{exp.title}</h2>
            <p className="text-lg text-accent">{exp.company}</p>
            <p className="mb-4 text-sm text-white">{exp.period}</p>
            <ul className="space-y-2 list-disc list-inside text-white/80">
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

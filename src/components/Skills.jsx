import React from "react";

// Array of your skills
const skills = [
  "SQL",
  "Python",
  "Kotlin",
  "Data Analysis",
  "Sensor Data Processing",
  "Business Analysis",
  "Excel / Spreadsheets",
  "Visualization Tools",
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50 px-4">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="px-4 py-2 bg-white border rounded-lg shadow text-gray-800 font-medium hover:scale-105 transform transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

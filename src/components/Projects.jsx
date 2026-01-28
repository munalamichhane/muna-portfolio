import React from "react";

// Array of your projects
const projects = [
  {
    title: "Sensor Watch Analysis",
    description:
      "Analyzed gyroscope and accelerometer data from wearable devices to extract actionable insights and patterns.",
    link: "#", // You can later link to detailed project page or PDF
  },
  {
    title: "Quantum AI in Healthcare",
    description:
      "Designed AI models to improve healthcare analytics and assist in decision-making for patient care.",
    link: "#",
  },
  {
    title: "SQL Analytics Business Analysis",
    description:
      "Performed data analysis using SQL to identify trends and present insights aligned with business objectives.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white px-4">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow hover:shadow-lg transition bg-gray-50"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            {project.link !== "#" && (
              <a
                href={project.link}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Details
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

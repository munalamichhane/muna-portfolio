import React from "react";

const projects = [
  {
    title: "Pixel Watch Sensor Data Analysis",
    role: "Technical & Data Analyst",
    description:
      "Analyzed real-time sensor data from a wearable device to extract motion patterns and health-related insights. Built an Android-based system to capture and process gyroscope and accelerometer data.",
    impact: [
      "Demonstrated real-time data collection and analysis",
      "Applied wearable tech to healthcare-related insights",
      "Improved understanding of sensor-based motion tracking"
    ],
    tech: "Kotlin, Android Studio, Sensor APIs",
    github: "#",
    demo: "#"
  },
  {
    title: "SQL Business Analytics Project",
    role: "Data Analyst",
    description:
      "Performed SQL-based analysis on operational datasets to identify trends, optimize processes, and support data-driven business decisions.",
    impact: [
      "Extracted insights from structured datasets",
      "Improved reporting using optimized SQL queries",
      "Translated data findings into business recommendations"
    ],
    tech: "SQL, Data Analysis",
    github: "#",
    demo: "#"
  }
];

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p className="role">{project.role}</p>

            <p className="description">{project.description}</p>

            <ul>
              {project.impact.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <p className="tech">
              <strong>Tech:</strong> {project.tech}
            </p>

            <div className="buttons">
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

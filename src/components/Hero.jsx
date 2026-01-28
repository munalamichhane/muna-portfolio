import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        Hi, I’m Muna Lamichhane
      </h1>

      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6">
        I’m an aspiring Technical Business Analyst with a background in Computer Science, focused on building impactful applications, designing solutions, and uncovering actionable insights from data.  
        I have hands-on experience with SQL, Python, Kotlin, and sensor data analysis through projects in healthcare, wearable technologies, and operational analytics.  
        I’m constantly exploring emerging areas, including Machine Learning, to expand my analytical toolkit and deliver innovative solutions.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;

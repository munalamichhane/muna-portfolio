import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white px-4">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Contact
      </h2>

      <p className="text-center text-gray-700 mb-6">
        I’m currently seeking opportunities as a Technical Business Analyst.  
        Feel free to reach out for collaboration, questions, or career inquiries.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <a
          href="mailto:your-email@example.com"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Email Me
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

export default Contact;

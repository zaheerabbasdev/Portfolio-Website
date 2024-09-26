import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './Education.css';

const Education = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      easing: 'ease-in-out', // Easing for the animation
      once: true, // Animation only happens once
    });
  }, []);

  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "ABC University",
      year: "2019 - 2023",
      description: "Focused on software development, web technologies, and algorithms."
    },
    {
      degree: "High School Diploma",
      institution: "XYZ High School",
      year: "2017 - 2019",
      description: "Graduated with honors, excelling in mathematics and computer science."
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "ABC University",
      year: "2019 - 2023",
      description: "Focused on software development, web technologies, and algorithms."
    },
    {
      degree: "High School Diploma",
      institution: "XYZ High School",
      year: "2017 - 2019",
      description: "Graduated with honors, excelling in mathematics and computer science."
    }
  ];

  return (
    <section id="education" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4" data-aos="fade-up">Education</h2>
        <div className="row">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="col-md-6 mb-4"
              data-aos="fade-up"
              data-aos-delay={index * 200} // Delay for staggered animations
            >
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h3 className="card-title">{edu.degree}</h3>
                  <h4 className="card-subtitle mb-2">{edu.institution}</h4>
                  <p className="card-text"><em>{edu.year}</em></p>
                  <p className="card-text">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

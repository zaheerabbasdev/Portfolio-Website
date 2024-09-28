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
      degree: "High School Diploma",
      institution: "Govt. High School Tano Swabi",
      year: "2017 - 2018",
      description: "Graduated from Govt. High School Tano Swabi in 2018 with honors, showcasing strong academic performance. Excelled particularly in mathematics and computer science. Demonstrated a dedication to learning and a commitment to academic excellence during high school."
    },
    {
      degree: "Pre-Engineering (Part-1)",
      institution: "Suffah College Adina Swabi",
      year: "2018 - 2019",
      description: "Completed Pre-Engineering (Part-1) at Suffah College Adina Swabi in 2019 with honors. Excelled in key subjects, particularly mathematics and computer science. Demonstrated strong analytical and problem-solving skills during this foundational academic year."
    },
    {
      degree: "Pre-Engineering (Part-2)",
      institution: "Govt. Higher Secondary School Adina Swabi",
      year: "2019 - 2020",
      description: "Completed Pre-Engineering (Part-2) at Govt. Higher Secondary School Adina Swabi in 2020. Focused on software development, web technologies, and algorithms, building a solid foundation in programming and technical skills. Developed a keen interest in technology and problem-solving during this period."
    },
    {
      degree: "Bachelor of Students in Computer Science",
      institution: "Govt. Degree College Lahor, Swabi",
      year: "2022 - 2026",
      description: "Currently pursuing a Bachelor's degree in Computer Science at Govt. Degree College Lahor, Swabi (2022–2026), with the degree still in progress. Excelling in Web Development and computer science, with a focus on software development and web technologies. Continuously building expertise in programming, algorithms, and problem-solving as part of ongoing studies."
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

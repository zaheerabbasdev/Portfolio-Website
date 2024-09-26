import React, { useEffect } from "react";
import "./Courses.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const coursesData = [
  {
    title: "Full Stack Web Development",
    platform: "Udemy",
    description:
      "Learned React, Node.js, MongoDB, and Express.js to build dynamic web applications.",
    link: "https://www.udemy.com/course/your-course-link",
  },
  {
    title: "Responsive Web Design",
    platform: "freeCodeCamp",
    description:
      "Mastered HTML5, CSS3, and Bootstrap to create responsive and user-friendly websites.",
    link: "https://www.freecodecamp.org/your-course-link",
  },
  {
    title: "Python for Everybody",
    platform: "Coursera",
    description:
      "Gained proficiency in Python for data analysis and scripting.",
    link: "https://www.coursera.org/your-course-link",
  },
];

const Courses = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <section id="courses" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Courses</h2>
        <div className="row">
          {coursesData.map((course, index) => (
            <div className="col-md-4 mb-4" key={index} data-aos="fade-up"> {/* Add AOS animation */}
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <h6 className="card-subtitle mb-2">
                    {course.platform}
                  </h6>
                  <p className="card-text">{course.description}</p>
                  <div className="d-flex justify-content-center mt-3">
                    <a
                      href={course.link}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Course
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

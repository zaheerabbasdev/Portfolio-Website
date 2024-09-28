import React, { useEffect } from "react";
import "./Courses.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const coursesData = [
  {
    title: "Crash Course on Python",
    platform: "Coursera",
    description:
      "Completed the Crash Course on Python on Coursera, focusing on Python programming fundamentals. Gained practical skills in writing clean, efficient code and problem-solving using Python. This course provided a strong foundation for further studies in computer science, complementing ongoing work towards a Bachelor's degree.",
    link: "https://www.coursera.org/account/accomplishments/verify/2A7RWMJ3ACXU",
  },
  {
    title: "Full Stack Development",
    platform: "Coursera",
    description:
      "Completed the Full Stack Development course on Coursera, where I gained in-depth knowledge of front-end technologies including HTML5, CSS3, JavaScript, React and Bootstrap. Mastered the principles of responsive design to ensure websites work seamlessly across all devices. This hands-on experience has strengthened my ability to build dynamic and functional websites.",
    link: "https://www.coursera.org/learn/the-full-stack/home/module/1",
  },
  {
    title: "Freelancing",
    platform: "DigiSkills",
    description:
      "Completed the Freelancing course on DigiSkills, focusing on building a successful freelance career. Learned key strategies for managing freelance projects, communicating with clients in a competitive online marketplace. The course provided practical insights into various freelancing platforms, enabling me to offer services like Python scripting and data analysis.",
    link: "https://lms.digiskills.pk/MyResults/MyResults.aspx",
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

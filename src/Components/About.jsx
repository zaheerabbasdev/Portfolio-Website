import React from "react";
import abbas from "../assets/images/about-1.png";
import "./About.css";

const About = () => {
  return (
    <div>
      <section className="about-section py-5" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="about-image">
                <img
                  src={abbas}
                  alt="About Us"
                  className="img-fluid rounded shadow-lg"
                />
              </div>
            </div>
            <div className="col-md-6 about-content">
              <h2 className="mb-4">About Us</h2>
              <p className="mb-4 paragraph">
                I'm a full stack developer, I offer end-to-end services to help
                small and medium-sized businesses establish a strong online
                presence. Whether you need to create a new website, refresh an
                existing one, or build an e-commerce platform, I have the skills
                and expertise to turn your digital vision into a reality. Knows
                HTML, CSS3, Bootstrap, JavaScript, Python and Django I'll manage
                your project from start to finish, ensuring a smooth,
                stress-free experience and exceptional results. You'll receive
                regular project updates, and I'll be available to answer any
                questions or concerns you may have, ensuring a smooth and
                successful project experience.
              </p>
              <a
                href="https://www.fiverr.com/zaheerabbas65?up_rollout=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

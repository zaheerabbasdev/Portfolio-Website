import React, { useState } from "react";
import "./Navbar.css";
import Typewriter from "typewriter-effect";
import abbas from "../assets/images/abbas-2.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false); // New state

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsContentVisible(!isContentVisible); // Toggle content visibility
  };

  return (
    <div>
      <header className="navigation">
        <div className="nav-container">
          <div className="brand">
            <span>Zaheer's Portfolio</span>
          </div>
          <nav>
            <div className="nav-mobile">
              <a id="nav-toggle" href="#!" onClick={toggleMobileMenu}>
                <span
                  className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
                ></span>
              </a>
            </div>
            <ul className={`nav-list ${isMobileMenuOpen ? "open" : ""}`}>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section
        className={`home-section ${isContentVisible ? "slide-down" : ""}`}
        id="home"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1>
                Hi, I'm <span>Zaheer Abbas</span>
              </h1>
              <h2>and I'm a passionate</h2>
              <div className="typewriter-container">
                <h2>
                  <Typewriter
                    options={{
                      strings: [
                        "Web Developer",
                        "App Developer",
                        "Software Developer",
                        // "Front-End Developer",
                        // "Back-End Developer",
                        // "Full Stack Developer",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      deleteSpeed: 50,
                    }}
                  />
                </h2>
              </div>
              <p>
                "Welcome to my portfolio, where creativity meets technical
                expertise. As a seasoned full stack developer, I bring
                innovative ideas to life through seamless front-end and back-end
                development. Explore my projects to discover how I leverage my
                skills in HTML, CSS, JavaScript, and more to craft engaging user
                experiences and robust server-side solutions. Let's collaborate
                and bring your vision to reality."
              </p>
              <a
                href="https://www.fiverr.com/zaheerabbas65?up_rollout=true"
                target="blank"
                className="btn"
              >
                View My Work
              </a>
            </div>
            <div className="col-md-6">
              <img
                src={abbas}
                alt="Zaheer Abbas"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Typewriter from "typewriter-effect";
import abbas from "../assets/images/abbas1.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsContentVisible(!isContentVisible);
  };

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div>
      <header className="navigation">
        <div className="nav-container">
          <div className="brand" data-aos="fade-right">
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
                <a href="#home" data-aos="fade-down">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" data-aos="fade-down" data-aos-delay="100">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" data-aos="fade-down" data-aos-delay="200">
                  Skills
                </a>
              </li>
              <li>
                <a href="#services" data-aos="fade-down" data-aos-delay="300">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" data-aos="fade-down" data-aos-delay="400">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" data-aos="fade-down" data-aos-delay="500">
                  Contact
                </a>
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
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
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
                data-aos="fade-up"
                data-aos-delay="500"
              >
                View My Work
              </a>
            </div>
            <div
              className="col-md-6"
              data-aos="fade-left"
              data-aos-delay="400"
            >
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

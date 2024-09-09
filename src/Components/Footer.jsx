import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import "./Footer.css"; // Import the CSS for Footer
import facebook from "../assets/images/facebook.png";
import WhatsApp from "../assets/images/WhatsApp.png";
import instagram from "../assets/images/instagram.png";
import youtube from "../assets/images/youtube.png";
import email from "../assets/images/email.png";
import phone_call from "../assets/images/phone-call.png";
import location from "../assets/images/location.png";

const Footer = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="footer" id="contact">
      <div className="row">
        <div className="col-md-4" data-aos="fade-up">
          <h3>Mission</h3>
          <p className="text-justify">
            Our mission is to deliver expert hybrid battery solutions that
            enhance vehicle performance, prioritize sustainability, and provide
            exceptional customer care, all while driving innovation and
            contributing to a greener future through environmentally responsible
            practices.
          </p>
        </div>
        <div className="col-md-2" data-aos="fade-up" data-aos-delay="200">
          <h3>Links</h3>
          <ul>
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
          </ul>
        </div>
        <div className="col-md-3" data-aos="fade-up" data-aos-delay="400">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://web.facebook.com/profile.php?id=100027804542462"
              >
                <img src={facebook} alt="facebook" className="social-icon" />
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://wa.me/+923139804929">
                <img src={WhatsApp} alt="WhatsApp" className="social-icon" />
                <span>WhatsApp</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UC3PHKti_MhDr_o1xqmlvaCg"
              >
                <img src={youtube} alt="youtube" className="social-icon" />
                <span>YouTube</span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/zaheerabbas6145/?hl=en"
              >
                <img src={instagram} alt="instagram" className="social-icon" />
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-3" data-aos="fade-up" data-aos-delay="600">
          <h3>Contact Us</h3>
          <ul>
            <li>
              <a href="mailto:zabbas092002@gmail.com">
                <img src={email} alt="email" className="social-icon" />
                Zabbas092002@gmail.com
              </a>
            </li>
            <li>
              <img src={phone_call} alt="phone_call" className="social-icon" />
              <a href="tel:+923019711007">+923139804929</a>
            </li>
            <li>
              <img src={location} alt="location" className="social-icon" />
              <a href="https://goo.gl/maps/ZaheerAbbasLocation" target="blank">
                Village Tano Tehsil Lahor Distt Swabi
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-footer" data-aos="fade-up" data-aos-delay="800">
        <p className="text-copyright text-center">
          © 2024 Zaheer's Portfolio All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

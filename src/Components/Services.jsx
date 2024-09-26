import React, { useEffect } from 'react';
import './Services.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      easing: 'ease-in-out', // Animation easing
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []);

  return (
    <div className="services-section py-5" id="services">
      <div className="container">
        <h2 className="text-center mb-5" data-aos="fade-up">My Services</h2>
        <div className="row">
          <div className="col-md-4" data-aos="fade-right">
            <div className="card service-card">
              <div className="card-body text-center">
                <i className="fas fa-code service-icon mb-3"></i>
                <h5 className="card-title">Web Development</h5>
                <p className="card-text">
                  Creating responsive, dynamic, and feature-rich websites tailored to your business needs.
                  Our web development services ensure a strong online presence and user-friendly experience.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up">
            <div className="card service-card">
              <div className="card-body text-center">
                <i className="fas fa-mobile-alt service-icon mb-3"></i>
                <h5 className="card-title">Mobile App Development</h5>
                <p className="card-text">
                  We develop mobile applications that offer seamless performance and a great user experience
                  across various platforms, ensuring that your app reaches a wide audience effectively.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-left">
            <div className="card service-card">
              <div className="card-body text-center">
                <i className="fas fa-laptop-code service-icon mb-3"></i>
                <h5 className="card-title">Software Development</h5>
                <p className="card-text">
                  Our software development services cover everything from custom software solutions to system
                  integrations, ensuring that your business operations run smoothly and efficiently.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-4" data-aos="fade-right">
            <div className="card service-card">
              <div className="card-body text-center">
                <i className="fas fa-cloud service-icon mb-3"></i>
                <h5 className="card-title">Cloud Services</h5>
                <p className="card-text">
                  We offer cloud services that provide scalable, secure, and reliable cloud solutions.
                  Our expertise ensures your business can leverage the full potential of cloud technology.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up">
            <div className="card service-card">
              <div className="card-body text-center">
                <i className="fas fa-shield-alt service-icon mb-3"></i>
                <h5 className="card-title">Cybersecurity</h5>
                <p className="card-text">
                  Protect your digital assets with our comprehensive cybersecurity services. We provide
                  robust security measures to safeguard your business against cyber threats.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-left">
            <div className="card service-card">
              <div className="card-body text-center">
                <i className="fas fa-search service-icon mb-3"></i>
                <h5 className="card-title">SEO Optimization</h5>
                <p className="card-text">
                  Boost your online visibility and drive more traffic to your website with our expert
                  SEO optimization services. We help you rank higher on search engines and reach your target audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

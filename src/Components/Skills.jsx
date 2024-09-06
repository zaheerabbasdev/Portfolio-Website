import React, { useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      const progressBars = document.querySelectorAll('.progress-bar');

      if (skillsSection) {
        const sectionTop = skillsSection.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (sectionTop < triggerPoint) {
          progressBars.forEach((bar) => {
            bar.style.width = bar.getAttribute('data-progress');
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className="skill-section" id="skills">
        <div className="container py-5">
          <h2 className="text-center mb-4 skill-heading">My Skills</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="skill-item mb-4">
                <h4>HTML</h4>
                <span className="progress-value">90%</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '0%' }}
                    data-progress="90%"
                  ></div>
                </div>
              </div>
              <div className="skill-item mb-4">
                <h4>JavaScript</h4>
                <span className="progress-value">80%</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '0%' }}
                    data-progress="80%"
                  ></div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="skill-item mb-4">
                <h4>CSS</h4>
                <span className="progress-value">75%</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '0%' }}
                    data-progress="75%"
                  ></div>
                </div>
              </div>
              <div className="skill-item mb-4">
                <h4>React</h4>
                <span className="progress-value">85%</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '0%' }}
                    data-progress="85%"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="skill-item mb-4">
                <h4>Python</h4>
                <span className="progress-value">90%</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '0%' }}
                    data-progress="90%"
                  ></div>
                </div>
              </div>
              <div className="skill-item mb-4">
                <h4>SQL</h4>
                <span className="progress-value">80%</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '0%' }}
                    data-progress="80%"
                  ></div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="skill-item mb-4">
                <h4>Django</h4>
                <span className="progress-value">75%</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '0%' }}
                    data-progress="75%"
                  ></div>
                </div>
              </div>
              <div className="skill-item mb-4">
                <h4>Node JS</h4>
                <span className="progress-value">85%</span>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: '0%' }}
                    data-progress="85%"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

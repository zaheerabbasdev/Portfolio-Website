import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Portfolio.css";
import englishthesaurus from "../assets/images/app-1.webp";
import spanishthesaurus from "../assets/images/app-2.webp";
import englishdictionary from "../assets/images/app-3.webp";
import textscanner from "../assets/images/app-4.webp";
import urdudictionary from "../assets/images/app-5.webp";
import englishthesaurus2 from "../assets/images/app-6.webp";
import zain from "../assets/images/logo.png";
import hybridhub from "../assets/images/logo2.png";

const Portfolio = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 3000, // Set the animation duration to 1200ms
      easing: 'ease-in-out', // Animation easing
      once: true,
    });
  }, []);

  // Filter function for the portfolio items
  const filterSelection = (category) => {
    const elements = document.querySelectorAll(".column");
    if (category === "all") {
      elements.forEach((el) => el.classList.remove("hide"));
    } else {
      elements.forEach((el) => {
        if (el.classList.contains(category)) {
          el.classList.remove("hide");
        } else {
          el.classList.add("hide");
        }
      });
    }

    // Update button active state
    const buttons = document.querySelectorAll("#myBtnContainer .btn");
    buttons.forEach((btn) => btn.classList.remove("active"));
    document
      .querySelector(
        `#myBtnContainer .btn[onclick="filterSelection('${category}')"]`
      )
      .classList.add("active");
  };

  return (
    <div className="portfolio-section" id="portfolio">
      <div className="main">
        <h2 data-aos="fade-up">My Portfolio</h2>
        <div id="myBtnContainer" data-aos="fade-up">
          <button className="btn active" onClick={() => filterSelection("all")}>
            All Projects
          </button>
          <button className="btn" onClick={() => filterSelection("web")}>
            Web Projects
          </button>
          <button className="btn" onClick={() => filterSelection("app")}>
            App Projects
          </button>
        </div>

        <div className="row">
          <div className="column web" data-aos="fade-up">
            <div className="content">
              <img src={zain} alt="zain" style={{ width: "50%" }} />
              <h4>Zain Umrah Transport</h4>
              <p>
                Zain Umrah Transport provides reliable and efficient
                transportation services for pilgrims, ensuring a comfortable and
                safe journey for Umrah travelers.
              </p>
              <a
                href="https://zainumrahtransport.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="column web" data-aos="fade-up">
            <div className="content">
              <img
                src={hybridhub}
                alt="webhybridhub"
                style={{ width: "50%" }}
              />
              <h4>Hybrid Battery Hub</h4>
              <p>
                Hybrid Battery Hub specializes in providing high-quality hybrid
                battery solutions, offering reliable replacement, repair, and
                maintenance services for hybrid vehicles.
              </p>
              <a
                href="https://hybridhub.pk/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="column web" data-aos="fade-up">
            <div className="content">
              <img src={zain} alt="zain" style={{ width: "50%" }} />
              <h4>Zain Umrah Transport</h4>
              <p>
                Zain Umrah Transport provides reliable and efficient
                transportation services for pilgrims, ensuring a comfortable and
                safe journey for Umrah travelers.
              </p>
              <a
                href="https://zainumrahtransport.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="column app" data-aos="fade-up">
            <div className="content">
              <img
                src={englishthesaurus}
                alt="englishthesaurus"
                style={{ width: "50%" }}
              />
              <h4>English Thesaurus</h4>
              <p>
                English Thesaurus is a comprehensive resource that provides
                synonyms, antonyms, and related words to enhance vocabulary.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=sh.eagletech.englishthesauruspro"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="column app" data-aos="fade-up">
            <div className="content">
              <img
                src={spanishthesaurus}
                alt="spanishthesaurus"
                style={{ width: "50%" }}
              />
              <h4>Spanish Thesaurus</h4>
              <p>
                Spanish Thesaurus is free and offline Spanish Language
                application to learn Spanish with the help of Spanish word. It
                contains more than 400,000 words.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=ms.eagletech.tesauro"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="column app" data-aos="fade-up">
            <div className="content">
              <img
                src={englishdictionary}
                alt="englishdictionary"
                style={{ width: "50%" }}
              />
              <h4>English Dictionary</h4>
              <p>
                An English Dictionary is a reference tool that provides
                definitions, pronunciations, word origins, and usage examples
                for words in the English language.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=sh.eagletech.englishdictionary"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="column app" data-aos="fade-up">
            <div className="content">
              <img
                src={textscanner}
                alt="textscanner"
                style={{ width: "50%" }}
              />
              <h4>Text Scanner</h4>
              <p>
                Text Scanner converts text from images captured by camera or
                selected from your gallery into editable text and translates it
                into multiple languages.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=mh.eagletech.textscanner"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="column app" data-aos="fade-up">
            <div className="content">
              <img
                src={urdudictionary}
                alt="urdudictionary"
                style={{ width: "50%" }}
              />
              <h4>English China Urdu Dictionary</h4>
              <p>
                The English Chinese Urdu Dictionary is an offline tool with over
                202,566 words, offering automatic translations between English,
                Chinese, and Urdu.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=sh.eagletech.ecudic"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Project
              </a>
            </div>
          </div>

          <div className="column app" data-aos="fade-up">
            <div className="content">
              <img
                src={englishthesaurus2}
                alt="englishthesaurus2"
                style={{ width: "50%" }}
              />
              <h4>English Thesaurus Pro</h4>
              <p>
                English Thesaurus Pro is an offline resource with over 200,000
                words and their grammar, definitions, antonyms, and synonyms.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=sh.csacademy.englishthesaurus"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

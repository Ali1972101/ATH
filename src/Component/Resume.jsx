import React from "react";
import "./Resume.css";
import avatarImg from "../assets/willi_abern.png";

const Resume = () => {
  return (
    <div className="cv-wrapper">
      {/* Header Container */}
      <div className="cv-header-container">
        <div className="cv-header-left">
          <img src={avatarImg} alt="Adamu Ahmed" className="cv-avatar" />
        </div>
        <div className="cv-header-right">
          <h1 className="cv-name">Adamu Ahmed</h1>
          <p className="cv-title">Web Developer</p>
        </div>
      </div>

      {/* Body Content */}
      <div className="cv-body">
        {/* Left Column */}
        <div className="cv-left-col">
          {/* Contact Details */}
          <h3 className="cv-section-title-left">Contact Details</h3>
          <div className="cv-contact-list">
            <div className="cv-contact-item">
              <div className="cv-icon-bubble">
                <svg viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <a href="mailto:Adamuahmed783@gmail.com" className="cv-email-link">
                Adamuahmed783@gmail.com
              </a>
            </div>

            <div className="cv-contact-item">
              <div className="cv-icon-bubble">
                <svg viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <span>09060898649</span>
            </div>

            <div className="cv-contact-item">
              <div className="cv-icon-bubble">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <span>Abuja, Nigeria</span>
            </div>
          </div>

          {/* Education */}
          <h3 className="cv-section-title-left">Education</h3>
          <div className="cv-education-item">
            <div className="cv-degree">
              <span className="cv-bullet-dot">•</span>
              <span>Higher National Diploma in Computer Science</span>
            </div>
            <div className="cv-subtext">Federal Polytechnic, Auchi</div>
            <div className="cv-subtext">2021 - 2023</div>
          </div>

          {/* Skills */}
          <h3 className="cv-section-title-left">Skills</h3>
          <ul className="cv-skills-list">
            <li>HTML - Expert</li>
            <li>CSS - Expert</li>
            <li>JavaScript - Expert</li>
            <li>jQuery - Expert</li>
            <li>AJAX - Expert</li>
            
          </ul>
        </div>

        {/* Right Column */}
        <div className="cv-right-col">
          {/* Summary */}
          <h2 className="cv-section-title-right">Summary</h2>
          <p className="cv-summary-text">
            Experienced Web Developer with 5+ years of success creating and
            maintaining high-quality websites. Skilled in HTML, CSS, JavaScript, and
            PHP.
          </p>

          {/* Work Experience */}
          <h2 className="cv-section-title-right">Work Experience</h2>
          
          <div className="cv-job-block">
            <h3 className="cv-job-title">Web Developer, NEOCLOUD </h3>
            <div className="cv-job-dates">Jan 2025 - Present</div>
            <ul className="cv-bullets">
              <li>
                Developed a wide range of websites using HTML, CSS, JavaScript,
                and jQuery.
              </li>
              <li>
                Designed and implemented a website for a large online retailer,
                resulting in a 300% increase in sales. 
              </li>
              <li>
                Developed and maintained web applications for a variety of
                clients across different industries.
              </li>
            </ul>
          </div>

          <div className="cv-job-block">
            <h3 className="cv-job-title">Web Developer, Teckcocon</h3>
            <div className="cv-job-dates">Nov 2023 - May 2024</div>
            <ul className="cv-bullets"> 
              <li>
                Participated in the full software development life cycle, from
                requirements gathering to final deployment.
              </li>
              <li>
                Collaborated with designers and back-end developers to ensure a
                successful integration of web applications.
              </li>
              <li>Optimized websites for maximum speed and scalability.</li>
            </ul> 
          </div>

          {/* References */}
          <h2 className="cv-section-title-right">References</h2>
          <p className="cv-summary-text">References available upon request</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;

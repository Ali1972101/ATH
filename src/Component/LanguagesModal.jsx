import React from "react";
import "./LanguagesModal.css";

import jsImg from "../assets/tech_icons/js.png";
import htmlImg from "../assets/tech_icons/html.png";
import cssImg from "../assets/tech_icons/css.png";
import tailwindImg from "../assets/tech_icons/tailwind.png";
import scssImg from "../assets/tech_icons/scss.png";
import reactImg from "../assets/tech_icons/react.png";
import expressImg from "../assets/tech_icons/express.png";
import nodeImg from "../assets/tech_icons/node.png";
import reactnativeImg from "../assets/tech_icons/reactnative.png";
import vueImg from "../assets/tech_icons/vue.png";
import nuxtImg from "../assets/tech_icons/nuxt.png";
import nextImg from "../assets/tech_icons/next.png";
import bootstrapImg from "../assets/tech_icons/bootstrap.png";

import gitImg from "../assets/tech_icons/git.png";
import gsapImg from "../assets/tech_icons/gsap.png";
import framerImg from "../assets/tech_icons/framer.png";
import mongodbImg from "../assets/tech_icons/mongodb.png";
import npmImg from "../assets/tech_icons/npm.png";
import vercelImg from "../assets/tech_icons/vercel.png";
import gcloudImg from "../assets/tech_icons/gcloud.png";
import reduxImg from "../assets/tech_icons/redux.png";
import prismaImg from "../assets/tech_icons/prisma.png";
import haystackImg from "../assets/tech_icons/haystack.png";

const LanguagesModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const languages = [
    { name: "Javascript", img: jsImg },
    { name: "HTML", img: htmlImg },
    { name: "CSS", img: cssImg },
    { name: "Tailwind Css", img: tailwindImg },
    { name: "SCSS", img: scssImg },
    { name: "React", img: reactImg },
    { name: "Express", img: expressImg },
    { name: "Node Js", img: nodeImg },
    { name: "React Native", img: reactnativeImg },
    { name: "Vue Js", img: vueImg },
    { name: "Nuxt Js", img: nuxtImg },
    { name: "Next Js", img: nextImg },
    { name: "Bootstrap", img: bootstrapImg },
  ];

  const tools = [
    { name: "Git", img: gitImg },
    { name: "Gsap", img: gsapImg },
    { name: "Framer Motion", img: framerImg },
    { name: "MongoDb", img: mongodbImg },
    { name: "NPM", img: npmImg },
    { name: "Vercel", img: vercelImg },
    { name: "Google Cloud Services", img: gcloudImg },
    { name: "Redux", img: reduxImg },
    { name: "Prisma", img: prismaImg },
    { name: "Haystack", img: haystackImg },
  ];

  return (
    <div className="tech-modal-overlay" onClick={onClose}>
      <div className="tech-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button X */}
        <button className="tech-modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="tech-modal-scrollable">
          {/* Top Section: Languages & Frameworks Grid */}
          <div className="tech-grid">
            {languages.map((item, index) => (
              <div key={index} className="tech-card">
                <div className="tech-card-icon">
                  <img src={item.img} alt={item.name} className="tech-icon-img" />
                </div>
                <span className="tech-card-name">{item.name}</span>
              </div>
            ))}
          </div>

          {/* Middle Section: AREA OF FOCUS Header */}
          <div className="tech-divider-section">
            <span className="tech-section-label">Languages & Frameworks</span>
            <h2 className="tech-main-heading">AREA OF FOCUS</h2>
            <span className="tech-section-label">Tools & platforms</span>
          </div>

          {/* Bottom Section: Tools & platforms Grid */}
          <div className="tech-grid">
            {tools.map((item, index) => (
              <div key={index} className="tech-card">
                <div className="tech-card-icon">
                  <img src={item.img} alt={item.name} className="tech-icon-img" />
                </div>
                <span className="tech-card-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguagesModal;

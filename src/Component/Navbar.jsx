import React, { useState } from "react";
import "./Navbar.css";
import Button from "../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import ATH from "../assets/ATHNEW.png";
import LanguagesModal from "./LanguagesModal";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOpenLanguages = () => {
    setIsOpen(false);
    setIsModalOpen(true);
  };

  const handleNavigate = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <div className="navbar">
        <div className="logo">
          <Link to="/">
            <img style={{ width: "90px", height: "80px", objectFit: "contain" }} src={ATH} alt="Logo" />
          </Link>
        </div>

        {/* Standard Desktop Nav Links */}
        <div className="nav-links desktop-only-links">
          <ul>
            <li>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" style={{ textDecoration: "none", color: "inherit" }}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/portfolio" style={{ textDecoration: "none", color: "inherit" }}>
                Portfolio
              </Link>
            </li>
            <li onClick={() => setIsModalOpen(true)} style={{ cursor: "pointer" }}>
              Languages
            </li>
          </ul>
        </div>

        <div className="bt desktop-only-bt">
          <Link to="/discuss" style={{ textDecoration: "none" }}>
            <Button name="Contact Us" className="btn2" />
          </Link>
        </div>
      </div>  

      {/* Floating Dark Hamburger Button (Bottom Right) */}
      <button
        className={`floating-hamburger-btn ${isOpen ? "open" : ""}`}
        onClick={toggle}
        aria-label="Menu"
      >
        <div className="hamburger-bars">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </button>

      {/* Floating Dark Contact/Message Button (Bottom Left - Matching Screenshot) */}
      <button
        className="floating-contact-btn"
        onClick={() => handleNavigate("/contact")}
        aria-label="Contact Us"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a3c1e2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="6" width="15" height="12" rx="2" />
          <path d="M6 8l7.5 5.5L21 8" />
          <line x1="1" y1="10" x2="4" y2="10" />
          <line x1="1" y1="14" x2="3" y2="14" />
        </svg>
      </button>

      {/* Radial / Arc Floating Menu Overlay (Matching Screenshot 1-to-1) */}
      <div
        className={`floating-arc-overlay ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`arc-menu-container ${isOpen ? "visible" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* PROFILE */}
          <div
            className="arc-menu-item arc-profile"
            onClick={() => handleNavigate("/")}
          >
            <div className="arc-icon-wrap">
              <svg width="46" height="46" viewBox="0 0 64 64" fill="none">
                <path d="M32 38C40.8366 38 48 45.1634 48 54H16C16 45.1634 23.1634 38 32 38Z" fill="#93C5FD" />
                <circle cx="32" cy="24" r="12" fill="#FDE68A" />
                <path d="M22 22C22 15.3726 26.4772 10 32 10C37.5228 10 42 15.3726 42 22C42 22.5 41.5 24 41.5 24C39 20 35 18 32 18C29 18 25 20 22.5 24C22.5 24 22 22.5 22 22Z" fill="#F97316" />
              </svg>
            </div>
            <span className="arc-item-label">PROFILE</span>
          </div>

          {/* LANGUAGES */}
          <div
            className="arc-menu-item arc-languages"
            onClick={handleOpenLanguages}
          >
            <div className="arc-icon-wrap">
              <svg width="46" height="46" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="14" r="4" fill="#EF4444" />
                <path d="M32 18L18 50" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
                <path d="M32 18L46 50" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
                <path d="M22 36H42" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
                <circle cx="32" cy="36" r="3" fill="#EF4444" />
                <path d="M32 10V18" stroke="#EF4444" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </div>
            <span className="arc-item-label">LANGUAGES</span>
          </div>

          {/* SERVICES */}
          <div
            className="arc-menu-item arc-projects"
            onClick={() => handleNavigate("/services")}
          >
            <div className="arc-icon-wrap">
              <svg width="46" height="46" viewBox="0 0 64 64" fill="none">
                <rect x="12" y="14" width="40" height="36" rx="4" fill="#FFFFFF" stroke="#93C5FD" strokeWidth="3" />
                <path d="M12 18C12 15.7909 13.7909 14 16 14H48C50.2091 14 52 15.7909 52 18V22H12V18Z" fill="#BFDBFE" />
                <circle cx="17" cy="18" r="1.5" fill="#60A5FA" />
                <circle cx="22" cy="18" r="1.5" fill="#60A5FA" />
                <circle cx="27" cy="18" r="1.5" fill="#60A5FA" />
                <rect x="16" y="27" width="12" height="18" rx="2" fill="#DDD6FE" />
                <rect x="32" y="27" width="16" height="3" rx="1.5" fill="#CBD5E1" />
                <rect x="32" y="33" width="16" height="3" rx="1.5" fill="#CBD5E1" />
                <rect x="32" y="39" width="12" height="3" rx="1.5" fill="#CBD5E1" />
              </svg>
            </div>
            <span className="arc-item-label">SERVICES</span>
          </div>

          {/* RESUME */}
          <div
            className="arc-menu-item arc-resume"
            onClick={() => handleNavigate("/portfolio")}
          >
            <div className="arc-icon-wrap">
              <svg width="46" height="46" viewBox="0 0 64 64" fill="none">
                <path d="M16 14C16 11.7909 17.7909 10 20 10H36L48 22V50C48 52.2091 46.2091 54 44 54H20C17.7909 54 16 52.2091 16 50V14Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="3" />
                <path d="M36 10V22H48" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="3" strokeLinejoin="round" />
                <rect x="22" y="28" width="20" height="3" rx="1.5" fill="#CBD5E1" />
                <rect x="22" y="34" width="20" height="3" rx="1.5" fill="#CBD5E1" />
                <rect x="22" y="40" width="14" height="3" rx="1.5" fill="#CBD5E1" />
              </svg>
            </div>
            <span className="arc-item-label">RESUME</span>
          </div>
        </div>
      </div>

      <LanguagesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;

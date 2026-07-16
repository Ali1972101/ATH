import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../assets/LOGO.png";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <button
          onClick={toggle}
          style={{ background: "transparent", border: "none" }}
        >
          {!isOpen ? (
            <div className="icon-hamburger">&#9776;</div>
          ) : (
            <div className="close-btn">&#x2715;</div>
          )}
        </button>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link
                to="/"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
        <div className={`bt ${isOpen ? "active" : ""}`}>
          <Link
            to="/discuss"
            onClick={() => setIsOpen(false)}
            className="mobile-only-btn"
            style={{ textDecoration: "none" }}
          >
            <Button name="Let's Discuss Your Project" className="btn4" />
          </Link>

          <Link to="/contact" onClick={() => setIsOpen(false)} style={{ textDecoration: "none" }}>
            <Button name="Contact Us" className="btn2" />
          </Link>

          {/* <Button name="Join Now" className="btn2" /> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;

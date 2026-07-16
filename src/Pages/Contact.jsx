import React from "react";
import "./Contact.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import instagram from "../assets/icon-instagram.svg";
import phone from "../assets/phone.png";
import mail from "../assets/email.svg";
import location from "../assets/location.png";
import Navbar from "../Component/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Link style={{ textDecoration: "none" }} to="/contact">
        <section className="contact" style={{ overflow: "hidden" }}>
          <div style={{ textAlign: "center" }}>
            <h1>Get In Touch</h1>
            <p>
              We'd love to hear from you. Send us a message and we'll get back
              to you as soon as possible.
            </p>
          </div>

          <section className="main-container">
            <div className="form">
              <div style={{ display: "flex", gap: "10px" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label style={{ color: "white" }} htmlFor="name">
                    First Name
                  </label>
                  <input type="text" id="name" />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label style={{ color: "white" }} htmlFor="name">
                    Last Name
                  </label>
                  <input type="text" id="name" />
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ color: "white" }} htmlFor="name">
                  Email
                </label>
                <input type="text" id="name" />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ color: "white" }} htmlFor="name">
                  Phone
                </label>
                <input type="text" id="name" />
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ color: "white" }} htmlFor="name">
                  Message
                </label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
              </div>
              <Button name="Send Message" className="btn3" />
            </div>
          </section>
        </section>

        <section className="section2" style={{ overflow: "hidden" }}>
          <div className="sub-sec">
            <h1 style={{ textAlign: "center", padding: "20px" }}>Contact Us</h1>
            <div>
              <h1
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                {" "}
                <img
                  style={{
                    border: "1px solid white",
                    backgroundColor: "white",
                  }}
                  src={phone}
                  alt=""
                />
                +234 9060898649{" "}
              </h1>
              <h1
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                {" "}
                <img
                  style={{
                    border: "1px solid white",
                    backgroundColor: "white",
                    width: "30px",
                    height: "30px",
                    padding: "2px",
                  }}
                  src={mail}
                  alt=""
                />
                Alitechhub@gmail.com{" "}
              </h1>
              <h1
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                {" "}
                <img
                  style={{
                    border: "1px solid white",
                    backgroundColor: "white",
                  }}
                  src={location}
                  alt=""
                />
                Abuja,Nigeria{" "}
              </h1>
              <h1> </h1>
            </div>
          </div>
          <div className="sub-sec">
            <h1 style={{ textAlign: "center", padding: "20px" }}>
              Catch Us Online
            </h1>
            <div className="social-media" style={{ display: "flex" }}>
              <h1
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {" "}
                <img src={facebook} alt="" />
                Alitechhub{" "}
              </h1>
              <h1
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {" "}
                <img src={instagram} alt="" />
                Ali_techhub{" "}
              </h1>
              <h1
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {" "}
                <img src={twitter} alt="" />
                Alitechhub72{" "}
              </h1>
            </div>
          </div>
        </section>
      </Link>
    </>
  );
};

export default Contact;

import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import custom from "../assets/custom.avif";
import Ecommerce from "../assets/Ecommerce.png";
import responsive from "../assets/responsive.png";
import support from "../assets/support.png";
import perform from "../assets/perform.png";
import fot from "../assets/fot.png";
import Button from "../Button/Button";
import Navbar from "../Component/Navbar";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import instagram from "../assets/icon-instagram.svg";
const Service = () => {
  return (
    <>
    <Navbar />
      <section className="service">
        <main>
          <h1
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "greenyellow",
            }}
          >
            We Design. <span style={{ color: "white" }}>You Grow.</span>
          </h1>
          <p>
            We Create beautiful, functional, and high performing websites that
            turn visitors into customers.
          </p>
        </main>
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <main className="serv" style={{ display: "flex", gap: "40px" }}>
            <div className="service-box">
              <img src={custom} alt="" />
              <h3>
                Custom Web <br />
                Design <br />{" "}
                <hr
                  style={{
                    width: "20px",
                    marginTop: "10px",
                    border: "none",
                    height: "2px",
                    backgroundColor: "greenyellow",
                  }}
                />
              </h3>
              <p style={{ marginTop: "10px" }}>
                We design unique, modern, and user-friendly websites tailored{" "}
                <br /> to your brand and goals.
              </p>
            </div>
            <div className="service-box">
              <img src={responsive} alt="" />
              <h3>
                Responsive <br /> Design <br />
                <hr
                  style={{
                    width: "20px",
                    marginTop: "10px",
                    border: "none",
                    height: "2px",
                    backgroundColor: "greenyellow",
                  }}
                />
              </h3>
              <p style={{ marginTop: "10px" }}>
                Every website we buid looks stuning on all devices - desktop,
                tablets, and mobile.{" "}
              </p>
            </div>

            <div className="service-box">
              <img style={{ backgroundColor: "white" }} src={perform} alt="" />
              <h3>
                Performance <br /> Optimization <br />{" "}
                <hr
                  style={{
                    width: "20px",
                    marginTop: "10px",
                    border: "none",
                    height: "2px",
                    backgroundColor: "greenyellow",
                  }}
                />
              </h3>
              <p style={{ marginTop: "10px" }}>
                We optimize speed, performance, and SEO to ensure your website
                ranks higher and loads faster.{" "}
              </p>
            </div>
          </main>

          <main className="serv"
            style={{ display: "flex", gap: "40px", justifyContent: "center" }}
          >
            <div className="service-box">
              <img src={fot} alt="" />
              <h3>
                Frontend <br />
                Development <br />
                <hr
                  style={{
                    width: "20px",
                    marginTop: "10px",
                    border: "none",
                    height: "2px",
                    backgroundColor: "greenyellow",
                  }}
                />
              </h3>
              <p style={{ marginTop: "10px" }}>
                Clean, efficient, and scalable code using the latest
                technologies.
              </p>
            </div>
            <div className="service-box">
              <img src={Ecommerce} alt="" />
              <h3>
                E-Commerce <br /> Solutions <br />
                <hr
                  style={{
                    width: "20px",
                    marginTop: "10px",
                    border: "none",
                    height: "2px",
                    backgroundColor: "greenyellow",
                  }}
                />
              </h3>
              <p style={{ marginTop: "10px" }}>
                We build secure, feature-rich, and easy-to-manage e-commerce
                websites that drive sales.
              </p>
            </div>

            <div className="service-box">
              <img src={support} alt="" />
              <h3>
                Support & <br /> Maintainance
                <br />{" "}
                <hr
                  style={{
                    width: "20px",
                    marginTop: "10px",
                    border: "none",
                    height: "2px",
                    backgroundColor: "greenyellow",
                  }}
                />
              </h3>
              <p style={{ marginTop: "5px", marginBottom: "5%" }}>
                We provide ongoing support and maintenance to keep your website
                secured and running smoothly.
              </p>
            </div>
          </main>
        </section>
        <div className="bt">
          <Link to="/discuss">
            <Button name="Let's Discuss Your Project" className="btn4" />
          </Link>

          <Link to="/contact">
            <Button name="Contact Us" className="btn2" />
          </Link>

          {/* <Button name="Join Now" className="btn2" /> */}
        </div>
        <div className="social">
                  <Link
                    to="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={facebook} alt="" />
                  </Link>
                  <Link
                    to="https://www.x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={twitter} alt="" />
                  </Link>
                  <Link
                    to="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={instagram} alt="" />
                  </Link>
                </div>
      </section>
    </>
  );
};

export default Service;

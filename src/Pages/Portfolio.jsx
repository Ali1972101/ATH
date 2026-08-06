import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import frontendimg from "../assets/frontendimg.webp";
import backendimg from "../assets/backendimg.webp";
import appdev from "../assets/appdev.png";
import Navbar from "../Component/Navbar";
import Resume from "../Component/Resume";

const Portfolio = () => {
  return (
    <>
    <Navbar />
      <section style={{ justifyItems: "center" }} className="conti">
        <Resume />
        <main style={{ justifyItems: "center" }}>
          <h1
            style={{
              marginTop: "20px",
              padding: "10px",
              color: "greenyellow",
            }} className="w"
          >
            What I Do
          </h1>
          <section className="yell"
            style={{ display: "flex", gap: "40px", justifyContent: "center", }}  
          >
            <div className="frontend">
              <img src={frontendimg} alt="" />
              <div>
                <h3 style={{ marginBottom: "20px" , marginTop: "30px" }}>
                  Web Frontend Development
                </h3>
                <p  style={{ marginBlock: "20px" }}>
                  With a robust proficiency in <br />{" "}
                  <span style={{ fontWeight: "bold" }}>React.js.</span> I excel
                  at transforming <br /> design concepts into dynamic user{" "}
                  <br /> friendly websites
                </p>
              </div>
            </div>

            <div className="frontend">
              <img src={backendimg} alt="" />
              <div>
                <h3 style={{ marginBottom: "24px", marginTop: "30px" }}>
                  Web Backend Development
                </h3>
                <p style={{ marginBlock: "20px" }}>
                  Skilled in{" "}
                  <span style={{ fontWeight: "bold" }}>
                    Node.js and Express.js.
                  </span>{" "}
                  I <br /> build scalable backend systems and <br /> efficient
                  server side solution using modern <br />{" "}
                  <span style={{ fontWeight: "bold" }}>
                    RESTful APIs, MongoDB, and Database <br />
                  </span>{" "}
                </p>
              </div>
            </div>
          </section>
          <div className="frontend">
            <img src={appdev} alt="" />
            <div>
              <h3 style={{ marginBottom: "24px", marginTop: "30px" }}>
                App Development
              </h3>
              <p style={{ marginBlock: "20px" }}>
                Proficient in{" "}
                <span style={{ fontWeight: "bold" }}>
                  Flutter and Firebase.
                </span>{" "}
                I <br /> Build high-performance mobile applications with real
                time data synchronization secure authentication, <br /> and
                seamless cloud integration <br />
              </p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Portfolio;

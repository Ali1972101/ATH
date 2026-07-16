import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import site from "../assets/site.avif";
import laptop from "../assets/laptop.jpg";
import Avatar from "../assets/Avatar.png";
import Navbar from "../Component/Navbar";



const Home = () => {
  return (
    <>
      <Navbar />


      <Link style={{ textDecoration: "none" }} to="/">
        <section className="sec">
          <main className="holder" style={{ display: "flex" }}>
            <div>
              <h1>
                Elevate Your <br />
                Brand To New <br />
                Heights.
              </h1>
              <p>
                We Build Websites That <br />
                Turn Visitors Into Customers.
              </p>
              <div className="bt">
                <Link to="/discuss">
                  <Button name="Let's Discuss Your Project" className="btn4" />
                </Link>

                <Link to="/contact">
                  <Button name="Contact Us" className="btn2" />
                </Link>

                {/* <Button name="Join Now" className="btn2" /> */}
              </div>
              <div className="box-container">
                <div className="box">
                  <h2>64+</h2>
                  <p2>Clients worldwide</p2>
                </div>
                <div className="box">
                  <h2>101+</h2>
                  <p2>Projects Completed</p2>
                </div>
                <div className="box">
                  <h2>4+</h2>
                  <p2>Years of Experience</p2>
                </div>
              </div>
            </div>
            <div>
              <img style={{ width: "100%" }} src={Avatar} alt="" />
            </div>
          </main>
          <section className="main-container">
            <main className="main">
              <h1>01</h1>
              <div>
                <h2>Radical Integrity</h2>
                <p>
                  We build trust by staying <br />
                  true to our commitments <br />
                  and delivering exceptional <br />
                  results.
                </p>
              </div>
            </main>
            <main className="main">
              <h1>02</h1>
              <div>
                <h2>People First</h2>
                <p>
                  We Prioritize our clients goals <br />
                  and user neeeds, creating <br />
                  seamless digital <br />
                  experiences.
                </p>
              </div>
            </main>
            <main className="main">
              <h1>03</h1>
              <div>
                <h2>Process Perfection </h2>
                <p>
                  Following a streamlined <br />
                  development process we deliver <br />
                  high-quality work efficiently <br />
                  and reliably.
                </p>
              </div>
            </main>
          </section>
        </section>
      </Link>
    </>
  );
};

export default Home;

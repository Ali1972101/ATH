import React from "react";
import { Link } from "react-router-dom";
import { CornerLeftUp } from "lucide-react";
import { BatteryCharging, Zap } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { CircleCheck } from "lucide-react";
import { Puzzle } from "lucide-react";
import { User } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { List } from "lucide-react";
import { MapPin } from "lucide-react";
import Button from "../Button/Button";
import "./Discuss.css";
import Navbar from "../Component/Navbar";
import bulb from "../assets/bulb.avif";
import rocket from "../assets/rocket.jpg";
import bow from "../assets/bow.avif";
import lappy from "../assets/pappy.png";
import facebook from "../assets/icon-facebook.svg";
import twitter from "../assets/icon-twitter.svg";
import instagram from "../assets/icon-instagram.svg";

const Discuss = () => {
  return (
    <>
      <Navbar />
      <section className="discuss" style={{ overflow: "hidden" }}>
        <main
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="fit">
            <div style={{ display: "flex" }}>
              <div>
                <h1
                  className="shit"
                  style={{
                    fontSize: "55px",
                    marginTop: "0px",
                    fontWeight: "800",
                  }}
                >
                  Let's Discuss <br /> Your{" "}
                  <span
                    style={{ color: "greenyellow" }}
                    className="curved-underline"
                  >
                    Project
                  </span>{" "}
                </h1>
                <p className="pipi">
                  Have an idea or a project in mind? I'd love to hear about it!{" "}
                  Let's collaborate and turn your ideas into a beautiful, high
                  performing website.
                </p>
                <main className="discuss-m">
                  <Button
                    name="Let's Discuss Your Project  &#8659; "
                    className="btn5"
                  />

                  <div className="tiki">
                    <CornerLeftUp color="#3b82f6" size={15} />
                    <p className="tit">I'm just a message away!</p>
                  </div>
                </main>
              </div>
              <div>
                <img className="pappy" src={lappy} alt="" />
              </div>
            </div>

            <section className="form2">
              <div className="form-holder">
                <div>
                  <h1>Send us a message </h1>
                  <p>We will get back to you as soon as possible</p>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "20px",
                      marginTop: "20px",
                    }}
                  >
                    <div
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "20px",
                        gap: "5px",
                        flex: "1 1 auto",
                      }}
                    >
                      <User className="user" size={10} />{" "}
                      <input
                        type="text"
                        placeholder="Full Name"
                        style={{ width: "100%" }}
                      />
                    </div>
                    <div
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "20px",
                        gap: "5px",
                        flex: "1 1 auto",
                      }}
                    >
                      <Mail className="mail" size={10} />{" "}
                      <input
                        type="email"
                        placeholder="Email Address"
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
                  >
                    <div className="liki"
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "20px",
                        gap: "5px",
                        flex: "1 1 auto",
                      }}
                    >
                      <Phone className="phone" size={10} />{" "}
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        style={{ width: "100%" }}
                      />
                      {/* <select name="" id="">
                    <option value="">Select</option>
                    <option value="">Select</option>
                    <option value="">Select</option>
                    <option value="">Select</option>
                  </select> */}
                      {/* <span className="dropdown-icon">▼</span> */}
                    </div>
                    <div
                      style={{
                        justifyContent: "center",
                        display: "flex",
                        flex: "1 1 auto",
                        alignItems: "self-start",
                      }}
                    >
                      <List
                        style={{ marginRight: "5px", marginTop: "5px" }}
                        className="list"
                        size={10}
                      />
                      <input
                        list="frameworks"
                        id="framework-choice"
                        name="framework-choice"
                        placeholder="Select Service"
                        style={{ width: "100%", marginBottom: "10px" }}
                      />
                      <datalist id="frameworks">
                        <option value="Web Development" />
                        <option value="App Development" />
                        {/* <option value="UI/UX Design" /> */}
                        {/* <option value="Digital Marketing" /> */}
                      </datalist>
                    </div>
                  </div>
                  <textarea
                    className="area"
                    name=""
                    id=""
                    placeholder="Tell me more about your project "
                  ></textarea>
                  <div>
                    <Button name="Send Message" className="btn6" />
                  </div>
                </div>
              </div>

              <main className="form-holder2">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "40px",
                    border: "1px solid white",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "100%",
                    boxShadow: "white 0px 2px 5px",
                  }}
                >
                  <User
                    className="user"
                    size={30}
                    style={{
                      border: "2px solid greenyellow",
                      borderRadius: "50%",
                      color: "greenyellow",
                      padding: "3px",
                    }}
                  />{" "}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                    }}
                  >
                    <h1 style={{ fontSize: "21px", fontWeight: "100px" }}>
                      Contact Information{" "}
                    </h1>
                    <p
                      style={{
                        fontSize: "15px",
                        fontWeight: "lighter",
                        // textAlign: "center",
                      }}
                    >
                      Choose the best way to reach me
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "40px",
                    border: "1px solid white",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "100%",
                    boxShadow: "white 0px 2px 5px",
                  }}
                >
                  <Mail
                    className="user"
                    size={30}
                    style={{
                      border: "2px solid greenyellow",
                      borderRadius: "50%",
                      color: "greenyellow",
                      padding: "3px",
                    }}
                  />{" "}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0px",
                    }}
                  >
                    <h1 style={{ fontSize: "15px", fontWeight: "100px" }}>
                      Email{" "}
                    </h1>
                    <p style={{ fontSize: "15px", fontWeight: "lighter" }}>
                      Alitechhub@gmail.com
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "40px",
                    border: "1px solid white",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "100%",
                    boxShadow: "white 0px 2px 5px",
                  }}
                >
                  <Phone
                    className="user"
                    size={30}
                    style={{
                      border: "2px solid greenyellow",
                      borderRadius: "50%",
                      color: "greenyellow",
                      padding: "3px",
                    }}
                  />{" "}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0px",
                    }}
                  >
                    <h1 style={{ fontSize: "15px", fontWeight: "100px" }}>
                      Phone{" "}
                    </h1>
                    <p style={{ fontSize: "15px", fontWeight: "lighter" }}>
                      +2349060898649
                    </p>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "0px",
                    border: "1px solid white",
                    padding: "10px",
                    borderRadius: "10px",
                    width: "100%",
                    boxShadow: "white 0px 2px 5px",
                  }}
                >
                  <MapPin
                    className="user"
                    size={30}
                    style={{
                      border: "2px solid greenyellow",
                      borderRadius: "50%",
                      color: "greenyellow",
                      padding: "3px",
                    }}
                  />{" "}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0px",
                    }}
                  >
                    <h1 style={{ fontSize: "15px", fontWeight: "100px" }}>
                      Location{" "}
                    </h1>
                    <p style={{ fontSize: "15px", fontWeight: "lighter" }}>
                      Lagos, Nigeria
                    </p>
                  </div>
                </div>
              </main>
            </section>
          </div>
        </main>
        <main className="discuss-main">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src={bulb} alt="" />
            <p>
              Creative <br /> Ideas
            </p>
            <hr className="short-line" />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src={rocket} alt="" />
            <p>
              Modern <br /> Solution
            </p>
            <hr className="short-line" />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src={bow} alt="" />
            <p>
              Results <br /> Oriented
            </p>
          </div>
        </main>

        <main className="fast">
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <Zap
              style={{
                width: "30px",
                height: "40px",
                border: "2px solid white",
                borderRadius: "10px",
                padding: "1px",
                boxShadow: "white 0px 2px 5px",
              }}
              className="text-yellow-500 absolute -top-1 right-0"
              size={26}
            />
            <div>
              <h1 style={{ fontSize: "15px", fontWeight: "300" }}>
                Fast Response
              </h1>
              <p style={{ fontSize: "10px", fontWeight: "100" }}>
                {" "}
                I reply quickly
              </p>
            </div>
            <hr className="short" />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <ShieldCheck
              style={{
                width: "30px",
                height: "40px",
                border: "2px solid white",
                borderRadius: "10px",
                padding: "1px",
                boxShadow: "white 0px 2px 5px",
              }}
            />
            <div>
              <h1 style={{ fontSize: "15px", fontWeight: "300" }}>
                Clear Communication
              </h1>
              <p style={{ fontSize: "10px", fontWeight: "100" }}>
                {" "}
                You'll always stay updated
              </p>
            </div>
            <hr className="short" />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <Puzzle
              style={{
                width: "30px",
                height: "40px",
                border: "2px solid white",
                borderRadius: "10px",
                padding: "1px",
                boxShadow: "white 0px 2px 5px",
              }}
            />
            <div>
              <h1 style={{ fontSize: "15px", fontWeight: "300" }}>
                Tailored Solution
              </h1>
              <p style={{ fontSize: "10px", fontWeight: "100" }}>
                {" "}
                Built for your goals
              </p>
            </div>
            <hr className="short" />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <CircleCheck
              size={24}
              strokeWidth={2}
              style={{
                width: "30px",
                height: "40px",
                border: "2px solid white",
                borderRadius: "10px",
                padding: "1px",
                boxShadow: "white 0px 2px 5px",
              }}
            />

            <div>
              <h1 style={{ fontSize: "15px", fontWeight: "300" }}>
                Reliable Support
              </h1>
              <p style={{ fontSize: "10px", fontWeight: "100" }}>
                {" "}
                Even after delivery
              </p>
            </div>
          </div>
        </main>
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

export default Discuss;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  CornerLeftUp,
  Zap,
  ShieldCheck,
  CircleCheck,
  Puzzle,
  User,
  Mail,
  Phone,
  List,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
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
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "Web Development",
        message: "",
      });
    }, 4000);
  };

  return (
    <>
      <Navbar />
      <section className="discuss-page-wrapper">
        <div className="discuss-container-inner">
          {/* Hero Header & Image Section */}
          <div className="discuss-hero-grid">
            <div className="discuss-hero-text">
              <span className="discuss-badge">
                <MessageSquare size={14} /> Start A Conversation
              </span>
              <h1 className="discuss-hero-title">
                Let's Discuss Your{" "}
                <span className="highlight-text curved-underline">
                  Project
                </span>
              </h1>
              <p className="discuss-hero-desc pipi">
                Have an idea or a project in mind? I'd love to hear about it!
                Let's collaborate and turn your ideas into a beautiful, high performing website.
              </p>

              <div className="discuss-cta-row">
                <a href="#inquiry-form" className="discuss-hero-btn-link">
                  <Button name="Let's Discuss Your Project ↓" className="btn5" />
                </a>
                <div className="response-hint">
                  <CornerLeftUp color="#3b82f6" size={16} />
                  <span>Prompt response within 24 hours</span>
                </div>
              </div>
            </div>

            <div className="discuss-hero-image-wrap pappy">
              <img className="discuss-laptop-img pappy" src={lappy} alt="Developer Workspace" />
            </div>
          </div>

          {/* Form & Contact Information Grid */}
          <div className="discuss-content-grid" id="inquiry-form">
            {/* Inquiry Form */}
            <div className="discuss-card inquiry-form-card form-holder">
              <div className="form-card-header">
                <h2>Send Us A Message</h2>
                <p>Fill out the details below and we'll get back to you promptly.</p>
              </div>

              {submitted ? (
                <div className="form-success-box">
                  <CheckCircle2 size={48} className="success-icon" />
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="inquiry-form">
                  <div className="form-row-two">
                    <div className="input-field-group">
                      <label htmlFor="fullName">
                        <User size={15} /> Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="input-field-group">
                      <label htmlFor="email">
                        <Mail size={15} /> Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-row-two">
                    <div className="input-field-group">
                      <label htmlFor="phone">
                        <Phone size={15} /> Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="09060898649"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="input-field-group">
                      <label htmlFor="service">
                        <List size={15} /> Select Service
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="Web Frontend Development">Web Frontend Development</option>
                        <option value="Web Backend Development">Web Backend Development</option>
                        <option value="App Development">App Development</option>
                        <option value="Full Stack Project">Full Stack Solution</option>
                      </select>
                    </div>
                  </div>

                  <div className="input-field-group">
                    <label htmlFor="message">
                      <MessageSquare size={15} /> Tell Me About Your Project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Describe your project goals, timeline, or scope..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-inquiry-btn">
                    <Send size={18} /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information Side Card */}
            <div className="discuss-card contact-info-card form-holder2">
              <div className="contact-info-header">
                <h2>Contact Info</h2>
                <p>Choose your preferred way to reach out.</p>
              </div>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="info-icon-badge">
                    <Mail size={20} />
                  </div>
                  <div className="info-details">
                    <span className="info-label">Email</span>
                    <a href="mailto:Adamuahmed783@gmail.com" className="info-value">
                      Adamuahmed783@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="info-icon-badge">
                    <Phone size={20} />
                  </div>
                  <div className="info-details">
                    <span className="info-label">Phone</span>
                    <a href="tel:09060898649" className="info-value">
                      09060898649
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="info-icon-badge">
                    <MapPin size={20} />
                  </div>
                  <div className="info-details">
                    <span className="info-label">Location</span>
                    <span className="info-value">Abuja, Nigeria</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="contact-social-section social">
                <span>Connect With Us</span>
                <div className="social-links">
                  <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="Facebook" />
                  </Link>
                  <Link to="https://www.x.com" target="_blank" rel="noopener noreferrer">
                    <img src={twitter} alt="Twitter" />
                  </Link>
                  <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} alt="Instagram" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars Section */}
          <div className="discuss-pillars-row discuss-main">
            <div className="pillar-card">
              <img src={bulb} alt="Ideas" />
              <div>
                <h3>Creative Ideas</h3>
                <p>Innovative design strategies tailored for maximum engagement.</p>
              </div>
            </div>

            <div className="pillar-card">
              <img src={rocket} alt="Solutions" />
              <div>
                <h3>Modern Solutions</h3>
                <p>State-of-the-art tech stack and optimized architecture.</p>
              </div>
            </div>

            <div className="pillar-card">
              <img src={bow} alt="Results" />
              <div>
                <h3>Result Oriented</h3>
                <p>Focused on conversions, speed, and business growth.</p>
              </div>
            </div>
          </div>

          {/* Trust Guarantees Bar */}
          <div className="discuss-trust-bar fast">
            <div className="trust-item">
              <Zap size={22} className="trust-icon" />
              <div>
                <h4>Fast Response</h4>
                <p>Quick turnaround & replies</p>
              </div>
            </div>

            <div className="trust-item">
              <ShieldCheck size={22} className="trust-icon" />
              <div>
                <h4>Clear Communication</h4>
                <p>Regular project updates</p>
              </div>
            </div>

            <div className="trust-item">
              <Puzzle size={22} className="trust-icon" />
              <div>
                <h4>Tailored Solutions</h4>
                <p>Built precisely for your goals</p>
              </div>
            </div>

            <div className="trust-item">
              <CircleCheck size={22} className="trust-icon" />
              <div>
                <h4>Reliable Support</h4>
                <p>Post-launch support</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Discuss;

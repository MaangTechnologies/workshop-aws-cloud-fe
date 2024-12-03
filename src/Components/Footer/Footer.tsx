import React, { useEffect, useState } from "react";
import Logo from "../../Assets/Logo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { authStatus } from "../../Utilities/common";
import { useSelector } from "react-redux";
import { Projects_Json, Services_Json } from "../../Utilities/constants";

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldShowScrollTop = scrollTop > 200; // Adjust this value based on your preference
      setShowScrollTop(shouldShowScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="footer-section">
      <div className="container">
        <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-2 py-5 border-top">
          <div className="logo-container col-6 mb-3">
            <a
              href="/"
              className="d-flex justify-content-center align-items-center mb-3 a-body-emphasis text-decoration-none"
            >
              <img
                src={Logo}
                alt=""
                style={{
                  backgroundColor: "white",
                  borderRadius: "10px",
                  width: "150px",
                  padding: "20px",
                }}
              />
            </a>
            <p className="text-light footer-text">
              Unlock the potential of cloud computing with our AWS Workshop.
              From foundational concepts to advanced practices, our experts will
              guide you every step of the way. Build your skills, elevate your
              career, and get ready to thrive in the cloud-driven future. Join
              us and shape tomorrow, today!
            </p>
          </div>
          <div className="d-flex justify-content-around col mb-3">
            <div className="footer-links-container">
              <h5>Projects</h5>
              <br />
              <ul className="nav flex-column">
                {Projects_Json.projects.map((project) => (
                  <li key={project.name} className="nav-item mb-2">
                    <a href={project.url} target="_blank">
                      {project.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-links-container">
              <h5>Services</h5>
              <br />
              <ul className="nav flex-column">
                {Services_Json.services.map((service) => (
                  <li key={service.name} className="nav-item mb-2">
                    <a href="#services">{service.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
        <div className="d-flex flex-column flex-sm-row justify-content-between py-4">
          {showScrollTop && (
            <div
              className="scroll-top-icon"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <FontAwesomeIcon icon={faArrowUp} className="footer-icon" />
            </div>
          )}
          <p className="footer-text" id="copyright-text">
            © 2024 Maang Technologies Pvt Ltd. All rights reserved.{" "}
          </p>
          <ul className="list-unstyled d-flex mx-3 justify-content-center">
            <li className="ms-3 mx-2">
              <a
                className="a-body-emphasis"
                href="https://www.linkedin.com/company/maang-technologies-private-limited"
                target="_blank"
              >
                <FaLinkedin className="footer-icon" />
              </a>
            </li>
            <li className="ms-3 mx-2">
              <a
                className="a-body-emphasis"
                href="https://www.facebook.com/people/Maang_Technologies/100094655003149/"
                target="_blank"
              >
                <FaFacebook className="footer-icon" />
              </a>
            </li>
            <li className="ms-3 mx-2">
              <a
                className="a-body-emphasis"
                href="https://www.instagram.com/maang_technologies/"
                target="_blank"
              >
                <FaInstagram className="footer-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;

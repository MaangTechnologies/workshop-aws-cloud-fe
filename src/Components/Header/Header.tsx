import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaBriefcase, FaHome, FaInfoCircle, FaPhoneAlt, FaWrench } from "react-icons/fa";
import Logo from "../../Assets/Logo.png";
import "./Header.css";

const Header = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.className = theme === "light" ? "light-theme" : "";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const [expanded, setExpanded] = useState(false);

  const navLinks = [
    { id: 2, name: "Services", icon: <FaWrench />, navlink: "#services" },
    { id: 3, name: "Products", icon: <FaBriefcase />, navlink: "#products" },
    { id: 5, name: "Contact Us", icon: <FaPhoneAlt />, navlink: "#contact-us" },
  ];


  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar expanded={expanded} expand="lg" className="header-section">
      <Container>
        <Navbar.Brand href="#" className="text-light">
          <img src={Logo} className="logo" alt="logo" />
          {/* <span className="heading-font">
            <a className="color-white d-flex align-items-center gap-2" href="/">
              <img src="https://i.ibb.co/5hbyTsd/2232688.png" alt="" width="50px" height="auto" />
              BookHunt
            </a>
          </span> */}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-4">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.id}
                href={link.navlink}
                className="link"
                onClick={handleLinkClick}
              >
                {link.icon} {link.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

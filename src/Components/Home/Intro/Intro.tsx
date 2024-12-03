import React from "react";
import { Col, Row } from "react-bootstrap";
import IntroImage from "../../../Assets/Intro.webp";

const Intro = () => {
  return (
    <section id="Intro" className="intro-section">
      <div className="w-100">
        <Row className="intro-layout">
          <Col
            lg={6}
            md={12}
            sm={12}
            className="d-flex flex-column justify-content-center"
          >
            <div className="gap-2 intro-details">
              <p className="title-1">
                Workshop on <span className="color-primary">AWS Cloud</span>
              </p>
              <p className="title-2">Building</p>
              <p className="title-2">
                <span className="color-primary">Cloud-Ready Future</span>
              </p>
              <p className="title-3">
                Hosted by <span className="color-primary">MAANG Experts</span>
              </p>
            </div>
          </Col>
          <Col lg={6} md={12} sm={12} className="d-flex justify-content-center">
            <div
              className="intro-img"
              style={{
                backgroundImage: `url(${IntroImage})`,
                // backgroundColor:"black",
                // borderRadius:"20px"
              }}
            ></div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Intro;

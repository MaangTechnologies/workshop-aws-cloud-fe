import React from "react";
import { Services_Json } from "../../../Utilities/constants";
import "../Projects/Projects.css";

const Services = () => {
  return (
    <div className="cards-container" id="services">
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1 style={{ textAlign: "center" }}>Our Services</h1>
          </div>
        </div>
      </div>
      <section className="features-area pt-100 pb-70 bg-f4f6fc">
        <div className="row">
          {Services_Json.services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="feature-card">
                <i className={service.iconClass}></i>
                <h3>{service.name}</h3>
                <p style={{ textAlign: "center" }}>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;

import React from "react";
import { Projects_Json } from "../../../Utilities/constants";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="cards-container" id="products">
      <div className="page-title-area">
        <div className="container">
          <div className="page-title-content">
            <h1 className="heading-title" style={{ textAlign: "center" }}>
              Our Products
            </h1>
          </div>
        </div>
      </div>
      <section className="features-area row pt-100 pb-70 bg-f4f6fc">
        {Projects_Json.projects.map((project, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <a href={project.url} target="_blank">
              <div className="feature-card">
                <div className="image" title={project.name}>
                  <img src={project.image} alt={project.name} width="80%" />
                </div>
                <h3>{project.name}</h3>
                <p style={{ textAlign: "center" }}>{project.description}</p>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;

import React from "react";
import "./Projects.css";
import ProjectCard from "../project-card/ProjectCard";

function Projects({ title, subtitle, data }) {
  return (
    <section className="projects">
      <div className="projects__text-group" id="portfolio">
        <h2 className="projects__title">My Recent Projects</h2>
        <p className="projects__subtitle">
          I’m never finished learning new things. The projects below show what I
          can do for you, your business, or your future ventures. Take a look:
        </p>
      </div>
      <article className="projects__grid">
        {data.map((item) => (
          <ProjectCard
            key={item.id}
            mainImage={item.image}
            alt={item.alt}
            cardParagraph={item.description}
            pageLink={item.pageLink}
            githubLink={item.githubLink}
          />
        ))}
      </article>
    </section>
  );
}

export default Projects;

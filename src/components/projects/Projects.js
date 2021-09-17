import React from "react";
import "./Projects.css";
import ProjectCard from "../project-card/ProjectCard";
import PlanetsReactImage from "../../images/planets-react-images/planets-react-mainImage.png";
import InstagramHomepageImage from "../../images/web_project_4-images/instagram-homepage.png";
import PortlandPortfolioImage from "../../images/web_project_3-images/portland-portfolio.png";
import JavascriptProjectImage from "../../images/javascript-projects-images/javascript-homepage.png";
import ProjectOneHomepageImage from "../../images/web_project_1-images/homepage.png";
import MinimalistPortfolioImage from "../../images/minimalist-portfolio-images/minimalist-portfolio.png";
import ApiaryHomepageImage from '../../images/apiary-images/apiary-homepage.png';

function Projects() {
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
        <ProjectCard
          mainImage={ApiaryHomepageImage}
          cardParagraph={
            "A no-cost website development service. This project uses React and Contentful to allow the client to update relevant site content without having to interact with any code."
          }
          pageLink={"https://apiary-project.netlify.app/#/"}
          githubLink={"https://github.com/cjmaret/apiary"}
        />
        <ProjectCard
          mainImage={PlanetsReactImage}
          cardParagraph={
            "This aesthetic planets fact-site uses a Single Page App built by React, displaying its content in an optimized fashion"
          }
          pageLink={"https://cjmaret.github.io/planets-fact-site-react/"}
          githubLink={"https://github.com/cjmaret/planets-fact-site-react"}
        />
        <ProjectCard
          mainImage={InstagramHomepageImage}
          cardParagraph={
            "An Instagram-style webpage which showcases Javascript form validation and image-card adding via templates"
          }
          pageLink={"https://cjmaret.github.io/web_project_4/"}
          githubLink={"https://github.com/cjmaret/web_project_4"}
        />
        <ProjectCard
          mainImage={PortlandPortfolioImage}
          cardParagraph={
            "A fully responsive travel-guide landing page following Figma designs, using HTML5, CSS Grid and Flexbox methods"
          }
          pageLink={"https://cjmaret.github.io/web_project_3/"}
          githubLink={"https://github.com/cjmaret/web_project_3"}
        />
        <ProjectCard
          mainImage={JavascriptProjectImage}
          cardParagraph={
            "A series of small Javascript exercises displaying a range of functions, widgets, and designs"
          }
          pageLink={"https://cjmaret.github.io/Javascript-30-Days/"}
          githubLink={"https://github.com/cjmaret/Javascript-30-Days"}
        />
        <ProjectCard
          mainImage={ProjectOneHomepageImage}
          cardParagraph={
            "A basic page focusing on optimizing learning techniques, made with image/video embedding, and CSS animations"
          }
          pageLink={"https://cjmaret.github.io/web_project_1/"}
          githubLink={"https://github.com/cjmaret/web_project_1"}
        />
        <ProjectCard
          mainImage={MinimalistPortfolioImage}
          cardParagraph={
            "A minimalist portfolio, showcasing a sleek and functional layout, and emphasizing a 'less is more' design philosophy"
          }
          pageLink={"https://cjmaret.github.io/minimalist_portfolio_website/"}
          githubLink={"https://github.com/cjmaret/minimalist_portfolio_website"}
        />
      </article>
    </section>
  );
}

export default Projects;

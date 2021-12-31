import React, { useContext } from 'react';
import {
  ProjectsSection,
  ProjectsTextGroup,
  ProjectsTitle,
  ProjectsSubtitle,
  ProjectsGrid,
} from './styledProjects';
import ProjectCard from '../project-card/ProjectCard';
import { DraculaContext } from '../app/App';

function Projects({ data }) {
  const draculaMode = useContext(DraculaContext
    );
  return (
    <ProjectsSection id='projects'>
      <ProjectsTextGroup draculaMode={draculaMode}>
        <ProjectsTitle>My Recent Projects</ProjectsTitle>
        <ProjectsSubtitle>
          I’m never finished learning new things. The projects below show what I can do for you,
          your business, or your future ventures. Take a look:
        </ProjectsSubtitle>
      </ProjectsTextGroup>
      <ProjectsGrid>
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
      </ProjectsGrid>
    </ProjectsSection>
  );
}

export default Projects;

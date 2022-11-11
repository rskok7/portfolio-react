import React, { useContext, useEffect, useState } from 'react';
import {
  ProjectsSection,
  ProjectsTextGroup,
  ProjectsTitle,
  ProjectsSubtitle,
  ProjectsGrid,
  FeaturedProjectsTextGroup,
  FeaturedProjectsGrid,
  AllProjectsTextGroup,
  AllProjectsGrid,
  FeaturedProjectsTitle,
  AllProjectsTitle,
  ProjectsCategories,
  ProjectsCategoryItem,
  NoProjects,
} from './styledProjects';
import ProjectCard from '../project-card/ProjectCard';
import { DraculaContext } from '../app/App';
import projectCards from '../../arrays/project-cards';
import featuredProjectCards from '../../arrays/featured-project-cards';
import languages from '../../arrays/languages';

function Projects({ mobileWidth }) {
  const draculaMode = useContext(DraculaContext);

  const [filterLanguages, setFilterLanguages] = useState({
    react: true,
    node: false,
    express: false,
    mongodb: true,
    graphql: false,
    gatsby: false,
    css: false,
    html5: false,
    typescript: false,
    next: false,
    jest: false,
    mocha: false,
    keystone: false,
    contentful: false,
    vanillajs: false,
  });

  function handleItemClick(e) {
    let language = e.target.id.toLowerCase().replace(/\s/g, '');
    let clicked = filterLanguages[language];
    setFilterLanguages({
      ...filterLanguages,
      [language]: !clicked,
    });
  }

  function filteredProjects() {
    let selectedLanguages = Object.keys(filterLanguages).filter(
      (element) => filterLanguages[element]
    );

    return projectCards.filter((project) => {
      let projectLanguages = project.languages;
      return selectedLanguages.every((selectedLanguage) =>
        projectLanguages.includes(selectedLanguage)
      );
    });
  }

  return (
    <ProjectsSection id="projects">
      <FeaturedProjectsTextGroup draculaMode={draculaMode}>
        <FeaturedProjectsTitle>Featured Projects</FeaturedProjectsTitle>
        <ProjectsSubtitle>
          I'm never finished learning new things. The projects below show what I
          can do for you, your business, or your future ventures. Take a look:
        </ProjectsSubtitle>
      </FeaturedProjectsTextGroup>
      <FeaturedProjectsGrid>
        {featuredProjectCards.map((item) => (
          <ProjectCard
            key={item.id}
            mainImage={item.image}
            alt={item.alt}
            cardParagraph={item.description}
            pageLink={item.pageLink}
            githubLink={item.githubLink}
            mobileWidth={mobileWidth}
          />
        ))}
      </FeaturedProjectsGrid>
      <AllProjectsTextGroup draculaMode={draculaMode}>
        <AllProjectsTitle>All Projects</AllProjectsTitle>
        <ProjectsCategories>
          {languages.map((language) => (
            <ProjectsCategoryItem
              key={language}
              id={language}
              onClick={handleItemClick}
              draculaMode={draculaMode}
              itemClicked={
                filterLanguages[language.toLowerCase().replace(/\s/g, '')]
              }>
              {language}
            </ProjectsCategoryItem>
          ))}
        </ProjectsCategories>
      </AllProjectsTextGroup>
      {filteredProjects().length > 0 ? (
        <AllProjectsGrid>
          {filteredProjects().map((item) => (
            <ProjectCard
              key={item.id}
              mainImage={item.image}
              alt={item.alt}
              cardParagraph={item.description}
              pageLink={item.pageLink}
              githubLink={item.githubLink}
              mobileWidth={mobileWidth}
            />
          ))}
        </AllProjectsGrid>
      ) : (
        <NoProjects>
          No projects like this! Try another language combo
        </NoProjects>
      )}
    </ProjectsSection>
  );
}

export default Projects;

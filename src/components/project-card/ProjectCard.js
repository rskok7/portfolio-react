import React, { useContext } from 'react';
import { DraculaContext } from '../app/App';
import {
  ProjectCardContainer,
  ProjectImageLink,
  ProjectImage,
  ProjectOverlay,
  ProjectTextContainer,
  ProjectText,
  ProjectLinks,
  ProjectLink,
  ProjectIcon,
} from './styledProjectCard';
import WhiteGlobeIcon from '../../images/link-icons/globe-icon-white.png';
import BlackGlobeIcon from '../../images/link-icons/globe-icon-black.png';
import WhiteCatIcon from '../../images/link-icons/cat-icon-white.png';
import BlackCatIcon from '../../images/link-icons/cat-icon-black.png';

function ProjectCard({ pageLink, mainImage, alt, cardParagraph, githubLink, mobileWidth }) {
  const draculaMode = useContext(DraculaContext);

  return (
    <ProjectCardContainer draculaMode={draculaMode}>
      <ProjectImageLink href={pageLink} target='_blank' rel='noreferrer'>
        <ProjectImage src={mainImage} alt={alt} draculaMode={draculaMode} />
      </ProjectImageLink>
      <ProjectOverlay>
        <ProjectTextContainer>
          <ProjectText draculaMode={draculaMode} mobileWidth={mobileWidth}>
            {cardParagraph}
          </ProjectText>
        </ProjectTextContainer>
        <ProjectLinks>
          <ProjectLink href={pageLink} target='_blank' rel='noreferrer'>
            <ProjectIcon src={mobileWidth ? BlackGlobeIcon : WhiteGlobeIcon} alt='' />
          </ProjectLink>
          <ProjectLink href={githubLink} target='_blank' rel='noreferrer'>
            <ProjectIcon src={mobileWidth ? BlackCatIcon : WhiteCatIcon} alt='' />
          </ProjectLink>
        </ProjectLinks>
      </ProjectOverlay>
    </ProjectCardContainer>
  );
}

export default ProjectCard;

import React from 'react';
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

function ProjectCard(props) {
  const [mobileWidth, setMobileWidth] = React.useState(false);

  React.useEffect(() => {
    function checkWidth() {
      const windowWidth = window.matchMedia('(max-width: 510px)');
      if (windowWidth.matches) {
        setMobileWidth(true);
      } else {
        setMobileWidth(false);
      }
    }
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  });

  return (
    <ProjectCardContainer>
      <ProjectImageLink href={props.pageLink} target='_blank' rel='noreferrer'>
        <ProjectImage className='projects__image' src={props.mainImage} alt={props.alt} />
      </ProjectImageLink>
      <ProjectOverlay>
        <ProjectTextContainer>
          <ProjectText>{props.cardParagraph}</ProjectText>
        </ProjectTextContainer>
        <ProjectLinks>
          <ProjectLink href={props.pageLink} target='_blank' rel='noreferrer'>
            <ProjectIcon src={mobileWidth ? BlackGlobeIcon : WhiteGlobeIcon} alt='' />
          </ProjectLink>
          <ProjectLink href={props.githubLink} target='_blank' rel='noreferrer'>
            <ProjectIcon src={mobileWidth ? BlackCatIcon : WhiteCatIcon} alt='' />
          </ProjectLink>
        </ProjectLinks>
      </ProjectOverlay>
    </ProjectCardContainer>
  );
}

export default ProjectCard;

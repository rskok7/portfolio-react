import React, { useContext } from 'react';
import {
  AboutSection,
  AboutIcons,
  AboutIcon,
  AboutNavigator,
  AboutExterior,
  AboutTitle,
  AboutInfo,
  AboutIntro,
  AboutImage,
  AboutMe,
  AboutParagraph,
  AboutAnimationLink,
  IconLink,
  PlacesIcon,
  AboutLists,
  ListTypeLanguages,
  ListTypeLearning,
  ListTypeTools,
  ListInteriorTitle,
  ListInteriorList,
  ListInteriorListItem,
  AboutIconDracula,
} from './styledAbout';
import GearIcon from '../../images/portfolio-icons/gear-icon.png';
import ArtIcon from '../../images/portfolio-icons/art-icon.png';
import CometIcon from '../../images/portfolio-icons/comet-icon.png';
import GearIconDracula from '../../images/portfolio-icons/gear-icon-dracula.png';
import ArtIconDracula from '../../images/portfolio-icons/art-icon-dracula.png';
import CometIconDracula from '../../images/portfolio-icons/comet-icon-dracula.png';
import ColinImage from '../../images/no-sunglasses-pilot.JPG';
import BlackCatIcon from '../../images/link-icons/cat-icon-black.png';
import BusinessIcon from '../../images/link-icons/business-icon.png';
import BasketballIcon from '../../images/link-icons/basketball-icon.png';
import { DraculaContext } from '../app/App';

function About() {
  const draculaMode = useContext(DraculaContext);
  return (
    <AboutSection>
      <AboutIcons>
        <AboutIcon src={GearIcon} alt="" draculaMode={draculaMode} />
        <AboutIconDracula
          src={GearIconDracula}
          alt=""
          draculaMode={draculaMode}
        />
        <AboutIcon src={ArtIcon} alt="" draculaMode={draculaMode} />
        <AboutIconDracula
          src={ArtIconDracula}
          alt=""
          draculaMode={draculaMode}
        />
        <AboutIcon src={CometIcon} alt="" draculaMode={draculaMode} />
        <AboutIconDracula
          src={CometIconDracula}
          alt=""
          draculaMode={draculaMode}
        />
      </AboutIcons>

      <AboutNavigator id="about"></AboutNavigator>

      <AboutExterior>
        <AboutTitle>Full-Stack Developer.</AboutTitle>
        <AboutTitle>Digital Designer.</AboutTitle>
        <AboutTitle>Website Chef.</AboutTitle>

        <AboutInfo>
          <AboutIntro>
            <AboutImage src={ColinImage} alt="" />
          </AboutIntro>
          <AboutMe>
            <AboutParagraph>
              I'm a traveler and freelance web developer with a passion for
              injecting life into everything I create. I design and build
              websites that are elegant in their simplicity, and try to combine
              the architectural with the aesthetic. I aim to create works of art
              that help your life run better.
            </AboutParagraph>
            <AboutParagraph>
              When I'm not coding, I'm working on my{' '}
              <AboutAnimationLink
                href="https://www.youtube.com/channel/UCmvmSKDd3Wo7CQt8carRVuA"
                target="_blank"
                rel="noreferrer"
                draculaMode={draculaMode}>
                animated history channel
              </AboutAnimationLink>
              , and wakeboarding. Check me out at the places below:
            </AboutParagraph>
            <AboutIcons>
              <IconLink
                href="https://github.com/cjmaret"
                target="_blank"
                rel="noreferrer">
                <PlacesIcon src={BlackCatIcon} alt="" />
              </IconLink>
              <IconLink
                href="https://www.linkedin.com/in/colin-maretsky/"
                target="_blank"
                rel="noreferrer">
                <PlacesIcon src={BusinessIcon} alt="" />
              </IconLink>
              <IconLink
                href="https://dribbble.com/cjmaret"
                target="_blank"
                rel="noreferrer">
                <PlacesIcon src={BasketballIcon} alt="" />
              </IconLink>
            </AboutIcons>
          </AboutMe>
        </AboutInfo>

        <AboutLists draculaMode={draculaMode}>
          <ListTypeLanguages>
            <ListInteriorTitle>I Speak</ListInteriorTitle>
            <ListInteriorList>
              <ListInteriorListItem>Node.js</ListInteriorListItem>
              <ListInteriorListItem>Express.js</ListInteriorListItem>
              <ListInteriorListItem>CSS</ListInteriorListItem>
              <ListInteriorListItem>HTML5</ListInteriorListItem>
            </ListInteriorList>
          </ListTypeLanguages>

          <ListTypeLearning>
            <ListInteriorTitle>I Excel At</ListInteriorTitle>
            <ListInteriorList>
              <ListInteriorListItem>React</ListInteriorListItem>
              <ListInteriorListItem>Javascript</ListInteriorListItem>
            </ListInteriorList>
          </ListTypeLearning>

          <ListTypeTools>
            <ListInteriorTitle>I Use</ListInteriorTitle>
            <ListInteriorList>
              <ListInteriorListItem>Github</ListInteriorListItem>
              <ListInteriorListItem>Git</ListInteriorListItem>
              <ListInteriorListItem>Figma</ListInteriorListItem>
              <ListInteriorListItem>Motion 5</ListInteriorListItem>
            </ListInteriorList>
          </ListTypeTools>
        </AboutLists>
      </AboutExterior>
    </AboutSection>
  );
}

export default About;

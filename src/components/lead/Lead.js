import React from 'react';
import Anime from '../../images/colin-anime-reduced.png';
import AnimeRegular from '../../images/colin-anime.png';
import AnimeDracula from '../../images/colin-anime-dracula.png';
import CurvedBottomImage from '../../images/curved-bottom.png';
import { LeadSection, LeadContainer, LeadImage, LeadTitle, LeadSubtitle, CurvedBottom } from './styledLead';

function Lead({ draculaMode }) {
  return (
    <>
      <LeadSection id="lead">
        <LeadContainer>
          <LeadImage
            src={draculaMode ? AnimeDracula : AnimeRegular}
            alt=''
          />
          <LeadTitle className='lead__title'>Hi, I'm Colin.</LeadTitle>
          <LeadSubtitle className='lead__subtitle'>I like bringing ideas to life.</LeadSubtitle>
        </LeadContainer>
      </LeadSection>

      <CurvedBottom src={CurvedBottomImage} alt='' />
    </>
  );
}

export default Lead;

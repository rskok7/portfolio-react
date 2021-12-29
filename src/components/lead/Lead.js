import React from 'react';
import './Lead.css';
import Anime from '../../images/colin-anime-reduced.png';
import AnimeRegular from '../../images/colin-anime.png';
import AnimeDracula from '../../images/colin-anime-dracula.png';
import CurvedBottom from '../../images/curved-bottom.png';
import { LeadSection, LeadContainer, LeadImage, LeadTitle, LeadSubtitle } from './styledLead';

function Lead({ draculaMode }) {
  return (
    <>
      <LeadSection>
        <LeadContainer>
          <LeadImage
            src={draculaMode ? AnimeDracula : AnimeRegular}
            alt=''
          />
          <LeadTitle className='lead__title'>Hi, I'm Colin.</LeadTitle>
          <LeadSubtitle className='lead__subtitle'>I like bringing ideas to life.</LeadSubtitle>
        </LeadContainer>
      </LeadSection>

      <img className='curved-bottom' src={CurvedBottom} alt='' />
    </>
  );
}

export default Lead;

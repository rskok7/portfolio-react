import React, { useContext } from 'react';
import { DraculaContext } from '../app/App';
import AnimeRegular from '../../images/colin-anime-profile/colin-anime-reduced.png';
import AnimeDracula from '../../images/colin-anime-profile/colin-anime-dracula-reduced.png';
import CurvedBottomImage from '../../images/curved-bottom.png';
import {
  LeadSection,
  LeadContainer,
  LeadImage,
  LeadTitle,
  LeadSubtitle,
  CurvedBottom,
} from './styledLead';

function Lead() {
  const draculaMode = useContext(DraculaContext);

  return (
    <>
      <LeadSection id='lead' draculaMode={draculaMode}>
        <LeadContainer>
          <LeadImage src={draculaMode ? AnimeDracula : AnimeRegular} alt='' />
          <LeadTitle className='lead__title'>Hi, I'm Colin.</LeadTitle>
          <LeadSubtitle className='lead__subtitle'>I like bringing ideas to life.</LeadSubtitle>
        </LeadContainer>
      </LeadSection>

      <CurvedBottom src={CurvedBottomImage} alt='' draculaMode={draculaMode} />
    </>
  );
}

export default Lead;

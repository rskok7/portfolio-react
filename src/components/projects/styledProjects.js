import styled from 'styled-components';

export const ProjectsSection = styled.section`
  padding-top: 100px;

  @media (max-width: 400px) {
    padding-top: 0;
  }
`;

const ProjectsTextGroup = styled.div`
  padding-top: 125px;
  padding-bottom: 250px;
  width: 100%;
  margin: 0 auto 50px auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => (props.draculaMode ? 'var(--red)' : 'var(--blue)')};

  @media (max-width: 320px) {
    padding: 70px 0 225px 0;
  }
`;

export const FeaturedProjectsTextGroup = styled(ProjectsTextGroup)``;

export const AllProjectsTextGroup = styled(ProjectsTextGroup)`
  margin: 0;
  padding: 50px 0 0 0;
  background-color: ${(props) =>
    props.draculaMode ? 'var(--draculaGrey)' : 'white'}; ;
`;

const ProjectsTitle = styled.h2`
  text-align: center;
  font-size: 50px;
  margin-top: 0;
  color: white;

  @media (max-width: 400px) {
    font-size: 40px;
  }

  @media (max-width: 320px) {
    width: 90%;
    font-size: 35px;
    margin: auto;
    margin-bottom: 30px;
  }
`;

export const FeaturedProjectsTitle = styled(ProjectsTitle)``;

export const AllProjectsTitle = styled(ProjectsTitle)`

  color: var(--grey);
  @media (max-width: 500px) {
    margin-bottom: 10px;
  }
`;

export const ProjectsSubtitle = styled.p`
  text-align: center;
  font-size: 29px;
  line-height: 2;
  margin-top: 0;
  color: white;
  margin: auto;
  max-width: 800px;
  width: 65%;

  @media (max-width: 510px) {
    font-size: 20px;
    width: 80%;
  }

  @media (max-width: 400px) {
    font-size: 17px;
    width: 95%;
  }

  @media (max-width: 320px) {
    width: 90%;
    font-size: 14px;
  }
`;

export const ProjectsCategories = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  max-width: 900px;
  @media (max-width: 500px) {
    margin-bottom: 25px;
    width: 95%;
  }
`;

function determineButtonColor(draculaMode, itemClicked) {
  if (draculaMode && itemClicked) {
    return 'var(--red)';
  } else if (!draculaMode && itemClicked) {
    return 'var(--blue)';
  } else {
    return 'none';
  }
}

export const ProjectsCategoryItem = styled.p`
  user-select: none;
  border: ${(props) =>
    props.itemClicked
      ? '1.5px solid rgba(0, 0, 0, 0)'
      : '1.5px solid rgba(58, 58, 58, .2)'};
  background-color: ${(props) =>
    determineButtonColor(props.draculaMode, props.itemClicked)};
  border-radius: 50px;
  padding: 0.75rem 2rem;
  color: ${(props) => (props.itemClicked ? 'white' : 'rgba(58, 58, 58, .8)')};
  margin: 0.5rem 0.5rem;
  font-size: 2rem;
  display: flex;
  align-items: center;
  line-height: 1;
  transition: all 0.4s ease;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
  @media (max-width: 500px) {
    font-size: 1.2rem;
    &:hover {
      opacity: 1;
    }
  }
`;

const ProjectsGrid = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 48px;
  grid-column-gap: 40px;
  justify-content: center;
  margin: auto;
  padding: 70px 0;
  width: 90%;
  max-width: 1126px;
  position: relative;
  z-index: 2;
  margin-top: -275px;

  @media (max-width: 768px) {
    width: 90%;
    max-width: 691px;
    padding: 0;
  }

  @media (max-width: 510px) {
    grid-template-columns: 1fr;
    width: 90%;
    margin-top: -225px;
  }

  @media (max-width: 320px) {
    width: 90%;
    grid-row-gap: 30px;
  }
`;

export const FeaturedProjectsGrid = styled(ProjectsGrid)``;

export const AllProjectsGrid = styled(ProjectsGrid)`
  margin-top: 0;
`;

export const NoProjects = styled.h2`
  font-size: 3rem;
  margin-top: 50px;
  text-align: center;
  width: 100%;
`;

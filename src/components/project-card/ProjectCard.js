import React from 'react';
import './ProjectCard.css';
import WhiteGlobeIcon from '../../images/link-icons/globe-icon-white.png';
import BlackGlobeIcon from '../../images/link-icons/globe-icon-black.png';
import WhiteCatIcon from '../../images/link-icons/cat-icon-white.png';
import BlackCatIcon from '../../images/link-icons/cat-icon-black.png';


function ProjectCard(props) {
    return (
        <div className="projects__card">
            <img className="projects__image" src={props.mainImage} alt="" />
            <div className="projects__overlay">
                <div className="projects__text-container">
                    <p className="projects__text">{props.cardParagraph}</p>
                </div>
                <div className="projects__links">
                    <a className="projects__link projects__link_type_white"
                        href={props.pageLink} target="_blank" rel="noreferrer" ><img
                            className="projects__icon" src={WhiteGlobeIcon} alt="" /></a>
                    <a className="projects__link projects__link_type_white"
                        href={props.githubLink} target="_blank" rel="noreferrer" ><img
                            className="projects__icon" src={WhiteCatIcon} alt="" /></a>
                    <a className="projects__link projects__link_type_black"
                        href={props.pageLink} target="_blank" rel="noreferrer" ><img
                            className="projects__icon" src={BlackGlobeIcon} alt="" /></a>
                    <a className="projects__link projects__link_type_black"
                        href={props.githubLink} target="_blank" rel="noreferrer" ><img
                            className="projects__icon" src={BlackCatIcon} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;
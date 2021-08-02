import React from 'react';
import './Projects.css';

function Projects () {
    return (
        <section className="projects">

            <div className="projects__text-group" id="portfolio">
                <h2 className="projects__title">My Recent Projects</h2>
                <p className="projects__subtitle">I’m never finished learning new things. The projects below show
                    what I can do for you, your business, or your new project. Take a look:</p>
            </div>

            <article className="projects__grid">

                <div className="projects__card">
                    <img className="projects__image" src="./images/web_project_4-images/instagram-homepage.png" alt="" />
                    <div className="projects__overlay">
                        <div className="projects__text-container">
                            <p className="projects__text">An Instagram-style webpage which showcases Javascript form
                                validation
                                and
                                image-card adding via templates</p>
                        </div>
                        <div className="projects__links">
                            <a className="projects__link projects__link_type_white"
                                href="https://cjmaret.github.io/web_project_4/" target="_blank" rel="noreferrer" ><img
                                    className="projects__icon" src="./images/link-icons/globe-icon-white.png" alt="" /></a>
                            <a className="projects__link projects__link_type_white"
                                href="https://github.com/cjmaret/web_project_4" target="_blank" rel="noreferrer" ><img
                                    className="projects__icon" src="./images/link-icons/cat-icon-white.png" alt="" /></a>
                            <a className="projects__link projects__link_type_black"
                                href="https://cjmaret.github.io/web_project_4/" target="_blank" rel="noreferrer" ><img
                                    className="projects__icon" src="./images/link-icons/globe-icon-black.png" alt="" /></a>
                            <a className="projects__link projects__link_type_black"
                                href="https://github.com/cjmaret/web_project_4" target="_blank" rel="noreferrer" ><img
                                    className="projects__icon" src="./images/link-icons/cat-icon-black.png" alt="" /></a>
                        </div>
                    </div>
                </div>

                <div className="projects__card">
                    <img className="projects__image" src="./images/web_project_3-images/portland-portfolio.png" alt="" />
                    <div className="projects__overlay">
                        <div className="projects__text-container">
                            <p className="projects__text">A fully responsive travel-guide landing page following Figma
                                designs,
                                using HTML5, CSS Grid and Flexbox methods</p>
                        </div>
                        <div className="projects__links">
                            <a className="projects__link projects__link_type_white"
                                href="https://cjmaret.github.io/web_project_3/" target="_blank" rel="noreferrer" ><img
                                    className="projects__icon" src="./images/link-icons/globe-icon-white.png" alt="" /></a>
                            <a className="projects__link projects__link_type_white"
                                href="https://github.com/cjmaret/web_project_3" target="_blank" rel="noreferrer" ><img
                                    className="projects__icon" src="./images/link-icons/cat-icon-white.png" alt="" /></a>
                            <a className="projects__link projects__link_type_black"
                                href="https://cjmaret.github.io/web_project_3/" target="_blank" rel="noreferrer" ><img
                                    className="projects__icon" src="./images/link-icons/globe-icon-black.png" alt="" /></a>
                            <a className="projects__link projects__link_type_black"
                                href="https://github.com/cjmaret/web_project_3" target="_blank" rel="noreferrer" ><img
                                    className="projects__icon" src="./images/link-icons/cat-icon-black.png" alt="" /></a>
                        </div>
                    </div>
                </div>

                <div className="projects__card">
                    <img className="projects__image" src="./images/javascript-projects-images/javascript-homepage.png" alt="" />
                    <div className="projects__overlay">
                        <div className="projects__text-container">
                            <p className="projects__text">A series of small Javascript exercises displaying a range of
                                functions, widgets, and designs</p>
                        </div>
                        <div className="projects__links">
                            <a className="projects__link projects__link_type_white"
                                href="https://cjmaret.github.io/Javascript-30-Days/" target="_blank" rel="noreferrer" ><img
                                    className="projects__icon" src="./images/link-icons/globe-icon-white.png" alt="" /></a>
                            <a className="projects__link projects__link_type_white"
                                href="https://github.com/cjmaret/Javascript-30-Days" target="_blank" rel="noreferrer" ><img
                                    className="projects__icon" src="./images/link-icons/cat-icon-white.png" alt="" /></a>
                            <a className="projects__link projects__link_type_black"
                                href="https://cjmaret.github.io/Javascript-30-Days/" target="_blank" rel="noreferrer" ><img
                                    className="projects__icon" src="./images/link-icons/globe-icon-black.png" alt="" /></a>
                            <a className="projects__link projects__link_type_black"
                                href="https://github.com/cjmaret/Javascript-30-Days" target="_blank" rel="noreferrer" ><img
                                    className="projects__icon" src="./images/link-icons/cat-icon-black.png" alt="" /></a>
                        </div>
                    </div>
                </div>

                <div className="projects__card">
                    <img className="projects__image" src="./images/web_project_1-images/homepage.png" alt="" />
                    <div className="projects__overlay">
                        <div className="projects__text-container">
                            <p className="projects__text">A basic page focusing on optimizing learning techniques, made with
                                image/video embedding, and CSS animations</p>
                        </div>
                        <div className="projects__links">
                            <a className="projects__link projects__link_type_white"
                                href="https://cjmaret.github.io/web_project_1/" target="_blank" rel="noreferrer" ><img
                                    className="projects__icon" src="./images/link-icons/globe-icon-white.png" alt="" /></a>
                            <a className="projects__link projects__link_type_white"
                                href="https://github.com/cjmaret/web_project_1" target="_blank" rel="noreferrer" ><img
                                    className="projects__icon" src="./images/link-icons/cat-icon-white.png" alt="" /></a>
                            <a className="projects__link projects__link_type_black"
                                href="https://cjmaret.github.io/web_project_1/" target="_blank" rel="noreferrer" ><img
                                    className="projects__icon" src="./images/link-icons/globe-icon-black.png" alt="" /></a>
                            <a className="projects__link projects__link_type_black"
                                href="https://github.com/cjmaret/web_project_1" target="_blank" rel="noreferrer" ><img
                                    className="projects__icon" src="./images/link-icons/cat-icon-black.png" alt="" /></a>
                        </div>
                    </div>
                </div>

                <div className="projects__card">
                    <img className="projects__image" src="./images/minimalist-portfolio-images/minimalist-portfolio.png" alt="" />
                    <div className="projects__overlay">
                        <div className="projects__text-container">
                            <p className="projects__text">A minimalist portfolio, showcasing a sleek and functional layout,
                                and
                                emphasizing a "less is more" design philosophy.</p>
                        </div>
                        <div className="projects__links">
                            <a className="projects__link projects__link_type_white"
                                href="https://cjmaret.github.io/minimalist_portfolio_website/" target="_blank" rel="noreferrer" ><img
                                    className="projects__icon" src="./images/link-icons/globe-icon-white.png" alt="" /></a>
                            <a className="projects__link projects__link_type_white"
                                href="https://github.com/cjmaret/minimalist_portfolio_website" target="_blank" rel="noreferrer" ><img
                                    className="projects__icon" src="./images/link-icons/cat-icon-white.png" alt="" /></a>
                            <a className="projects__link projects__link_type_black"
                                href="https://cjmaret.github.io/minimalist_portfolio_website/" target="_blank" rel="noreferrer" ><img
                                    className="projects__icon" src="./images/link-icons/globe-icon-black.png" alt="" /></a>
                            <a className="projects__link projects__link_type_black"
                                href="https://github.com/cjmaret/minimalist_portfolio_website" target="_blank" rel="noreferrer" ><img
                                    className="projects__icon" src="./images/link-icons/cat-icon-black.png" alt="" /></a>
                        </div>
                    </div>
                </div>


            </article>

        </section>
    )
}

export default Projects;
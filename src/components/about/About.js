import React from 'react';
import './About.css';

function About () {
    return (
        <section class="about">

            <div class="about__icons">
                <img class="icon" src="./images/portfolio-icons/gear-icon.png" alt=""/>
                <img class="icon" src="./images/portfolio-icons/art-icon.png" alt="" />
                <img class="icon" src="./images/portfolio-icons/comet-icon.png" alt="" />
            </div>

            <div class="about-navigator" id="about"></div>

            <div class="about__exterior">
                <h2 class="about__title">Front-End Web Developer.</h2>
                <h2 class="about__title">Web Designer.</h2>
                <h2 class="about__title">Sex Symbol.</h2>

                <article class="about__info">
                    <div class="about__intro">
                        <img class="about__image" src="./images/no-sunglasses-pilot.JPG" alt="" />
                    </div>
                    <div class="about__me">
                        <p class="about__paragraph">I'm a traveler and freelance web developer with a passion for
                            injecting
                            life into everything I create. I design and build websites that are elegant in their
                            simplicity,
                            and try to combine the architectural with the aesthetic. I aim to create works of art that
                            help
                            your
                            life run better.</p>
                        <p class="about__paragraph">When I'm not coding, I'm working on my <a
                            class="about__animation-link"
                            href="https://www.youtube.com/channel/UCmvmSKDd3Wo7CQt8carRVuA" target="_blank" rel="noreferrer" >animated
                            history
                            channel</a>, and wakeboarding. Check me out at the places below:</p>
                        <div class="about__icons">
                            <a class="icon-link" href="https://github.com/cjmaret" target="_blank" rel="noreferrer" ><img
                                class="places-icon" src="./images/link-icons/cat-icon-black.png" alt="" /></a>
                            <a class="icon-link" href="https://www.linkedin.com/in/colin-maretsky/" target="_blank" rel="noreferrer" ><img
                                class="places-icon" src="./images/link-icons/business-icon.png" alt="" /></a>
                            <a class="icon-link" href="https://dribbble.com/cjmaret" target="_blank" rel="noreferrer" ><img
                                class="places-icon" src="./images/link-icons/basketball-icon.png" alt="" /></a>
                        </div>

                    </div>
                </article>

                <article class="about__lists">

                    <div class="list list_type_languages">
                        <p class="list-interior__title">Languages I Speak</p>
                        <ul class="list-interior__list">
                            <li class="list-interior__list-item">HTML5</li>
                            <li class="list-interior__list-item">CSS</li>
                            <li class="list-interior__list-item">Javascript</li>
                            <li class="list-interior__list-item">React</li>
                            <li class="list-interior__list-item">PHP</li>
                        </ul>
                    </div>

                    <div class="list list_type_languages">
                        <p class="list-interior__title">Languages I'm Learning</p>
                        <ul class="list-interior__list">
                            <li class="list-interior__list-item">Node.js</li>
                            <li class="list-interior__list-item">jQuery</li>
                            <li class="list-interior__list-item">Gatsby</li>
                        </ul>
                    </div>

                    <div class="list list_type_tools">
                        <p class="list-interior__title list-interior__title_type_tools">Tools I Use</p>
                        <ul class="list-interior__list">
                            <li class="list-interior__list-item list-interior__list-item_type_tools">Github</li>
                            <li class="list-interior__list-item list-interior__list-item_type_tools">Terminal</li>
                            <li class="list-interior__list-item list-interior__list-item_type_tools">Figma</li>
                            <li class="list-interior__list-item list-interior__list-item_type_tools">Motion 5</li>
                            <li class="list-interior__list-item list-interior__list-item_type_tools">Illustrator</li>
                        </ul>
                    </div>
                </article>

            </div>
        </section>
    )
}

export default About;
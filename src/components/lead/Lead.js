import React from 'react';
import './Lead.css';
import Anime from '../../images/colin-anime-reduced.png';
import CurvedBottom from '../../images/curved-bottom.png';

function Lead() {
    return (
        <>
            <section className="lead">
                <div className="lead__text">
                    <img className="lead__anime" src={Anime} alt="" />
                    <h1 className="lead__title">Hi, I'm Colin.</h1>
                    <p className="lead__subtitle">I like bringing ideas to life.</p>
                </div>
            </section>

            <img className="curved-bottom" src={CurvedBottom} alt="" />
        </>
    )
}

export default Lead;
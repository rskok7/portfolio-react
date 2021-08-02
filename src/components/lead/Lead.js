import React from 'react';
import './Lead.css';

function Lead() {
    return (
        <>
            <section className="lead">
                <div className="lead__text">
                    <img className="lead__anime" src="./images/colin-anime-reduced.png" alt="" />
                    <h1 className="lead__title">Hi, I'm Colin.</h1>
                    <p className="lead__subtitle">I like bringing ideas to life.</p>
                </div>
            </section>

            <img className="curved-bottom" src="./images/curved-bottom.png" alt="" />
        </>
    )
}

export default Lead;
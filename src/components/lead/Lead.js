import React from 'react';
import './Lead.css';

function Lead() {
    return (
        <>
            <section class="lead">
                <div class="lead__text">
                    <img class="lead__anime" src="./images/colin-anime-reduced.png" alt="" />
                    <h1 class="lead__title">Hi, I'm Colin.</h1>
                    <p class="lead__subtitle">I like bringing ideas to life.</p>
                </div>
            </section>

            <img class="curved-bottom" src="./images/curved-bottom.png" alt="" />
        </>
    )
}

export default Lead;
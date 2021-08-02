import React from 'react';
import './Contact.css';

function Contact () {
    return (
        <section class="contact" id="contact">
            <h2 class="contact__title">Interested in working on a project together?</h2>
            <p class="contact__subtitle">Drop me a line, and let's see what we can build together.</p>
            <a class="contact__button" type="submit" href="mailto:cjmaret@gmail.com">Send me an email</a>
        </section>
    )
}

export default Contact;
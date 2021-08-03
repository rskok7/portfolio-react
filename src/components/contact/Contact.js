import React from 'react';
import './Contact.css';

function Contact () {
    return (
        <section className="contact" id="contact">
            <h2 className="contact__title">Interested in working on a project together?</h2>
            <p className="contact__subtitle">Drop me a line, and let's see what we can build.</p>
            <a className="contact__button" type="submit" href="mailto:cjmaret@gmail.com">Send me an email</a>
        </section>
    )
}

export default Contact;
import React from 'react';
import { ContactSection, ContactTitle, ContactSubtitle, ContactButton } from './styledContact';

function Contact() {
  return (
    <ContactSection id='contact'>
      <ContactTitle>Interested in working on a project together?</ContactTitle>
      <ContactSubtitle>Drop me a line, and let's see what we can build.</ContactSubtitle>
      <ContactButton type='submit' href='mailto:cjmaret@gmail.com'>
        Send me an email
      </ContactButton>
    </ContactSection>
  );
}

export default Contact;

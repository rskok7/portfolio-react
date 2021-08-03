import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from './header/Header.js';
import Lead from './lead/Lead.js';
import About from './about/About.js';
import Projects from './projects/Projects.js';
import Contact from './contact/Contact.js';
import Footer from './footer/Footer.js';


function App() {
  return (
    <div className="beep">
      <Route>
        <Header />
      </Route>
      <Route>
        <Lead />
      </Route>
      <Route>
        <About />
      </Route>
      <Route>
        <Projects />
      </Route>
      <Route>
        <Contact />
      </Route>
      <Route>
        <Footer />
      </Route>
    </div>
  );
}

export default App;

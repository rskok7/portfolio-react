import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './header/Header.js';
import Lead from './lead/Lead.js';
import About from './about/About.js';
import Projects from './projects/Projects.js';
import Contact from './contact/Contact.js';
import Footer from './footer/Footer.js';
import LoadingScreen from '../images/logos/loading-logo.png';
import projectCards from '../arrays/project-cards';

function App() {
  const [loading, setLoading] = React.useState(false);
  const [draculaMode, setDraculaMode] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  function toggleDraculaMode() {
    setDraculaMode(!draculaMode);
  }

  return (
    <>
      <div className={`loading-screen ${loading ? '' : 'loading-screen_inactive'}`}>
        <img src={LoadingScreen} className='loading-screen__logo' alt='' />
      </div>
      <div className={`page ${!loading ? '' : 'page_inactive'}`}>
        <button
          className={`dracula-button ${
            draculaMode ? 'dracula-button_type_on' : 'dracula-button_type_off'
          }`}
          onClick={toggleDraculaMode}>
          Dracula Mode {draculaMode ? 'on' : 'off'}
        </button>
        <Route>
          <Header />
        </Route>
        <Route name='lead'>
          <Lead draculaMode={draculaMode} />
        </Route>
        <Route name='about'>
          <About />
        </Route>
        <Route name='projects'>
          <Projects data={projectCards} />
        </Route>
        <Route name='about'>
          <Contact />
        </Route>
        <Route>
          <Footer />
        </Route>
      </div>
    </>
  );
}

export default App;

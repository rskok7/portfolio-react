import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './header/Header.js';
import Lead from './lead/Lead.js';
import About from './about/About.js';
import Projects from './projects/Projects.js';
import Contact from './contact/Contact.js';
import Footer from './footer/Footer.js';
import LoadingScreen from '../images/new-logo.png';


function App() {

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      <div className={`loading-screen ${loading ? '' : 'loading-screen_inactive'}`}>
        <img src={LoadingScreen} className='loading-screen__logo' alt="" />
      </div>
      <div className="page">
        <Route>
          <Header />
        </Route>
        <Route name="lead">
          <Lead />
        </Route>
        <Route name="about">
          <About />
        </Route>
        <Route name="projects">
          <Projects />
        </Route>
        <Route name="about">
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

import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import { useState } from 'react';
import resume from '../files/William_Bain_Resume.pdf'

export default function Display() {
  const [display, setDisplay] = useState('About');
  return (
    <div>
      <nav className="navbar">
      <h1 className="nav-item">
        Billy Bain's Portfolio
      </h1>
        <div className='container justify-content-end'>  
          <button className="btn btn-secondary m-2" onClick={() => setDisplay('About')}>About Me</button>
          <button className="btn btn-secondary m-2" onClick={() => setDisplay('Projects')}>Projects</button>
          <button className="btn btn-secondary m-2" onClick={() => setDisplay('Contact')}>Contact</button>
          <a href={resume} className="btn btn-secondary m-2" target="_blank" rel="noreferrer">My Resume</a>
        </div>
      </nav>
      <div className='container'>
        {display === 'About' && <About />}
        {display === 'Projects' && <Projects />}
        {display === 'Contact' && <Contact />}
      </div>
    </div>
  );
}

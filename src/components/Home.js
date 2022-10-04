import Projects from './Projects';
import Contact from './Contact';
import About from './About';
import { useState, useEffect } from 'react';
import resume from '../files/WilliamBainResume.pdf'

export default function Display() {
  const [display, setDisplay] = useState('About');
  
  useEffect(() => {
    document.title = "William Bain's Portfolio"
  }, [])
 
  return (
    <div>
      <nav className="navbar">
      <h1 className="nav-item">
        William Bain's Portfolio
      </h1>
        <div className='nav-item justify-content-end navlinks'>  
          <button className="navbutton m-2 p-3"  onClick={() => setDisplay('About')}>About Me</button>
          <button className="navbutton m-2 p-3" onClick={() => setDisplay('Projects')}>Projects</button>
          <button className="navbutton m-2 p-3" onClick={() => setDisplay('Contact')}>Contact</button>
          <a href={resume} className="navbutton m-2 p-3" target="_blank" rel="noreferrer">My Resume</a>
        </div>
      </nav>
      <div className='container'>
        {display === 'About' && <About />}
        {display === 'Projects' && <Projects />}
        {display === 'Contact' && <Contact />}
      </div>
      <footer>
        <div className="navlinks container-fluid">
          <p className='p-2'>
            <a className="navbutton p-2 m-2" href="https://github.com/BillyBain" target="_blank" rel="noreferrer"> My Github</a>
            <a className="navbutton p-2 m-2" href="https://www.linkedin.com/in/william-bain-a24627233/" target="_blank" rel="noreferrer">My Linkin</a>
          </p>
        </div>
        <h3>Thank You for Viewing My Digital Portfolio!!!</h3>
      </footer>
    </div>
  );
}

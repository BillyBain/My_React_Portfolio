import password from '../img/password-gen.png';
import movie from '../img/movie-refresh.png';
import bulletin from '../img/dev-bulletin.png';
import employee from '../img/employee-tracker.png';
import weather from '../img/weather-app.png';
import planner from '../img/daily-planner.png';
import quiz from '../img/code-quiz.png';



export default function Projects() {
  return (
    <div className="container-fluid">
          <h3 className='m-2'> Welcome to my Projects to view the Github Repos please click on the Titles and to view the Deployed Projects click on the Images!</h3>
          <ul className="container-fluid row align-items-start">
            <li className="col m-2"><a href="https://github.com/falbanese7/movie-refresh" target="_blank" rel="noreferrer">Movie Refresh</a>
            <a href="https://falbanese7.github.io/movie-refresh/" target="_blank" rel="noreferrer"> <img src={movie} alt="Movie Refresh"></img></a></li>
            <li className="col m-2"><a href="https://github.com/mikerjohnson27/Development-Bulletin" target="_blank" rel="noreferrer">Development Bulletin</a>
            <a href="https://whispering-journey-87250.herokuapp.com/login" target="_blank" rel="noreferrer"> <img src={bulletin} alt="Development Bulletin"></img></a></li>
            <li className="col m-2"><a href="https://github.com/BillyBain/employee_tracker" target="_blank" rel="noreferrer">Employee Tracker App</a>
            <a href="https://billybain.github.io/week-3-homework/" target="_blank" rel="noreferrer"> <img src={employee} alt="Employee Tracker App"></img></a></li>
            <li className="col m-2"><a href="https://github.com/BillyBain/week-6-homework" target="_blank" rel="noreferrer">Weather App</a>
            <a href="https://billybain.github.io/week-6-homework/" target="_blank" rel="noreferrer"> <img src={weather} alt="Weather App"></img></a></li>
            <li className="col m-2"><a href="https://github.com/BillyBain/week-5-homework" target="_blank" rel="noreferrer">Daily Planner</a>
            <a href="https://billybain.github.io/week-5-homework/" target="_blank" rel="noreferrer"> <img src={planner} alt="Daily Planner"></img></a></li>
            <li className="col m-2"><a href="https://github.com/BillyBain/week-4-homework/" target="_blank" rel="noreferrer">Code Quiz</a>
            <a href="https://billybain.github.io/week-4-homework/" target="_blank" rel="noreferrer"> <img src={quiz} alt="Code Quiz"></img></a></li>
            <li className="col m-2"><a href="https://github.com/BillyBain/week-3-homework/" target="_blank" rel="noreferrer">Password Generator</a>
            <a href="https://billybain.github.io/week-3-homework/" target="_blank" rel="noreferrer"> <img src={password} alt="Password Generator"></img></a></li>
          </ul>
    </div>
  );
}

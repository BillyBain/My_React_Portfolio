import password from '../img/password-gen.png';
import movie from '../img/movie-refresh.png';
import bulletin from '../img/dev-bulletin.png';
import employee from '../img/employee-tracker.png';
import weather from '../img/weather-app.png';
import planner from '../img/daily-planner.png';
import quiz from '../img/code-quiz.png';
import hotspot from '../img/hotspot.png';


export default function Projects() {
  return (
    <div className="container-fluid">
          <h3 className='p-2 m-2'> Welcome to my Projects to view the Github Repos please click on the Titles and to view the Deployed Projects click on the Images!</h3>
          <ul className="container-fluid row align-items-start">
            <li className="container-fluid m-2"><p><a className='col' href="https://github.com/BillyBain/HotSpot" target="_blank" rel="noreferrer">HotSpot</a></p>
            <a href="https://hotspot-search.herokuapp.com/" target="_blank" rel="noreferrer"> <img src={hotspot} alt="HotSpot"></img></a><p className='col'>Traveling and sightseeing are always fun, but trying to keep track of everything can be a hassle. What if there was a place to save it all and even continue the search! That is where HotSpot comes in with this React App you can create your own adventure database and never forget that Hot Spot again!</p></li>
            <li className="col m-2"><p><a href="https://github.com/falbanese7/movie-refresh" target="_blank" rel="noreferrer">Movie Refresh</a></p>
            <a href="https://falbanese7.github.io/movie-refresh/" target="_blank" rel="noreferrer"> <img src={movie} alt="Movie Refresh"></img></a><p className='col'>This website is used to look up movies so you can get a quick refresh or see if you would like watch it for the first time. Peek at trailers or closely related videos. Read viewer's reviews to see what others think.</p></li>
            <li className="col m-2"><p><a href="https://github.com/mikerjohnson27/Development-Bulletin" target="_blank" rel="noreferrer">Development Bulletin</a></p>
            <a href="https://whispering-journey-87250.herokuapp.com/login" target="_blank" rel="noreferrer"> <img src={bulletin} alt="Development Bulletin"></img></a><p className='col'>This project will be an application website that helps developers create templates for their projects. They will be able to create projects, add tasks, show who is working on them, and check off completed. As well as upload files for the project.</p></li>
            <li className="col m-2"><p><a href="https://github.com/BillyBain/employee_tracker" target="_blank" rel="noreferrer">Employee Tracker App</a></p>
            <a href="https://github.com/BillyBain/employee_tracker" target="_blank" rel="noreferrer"> <img src={employee} alt="Employee Tracker App"></img></a><p className='col'>Employee Tracker is a application used to track departments roles and employees. This app show you how the team is connected and salaries of employees.</p></li>
            <li className="col m-2"><p><a href="https://github.com/BillyBain/week-6-homework" target="_blank" rel="noreferrer">Weather App</a></p>
            <a href="https://billybain.github.io/week-6-homework/" target="_blank" rel="noreferrer"> <img src={weather} alt="Weather App"></img></a><p className='col'>A weather prediction website using an api, specifically https://openweathermap .org/api/one-call-api. This is a free api that allows you to pull data about the weather.</p></li>
            <li className="col m-2"><p><a href="https://github.com/BillyBain/week-5-homework" target="_blank" rel="noreferrer">Daily Planner</a></p>
            <a href="https://billybain.github.io/week-5-homework/" target="_blank" rel="noreferrer"> <img src={planner} alt="Daily Planner"></img></a><p className='col'>This is a daily work planner. It uses time and local storage to accomplish the tasks. By typing out your task to the corrisponding hour and clicking the flag it will save the text. It uses real time to change the tasks colors. Blue is upcoming, yellow is current, green is past.</p></li>
            <li className="col m-2"><p><a href="https://github.com/BillyBain/week-4-homework/" target="_blank" rel="noreferrer">Code Quiz</a></p>
            <a href="https://billybain.github.io/week-4-homework/" target="_blank" rel="noreferrer"> <img src={quiz} alt="Code Quiz"></img></a><p className='col'>The quiz uses multiple choice questions to test ones knowledge. By answering correctly you move on to the next question. The score is determined by the time remaining when finished. Speed is an important factor beware wrong answers will subtract time.</p></li>
            <li className="col m-2"><p><a href="https://github.com/BillyBain/week-3-homework/" target="_blank" rel="noreferrer">Password Generator</a></p>
            <a href="https://billybain.github.io/week-3-homework/" target="_blank" rel="noreferrer"> <img src={password} alt="Password Generator"></img></a><p className='col'>The password generator uses alerts to select your parameters and then displays in the box when complete.</p></li>
          </ul>
    </div>
  );
}

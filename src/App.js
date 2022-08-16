import React from "react";
import Home from "./components/Home";
import './App.css';

function App() {
  return (
    <div>
        <Home />
        <div className="container-fluid">
        <p><a className="" href="https://github.com/BillyBain" target="_blank" rel="noreferrer"> My Github</a></p>
        <p><a href="https://www.linkedin.com/in/william-bain-a24627233/" target="_blank" rel="noreferrer">My Linkin</a></p>
      </div>  
    <footer>
      <h3>Thank You for Viewing My Digital Portfolio!!!</h3>
    </footer> 
    </div>
  );
}

export default App;

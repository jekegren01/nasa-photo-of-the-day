import React from "react";
import "./App.css";
import logo from "./assets/telescope.jpg";
import AstroPicList from "./components/AstroPicList";

function App() {
    return (
      <div className="App">
          <div className="logo-container">
            <img className="App-logo" src={logo} alt="Telescope Logo" />
            <h1>Astronomy Pic of the Day</h1>
            <AstroPicList />
          </div>
      </div>  
    );
}

export default App;

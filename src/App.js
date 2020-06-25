import React from "react";
import "./App.css";
import logo from "./assets/telescope.jpg";
import AstroPicList from "./components/AstroPicList";
import styled, { css } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

export const Container = styled.div`
  background: aquamarine;
  padding: 5px;
`;

export const P = styled.p`
${props =>
    props.maintext === "maintext" &&
    css`
      font-size: 24px;
      margin: 20px 45px;
      padding: 20px;
      text-align: center;
      font-family: Arial;
    `}
`;

function App() {
    return (
      <Container>
        <div>
        <div className="App">
            <div className="logo-container">
              <img className="App-logo" src={logo} alt="Telescope Logo" />
              <h1>Astronomy Pic of the Day</h1>
              <AstroPicList />
            </div>
        </div> 
        </div>
      </Container> 
    );
}

export default App;

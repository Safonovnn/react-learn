import React from 'react';
import logo from "../img/info-img2.jpg";



export default function HEADER() {
    return (
      <header className="header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div>Добро Пожаловать!!!!!</div>
      </header>
    );
  }
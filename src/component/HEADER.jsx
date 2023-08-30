import React from 'react';
import logo from "../img/info-img2.jpg";
import classCss from "../styleCSS/Header.module.css";



export default function HEADER() {
    return (
      <header className={classCss.header}>
        <div>
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div>Добро Пожаловать!!!!!</div>
      </header>
    );
  }
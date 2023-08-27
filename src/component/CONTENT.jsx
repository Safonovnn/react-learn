import React from 'react';
import img from "../img/lamborghini.jpg";


export default function NAV() {
    return (
      <div className="content">
        <div>
          <img src={img} />
        </div>
        <h1 className="title">НАША КОМПАНИЯ</h1>
        <div>
          <div>POST 1</div>
          <div>POST 2</div>
          <div>POST 3</div>
          <div>POST 4</div>
          <div>POST 5</div>
        </div>
      </div>
    );
  }
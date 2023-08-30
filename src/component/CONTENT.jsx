import React from 'react';
import img from "../img/lamborghini.jpg";
import classCss from "../styleCSS/Content.module.css";
import Post from "./Post"


export default function NAV() {
    return (
      <div className={classCss.content}>
        <div>
          <img src={img} />
        </div>
        <h1 className={classCss.title}>НАША КОМПАНИЯ</h1>
        <Post />
      </div>
    );
  }
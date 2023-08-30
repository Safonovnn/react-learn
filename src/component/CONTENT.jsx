import React from 'react';
import img from "../img/lamborghini.jpg";
import classCss from "../styleCSS/Content.module.css";
import Post from "./Post"


export default function CONTENT() {
    return (
      <div className={classCss.content}>
        <div>
          <img src={img} />
        </div>
        <h1 className={classCss.title}>НАША КОМПАНИЯ</h1>
        <Post text={ "Hello World" } />
        <Post text={"first radd races"} />
        <Post text={"don't miss the opening"} />
        <Post text={"brought together the best racers in the world"} />
        <Post text={"5 days of exciting fight"} />
        
      </div>
    );
  }
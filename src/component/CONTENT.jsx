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
        <h1 className={classCss.title}>Артем Сидоров</h1>
        <Post text={ "Hello World" } likeCount={5} />
        <Post text={"first radd races"} likeCount={35} />
        <Post text={"don't miss the opening"} likeCount={15} />
        <Post text={"brought together the best racers in the world"} likeCount={13} />
        <Post text={"5 days of exciting fight"} likeCount={11} />
        
      </div>
    );
  }
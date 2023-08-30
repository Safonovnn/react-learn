import React from 'react';
import img from "../img/lamborghini.jpg";
import classCss from "../styleCSS/Content.module.css";


export default function Post() {
    return (
        <div>
          <div className={classCss.item}>POST 1</div>
          <div className={classCss.item}>POST 2</div>
          <div className={classCss.item}>POST 3</div>
          <div className={classCss.item}>POST 4</div>
          <div className={classCss.item}>POST 5</div>
        </div>
    );
  }
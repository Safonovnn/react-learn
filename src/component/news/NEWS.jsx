import React from 'react';
import classCss from "./News.module.css";



export default function NEWS() {
    return (
      <div className={classCss.content}>
        <h2 className={classCss.title}>Новости</h2>
      </div>
    );
  }
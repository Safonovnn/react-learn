import React from 'react';
import img from "../../img/lamborghini.jpg";
import classCss from "./Content.module.css";
import Post from "./posts/Post"

function UserInfo(){
  return(
        <div>
          <div>
           <img src={img} />
          </div>
          <h1 className={classCss.title}>Артем Сидоров</h1>
          <div className={classCss.infoUser}>
            <div>Дата рождения:</div>
            <div>1980</div>
            <div>Страна:</div>
            <div>Россия</div>
            <div>Город:</div>
            <div>Сыктывкар</div>
          </div>
        </div>
  )
}


export default function CONTENT() {
    return (
      <div className={classCss.content}>
        <UserInfo />

        <Post  />
      
      </div>
    );
  }
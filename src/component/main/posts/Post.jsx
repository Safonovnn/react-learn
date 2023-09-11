import React from 'react';
import classCss from "./Posts.module.css";
import imgPosts from "../../../img/info-img.jpg";


function MyPost({text, likeCount }){
  return(
    <div>
       <div className={classCss.item}>
            <div>
              <img className={classCss.imgPost} src={imgPosts} />
            </div>
            <div>
              {text}
            </div>
          </div>
          <span>Like {likeCount}</span>
    </div>
  )
}

export default function Post() {
    return (
        <div>
          <h3>Мои посты</h3>
          <div>
            <textarea></textarea>
            <button>Опубликовать</button>
          </div>
           <MyPost text={ "Hello World" } likeCount={5} />        
           <MyPost text={"first radd races"} likeCount={35}/>        
           <MyPost text={"don't miss the opening"} likeCount={15}/>        
        </div>
    );
  }
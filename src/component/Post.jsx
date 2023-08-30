import React from 'react';
import classCss from "../styleCSS/Posts.module.css";
import imgPosts from "../img/info-img.jpg";


export default function Post({text, likeCount}) {
    return (
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
    );
  }
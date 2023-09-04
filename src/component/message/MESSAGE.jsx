import React from 'react';
import classCss from "../../styleCSS/Message.module.css";

export default function MESSAGE() {
    return (
      <div className={classCss.messege}>
        <h2 className={classCss.title}>Сообщения</h2>

        <div className={classCss.messageContent}>
          <div className={classCss.messageUser}></div>
          <div className={classCss.messageText}></div>
        </div>
        
      </div>
    );
  }
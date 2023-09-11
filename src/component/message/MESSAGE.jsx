import React from 'react';
import classCss from "./Message.module.css";
import { NavLink } from 'react-router-dom';

function MessageUser({id, userMessage}){
  return (
    <li className={classCss.item}>
      <NavLink to={id}>{userMessage}</NavLink>
    </li>

  )
}

function MessageDialog({textMessage}){
  return (
  <div className={classCss.messageTextItem}>{textMessage}</div>
  )
}

export default function MESSAGE() {
    return (
      <div className={classCss.message}>
        <h2 className={classCss.title}>Сообщения</h2>

        <div className={classCss.messageContent}>
          <div className={classCss.messageUser}>
            <ul className={classCss.messageItem}>
            <MessageUser id="1" userMessage="Andrey S." />
            <MessageUser id="2" userMessage="Victor K." />
            <MessageUser id="3" userMessage="Sasha O." />
            <MessageUser id="4" userMessage="Elena I." />
            <MessageUser id="5" userMessage="Valera D." />
            </ul>
          </div>
          <div className={classCss.messageText}>
            <MessageDialog textMessage="Hello" />
            <MessageDialog textMessage="Hi!" />
            <MessageDialog textMessage="How are you?" />
            <MessageDialog textMessage="Cool" />
          </div>
        </div>
        
      </div>
    );
  }
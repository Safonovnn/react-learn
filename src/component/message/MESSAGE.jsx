import React from 'react';
import classCss from "./Message.module.css";
import { NavLink } from 'react-router-dom';

export default function MESSAGE() {
    return (
      <div className={classCss.message}>
        <h2 className={classCss.title}>Сообщения</h2>

        <div className={classCss.messageContent}>
          <div className={classCss.messageUser}>
            <ul className={classCss.messageItem}>
              <li className={classCss.item}>
                <NavLink to="/MESSAGE/1">Andrey S.</NavLink>
                </li>
              <li className={classCss.item}>
              <NavLink to="/MESSAGE/2">Victor K.</NavLink>
              </li>
              <li className={classCss.item}>
              <NavLink to="/MESSAGE/3">Sasha O.</NavLink>
              </li>
              <li className={classCss.item}>
              <NavLink to="/MESSAGE/4">Elena I.</NavLink>
              </li>
              <li className={classCss.item}>
              <NavLink to="/MESSAGE/5">Valera D.</NavLink>
              </li>
            </ul>
          </div>
          <div className={classCss.messageText}>
            <div className={classCss.messageTextItem}>Hello</div>
            <div className={classCss.messageTextItem}>Hi!</div>
            <div className={classCss.messageTextItem}>How are you?</div>
            <div className={classCss.messageTextItem}>Cool</div>
          </div>
        </div>
        
      </div>
    );
  }
import React from 'react';
import classCss from "../styleCSS/Nav.module.css";



export default function NAV() {
    return (
      <nav className={classCss.nav}>
        <ul>
          <li className={classCss.item}>
            <a href="/CONTENT" className={classCss.itemEl} >Профиль</a>
          </li>
          <li className={classCss.item}>
            <a href="/MESSAGE" className={classCss.itemEl} >Сообщения</a>
          </li>
          <li className={classCss.item}>
            <a href="/NEWS" className={classCss.itemEl} >Новости</a>
          </li>
          <li className={classCss.item}>
            <a href="/SETTINGS" className={classCss.itemEl} >Настройки</a>
          </li>
        </ul>
      </nav>
    );
  }
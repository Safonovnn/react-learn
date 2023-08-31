import React from 'react';
import classCss from "../styleCSS/Nav.module.css";



export default function NAV() {
    return (
      <nav className={classCss.nav}>
        <ul>
          <li className={classCss.item}>
            <a className={classCss.itemEl} href="#">Профиль</a>
          </li>
          <li className={classCss.item}>
            <a className={classCss.itemEl} href="#">Сообщения</a>
          </li>
          <li className={classCss.item}>
            <a className={classCss.itemEl} href="#">Новости</a>
          </li>
          <li className={classCss.item}>
            <a className={classCss.itemEl} href="#">Настройки</a>
          </li>
        </ul>
      </nav>
    );
  }
import React from 'react';
import classCss from "../styleCSS/Nav.module.css";



export default function NAV() {
    return (
      <nav className={classCss.nav}>
        <ul>
          <li className={classCss.item}>
            <a className={classCss.itemEl} href="#">Главная</a>
          </li>
          <li className={classCss.item}>
            <a className={classCss.itemEl} href="#">О Компании</a>
          </li>
          <li className={classCss.item}>
            <a className={classCss.itemEl} href="#">Новости</a>
          </li>
          <li className={classCss.item}>
            <a className={classCss.itemEl} href="#">Контакты</a>
          </li>
        </ul>
      </nav>
    );
  }
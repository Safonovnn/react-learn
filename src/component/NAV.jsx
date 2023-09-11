import React from 'react';
import classCss from "../styleCSS/Nav.module.css";
import { NavLink } from 'react-router-dom';



export default function NAV() {
    return (
      <nav className={classCss.nav}>
        <ul>
          <li className={classCss.item}>
            <NavLink to="CONTENT" className={classCss.itemEl} >Профиль</NavLink>
          </li>
          <li className={classCss.item}>
            <NavLink to="MESSAGE" className={classCss.itemEl} >Сообщения</NavLink>
          </li>
          <li className={classCss.item}>
            <NavLink to="NEWS" className={classCss.itemEl} >Новости</NavLink>
          </li>
          <li className={classCss.item}>
            <NavLink to="SETTINGS" className={classCss.itemEl} >Настройки</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
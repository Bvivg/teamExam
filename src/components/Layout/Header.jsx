import React from "react";
import NavLink from "@/UI/NavLink/NavLink";
import { ChatIcon, SettingsIcon } from "@/icons/Icons";
const Header = () => {
  return (
    <div className="header">
      <a href="/" className="logo">
        <img src="@/public/LogoLight.png" alt="" />
      </a>
      <nav className="nav">
        <NavLink to="support">
          <ChatIcon /> Поддержка
        </NavLink>
        <NavLink to="orders">
          <PhoneIcon /> Мои заказы
        </NavLink>
        <NavLink to="settings">
          <SettingsIcon/> Настройки
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;

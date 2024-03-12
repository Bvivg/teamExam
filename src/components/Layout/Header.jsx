"use client";
import { useState } from "react";
import { ChatIcon, SettingsIcon, PhoneIcon, MoneyIcon } from "@/icons/Icons";
import NavLink from "../UI/NavLink/NavLink";
import styles from "./style.module.scss";
import Button from "../UI/Button/Button";
import Avatar from "../UI/Avatar/Avatar";
import Link from "next/link";
import clsx from "clsx";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.header_bg}>
      <div className={styles.header}>
        <Link href="/" className={styles.logo}>
          <img src="/LogoLight.png" alt="logo" />
        </Link>
        <div
          className={clsx(styles.hamburger, isActive ? styles.active : "")}
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className={clsx(styles.nav_collapse, isActive ? styles.active : "")}
        >
          <div className={styles.balance}>
            <div className={styles.balanceInfo}>
              <span>
                <MoneyIcon /> Баланс:
              </span>
              <Button primary="primary" size="xm">
                1234 ₽
              </Button>
            </div>
            <div className={styles.balanceAction}>
              <Button primary="tertiary" size="xm">
                Пополнить
              </Button>
              <Button primary="tertiary" size="xm">
                Вывести
              </Button>
            </div>
          </div>
          <nav className={styles.nav}>
            <NavLink to="/support">
              <ChatIcon /> Поддержка
            </NavLink>
            <NavLink to="/orders">
              <PhoneIcon /> Мои заказы
            </NavLink>
            <NavLink to="/settings">
              <SettingsIcon /> Настройки
            </NavLink>
          </nav>
          <div className={styles.profile}>
            <Button primary="primary" size="xl">
              Разместить заказ
            </Button>
            <Avatar imgPath="/LogoLight.png" imgSize="xm"></Avatar>
            <Button primary="tertiary" size="xl">
              Выйти
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

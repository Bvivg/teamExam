"use client";
import { useState } from "react";
import {
  ChatIcon,
  SettingsIcon,
  PhoneIcon,
  MoneyIcon,
  LogoLight,
  LogoDark,
  SupportIcon,
  UserIcon,
} from "@/icons/Icons";
import NavLink from "../UI/NavLink/NavLink";
import styles from "./style.module.scss";
import Button from "../UI/Button/Button";
import Avatar from "../UI/Avatar/Avatar";
import Link from "next/link";
import clsx from "clsx";
import { useTheme } from "@/context/ThemeContext";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const {theme} = useTheme()

  return (
    <div
      className={
        theme === "default" || theme === "cursed"
          ? styles.container
          : styles.container_light
      }
    >
      <div className={styles.header}>
        <Link href="/" className={styles.logo}>
          {theme === "default" || theme === "cursed" ? (
            <LogoLight />
          ) : theme === "light" ? (
            <LogoDark />
          ) : (
            ""
          )}
        </Link>
        {theme === "default" ? (
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
        ) : theme === "light" ? (
          <div className={clsx(styles.nav_collapse, styles.nav_collapse_light)}>
            <nav className={clsx(styles.nav, styles.nav_light)}>
              <Link href="/about">О сервисе</Link>
              <NavLink to="/support">
                <SupportIcon /> Поддержка
              </NavLink>
              <Button primary="primary" size="xl">
                Войти <UserIcon />
              </Button>
            </nav>
          </div>
        ) : (
          ""
        )}
        {theme === "default" ? (
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
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;

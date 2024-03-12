"use client";
import React from "react";
import styles from "./style.module.scss";
import Button from "../UI/Button/Button";
import {
  MasterCard,
  SupportIcon,
  VisaIcon,
  WebMoneyIcon,
  YandexIcon,
} from "@/icons/Icons";
import NavLink from "../UI/NavLink/NavLink";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.payment}>
          <span>Способы оплаты</span>
          <Button primary="tertiary" size="xm">
            <VisaIcon />
          </Button>
          <Button primary="tertiary" size="xm">
            <MasterCard />
          </Button>
          <Button primary="tertiary" size="xm">
            <YandexIcon />
          </Button>
          <Button primary="tertiary" size="xm">
            <WebMoneyIcon />
          </Button>
        </div>
        <span className={styles.rights}>Права защищены и опасны</span>
        <div className={styles.footerAction}>
          <NavLink to="/support">
            <SupportIcon /> Поддержка
          </NavLink>

          <Button primary="primary" size="xl">
            Найти заказ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

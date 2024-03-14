import React from "react";
import styles from "./style.module.scss";
import Button from "../UI/Button/Button";
import {
  FooterBg,
  MasterCard,
  SupportIcon,
  VisaIcon,
  WebMoneyIcon,
  YandexIcon,
} from "@/icons/Icons";
import NavLink from "../UI/NavLink/NavLink";
import clsx from "clsx";

const Footer = ({ theme }) => {
  return (
    <div
      className={clsx(
        styles.container,
        theme === "light"
          ? styles.container_footer_light
          : theme === "cursed"
          ? styles.footer_none
          : ""
      )}
      style={{ marginTop: "auto" }}
    >
      {theme === "light" ? (
        <div className={styles.container_footer_light_bg}>
          <FooterBg />
        </div>
      ) : null}
      {theme === "default" || theme === "light" ? (
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
      ) : null}
    </div>
  );
};

export default Footer;

"use client";
import { useEffect, useState } from "react";
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
import Modal from "../UI/Modal/Modal";
import Form from "../UI/Auth/Auth";
import { fetchUserById, logout } from "@/api/request";

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const [isOpened, setIsOpened] = useState(false);
    const [userId, setUserId] = useState(null);
    const [user, setUser] = useState(null);
    const openModal = () => {
        setIsOpened(true);
    };
    const closeModal = () => {
        setIsOpened(false);
    };

    const { theme } = useTheme();
    useEffect(() => {
        fetchUserById().then((userInfo) => {
            setUserId(userInfo.id);
            setUser(userInfo);
        });
    }, []);
    if (theme !== "none") {
        return (
            <div
                className={
                    userId === null
                        ? styles.container_light
                        : theme === "default" ||
                          theme === "cursed" ||
                          theme === "light"
                        ? styles.container
                        : null
                }
            >
                <Modal opened={isOpened} onClose={closeModal}>
                    <Form type="login" />
                </Modal>
                <div className={styles.header}>
                    <Link href="/" className={styles.logo}>
                        {userId === null ? (
                            <LogoDark />
                        ) : theme === "default" ||
                          theme === "cursed" ||
                          theme === "light" ? (
                            <LogoLight />
                        ) : (
                            ""
                        )}
                    </Link>
                    <div
                        className={clsx(
                            styles.hamburger,
                            isActive ? styles.active : ""
                        )}
                        onClick={() => {
                            setIsActive(!isActive);
                        }}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    {userId === null ? (
                        <div
                            className={clsx(
                                styles.nav_collapse,
                                styles.nav_collapse_light
                            )}
                        >
                            <nav className={clsx(styles.nav, styles.nav_light)}>
                                <Link href="/about">О сервисе</Link>
                                <NavLink to="/support">
                                    <SupportIcon /> Поддержка
                                </NavLink>
                                <Button
                                    click={openModal}
                                    primary="primary"
                                    size="xl"
                                >
                                    Войти <UserIcon />
                                </Button>
                            </nav>
                        </div>
                    ) : (
                        ((theme === "default" && userId) ||
                            (theme === "light" && userId)) && (
                            <div
                                className={clsx(
                                    styles.nav_collapse,
                                    isActive ? styles.active : ""
                                )}
                            >
                                <div className={styles.balance}>
                                    <div className={styles.balanceInfo}>
                                        <span>
                                            <MoneyIcon /> Баланс:
                                        </span>
                                        <Button primary="primary" size="xm">
                                            {user.balance} ₽
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
                                    <Link href="/orders/new">
                                        <Button primary="primary" size="xl">
                                            Найти заказ
                                        </Button>
                                    </Link>
                                    <Avatar
                                        imgPath="/LogoLight.png"
                                        imgSize="xm"
                                    />
                                    <Button
                                        primary="tertiary"
                                        size="xl"
                                        click={logout}
                                    >
                                        Выйти
                                    </Button>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default Header;

import React, { useState } from "react";
import Input from "../InputForm/InputForm";
import { EmailIcon, LogoDark, PasswordIcon, UsernameIcon } from "@/icons/Icons";
import styles from "./style.module.scss";
import {
    fetchUserById,
    fetchUserMe,
    getUserId,
    logIn,
    register,
} from "@/api/request";
import Button from "../Button/Button";
import { handleChange } from "@/utils/HandleChange";

const Form = ({ type }) => {
  
    const [authForm, setAuthForm] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const handleRegister = async (e) => {
        e.preventDefault();
        if (authForm.password !== authForm.confirmPassword) {
            setErrorMessage("Пароли не совпадают");
            return;
        }
        try {
            await register(authForm);
            setAuthType("login");
            setErrorMessage("");
        } catch (error) {
            setErrorMessage(error);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await logIn(authForm);
            setErrorMessage("");
        } catch (error) {
            setErrorMessage(error);
        }
    };
    function switcher() {
        authType === "register"
            ? setAuthType("login")
            : setAuthType("register");
        setErrorMessage("");
    }
    const [authType, setAuthType] = useState(type);
    return (
        <form
            className={styles.form}
            onSubmit={authType === "register" ? handleRegister : handleLogin}
        >
            <LogoDark />
            <Input
                placeholder="Логин"
                icon={<UsernameIcon />}
                name="username"
                type="text"
                value={authForm.username}
                onChange={(e) => handleChange(e, setAuthForm)}
            />
            {authType === "register" ? (
                <Input
                    placeholder="Электронная почта"
                    icon={<EmailIcon />}
                    name="email"
                    type="email"
                    value={authForm.email}
                    onChange={(e) => handleChange(e, setAuthForm)}
                />
            ) : null}
            <Input
                placeholder="Пароль"
                icon={<PasswordIcon />}
                name="password"
                type="password"
                value={authForm.password}
                onChange={(e) => handleChange(e, setAuthForm)}
            />
            {authType === "register" ? (
                <Input
                    placeholder="Подтвердите пароль"
                    icon={<PasswordIcon />}
                    name="confirmPassword"
                    type="password"
                    value={authForm.confirmPassword}
                    onChange={(e) => handleChange(e, setAuthForm)}
                />
            ) : null}
            <div className={styles.auth_action}>
                <Button primary="primary" type="submit" size="xl">
                    {authType === "register" ? "РЕГИСТРАЦИЯ" : "ВХОД"}
                </Button>
                <Button
                    primary="fourth"
                    type="button"
                    size="xl"
                    click={switcher}
                >
                    {authType === "login" ? "РЕГИСТРАЦИЯ" : "ВХОД"}
                </Button>
            </div>
            {/* <div className={styles.error}>{errorMessage}</div> */}
        </form>
    );
};

export default Form;

import React, { useState } from "react";
import Input from "../Input/Input";
import { EmailIcon, LogoDark, PasswordIcon, UsernameIcon } from "@/icons/Icons";
import styles from "./style.module.scss";
import { register } from "@/api/request";
import Button from "../Button/Button";

const Form = ({ type }) => {
  const [authForm, setAuthForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAuthForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (authForm.password !== authForm.confirmPassword) {
      console.log("Пароли не совпадают");
      return;
    }
    register(authForm);
    console.log(authForm);
  };

  const handleLogin = (e) => {};

  return (
    <form
      className={styles.form}
      onSubmit={type === "register" ? handleRegister : handleLogin}
    >
      <LogoDark />
      <Input
        placeholder="Логин"
        icon={<UsernameIcon />}
        name="username"
        type="text"
        value={authForm.username}
        onChange={handleChange}
      />
      {type === "register" ? (
        <Input
          placeholder="Электронная почта"
          icon={<EmailIcon />}
          name="email"
          type="email"
          value={authForm.email}
          onChange={handleChange}
        />
      ) : null}
      <Input
        placeholder="Пароль"
        icon={<PasswordIcon />}
        name="password"
        type="password"
        value={authForm.password}
        onChange={handleChange}
      />
      {type === "register" ? (
        <Input
          placeholder="Подтвердите пароль"
          icon={<PasswordIcon />}
          name="confirmPassword"
          type="password"
          value={authForm.confirmPassword}
          onChange={handleChange}
        />
      ) : null}
      <Button primary="primary" size="special">
        {type === "register" ? "РЕГИСТРАЦИЯ" : "ВХОД"}
      </Button>
    </form>
  );
};

export default Form;

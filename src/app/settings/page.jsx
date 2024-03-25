"use client";
import { useTheme } from "@/context/ThemeContext";
import styles from "./style.module.scss";
import PageTitle from "@/components/UI/PageTitle/PageTitle";
import { useState } from "react";
import Input from "@/components/UI/InputForm/InputForm";
import { handleChange } from "@/utils/HandleChange";
import Button from "@/components/UI/Button/Button";
import { EyeIcon } from "@/icons/Icons";
import { fetchUserById } from "@/api/request";
const page = () => {
  const { changeTheme } = useTheme();
  const userId = 2
  changeTheme("default");
  const user = fetchUserById(userId)
  console.log(user);
  return (
    <div className={styles.page}>
      <PageTitle title="Настройки" />
      <div className={styles.userInfo}>
        <div className={styles.userInfoBlock}>
          <h1 className={styles.userInfoBlockName}>{user.username}</h1>
          <p className={styles.userInfoBlockEmail}>
            <span>Email:</span> {user.email}
          </p>
        </div>
        <p className={styles.userInfoId}>
          <span>ID:</span> {user.id}
        </p>
      </div>
      <form className={styles.form}>
        <PageTitle title="Образование" type="common" />
        <div className={styles.formControl}>
          <Input
            name="institution"
            type="text"
            placeholder="Учебное заведение"
            onChange={(e) => handleChange(e, setUser)}
            value={user.institution}
          />
          <Input
            name="faculty"
            type="text"
            placeholder="Факультет"
            onChange={(e) => handleChange(e, setUser)}
            value={user.faculty}
          />
          <Input
            name="specialty"
            type="text"
            placeholder="Специальность"
            onChange={(e) => handleChange(e, setUser)}
            value={user.specialty}
          />
          <Input
            name="status"
            type="text"
            placeholder="Статус"
            onChange={(e) => handleChange(e, setUser)}
            value={user.status}
          />
          <Input
            name="course"
            type="text"
            placeholder="Курс"
            onChange={(e) => handleChange(e, setUser)}
            value={user.course}
          />
        </div>
        <Button primary="save" type="submit">
          Сохранить
        </Button>
      </form>
      <form className={styles.changePassword}>
        <PageTitle title="Пароль" type="common" />
        <div className={styles.changePasswordForm}>
          <Input
            icon={<EyeIcon />}
            name="oldPassword"
            placeholder="Старый пароль"
            value={user.oldPassword}
            onChange={(e) => handleChange(e, setUser)}
          />
          <Input
            icon={<EyeIcon />}
            name="password"
            placeholder="Новый пароль"
            value={user.password}
            onChange={(e) => handleChange(e, setUser)}
          />
          <Input
            icon={<EyeIcon />}
            name="confirmPassword"
            placeholder="Новый пароль еще раз"
            value={user.confirmPassword}
            onChange={(e) => handleChange(e, setUser)}
          />
        </div>
        <Button primary="save" type="submit">
          Изменить
        </Button>
      </form>
    </div>
  );
};

export default page;

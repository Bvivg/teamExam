"use client";
import { useTheme } from "@/context/ThemeContext";
import styles from "./style.module.scss";
import PageTitle from "@/components/UI/PageTitle/PageTitle";
import { useEffect, useState } from "react";
import Input from "@/components/UI/InputForm/InputForm";
import { handleChange } from "@/utils/HandleChange";
import Button from "@/components/UI/Button/Button";
import { EyeIcon } from "@/icons/Icons";
import { changePassword, fetchUserById, updateUser } from "@/api/request";
const Settings = () => {
  const { changeTheme } = useTheme();
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    institution: "",
    faculty: "",
    specialty: "",
    status: "",
    course: "",
  });
  const [passwordForm, setPasswordForm] = useState({
    oldPassword: "",
    password: "",
    confirmPassword: "",
  });
  const fetchUserInfo = () => {
    fetchUserById().then((userInfo) => {
      setUser(userInfo);
      setFormData({
        institution: userInfo.institution,
        faculty: userInfo.faculty,
        specialty: userInfo.specialty,
        status: userInfo.status,
        course: userInfo.course,
      });
    });
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateUser(user.id, formData).finally(() => {
      fetchUserInfo();
    });
  };

  const handleFormChangePassword = (e) => {
    e.preventDefault();
    changePassword(user.id, passwordForm);
  };

  changeTheme("default");
  return (
    <div className={styles.page}>
      <PageTitle title="Настройки" />
      <div className={styles.userInfo}>
        <div className={styles.userInfoBlock}>
          <h1 className={styles.userInfoBlockName}>{user && user.username}</h1>
          <p className={styles.userInfoBlockEmail}>
            <span>Email:</span> {user && user.email}
          </p>
        </div>
        <p className={styles.userInfoId}>
          <span>ID:</span> {user && user.id}
        </p>
      </div>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <PageTitle title="Образование" type="common" />
        <div className={styles.formControl}>
          <Input
            name="institution"
            type="text"
            placeholder="Учебное заведение"
            onChange={(e) => handleChange(e, setFormData)}
            value={formData && formData.institution}
          />
          <Input
            name="faculty"
            type="text"
            placeholder="Факультет"
            onChange={(e) => handleChange(e, setFormData)}
            value={formData && formData.faculty}
          />
          <Input
            name="specialty"
            type="text"
            placeholder="Специальность"
            onChange={(e) => handleChange(e, setFormData)}
            value={formData && formData.specialty}
          />
          <Input
            name="status"
            type="text"
            placeholder="Статус"
            onChange={(e) => handleChange(e, setFormData)}
            value={formData && formData.status}
          />
          <Input
            name="course"
            type="number"
            placeholder="Курс"
            onChange={(e) => handleChange(e, setFormData)}
            value={formData && formData.course}
          />
        </div>
        <Button primary="save" type="submit">
          Сохранить
        </Button>
      </form>
      <form
        className={styles.changePassword}
        onSubmit={handleFormChangePassword}
      >
        <PageTitle title="Пароль" type="common" />
        <div className={styles.changePasswordForm}>
          <Input
            icon={<EyeIcon />}
            name="oldPassword"
            type="password"
            placeholder="Старый пароль"
            value={passwordForm && passwordForm.oldPassword}
            onChange={(e) => handleChange(e, setPasswordForm)}
          />
          <Input
            icon={<EyeIcon />}
            name="password"
            type="password"
            placeholder="Новый пароль"
            value={passwordForm && passwordForm.password}
            onChange={(e) => handleChange(e, setPasswordForm)}
          />
          <Input
            icon={<EyeIcon />}
            type="password"
            name="confirmPassword"
            placeholder="Новый пароль еще раз"
            value={passwordForm && passwordForm.confirmPassword}
            onChange={(e) => handleChange(e, setPasswordForm)}
          />
        </div>
        <Button primary="save" type="submit">
          Изменить
        </Button>
      </form>
    </div>
  );
};

export default Settings;

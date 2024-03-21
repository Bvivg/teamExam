"use client";
import { useTheme } from "@/context/ThemeContext";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
const page = () => {
  const { changeTheme } = useTheme();
  useEffect(() => {
    changeTheme("default");
  }, []);
  return <div className={styles.page}></div>;
};

export default page;

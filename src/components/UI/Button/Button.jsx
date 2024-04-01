"use client";
import clsx from "clsx";
import "./style.scss";
const Button = ({ children, primary, size, click, type }) => {
  return (
    <button onClick={click} type={type} className={clsx(primary, size)}>
      {children}
    </button>
  );
};

export default Button;

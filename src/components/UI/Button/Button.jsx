"use client";
import clsx from "clsx";
import "./style.scss";
const Button = ({ children, primary, size, click }) => {
  return (
    <button onClick={click} className={clsx(primary, size)}>
      {children}
    </button>
  );
};

export default Button;

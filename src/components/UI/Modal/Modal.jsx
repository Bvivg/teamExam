import React, { useState } from "react";
import styles from "./style.module.scss";
import clsx from "clsx";

const Modal = ({ opened, children }) => {
  const [isOpen, setIsOpen] = useState(opened);

  const handleClose = () => {
    setIsOpen(!opened);
  };

  return (
    <div
      className={clsx(
        styles.modal_backdrop,
        !isOpen ? styles.modal_closed : null
      )}
    >
      <div className={styles.modal}>
        <button className={styles.modal_button} onClick={handleClose}>
          ╳
        </button>
        <div className={styles.modal_content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;

import React, { useState } from "react";
import styles from "./style.module.scss";
import clsx from "clsx";

const Modal = ({ opened, onClose, children }) => {

  if (!opened) {
    return false;
  }

  return (
    <div
      className={clsx(
        styles.modal_backdrop,
        !opened ? styles.modal_closed : null
      )}
    >
      <div className={styles.modal}>
        <button className={styles.modal_button} onClick={onClose}>
          ╳
        </button>
        <div className={styles.modal_content}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;

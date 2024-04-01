import React from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
const HomePreviewCard = ({ boldText, text, img, imgType }) => {
  return (
    <div className={styles.card}>
      <div
        className={clsx(
          styles.cardIcon,
          imgType === "light"
            ? styles.light
            : imgType === "orange"
            ? styles.orange
            : null
        )}
      >
        {img}
      </div>
      <p className={styles.cardText}>
        <span>{boldText}</span> {text}
      </p>
    </div>
  );
};

export default HomePreviewCard;

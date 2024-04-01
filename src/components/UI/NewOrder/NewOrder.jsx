import React from "react";
import styles from "./style.module.scss";
import Button from "../Button/Button";
import Link from "next/link";

const NewOrder = ({ title, type, subject, date, id }) => {
  return (
    <div className={styles.order}>
      <div className={styles.orderInfo}>
        <h1 className={styles.title}>{title}</h1>
        <span className={styles.orderInfoBlock}>
          {subject}, {type}
        </span>
      </div>
      <div className={styles.orderStatus}>
        <span className={styles.date}>Сделать до {date}</span>
        <Link href={`/orders/new/${id}`}>
          <Button primary="fourth" size="xm">Подробнее</Button>
        </Link>
      </div>
    </div>
  );
};

export default NewOrder;

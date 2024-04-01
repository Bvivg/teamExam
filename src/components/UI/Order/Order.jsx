import React from "react";
import styles from "./style.module.scss";
import clsx from "clsx";

const Order = ({ title, type, subject, status, price, customer }) => {
  return (
    <div className={styles.order}>
      <div className={styles.orderInfo}>
        <h1
          className={clsx(
            styles.title,
            status === true
              ? styles.competention
              : status === false
              ? styles.canceled
              : null
          )}
        >
          {title}
        </h1>
        <span className={styles.orderInfoBlock}>
          {subject}, {type}
        </span>
      </div>
      {status === null ? (
        <div className={styles.orderStatus}>
          <span className={styles.priceBlock}>
            Цена: <span className={styles.price}>{price}</span>
          </span>
          <span className={styles.author}>Заказчик: {customer}</span>
        </div>
      ) : status ? (
        <span className={styles.statusCompetention}>Идёт конкурс</span>
      ) : (
        <span className={styles.statusCanceled}>Конкурс завершён</span>
      )}
    </div>
  );
};

export default Order;

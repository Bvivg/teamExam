import { formatDate } from "@/utils/FormatDate";
import styles from "./style.module.scss";
import PageTitle from "@/components/UI/PageTitle/PageTitle";
import {  InProgressIcon } from "@/icons/Icons";

const page = ({ params: id }) => {
  const order = {
    id: 1,
    order_name: "Название заказа",
    status: "В процессе",
    subject: "Тема заказа",
    type: "Тип задачи",
    date: formatDate(),
    price: 100,
    customer_id: 123,
  };
  return (
    <div className={styles.page}>
      <PageTitle title={`Заказ №${order.id}`} />
      <div className={styles.order}>
        <div className={styles.orderInfo}>
          <h1 className={styles.title}>{order.order_name}</h1>
          <span className={styles.orderSubType}>
            {order.subject}, {order.type}
          </span>
        </div>
        <div className={styles.orderStatus}>
          <span className={styles.date}>
            <InProgressIcon /> Сделать до {order.date}
          </span>
          <span className={styles.price}>
            Предложение заказчка: <span>{order.price}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;

"use client";
import { useTheme } from "@/context/ThemeContext";
import styles from "./style.module.scss";
import PageTitle from "@/components/UI/PageTitle/PageTitle";
import NewOrder from "@/components/UI/NewOrder/NewOrder";
import { formatDate } from "@/utils/FormatDate";
const find = () => {
  const ordersData = [
    {
      id: 1,
      title: "Заказ 1",
      type: "Тип 1",
      subject: "Предмет 1",
      date: formatDate(),
    },
  ];

  const { changeTheme } = useTheme();
  changeTheme("default");
  return (
    <div className={styles.page}>
      <PageTitle title="Новые заказы" />
      <div className={styles.list}>
        {ordersData.map((order, index) => (
          <NewOrder
            date={order.date}
            id={order.id}
            subject={order.subject}
            type={order.type}
            title={order.title}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default find;

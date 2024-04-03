"use client";
import { useTheme } from "@/context/ThemeContext";
import styles from "./style.module.scss";
import Order from "@/components/UI/Order/Order";
import PageTitle from "@/components/UI/PageTitle/PageTitle";
const Orders = () => {
  const ordersData = [
    {
      title: "Заказ 1",
      type: "Тип 1",
      subject: "Предмет 1",
      status: true,
      price: 100,
      customer: "Клиент 1",
    },
    { 
      title: "Заказ 2",
      type: "Тип 2",
      subject: "Предмет 2",
      status: false,
      price: 200,
      customer: "Клиент 2",
    },
    {
      title: "Заказ 3",
      type: "Тип 3",
      subject: "Предмет 3",
      status: null,
      price: 300,
      customer: "Клиент 3",
    },
  ];

  const { changeTheme } = useTheme();
  changeTheme("default");
  return (
    <div className={styles.page}>
      <PageTitle title="Мои заказы" />
      <div className={styles.list}>
        {ordersData.map((order, index) => (
          <Order
            key={index}
            title={order.title}
            type={order.type}
            subject={order.subject}
            status={order.status}
            price={order.price}
            customer={order.customer}
          />
        ))}
      </div>
    </div>
  );
};

export default Orders;

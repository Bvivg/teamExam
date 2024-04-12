"use client";
import { formatDate } from "@/utils/FormatDate";
import styles from "./style.module.scss";
import PageTitle from "@/components/UI/PageTitle/PageTitle";
import { AttachmentIcon, InProgressIcon, SendIcon } from "@/icons/Icons";
import Input from "@/components/UI/InputForm/InputForm";
import { handleChange } from "@/utils/HandleChange";
import { useState } from "react";
import Message from "@/components/UI/Message/Message";
import Button from "@/components/UI/Button/Button";

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
  const [application, setApplication] = useState({
    description: "",
    origin: "",
    offer: "",
  });
  const [messages, setMessages] = useState([
    {
      from: 1,
      to: 2,
      message: "Привет! Как дела?",
      time: "12:21",
    },
    {
      from: 2,
      to: 1,
      message: "Привет! У меня все хорошо, спасибо! А у тебя?",
      time: "12:22",
    },
    {
      from: 1,
      to: 2,
      message: "Тоже все отлично, спасибо! Чем занимаешься?",
      time: "12:23",
    },
  ]);

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
            Предложение заказчка: <span>{order.price} ₽</span>
          </span>
        </div>
      </div>
      <div className={styles.feedback}>
        <form className={styles.application}>
          <div className={styles.inputControl}>
            Описание
            <Input
              name="description"
              textarea={true}
              value={application.description}
              onChange={(e) => handleChange(e, setApplication)}
            />
          </div>
          <div className={styles.inputControl}>
            Запрашиваемая оригинальность
            <Input
              name="origin"
              value={application.origin}
              onChange={(e) => handleChange(e, setApplication)}
            />
          </div>
          <div className={styles.inputControl}>
            Предложение:
            <Input
              name="offer"
              value={application.offer}
              onChange={(e) => handleChange(e, setApplication)}
            />
          </div>
        </form>
        <div className={styles.chat}>
          {messages.map((message) => {
            return (
              <Message
                from={message.from}
                to={message.to}
                message={message.message}
                time={message.time}
              />
            );
          })}
          <div className={styles.form}>
            <Input
              icon={<AttachmentIcon />}
              button={
                <Button type="submit" primary="primary" size="xl">
                  Отправить <SendIcon />
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

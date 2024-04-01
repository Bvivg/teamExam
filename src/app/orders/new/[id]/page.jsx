"use client";
import { formatDate } from "@/utils/FormatDate";
import styles from "./style.module.scss";
import PageTitle from "@/components/UI/PageTitle/PageTitle";
import { AttachmentIcon, InProgressIcon, SendIcon } from "@/icons/Icons";
import Input from "@/components/UI/InputForm/InputForm";
import { handleChange } from "@/utils/HandleChange";
import { useState, useRef, useEffect } from "react";
import Message from "@/components/UI/Message/Message";
import Button from "@/components/UI/Button/Button";
import { fetchUserById } from "@/api/request";
const page = ({ params: id }) => {
  const [userId, setUserId] = useState(null);
  fetchUserById().then((user) => {
    setUserId(user.id);
  });

  const chatBlock = useRef(null);
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
  const [message, setMessage] = useState({
    message: null,
  });
  const [chatHeight, setChatHeight] = useState(1000);
  const sendMessage = (e) => {
    e.preventDefault();
    const newMessage = {
      from: 1,
      to: 2,
      message: message.message,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages([...messages, newMessage]);
    setMessage({ message: "" });
  };
  useEffect(() => {
    chatBlock.current.scrollTo({
      top: chatHeight,
      behavior: "smooth",
    });
    setChatHeight(chatHeight + 1000);
  }, [messages]);
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
          <div className={styles.messagesList} ref={chatBlock}>
            {messages.map((message) => {
              return (
                <Message
                  userId={userId}
                  from={message.from}
                  to={message.to}
                  message={message.message}
                  time={message.time}
                />
              );
            })}
          </div>
          <form className={styles.form} onSubmit={(e) => sendMessage(e)}>
            <Input
              name="message"
              type="text"
              placeholder="Введите сообщение"
              value={message.message}
              onChange={(e) => handleChange(e, setMessage)}
              icon={<AttachmentIcon />}
              button={
                <Button
                  type="submit"
                  isDisabled={message.message === "" ? true : null}
                  primary="primary"
                  size="xl"
                >
                  Отправить <SendIcon />
                </Button>
              }
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;

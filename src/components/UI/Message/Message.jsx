"use client";
import clsx from "clsx";
import styles from "./style.module.scss";
import { RightArrow } from "@/icons/Icons";
import { useState } from "react";
import { fetchUserById } from "@/api/request";
import Avatar from "../Avatar/Avatar";

const Message = ({ from, to, message, time }) => {
    const [userId, setUserId] = useState(null);
    fetchUserById().then((user) => {
        setUserId(user.id);
    });
    const users = [
        { id: 1, username: "Alice" },
        { id: 2, username: "Bob" },
        { id: 3, username: "Charlie" },
    ];

    const fromUser = users.find((user) => user.id === from);
    const toUser = users.find((user) => user.id === to);
    return (
        <div
            className={clsx(
                styles.messageWrapper,
                from !== userId ? styles.companion : styles.me
            )}
        >
            <Avatar imgSize="xm" imgPath="/nigga.png" />
            <div
                className={clsx(
                    styles.message,
                    from !== userId ? styles.companion : styles.me
                )}
            >
                <span className={styles.fromto}>
                    {fromUser.username} <RightArrow /> {toUser.username}
                </span>
                <div className={styles.messageBlock}>
                    <p className={styles.messageText}>{message}</p>
                    <span className={styles.time}>{time}</span>
                </div>
            </div>
        </div>
    );
};

export default Message;

import { DateIcon, DoneIcon, InProgressIcon } from "@/icons/Icons";
import styles from "./style.module.scss";

const Ticket = ({ title, desc, status, date }) => {
  return (
    <div className={styles.ticket}>
      <div className={styles.ticketInfo}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.desc}>{desc}</p>
      </div>
      <div className={styles.ticketState}>
        {status === true ? (
          <span className={styles.InProgress}>
            <InProgressIcon /> В процессе
          </span>
        ) : (
          <span className={styles.Done}>
            <DoneIcon /> Исполнено
          </span>
        )}
        <span className={styles.date}>
          <DateIcon />
          Дата запроса <br />
          {date}
        </span>
      </div>
    </div>
  );
};

export default Ticket;

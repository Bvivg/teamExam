import clsx from "clsx";
import styles from "./styles.module.scss";

const PageTitle = ({ title, action, type }) => {
  return (
    <div className={styles.PageTitle}>
      <h1
        className={clsx(
          styles.title,
          type === "common" ? styles.common : null
        )}
      >
        {title}
      </h1>
      <div className={styles.actionBlock}>{action}</div>
    </div>
  );
};

export default PageTitle;

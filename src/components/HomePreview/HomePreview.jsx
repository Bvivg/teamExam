import React from "react";
import styles from "./style.module.scss";
import HomePreviewCard from "../HomePreviewCard/HomePreviewCard";
import clsx from "clsx";

const HomePreview = ({ cardInfo }) => {
  
  return (
    <div className={styles.home}>
      <h2 className={styles.title}>{cardInfo.title}</h2>
      <div className={clsx(styles.card_row)}>
        {Object.values(cardInfo.cards).map((card, index) => (
          <HomePreviewCard
            key={index}
            boldText={card.boldText}
            text={card.text}
            img={card.img}
            imgType={card.imgType}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePreview;

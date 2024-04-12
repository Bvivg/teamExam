"use client";
import HomePreview from "@/components/HomePreview/HomePreview";
import { useTheme } from "@/context/ThemeContext";
import {
  DeadLine,
  PriceCertificate,
  ReturnGuarantee,
  SafeDeal,
  Smile,
  TaskIcon,
} from "@/icons/Icons";
import { useEffect } from "react";
import styles from "./page.module.scss";
import Button from "@/components/UI/Button/Button";
import PageTitle from "@/components/UI/PageTitle/PageTitle";
export default function Home() {
  const bannerInfo = {
    advantages: {
      title: "Преимущества сервиса",
      cards: {
        task: {
          boldText: "Выполнение работы",
          text: "гарантируется",
          img: <TaskIcon />,
          imgType: "light",
        },
        deadline: {
          boldText: "Сроки",
          text: "вы определяете сами",
          img: <DeadLine />,
          imgType: "light",
        },
        price: {
          boldText: "Цену",
          text: "вы выбираете сами",
          img: <PriceCertificate />,
          imgType: "light",
        },
      },
    },
    steps: {
      title: "Этапы работы",
      cards: {
        order: {
          boldText: "1.",
          text: " Размещаете заказ",
          img: <img src="/nigga.png" />,
          imgType: "orange",
        },
        executor: {
          boldText: "2.",
          text: " Мы подбираем исполнителей",
          img: <img src="/nigga.png" />,
          imgType: "orange",
        },
        suitable: {
          boldText: "3.",
          text: " Вы сами выбираете наиболее подходящего исполнителя",
          img: <img src="/nigga.png" />,
          imgType: "orange",
        },
        deal: {
          boldText: "4.",
          text: " Договариваетесь с исполнителем о цене и сроках",
          img: <img src="/nigga.png" />,
          imgType: "orange",
        },
        payment: {
          boldText: "5.",
          text: " Оплачиваете заказ",
          img: <img src="/nigga.png" />,
          imgType: "orange",
        },
        receive: {
          boldText: "6.",
          text: " Получаете работу",
          img: <img src="/nigga.png" />,
          imgType: "orange",
        },
      },
    },
    guarantee: {
      title: "Гарантия возврата денег",
      cards: {
        returnGuarantee: {
          boldText: "Гарантия возврата",
          text: "В случае непредвиденных обстоятельств наша служба поддержки всегда выручит Вас",
          img: <ReturnGuarantee />,
          imgType: "light",
        },
        safeDeal: {
          boldText: "Безопасная сделка",
          text: "Средства переходят на счет исполнителя только после принятие Вами итоговой версии работы",
          img: <SafeDeal />,
          imgType: "light",
        },
      },
    },
  };

  const { changeTheme } = useTheme();
  useEffect(() => {
    changeTheme("light");
  }, []);

  return (
    <div className="page">
      <div className={styles.main}>
        <div className={styles.mainInfo}>
          <h1 className={styles.title}>Купи работу</h1>
          <p className={styles.subtitle}>
            экономим твои деньги и время <Smile />
          </p>
          <div className={styles.mainAction}>
            <Button primary="primary" size="xl">
              Разместить заказ
            </Button>
            <Button primary="fourth" size="xl">
              Стать автором
            </Button>
          </div>
        </div>
        <img src="/woman.png" alt="" className={styles.mainImg} />
      </div>
      <HomePreview cardInfo={bannerInfo.advantages} />
      <HomePreview cardInfo={bannerInfo.steps} />
      <div className={styles.economy}>
        <img src="/manBg.png" alt="" className={styles.economyImg} />
        <div className={styles.economyInfo}>
          <h1 className={styles.economyTitle}>Экономим ваше время</h1>
          <p className={styles.economyDesc}>
            Мы предоставляем возможность быстро подобрать надежного иполнителя
            для Вашей работы. Исполнитель сделает заказ сам и у Вас останется
            много свободного времени
          </p>
        </div>
      </div>
      <HomePreview cardInfo={bannerInfo.guarantee} />
    </div>
  );
}

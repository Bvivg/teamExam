
"use client"
import HomePreview from "@/components/HomePreview/HomePreview";
import { useTheme } from "@/context/ThemeContext";
import { DeadLine, PriceCertificate, ReturnGuarantee, SafeDeal, TaskIcon } from "@/icons/Icons";
import { useEffect } from "react";

export default function Home() {
  const bannerInfo = {
    advantages: {
      title: 'Преимущества сервиса',
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
          imgType: "light"
        },
        price: {
          boldText: "Цену",
          text: "вы выбираете сами",
          img: <PriceCertificate />,
          imgType: "light"
        }
      }
    },
    steps: {
      title: "Этапы работы",
      cards: {
        order: {
          boldText: "1.",
          text: " Размещаете заказ",
          img: <img src='/nigga.png' />,
          imgType: "orange"
        },
        executor: {
          boldText: "2.",
          text: " Мы подбираем исполнителей",
          img: <img src='/nigga.png' />,
          imgType: "orange"
        },
        suitable: {
          boldText: "3.",
          text: " Вы сами выбираете наиболее подходящего исполнителя",
          img: <img src='/nigga.png' />,
          imgType: "orange"
        },
        deal: {
          boldText: "4.",
          text: " Договариваетесь с исполнителем о цене и сроках",
          img: <img src="/nigga.png" />,
          imgType: "orange"
        },
        payment: {
          boldText: "5.",
          text: " Оплачиваете заказ",
          img: <img src='/nigga.png' />,
          imgType: "orange"
        },
        receive: {
          boldText: "6.",
          text: " Получаете работу",
          img: <img src='/nigga.png' />,
          imgType: "orange"
        }
      }
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
      }
    }
  };

  const { changeTheme } = useTheme();
  useEffect(() => {
    changeTheme("light")
  }, []);

  return (
    <div className="page">
      <HomePreview cardInfo={bannerInfo.advantages} />
      <HomePreview cardInfo={bannerInfo.steps} />
      <HomePreview cardInfo={bannerInfo.guarantee} />
    </div>
  );
}

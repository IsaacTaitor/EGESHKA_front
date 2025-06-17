// import { ReactNode } from "react";
import { AppBar, Typography, Box } from "@mui/material";
import { useRive } from "@rive-app/react-canvas";

import HeaderIcon from "./assets/header";
import { Icon } from "./assets/icon";
import Button from "./components/Button";
import Toolbar from "./components/Toolbar";

import "./App.css";

import duckRive from "./assets/duck.riv";

export function Anime({ artboard, stateMachines }: { artboard: string; stateMachines: string }) {
  const { RiveComponent } = useRive({
    src: duckRive,
    stateMachines,
    artboard,
    autoplay: true,
  });

  return (
    <RiveComponent
      style={{
        height: 392,
      }}
    />
  );
}

function App() {
  return (
    <Box>
      <AppBar position="sticky" color="inherit">
        <Toolbar className="toolbar">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              maxWidth: "1272px",
              width: "100%",
              margin: "auto",
              height: "40px",
            }}
          >
            <Box sx={{ flexGrow: 1, display: "flex", gap: 3, alignItems: "center" }}>
              <HeaderIcon />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "#00BBFF" }}>
                ЕГЭШКА
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button className="Button" variant="contained">
                для Android
              </Button>
              <Button className="Button" variant="contained">
                для IOS
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          maxWidth: "1440px",
          margin: "auto",
        }}
      >
        <Box
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 24px 0 24px",
            },
            display: "flex",
            alignItems: "center",
            paddingLeft: "84px",
            paddingRight: "84px",
            marginTop: "129px",
            gap: "48px",
          })}
        >
          <div className="halfBox">
            <Typography variant="h1" sx={{ color: "#00BBFF", paddingBottom: "24px" }}>
              Твой верный помощник в&nbsp;подготовке к&nbsp;ЕГЭ!
            </Typography>
            <Typography variant="body1">
              Мы&nbsp;такие&nbsp;же ребята, как и&nbsp;ты. Мы&nbsp;сдавали ЕГЭ и&nbsp;знаем, как это бывает. Поэтому
              мы&nbsp;создали ЕГЭШКУ - приложение, которое всегда с&nbsp;тобой. Дома, в&nbsp;такси,
              на&nbsp;уроке&nbsp;&mdash; ЕГЭШКА всегда рядом!
            </Typography>
          </div>
          <div className="halfBox anime">
            <Anime artboard="Artboard 2" stateMachines="State Machine 2" />
          </div>
        </Box>
        <Box
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column-reverse",
              padding: "0 24px 0 24px",
            },
            display: "flex",
            alignItems: "center",
            paddingLeft: "84px",
            paddingRight: "84px",
            marginTop: "150px",
            gap: "48px",
          })}
        >
          <div className="halfBox anime">
            <Anime artboard="Artboard 14" stateMachines="State Machine 14" />
          </div>
          <div className="halfBox">
            <Typography variant="h1" sx={{ color: "#00BBFF", paddingBottom: "24px" }}>
              Потому что это просто и&nbsp;весело!
            </Typography>
            <Typography variant="body1">
              Самые актуальные варианты от&nbsp;&laquo;ФИПИ&raquo; с&nbsp;подробным разбором. Забудь о&nbsp;скучных
              тестах&nbsp;&mdash; выбирай ответы из вариантов или составляй их&nbsp;из&nbsp;кусочков. Готовься легко
              и&nbsp;с&nbsp;удовольствием!
            </Typography>
          </div>
        </Box>
        <Box
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
              borderRadius: 0,
              margin: "150px 0 0 0",
              padding: "24px",
            },
            display: "flex",
            alignItems: "center",
            margin: "150px 84px 0 84px",
            padding: "53px 110px",
            gap: "48px",
            backgroundColor: "#00BBFF",
            borderRadius: "16px",
          })}
        >
          <div className="halfBox anime" style={{ backgroundColor: "white" }}>
            <Anime artboard="Artboard 15" stateMachines="State Machine 15" />
          </div>
          <div className="halfBox">
            <Typography variant="h1" sx={{ color: "white", paddingBottom: "24px" }}>
              Тренируйся
              <br /> по-новому!
            </Typography>
            <Typography variant="body1" sx={{ color: "white" }}>
              Выбирай ответ или собирай его из&nbsp;кусочков. Так проще и&nbsp;интереснее!
            </Typography>
          </div>
        </Box>
        <Box
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              flexDirection: "column",
              padding: "0 24px 0 24px",
            },
            display: "flex",
            paddingLeft: "84px",
            paddingRight: "84px",
            marginTop: "129px",
            gap: "48px",
          })}
        >
          <div className="halfBox">
            <Typography variant="h1" sx={{ color: "#00BBFF", paddingBottom: "24px" }}>
              Всегда свежие задания!
            </Typography>
            <Typography variant="body1">
              Самые новые варианты от&nbsp;&laquo;ФИПИ&raquo;. С&nbsp;нами ты&nbsp;получишь доступ к&nbsp;самым
              актуальным материалам для подготовки.
            </Typography>
          </div>
          <div className="halfBox">
            <Typography variant="h1" sx={{ color: "#00BBFF", paddingBottom: "24px" }}>
              Никакой
              <br /> рекламы!
            </Typography>
            <Typography variant="body1">Только подготовка - ничего лишнего.</Typography>
          </div>
        </Box>
        <Box
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              padding: 0,
            },
            display: "flex",
            paddingLeft: "84px",
            paddingRight: "84px",
            margin: "auto",
            marginTop: "165px",
            maxWidth: "950px",
            gap: "48px",
          })}
        >
          <div className="halfBox anime">
            <Anime artboard="Artboard 16" stateMachines="State Machine 16" />
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingLeft: "84px",
            paddingRight: "84px",
            marginTop: "146px",
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              width: "612px",
            }}
          >
            <Typography variant="h1" sx={{ color: "#00BBFF", paddingBottom: "24px" }}>
              Скачай ЕГЭШКУ и&nbsp;вперед к успеху!
            </Typography>
            <Typography variant="body1">
              ЕГЭШКА&nbsp;&mdash; это не&nbsp;просто тренажер, это твой друг и&nbsp;помощник. Скачивай приложение
              и&nbsp;убедись сам!
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            position: "relative",
            justifyContent: "center",
            paddingLeft: "84px",
            paddingRight: "84px",
            marginTop: "6px",
            textAlign: "center",
          }}
        >
          <Icon />
          <Box
            sx={{
              display: "flex",
              position: "absolute",
              top: "269px",
              margin: "auto",
              width: "90vw",
              justifyContent: "space-between",
            }}
          >
            <Button className="Button" variant="contained">
              для Android
            </Button>
            <Button className="Button" variant="contained">
              для IOS
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          [theme.breakpoints.down("sm")]: {
            padding: "170px 24px 0px 24px",
          },
          position: "relative",
          marginTop: "303px",
          height: "502px",
          backgroundColor: "#00BBFF",
          padding: "170px 84px 0px 84px",
        })}
      >
        <Box
          sx={{
            maxWidth: "1440px",
            margin: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "white",
              justifyContent: "space-between",
            }}
          >
            <div style={{ width: "392px" }}>
              ПРИЛОЖЕНИЕ:
              <br /> ЕГЭШКА для Android
              <br /> ЕГЭШКА для iOS
            </div>
            <div style={{ width: "392px" }}>
              СОЦСЕТИ:
              <br /> Группа Вконтакте
              <br /> Канал в Телеграмм
            </div>
            <div style={{ width: "392px" }}>
              ПОДДЕРЖАТЬ ЕГЭШКУ
              <br /> Вконтакте
              <br /> QR-код СБП
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
}

export default App;

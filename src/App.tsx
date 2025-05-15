// import { ReactNode } from "react";
import { AppBar, Typography, Box } from "@mui/material";

import HeaderIcon from "./assets/header";
import Button from "./components/Button";
import Toolbar from "./components/Toolbar";

import "./App.css";
import { Icon } from "./icons/icon";

// const Block = ({ children }: { children: ReactNode }) => {
//   return <div>{children}</div>;
// };

function App() {
  return (
    <Box>
      <AppBar position="static" color="inherit">
        <Toolbar className="toolbar">
          <Box
            sx={{ display: "flex", justifyContent: "space-between", maxWidth: "1272px", width: "100%", margin: "auto" }}
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
          sx={{
            display: "flex",
            alignItems: "center",
            paddingLeft: "84px",
            paddingRight: "84px",
            height: "392px",
            marginTop: "129px",
            gap: "48px",
          }}
        >
          <div className="halfBox">
            <Typography variant="h1" sx={{ color: "#00BBFF", paddingBottom: "24px" }}>
              Твой верный помощник в подготовке к ЕГЭ!
            </Typography>
            <Typography variant="body1">
              Мы такие же ребята, как и ты. Мы сдавали ЕГЭ и знаем, как это бывает. Поэтому мы создали ЕГЭШКУ -
              приложение, которое всегда с тобой. Дома, в такси, на уроке - ЕГЭШКА всегда рядом!
            </Typography>
          </div>
          <div className="halfBox anime" />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            paddingLeft: "84px",
            paddingRight: "84px",
            height: "392px",
            marginTop: "150px",
            gap: "48px",
          }}
        >
          <div className="halfBox anime" />
          <div className="halfBox">
            <Typography variant="h1" sx={{ color: "#00BBFF", paddingBottom: "24px" }}>
              Потому что это просто и весело!
            </Typography>
            <Typography variant="body1">
              Самые актуальные варианты от «ФИПИ» с подробным разбором. Забудь о скучных тестах - выбирай ответы из
              вариантов или составляй их из кусочков. Готовься легко и с удовольствием!
            </Typography>
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "392px",
            margin: "150px 84px 0 84px",
            padding: "53px 110px",
            gap: "48px",
            backgroundColor: "#00BBFF",
            borderRadius: "16px",
          }}
        >
          <div className="halfBox anime" style={{ backgroundColor: "white" }} />
          <div className="halfBox">
            <Typography variant="h1" sx={{ color: "white", paddingBottom: "24px" }}>
              Тренируйся
              <br /> по-новому!
            </Typography>
            <Typography variant="body1" sx={{ color: "white" }}>
              Выбирай ответ или собирай его из кусочков. Так проще и интереснее!
            </Typography>
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            paddingLeft: "84px",
            paddingRight: "84px",
            marginTop: "129px",
            gap: "48px",
          }}
        >
          <div className="halfBox">
            <Typography variant="h1" sx={{ color: "#00BBFF", paddingBottom: "24px" }}>
              Всегда свежие задания!
            </Typography>
            <Typography variant="body1">
              Самые новые варианты от «ФИПИ». С нами ты получишь доступ к самым актуальным материалам для подготовки.
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
          sx={{
            display: "flex",
            paddingLeft: "84px",
            paddingRight: "84px",
            height: "392px",
            marginTop: "165px",
            gap: "48px",
          }}
        >
          <div className="halfBox anime" />
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
              ЕГЭШКА — это не просто тренажер, это твой друг и помощник. Скачивай приложение и убедись сам!
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
          <Box sx={{ display: "flex", gap: "530px", position: "absolute", top: "269px", marginLeft: "-52px" }}>
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
        sx={{
          position: "relative",
          marginTop: "303px",
          height: "502px",
          backgroundColor: "#00BBFF",
          padding: "170px 84px 0px 84px",
        }}
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

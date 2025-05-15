// import { ReactNode } from "react";
import { AppBar, Typography, Box } from "@mui/material";

import HeaderIcon from "./assets/header";
import Button from "./components/Button";
import Toolbar from "./components/Toolbar";

import "./App.css";

// const Block = ({ children }: { children: ReactNode }) => {
//   return <div>{children}</div>;
// };

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit">
        <Toolbar className="toolbar">
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
        </Toolbar>
      </AppBar>
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
          marginTop: "129px",
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
    </Box>
  );
}

export default App;

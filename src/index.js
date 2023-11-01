import { ThemeProvider, createTheme } from "@mui/material/styles";
import { StyledEngineProvider } from "@mui/material/styles";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Login from "pages/Login";

const container = document.getElementById("root");
const root = createRoot(container);

const theme = createTheme({
  palette: {
    primary: {
      main: "#2A9F85",
    },
    secondary: {
      main: "#FF7070",
    },
  },
});

root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);

import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const AppWrapper = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <IconButton
          sx={{ position: "absolute", top: 16, right: 16 }}
          onClick={toggleDarkMode}
          color="inherit"
        >
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
        <App />
      </Router>
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import {
  AppBar,
  Box,
  Container,
  createTheme,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { theme } from "./theme";
import recycleIcon from "./images/recycle.png";
import "./App.css";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

function App() {
  return (
    <ThemeProvider theme={createTheme(theme)}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box
              component="img"
              sx={{
                height: 30,
                width: 30,
                display: { xs: "none", md: "block" },
                mr: 2,
              }}
              src={recycleIcon}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{
                letterSpacing: "0.2rem",
                display: { xs: "none", md: "flex" },
              }}
              gutterBottom
            >
              Recycle Corvallis
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default App;

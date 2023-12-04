import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";

import App from "./components/app";
import { theme } from "./components/theme/theme";

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);

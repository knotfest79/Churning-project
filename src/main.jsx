import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ThemeProviderCustom } from "./hook/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProviderCustom>
      <App />
    </ThemeProviderCustom>
  </StrictMode>
);

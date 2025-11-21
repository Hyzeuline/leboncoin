import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { StrictMode } from "react";

import { AllContextProvider } from "./context/providers/AllContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AllContextProvider>
      <App />
    </AllContextProvider>
  </StrictMode>,
);

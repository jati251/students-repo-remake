import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  PrimeReactProvider,
  // PrimeReactContext
} from "primereact/api";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </PrimeReactProvider>
  </StrictMode>
);

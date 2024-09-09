import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  PrimeReactProvider,
  // PrimeReactContext
} from "primereact/api";
import "./index.css";
import "primeicons/primeicons.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes.tsx";
import Tailwind from "primereact/passthrough/tailwind";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </PrimeReactProvider>
  </StrictMode>
);

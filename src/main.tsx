import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

/**
 * Punto de entrada principal de la aplicación.
 * Utiliza StrictMode para ayudar en la identificación de problemas potenciales.
 * Envolviendo la aplicación en BrowserRouter para manejar las rutas.
 */
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

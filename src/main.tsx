import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BudgetProvider } from "./context/BudgetContext.tsx";

//SECTION - 7. Encapsular la app con el provider que es el que tiene los datos, el context solo genera el provider
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BudgetProvider>
      <App />
    </BudgetProvider>
  </React.StrictMode>
);

//NOTE - En devtools puedo ver que BudgetProvider tiene el reduce qu en este caso yo quise compartir, pero puede ser un state, o cualquier cosa, ahora esta disponible en toda la app
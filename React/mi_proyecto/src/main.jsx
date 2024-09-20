import React from "react";
import ReactDOM from "react-dom/client";
import { CartProvider } from "./context/CartProvider.jsx";
import Rutas from "./Rutas/index.jsx";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <Rutas />
    </CartProvider>
  </React.StrictMode>
);

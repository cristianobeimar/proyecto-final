import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormLogin from "../../../FormLogin/FormLogin";
import styles from "./MenuWeb.module.css";
import CarritoTarjeta from "../../../BerCarrito/carritoTarjeta";
import ButtonCart from "../button-cart/ButtonCart";


const MenuWeb = () => {
  const navigate = useNavigate();

  return (
    <nav id="nav" className={styles.container_menu_web}>
      <div className={styles.type_products}>
        <Link to={"/ropa-hombre"}>Articulos Hombre</Link>
        <Link to={"/ropa-mujer"}>Articulos Mujer</Link>
        <Link to={"/Articulos-electronicos"}>Articulos tecnologicos</Link>
        <Link to={"/joyas"}>Joyas</Link>
      </div>
      <FormLogin />

      <ButtonCart />
     

      <button onClick={() => navigate("/")} className={styles.house}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-house-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
          <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
        </svg>
      </button>
    </nav>
  );
};

export default MenuWeb;

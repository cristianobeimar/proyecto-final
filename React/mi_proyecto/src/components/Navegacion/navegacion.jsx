import { useState } from "react";
import Logo from "../../assets/img.rgb.png";
import CarritoTarjeta from "../BerCarrito/carritoTarjeta";
import styles from "./Navegacion.module.css";
import Menu from "./Menu/Menu.jsx";

export default function Navegacion({ longitudNum = 0, setactivo }) {
  const [activo, setActivo] = useState(false);
  const [productosCarrito, setProductosCarrito] = useState([]);

  return (
    <>
      <header className={styles.header}>
        <img className={styles.logo} src={Logo} alt="" />
        <div>
          <h3
            style={{
              fontSize: "30px",
              color: "#fff",
              padding: "0",
              margin: "0",
              marginLeft: "10px",
            }}
            id="titulo"
          >
            Total Market
          </h3>
        </div>

        <Menu />

       
      </header>
    </>
  );
}

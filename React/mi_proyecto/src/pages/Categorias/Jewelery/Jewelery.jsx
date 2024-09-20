import Getproductos from "../../../components/Getproductos"
import CardProducts from "../../../components/CardProducts/CardProducts";
import React, { useEffect, useState } from "react";
import Navegacion from "../../../components/Navegacion/navegacion";
import Footer from "../../../components/Footer/Footer";

export default function Jewelery() {
    const [productos, setproductos] = useState([]);
    const [joyas, setJoyas] = useState([]);

    const funcionProducts = async () => {
        const productos = await Getproductos();
        setproductos(productos);
      };

      const funcionJewelary = () => {
        const joyas = productos.filter((e) => {
          return e.category === "jewelery";
        });
        setJoyas(joyas);
      };

      useEffect(() => {
        funcionProducts();
        funcionJewelary();
      }, [productos]);

      const numeroCarrito = () => {
        const num = JSON.parse(localStorage.getItem("productosGuardados"));
        setlongitudNum(num.length);
      };
      
  return (
    <>
    <Navegacion/>
    <h2 id="joyas">Joyas</h2>
          <div className="content">
            {joyas.map((e, i) => {
              return (
                <CardProducts
                  numeroCarrito={numeroCarrito}
                  {...e}
                  key={i}
                  item={e}
                />
              );
            })}
          </div>
          <Footer/>
          </>
  )
}

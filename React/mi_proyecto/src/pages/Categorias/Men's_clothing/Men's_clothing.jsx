import React, { useEffect, useState } from 'react'
import Getproductos from '../../../components/Getproductos';
import CardProducts from '../../../components/CardProducts/CardProducts';
import Navegacion from '../../../components/Navegacion/navegacion';
import Footer from '../../../components/Footer/Footer';

export default function Men_clothing() {
  const [productos, setproductos] = useState([]);
  const [ropaHombre, setRopaHombre] = useState([]);
  const [longitudNum, setlongitudNum]=  useState([])

  const funcionProducts = async () => {
    const productos = await Getproductos();
    setproductos(productos);
  };
  const funcionMenclothing = () => {
    const ropaHombre = productos.filter((e) => {
      return e.category === "men's clothing";
    });
    setRopaHombre(ropaHombre);
  };

  useEffect(() => {
  funcionProducts();
  funcionMenclothing();
  }, [productos]);
  
  const numeroCarrito = () => {
    const num = JSON.parse(localStorage.getItem("productosGuardados"));
    setlongitudNum(num.length);
  };
  return (
    <>
    <Navegacion/>
    <section id="ropa_hombre">
    <h2>Ropa hombre</h2>
    <div className="content">
      {ropaHombre.map((e, i) => {
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
  </section>
  <Footer/>
  </>
  )
}

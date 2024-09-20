import React, { useEffect, useState } from "react";
import Getproductos from "../../../components/Getproductos";
import CardProducts from "../../../components/CardProducts/CardProducts";
import Navegacion from "../../../components/Navegacion/navegacion";
import Footer from "../../../components/Footer/Footer";
import BuscadorComponent from "../../../components/Buscador/BuscadorComponent";

export default function Electronics() {
  const [productos, setproductos] = useState([]);
  const [electrodomésticos, setElectrodomésticos] = useState([]);

  const funcionProducts = async () => {
    const productos = await Getproductos();
    setproductos(productos);
  };
  const funcionElectronics = () => {
    const electrodomesticos = productos.filter((e) => {
      return e.category === "electronics";
    });
    setElectrodomésticos(electrodomesticos);
  };
  useEffect(() => {
    funcionProducts();
    funcionElectronics();
  }, [productos]);

  return (
    <div>
      <Navegacion />
      <section id="electronica">
        <BuscadorComponent />
        <h2>Articulos electronicos</h2>
        <div className="content">
          {electrodomésticos.map((e, i) => {
            return (
              <CardProducts
               
                {...e}
                key={i}
                item={e}
              />
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
}

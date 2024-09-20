import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TarjetaP from "../Tarjeta/TarjetaP";


export default function ProductsDetal() {
  const { id } = useParams();
  const [Producto, setProducto] = useState();

  const obtenerProducto = async () => {
    const resp = await fetch(`http://localhost:5813/${id}`);
    const products = await resp.json();
    setProducto(products);
  };

  useEffect(() => {
    obtenerProducto();
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <TarjetaP {...Producto} key={id} item={Producto} />
    </div>
  );
}

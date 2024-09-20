import React, { useEffect, useState } from "react";
import "./Buscador.css";
import { useNavigate } from "react-router-dom";
export default function BuscadorComponent() {
  const [busqueda, setBusqueda] = useState("");
  const [productosFiltrados, setproductosFiltrados] = useState([]);
  const [datos, setdatos] = useState([]);

  
  const navigate = useNavigate();
  const getProducts = async () => {
    fetch("http://localhost:5814/productos")
    .then((res) => res.json())
    .then((res) => setdatos(res));
  };
  useEffect(() => {
    getProducts();
  }, [datos]);

  const buscadorInput = (e) => {
    console.log(datos);
    const prod = datos.filter((item) => {
      return item.title.includes(e.target.value);
    });
    setBusqueda(e.target.value);
    setproductosFiltrados(prod);
    console.log(e.target.value);
  };

  return (
    <div>
      <input
        className="input"
        type="text"
        placeholder="Search products..."
        value={busqueda}
        onChange={buscadorInput}
      />
      <ul>
        {productosFiltrados.length > 0 &&
          busqueda != "" &&
          productosFiltrados.map((e) => (
            <>
              <li onClick={() => navigate(`/producto/${e.id - 1}`)}>
                {e.title}
              </li>
            </>
          ))}
      </ul>
    </div>
  );
}

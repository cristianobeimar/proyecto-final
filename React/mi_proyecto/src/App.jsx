import React, { useEffect, useState } from "react";
import "./Rutas/App1.css"
import "./index.css";
import Navegacion from "./components/Navegacion/navegacion";
import { useContext } from "react";
import BuscadorComponent from "./components/Buscador/BuscadorComponent";
import Inicio from "./pages/inicioPagina/Inicio";


function App() {
  const [productos, setproductos] = useState([]);
  const [activo, setactivo] = useState(false);
 
  const [longitudNum, setlongitudNum] = useState(null);

  useEffect(() => {
    const num = JSON.parse(localStorage.getItem("productosGuardados")) || [];
    setlongitudNum(num.length);
  }, []);

  return (
    <div className="principal">
      <Navegacion longitudNum={longitudNum} setactivo={setactivo} />
      <div className="buscar">
        <BuscadorComponent datos={productos} />
      </div>
      <div>
        <Inicio />
      </div>
      {activo && (
        <>
        </>
      )}
    </div>
  );
}

export default App;

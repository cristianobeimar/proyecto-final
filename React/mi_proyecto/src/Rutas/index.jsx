import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import ProductsDetal from "../pages/ProductsDetal/ProductsDetal";
import Jewelery from "../pages/Categorias/Jewelery/Jewelery";
import Men_clothing from "../pages/Categorias/Men's_clothing/Men's_clothing";
import Electronics from "../pages/Categorias/Electronics/Electronics";
import Women_clothing from "../pages/Categorias/Women's_clothing/Women_clothing";
import Navegacion from "../components/Navegacion/navegacion";
import CardProducts from "../components/CardProducts/CardProducts";
import { LoginUsuario } from "../components/LoginUsuario/LoginUsuario";

export default function Rutas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<App />} />
          <Route path="/producto/:id" element={<ProductsDetal />} />
          <Route path="/Articulos-electronicos" element={<Electronics />} />
          <Route path="/joyas" element={<Jewelery />} />
          <Route path="/Ropa-hombre" element={<Men_clothing />} />
          <Route path="/Ropa-mujer" element={<Women_clothing />} />
          <Route path="/Navegacion" element={<Navegacion />} />
          <Route path="/CarProduct/:id" element={<CardProducts />} />
          <Route path="/login" element={<LoginUsuario />} />
        </Route>{" "}
      </Routes>
    </BrowserRouter>
  );
}

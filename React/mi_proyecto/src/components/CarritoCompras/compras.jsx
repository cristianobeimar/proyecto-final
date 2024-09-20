
import React from "react";
import "./Compras.css";
import useCartContext from "../../context/CartProvider";

export const Carrito = ({ item = () => {} }) => {
  const { addToCart } = useCartContext();

  return (
    <button className="agregar" onClick={() => addToCart(item)}>
      agregar al carrito
    </button>
  );
};

export default Carrito;

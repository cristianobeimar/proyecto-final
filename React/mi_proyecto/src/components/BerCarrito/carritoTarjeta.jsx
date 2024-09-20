import React, { useState, useEffect } from "react";
import "./carritoTarjeta.css";
import useCartContext from "../../context/CartProvider"; // Ajusta la ruta según sea necesario

const CarritoTarjeta = ({ title, image, price = 0, item, cantidad = 1 }) => {
  const [Cantidad, setCantidad] = useState(cantidad);
  const { decrementCart, removeFromCart, addToCart } = useCartContext();
 

  useEffect(() => {
    setCantidad(cantidad);
  }, [cantidad]);

  const eliminarProducto = (id) => {
    console.log("Haciendo eliminación", id);
    removeFromCart({ id });
  };

  const decrementCartHandler = (id) => {
    console.log("Haciendo decremento");
    const nuevaCantidad = Cantidad - 1;
    setCantidad(nuevaCantidad);

    if (nuevaCantidad === 0) {
      eliminarProducto(id);
    } else {
      decrementCart({ id });
    }
  };

  const incrementCartHandler = () => {
    console.log("Haciendo incremento");
    setCantidad(Cantidad + 1);
    addToCart(item);
  };

  const handleDeleteClick = () => {
    if (item && item.id) {
      Cantidad <= 1 ? eliminarProducto(item.id) : decrementCartHandler(item.id);
    } else {
      console.error("Item no válido:", item);
    }
  };

  return (
   
    <div className="prin_targ_cart">

      <div className="targ">
        <div className="more-and-less">
            
        </div>
        <div className="img">
          <img src={image} className="img-card" alt="Producto" />
        </div>
        <div className="product-data">
          <div className="row no-gutters">
            <h4 className="card-title">{title}</h4>
            <div className="price_producto">
              <p className="precio">
                ${price}{" "}
                <span className="price-before">
                  ${(price + price / 2).toFixed(2)}
                </span>{" "}
              </p>
              <p className="buttons">Cantidad: {Cantidad}</p>
            </div>
            <div className="botones">
            <button className="delete" onClick={handleDeleteClick}>
            -
          </button>
          <button className="increment" onClick={incrementCartHandler}>
            +
          </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarritoTarjeta;

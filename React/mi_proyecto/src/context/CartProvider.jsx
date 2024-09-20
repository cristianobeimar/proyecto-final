import { useContext, useState } from "react";
import { createContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) ?? []
  );

  // funcion me permite agregar productos al carrito
  const addToCart = (product) => {
    const existingProdut = cart.find((item) => item.id === product.id);
    // condición ? expr1 : expr2
    const newProduct = existingProdut
      ? cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...cart, { ...product, quantity: 1 }];

    localStorage.setItem("cart", JSON.stringify(newProduct));
    setCart(newProduct);
  };

  const removeFromCart = (product) => {
    const actualizarCarrito = cart.filter((item) => item.id !== product.id);
    localStorage.setItem("cart", JSON.stringify(actualizarCarrito));
    setCart(actualizarCarrito);
  };
// esta funcion  para poder eliminar los productos guardados en el localStorage 
  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const decrementCart = (product) => {
    setCart((prevState) => {
      const existingProduct = prevState.find((item) => item.id === product.id);
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          //  esta funcion me retira o quita el producto del carrito si la cantidad llega a uno
          const actualizarCarrito = prevState.filter((item) => item.id !== product.id);
          localStorage.setItem("cart", JSON.stringify(actualizarCarrito));
          return actualizarCarrito;
        } else {
          // Disminuye la cantidad
          const actualizarCarrito = prevState.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
          localStorage.setItem("cart", JSON.stringify(actualizarCarrito));
          return actualizarCarrito;
        }
      }
      return prevState;
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, decrementCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => useContext(CartContext);
export default useCartContext;

import Carrito from "../CarritoCompras/compras";
import "./CardProducto.css";
import { Link, useNavigate } from "react-router-dom";

const CardProducts = ({
  image,
  title,
  price,
  numeroCarrito,
  item,
  id,
}) => {
 
  const navigate = useNavigate();
  const navegacion = () => {
    navigate(`/producto/${id - 1}`);
  };

  const validPrice =
    !isNaN(price) && price !== undefined && price !== null ? Number(price) : 0;
  const priceBefore = validPrice + validPrice / 2;
  // console.log(CardProducts);
  return (
    <div className="div_Cart_12">
      <div className="targeta" onClick={navegacion}>
        <div className="container_image">
          <img src={image} alt={"superhero"} />
        </div>

        {/* datos-producto  */}
        <div className="datos-producto">
          <div className="row no-gutters">
            <h4 className="card-title">{title}</h4>
            <div className="price_producto">
              <p className="price">
                ${validPrice.toFixed(2)}{" "}
                <span className="price-before">${priceBefore.toFixed(2)}</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="div_btn_AgregarCarrito_12">
        <Carrito numeroCarrito={numeroCarrito} item={item} />
      </div>
    </div>
  );
};
export default CardProducts;

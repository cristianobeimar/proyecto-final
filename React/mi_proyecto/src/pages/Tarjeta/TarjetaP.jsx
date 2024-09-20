import React, { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
import Carrito from "../../components/CarritoCompras/compras";
import styles from "./Tarjetap.module.css";
import Navegacion from "../../components/Navegacion/navegacion";
import BuscadorComponent from "../../components/Buscador/BuscadorComponent";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { LoginUsuario } from "../../components/LoginUsuario/LoginUsuario";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { auth, providerGoogle } from "../../fireBase/credenciales";

const Products = ({
  image,
  title,
  description,
  inf_opcional,
  price,
  marca,
  origen,
  color,
  dimensiones,
  peso,
  garantia,
  material,
  numeroCarrito,
  item,
}) => {
  const validPrice =
    !isNaN(price) && price !== undefined && price !== null ? Number(price) : 0;
  const priceBefore = validPrice + validPrice / 2;

  const [mensajeCompra, setMensajeCompra] = useState("");
  const [login, setlogin] = useState(false);
  const [User, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (usuario) => {
      if (usuario) {
        const u = await usuario;
        setUser(u);
      } else {
        console.log("No hay usuario");
        setUser(null);
      }
    });
  }, [User]);

  const handleCompra = () => {
    if (User) {

      setMensajeCompra("Compra realizada");

      navigate("/");
    } else {

      setMensajeCompra("Debe iniciar sesión para comprar");
      setTimeout(() => {

        setlogin(true);
      }, 3000);
    }

  };
  // const handleCompra = () => {
  //   User
  //     ? setMensajeCompra("compra realizada")
  //     : setMensajeCompra("debes iniciar sesion para comprar");
      
  //     setTimeout(()=>{
  //       setlogin(true);
  //     }, 3000);
  // };

  const iniciarGoogle = async () => {
    try {
      await signInWithPopup(auth, providerGoogle);
    } catch (error) {
      console.log("error al iniciar secion");
    }
  };
  return (
    <>
      {login && !User && (
        <div className="conatainer-login-form">
          <div className="background-modal" onClick={() => setlogin(false)} />
          <div className="form-container">
            <LoginUsuario />
            <button
              className="button"
              onClick={iniciarGoogle}
              style={{ position: "relative" }}
            >
              Iniciar sesion con____________
              <img
                src="https://1000marcas.net/wp-content/uploads/2020/02/logo-Google.png"
                alt="Google"
                width="70px"
                style={{
                  position: "absolute",
                  top: "-3px",
                  right: "30px",
                }}
              />
            </button>
          </div>
        </div>
      )}
      <div className={styles.principal}>
        {/* <div className={styles.mesaje_compra}>
          <p>{mensajeCompra}</p>
        </div> */}
        <Navegacion />
        <div className="buscar">
          <BuscadorComponent datos={[]} />
        </div>
        <div className={styles.conten_product_view}>
          <img
            className={styles.image_product_view}
            src={image}
            alt={"superhero"}
          />

          <div className={styles.datos_product_view}>
            <div className="row no-gutters">
              <h4 className="card-title">
                <b>Marca: </b>
                {marca}
              </h4>
              <h4 className="card-title">{title}</h4>
              <p className="card-text">
                <b>Descripcion: </b>
                {description}
              </p>
              <div className={styles.price_producto}>
                <p className={styles.price}>
                  ${validPrice.toFixed(2)}{" "}
                  <span className="price-before">
                    ${priceBefore.toFixed(2)}
                  </span>{" "}
                </p>
              </div>
              <div className={styles.butons_productos}>
                <Carrito
                  numeroCarrito={numeroCarrito}
                  item={item}
                  className={styles.agr_Carrito}
                />
                <button
                  onClick={handleCompra}
                  className={styles.comprar_product}
                >
                  comprar
                </button>
              </div>
            </div>
          </div>
          <div className={styles.detalles}>
            <h4>caracteristicas del producto</h4>
            <p className="card-text">
              <b>Inf adicional: </b>
              {inf_opcional}
            </p>
            <p className="card-text">
              <b>Origen: </b>
              {origen}
            </p>
            <p className="card-text">
              <b>Color: </b>
              {color}
            </p>
            <p className="card-text">
              <b>Dimenciones: </b>
              {dimensiones}
            </p>
            <p className="card-text">
              <b>Peso: </b>
              {peso}
            </p>
            <p className="card-text">
              <b>Garantia: </b>
              {garantia}
            </p>
            <p className="card-text">
              <b>Material: </b>
              {material}
            </p>
          </div>
        </div>{" "}
        <Footer />
      </div>
    </>
  );
};
export default Products;

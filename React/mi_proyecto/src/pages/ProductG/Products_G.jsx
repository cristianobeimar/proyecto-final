import React, { useEffect, useState } from "react";
import Getproductos from "../../components/Getproductos";
import styles from "./ProductG.module.css";
import { useNavigate } from "react-router-dom";

const Products_G = () => {
  const [prod, setProd] = useState([]);
  const navigate = useNavigate();

  const funcionproductos = async () => {
    const products = await Getproductos();
    setProd(products);
  };

  useEffect(() => {
    funcionproductos();
  }, []); // paso un array vacío
  //para que solo se ejecute una vez al montar el componente

  const handleClick = (id) => {
    navigate(`/producto/${id-1}`); // Navega a la ruta de detalles del producto
  };
  return (
    <div className={styles.product_container}>
      {prod?.map((item) => {
        return (
          <div onClick={() => handleClick(item.id)} key={item.id} className={styles.product} >
            
            <div className={styles.targ_image}>
            
              {/*Asegúrate de que cada elemento tenga un key único*/}
              <img
                className={styles.product_image}
                src={item.image}
                alt={item.title}
              />
            </div>
            <h4>{item.title}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default Products_G;

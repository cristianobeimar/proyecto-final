import { useState, useEffect, useRef } from "react";
import "./Inicio.css";
import Footer from "../../components/Footer/Footer";
import Products_G from "../ProductG/Products_G";

const Inicio = () => {
  const [indiceActual, setIndiceActual] = useState(0); // Cambia indiseActual por indiceActual
  const primero = useRef(null);

  // Función para mostrar la diapositiva siguiente
  const mostrarSiguiente = () => {
    setIndiceActual((indiceAnterior) => indiceAnterior == 4 ? 0:(indiceAnterior + 1)); // 5 es el número de diapositivas
  };

  // Configuración del scroll hace que la imagen camvie cada 6 segundos
  useEffect(() => {
    primero.current = setInterval(mostrarSiguiente, 7000);

    return () => {
      clearInterval(primero.current);
    };
  }, []);

  return (
    <>
      <div className="carousel">
        <div
          className="carousel-wrapper"
          style={{ transform: `translateX(-${indiceActual * 100}%)` }} // Usar indiceActual
        >
          <div className="carousel-item">
            <img
              src="https://www.coomultrasan.com.co/file/general/Envio_gratis_LG_2024_Desktop.jpg"
              className="carousel-image"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.sears.com.mx/c/electronica-y-tecnologia-hotsale-2022/img/Carrusel/ASUS-MOB-2402x1402.jpg"
              className="carousel-image"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://i.ytimg.com/vi/ZXb6DRrTF8Q/maxresdefault.jpg"
              className="carousel-image"
              alt="Slide 3"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/10/maniquies-vestidos-tienda-ropa-ofertas-2857351.jpg?tf=3840x"
              className="carousel-image"
              alt="Slide 4"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://tecnosoluciones.com/wp-content/uploads/2022/11/IMG-Articulo_BF-CM_TS-2022.jpg"
              className="carousel-image"
              alt="Slide 5"
            />
          </div>
        </div>

        <div className="carousel-indicators">
          {[...Array(5)].map((_, index) => (
            <button
              key={index}
              type="button"
              className={`indicator-button ${indiceActual === index ? "active" : ""}`}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setIndiceActual(index)}
            />
          ))}
        </div>

        <button type="button" className="carousel-control-prev" onClick={mostrarSiguiente}>
          <span className="carousel-control-icon">
            <svg
              className="carousel-control-svg"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only"></span>
          </span>
        </button>
        <button type="button" className="carousel-control-next" onClick={mostrarSiguiente}>
          <span className="carousel-control-icon">
            <svg
              className="carousel-control-svg"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only"></span>
          </span>
        </button>
      </div>
      
      <h1 id="title">Productos que te puedan interesar</h1>
      <Products_G />
      <div className="descrip">
        <p>Tecnología</p>
        <p>Ropa para dama</p>
        <p>Joyería</p>
        <p>Ropa para caballero</p>
      </div>
      <div className="ofertas">
        <img className="ima" src="https://down-co.img.susercontent.com/file/sg-11134201-23010-wz4g2uguh8lvad_tn.webp" alt="Oferta 1" />
        <img className="ima" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDvbdZ3X8LrivmtbZU3h70IzVYP3idZ47mjg&s" alt="Oferta 2" />
        <img className="ima" src="https://ae01.alicdn.com/kf/S329bda889049464499d53798f489c06bG.jpg_640x640Q90.jpg_.webp" alt="Oferta 3" />
        <img className="ima" src="https://res.cloudinary.com/pozters/image/upload/w_700/v1531320146/prod_uploads/e0VJZPadwynD2b7" alt="Oferta 4" />
      </div>
      <Footer />
    </>
  );
};

export default Inicio;

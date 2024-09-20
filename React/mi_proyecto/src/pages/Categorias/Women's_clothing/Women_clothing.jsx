import React, {useEffect,useState} from 'react'
import Getproductos from '../../../components/Getproductos';
import CardProducts from '../../../components/CardProducts/CardProducts';
import Navegacion from '../../../components/Navegacion/navegacion';
import Footer from '../../../components/Footer/Footer';

export default function Women_clothing () {
    const [productos, setproductos] = useState([]);
    const [ropaMujer, setRopaMujer] = useState([]);
    const [longitudNum, setlongitudNum] = useState([])

    const funcionProducts = async () => {
        const productos = await Getproductos();
        setproductos(productos);
      };
      const funcionwomanclothing = () => {
        const ropaMujer = productos.filter((e) => {
          return e.category === "women's clothing";
        });
        setRopaMujer(ropaMujer);
      };

      useEffect(() => {
        funcionProducts();
        funcionwomanclothing();
      }, [productos]);
      
      const numeroCarrito = () => {
        const num = JSON.parse(localStorage.getItem("productosGuardados"));
        setlongitudNum(num.length);
      };

  return (
    <div>
      <Navegacion/>
       <section id="ropa_mujer">
    <h2>Ropa Mujer</h2>
    <div className="content">
      {ropaMujer.map((e, i) => {
        return (
          <CardProducts
            numeroCarrito={numeroCarrito}
            {...e}
            key={i}
            item={e}
          />
        );
      })}
    </div>
  </section>
  <Footer/>
  </div>
  )
}

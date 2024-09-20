

async function Getproductos() {
  const resp = await fetch("http://localhost:5814/productos")
  const products = await resp.json()
  return products ;
}
export default Getproductos

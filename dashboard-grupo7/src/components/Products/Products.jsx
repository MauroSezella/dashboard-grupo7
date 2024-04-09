import ProductsList from './ProductsList';
import { useEffect, useState} from "react";

import style from './Products.module.css';

function Products(){

    const [products, setProducts] = useState([]);
    const [pagina, setPagina] = useState(2);


    useEffect(()=>{
        fetch("http://localhost:3030/api/products")
        .then((respuesta) => respuesta.json())
        .then(products =>setProducts(products.products))
},[]);

    const [lastProduct, setLastProduct] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3030/api/last-product")
        .then((respuesta) => respuesta.json())
        .then(lastProduct =>setLastProduct(lastProduct))
},[]);

const cargarPagSiguiente = () =>{

    setPagina(pagina + 1);

    fetch(`http://localhost:3030/api/products/?page=${pagina}`)
        .then((respuesta) => respuesta.json())
        .then(products =>setProducts(products.products))
        .catch(error => console.error(error));
}


return (
    <>
        <main className="content-wrap">
          <section className="content">
            <h2 className="mt-3">Listado de Productos</h2>
            <table className={style.table}>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Nombre</th>
                  <th>Descripcion</th>
                  <th>Categoria</th>
                </tr>
              </thead>

              {products.map((product) => (
                  <ProductsList products={product} key={product.id} />
                ))}
              
            </table>
          </section>

                <div className='text-center mt-5'>
                    <button onClick={cargarPagSiguiente} className='btn btn-primary'>Siguiente Página</button>
                </div>
          

            <section className="content">
                <h2 className="mt-3">Ultimo producto creado</h2>
                <div className='card shadow'>
                    <div className='p-2'>
                        <p>Nombre: {lastProduct.nombre}</p>
                        <img src={lastProduct.url_imagen} alt="imagen de producto" style={{width: 100}}/>
                        <p>Descripcion: {lastProduct.descripcion}</p>
                        <p>Precio: $ {lastProduct.precio}</p>
                        <p>Descuento: % {lastProduct.descuento}</p>
                    </div>
                </div>
            </section>

        </main>
 
    </>
  );


}

export default Products;
import CategoriesList from './CategoriesList';
import { useEffect, useState} from "react";

import style from './Categories.module.css';

function Categories(){

    const [categories, setCategories] = useState([]);


    useEffect(()=>{
        fetch("http://localhost:3030/api/products")
        .then((respuesta) => respuesta.json())
        .then(categories =>setCategories(categories.countByCategory))
},[]);

console.log(categories);

return (
    <>
        <main className="content-wrap">
          <section className="content">
            <h2 className="mt-3">Listado de Categorias</h2>
            <table className={style.table}>
              <thead>
                <tr>
                  <th>Nombre de la Categoria</th>
                  <th>Cantidad de productos</th>
                </tr>
                {categories.map((category) => (
                  <CategoriesList categories={category} key={category.nombre} />
                ))}
              </thead>

            </table>
          </section>
        </main>
 
    </>
  );


}

export default Categories;
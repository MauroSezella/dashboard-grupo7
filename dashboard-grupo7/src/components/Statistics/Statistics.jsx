import style from './Statistics.module.css';
import { useEffect, useState} from "react";
import Banner from '../../assets/img/banner.jpg'

function Statistics(){

    const [totalProducts, setTotalProducts] = useState([]);
    const [totalCategories, setTotalCategories] = useState([]);


    useEffect(()=>{
        fetch("http://localhost:3030/api/products")
        .then((respuesta) => respuesta.json())
        .then(totalProducts =>{
             setTotalProducts(totalProducts.count);
             setTotalCategories(totalProducts.countByCategory.length);})
},[]);

const [totalUsers, setTotalUsers] = useState([]);


useEffect(()=>{
    fetch("http://localhost:3030/api/users")
    .then((respuesta) => respuesta.json())
    .then(totalUsers =>setTotalUsers(totalUsers.count))
},[]);

    return(
        <section className="content">
            <img src={Banner} alt="Banner"/>
            <h2 className="mt-3">Estadísticas</h2>

                <div className="info-boxes">
                    <div className="info-box">
                        <div className="box-icon">
                            <i className={style.infoboxes__icono+ " "+ 'bi bi-basket2'} style={{color: 'green'}}></i>
                        </div>
                        <div className="box-content">
                            <span className="big">{totalProducts}</span>
                            Productos
                        </div>
                    </div>

                    <div className="info-box">
                        <div className="box-icon">
                            <i className={style.infoboxes__icono+ " "+ 'bi bi-person-fill'} style={{color: 'cornflowerblue'}}></i>
                        </div>
                        <div className="box-content">
                            <span className="big">{totalUsers}</span>
                            Usuarios
                        </div>
                    </div>

                    <div className="info-box">
                        <div className="box-icon">
                            <i className={style.infoboxes__icono+ " "+ 'bi bi-tags'} style={{color: 'orange'}}></i>
                        </div>
                        <div className="box-content">
                            <span className="big">{totalCategories}</span>
                            Categorias
                        </div>
                    </div>

                </div>

                
  
        </section>

    )
}

export default Statistics;
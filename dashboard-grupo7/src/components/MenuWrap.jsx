import logo from '../assets/img/logo-golosinas-mailin.svg'
import { Link } from 'react-router-dom'

export default function MenuWrap() {

    return( 
        <header className="menu-wrap">
        <figure className="user">
            <div className="user-avatar">
            <Link to="/products"> 
                <img src={logo} alt="Logo Golosinas Mailin"/>
            </Link>            
            </div>
            <figcaption>
                Golosinas Mailin
            </figcaption>
            
        </figure>
        <nav>
            <section className="dicover">
                <h3>Opciones</h3>
                <ul>
                <li>
                    <Link to="/">
                            <i className="bi bi-house" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
                            - Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/products">
                            <i className="bi bi-basket2" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
                            - Productos
                        </Link>
                    </li>

                    <li>
                        <Link to="/categories">
                            <i className="bi bi-tag" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
                            - Categorias
                        </Link>
                    </li>
                    
                    <li>
                        <a href="#">
                            <i className="bi bi-currency-dollar"></i>
                            - Ofertas
                        </a>
                    </li>
                </ul>
            </section>
        </nav>
    </header>
    )
    
}
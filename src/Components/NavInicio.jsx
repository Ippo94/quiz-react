import { Link } from "react-router-dom"
import '../Style/NavInicio.css';



function NavInicio() {

  return (
    <>
      <nav className="navbar">
        <div className="logo"><Link to="/">Cinema</Link></div>

        <ul className="nav-links">
          <li><Link to="/login">Iniciar Sesión</Link></li>
          <li><Link to="/registro">Registrarse</Link></li>
          <li><Link to="/registroPeliculas">Registrar Pelicula</Link></li>
         

        </ul>

        <div className="nav-buttons">

        </div>
      </nav>



    </>
  )
}
export default NavInicio
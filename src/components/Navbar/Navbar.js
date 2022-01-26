import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">
            Greelow Sports
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/futbol">
                  Futbol
                </Link>
              </li>
              <li className="nav-item text-light">
                <Link className="nav-link text-light" to="/voley">
                  Voley
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/tenis">
                  Tenis
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/Contacto">
                  Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/Reservas">
                  Mis Reservas
                </Link>
              </li>
            </ul>
           </div>
        </div>
      </nav>
    </header>
      );
}
 
export default Navbar;

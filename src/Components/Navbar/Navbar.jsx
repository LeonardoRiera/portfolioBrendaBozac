import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import cuadrado from '../../Image/cuadro.png'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md  nvCont">

        <div className="container-fluid">

          <Link to={"/"} className="navbar-brand nombreNavbar" ><img src={cuadrado} alt="logo cuadrado" className='cuadrado' />Brenda Bozac</Link>

          <button className="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i class="bi bi-list hambur"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <Link to={"/home"} className="nav-link nombreLinks" aria-current="page">Inicio</Link>
              </li>
              
              <li className="nav-item">
                <Link to={"/portfolio"}  className="nav-link nombreLinks">Perfil</Link>
              </li>

              <li className="nav-item">
                <a className="nav-link nombreLinks" href="#footer">Contacto</a>
              </li>

              
             
            </ul>

          </div>
          
        </div>

      </nav>

    </div>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom';
import "./Boton.css"

const Boton = ({ to, children }) => {
  return (
    <div className="row botonContainer">

        <Link to={to} className="botonHeader">
          {children}
        </Link>

    </div>
  )
}

export default Boton
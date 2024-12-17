import React from 'react'
import './Footer.css'
import cuadrado from '../../Image/cuadro.png'

const Footer = () => {
  return (
    <div id='footer'>
        <div className="contactosFooter">
            <p className='tituloFooter'>Contactos</p>
        </div>

        <div className='listaContactos'>

            <div className='contact'>
                <i class="bi bi-whatsapp logoFoot"></i>
                <a href="https://wa.me/543584281049" target="_blank" className='links'>
                    358-4281049
                </a>
            </div>

            <div className="contact">
                <i class="bi bi-envelope logoFoot"></i>
                <a  href='mailto:brendabozac@gmail.com' className='links'>brendabozac@gmail.com</a>
            </div>

            {/* <div className="contact">
                <i class="bi bi-linkedin logoFoot"></i>
                <a  href='https://www.linkedin.com/in/leonardo-gabriel-riera-92567a283/' className='links'>Perfil LinkedIn</a>
            </div> */}

        </div>

        <div className='nameContainer'>
            <img src={cuadrado} alt="logo cuadrado" className='cuadradoFooter' />
            <p className='nombreFooter'>Brenda Bozac</p>
            
        </div>

        <div className="renglonFinal">
            <p className='derechos'>Diseño y Desarrollo Brenda Bozac - &copy; Todos los Derechos Reservados</p>
        </div>

        

    </div>
  )
}

export default Footer
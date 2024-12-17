import { useEffect } from 'react';
import "./Header.css"
import Boton from '../Boton/Boton';
import Foto from "../../Image/brendaProyecto.png"
import arg from "../../Image/arg.png"
import italy from "../../Image/italy.png"
import uruguay from "../../Image/uruguay.png"
import ecuador from "../../Image/ecuador.png"
import colombia from "../../Image/colombia.png"


const Header = () => {

  // Este useEffect asegura que la página se desplace hacia arriba al cargar el componente, me encanto!!
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // El array vacío indica que se ejecutará solo al montar el componente

  return (
    <div className='headerContainer'>
        
        <div className="row principal">

          <div className="col-md-12 col-lg-6 textoContainer ">
            <h1 className='principalTitulo'>Hola Soy Brenda!</h1>
            <p className='principalParrafo'>Profesional en Gestión de Eventos y Atención al Público <br /> Apasionada por el Desarrollo de Software <br /> y Marketing Digital <br /> Emprendedora con Experiencia Internacional</p>
            <div className='flags'>
              <img src={arg} alt="bandera argentina"  className='banderas'/>
              <img src={italy} alt="bandera italiana"  className='banderas'/>
              <img src={uruguay} alt="bandera uruguaya" className='banderas' />
              <img src={ecuador} alt="bandera ecuatoriana" className='banderas' />
              <img src={colombia} alt="bandera colombiana" className='banderas' />

            </div>
            <a href="/BrendaBozac-CV.pdf" download="BrendaBozac-CV.pdf.pdf" target="_blank" rel="noopener noreferrer" className='botonDescargar'>
              Descargar CV
            </a>
          </div>

          <div className="col-md-12 col-lg-6 fotoContainer ">
            <img src={Foto} alt="foto de leo" className='foto'/>
          </div>

        </div>
        
        <Boton to="/portfolio">Ver Perfil</Boton>
         
      
        
        
    </div>
  )
}

export default Header
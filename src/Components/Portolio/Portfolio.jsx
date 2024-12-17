import { useEffect } from 'react';
import Boton from '../Boton/Boton'
import foto2 from '../../Image/brendaseconda.png'
import bombilla from '../../Image/bombilla.png'
import globo from '../../Image/globo.png'
import grupo from '../../Image/grupo.png'
import "./Portfolio.css"

const Portfolio = () => {

  // Este useEffect asegura que la página se desplace hacia arriba al cargar el componente, me encanto!!
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // El array vacío indica que se ejecutará solo al montar el componente

  return (
    <div className='hidden'>
        <div className="row principal2">

         <div className="col-md-12 col-lg-5 containerSedungo ">
            <img src={foto2} alt="foto de brenda" className='segundoleo'/>
            <a href="/cv-leo-gestionTurismo.pdf" download="cv-leo-gestionTurismo.pdf" target="_blank" rel="noopener noreferrer" className='botonDescargar'>
            Descargar CV
            </a>
          </div>
        
          <div className="col-md-12 col-lg-7 textoContainer2 ">

            <div className="explain">
              <div className='refer'>
                <img src={globo} alt="globo" className='logo' />
                <p className='textoRefer'>Más de 10 Años de Experiencia</p>
              </div>

              <div className='refer'>
                <img src={bombilla} alt="bombilla" className='logo' />
                <p className='textoRefer'>Logística y Planificación</p>
              </div>

              <div className='refer'>
                <img src={grupo} alt="grupo" className='logo' />
                <p className='textoRefer'>Coordinación de Equipos</p>
              </div>
            </div>

            

            <div className='description'>
              <p className='descriptionP'>Experiencia en gestión de eventos, atención al público y desarrollo de emprendimientos propios, he trabajado en varios países, lo que me ha permitido aprender a adaptarme a distintos entornos y desarrollar habilidades clave en la atención al cliente y la resolución de problemas. Desarrollé labores en el área de turismo y también en la gestión de negocios y eventos, donde lideré equipos y coordiné tareas en entornos dinámicos y de alto contacto con el cliente.</p>
              <p className='descriptionP'>Hoy en día, manejo herramientas digitales de productividad (fundamental para la gestión, administración y escalabilidad para todo tipo de actividad), redes sociales, marketing digital y desarrollo de software, lo que me permite aportar soluciones innovadoras y ayudar a que los proyectos en los que participo crezcan y escalen de manera efectiva.</p>
            </div>

          </div>

          

        </div>
        <div className='decideBoton'>
          <Boton to="/">Volver a Inicio</Boton>
        </div>
    </div>
  )
}

export default Portfolio
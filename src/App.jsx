import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Header from './Components/Header/Header'
import Portfolio from './Components/Portolio/Portfolio';
/* import Habilidades from './Components/Habilidades/Habilidades'; */

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>

      
      
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/home' element={<Header />} />
          <Route path='/portfolio' element={<Portfolio/>} />
          <Route path='' element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        
      </BrowserRouter>
     
    </div>
  )
}

export default App

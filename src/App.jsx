import React from 'react'

import {Routes, Route} from "react-router-dom"
import Home from './components/Home/Home'

import Header from './components/Header/Header'
import Services from './components/Servicess/Services'
import DerLaboral from './components/Servicess/components/descServices/DerLaboral'
import DerTributario from './components/Servicess/components/descServices/DerTributario'
import AsesJuridicas from './components/Servicess/components/descServices/AsesJuridicas'
import AdminCobro from './components/Servicess/components/descServices/AdminCobro'
import PrevResolucion from './components/Servicess/components/descServices/PrevResolucion'
import Superinten from './components/Servicess/components/descServices/Superinten'
import DerechoAdmin from './components/Servicess/components/descServices/DerechoAdmin'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div>
      <header> <Header/> </header>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Services" element={<Services/>} />

        {/*Servicios*/}
        <Route path="/servicios/DerLaboral" element={<DerLaboral/>}/>
        <Route path="/servicios/DerTributario" element={<DerTributario/>}/>
        <Route path="/servicios/AsesJuridicas" element={<AsesJuridicas/>}/>
        <Route path="/servicios/AdminCobro" element={<AdminCobro/>}/>
        <Route path="/servicios/PrevResolucion" element={<PrevResolucion/>}/>
        <Route path="/servicios/Superintenl" element={<Superinten/>}/>
        <Route path="/servicios/DerechoAdmin" element={<DerechoAdmin/>}/>
    </Routes>
    <footer> <Footer/></footer>
    </div>
  )
}

export default App
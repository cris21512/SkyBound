import React from 'react'
import './index.css'
import './App.css'

import Transition from './Components/Transition/Transition'

import About from './Pages/About/About'
import Header from './Pages/Header/Header'
import Services from './Pages/Services/Services'
import Aerolines from './Pages/Aerolines/Aerolines'
import Recomendations from './Pages/Recomendations/Recomendations'

function App() {
  return (
    <>
    <Header />
    <About />
    <Services />
    <Aerolines />
    <Recomendations />
    </>
  )
}

export default Transition(App);

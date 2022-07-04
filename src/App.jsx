import React from 'react'
import { Routs, Route, Link } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'
// import components
import Navbar from './components/Navbar'

function App() {
  
  return (
    <div>
      <Navbar />

      <h2>app component</h2>
    </div>
  )
}

export default App

import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <img src={logo} alt="" className="logo"/>
        <div className="nav-links">
          <Link to="/"><a>Home</a></Link>
          <Link to="/about"><a>About</a></Link>
        </div>
      </div>
    </nav>

  )
}

export default Navbar

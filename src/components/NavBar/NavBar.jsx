import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
  const logSlogan = "https://cdn-icons-png.flaticon.com/512/9908/9908234.png";
  return (
    <header>

      <Link className='logName' to="/"> MoSz Art </Link>
      <nav>
        <ul>
          <li>
            <NavLink className='navLinks' to="/category/calcos">Calcos</NavLink>
          </li>
          <li>
            <NavLink className='navLinks' to="/category/posters">Posters</NavLink>
          </li>
          <li>
            <NavLink className='navLinks' to={`/category/cuadros`}>Cuadros</NavLink>
          </li>
        </ul>
      </nav>
      <div className='shopCart'>
        <CartWidget />
      </div>


    </header>
  )
}

export default NavBar

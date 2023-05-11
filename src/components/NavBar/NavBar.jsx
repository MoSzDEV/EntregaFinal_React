import React from 'react'
import './NavBar.css'
import { MutatingDots } from  'react-loader-spinner'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
  
  return (
    <header>

      <Link className='logName' to="/">
        <div>
          MoSz Art
        </div>
        <div className='backSpin'>
          <MutatingDots 
            height="100"
            width="100"
            color="#800080"
            secondaryColor= '#ffa500'
            radius='11'
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </Link>
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

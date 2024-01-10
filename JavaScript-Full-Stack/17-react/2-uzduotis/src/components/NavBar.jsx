import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navBar'>
        <h1>Puslapio pavadinimas</h1>
        <div>
            <ul className='nav'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar
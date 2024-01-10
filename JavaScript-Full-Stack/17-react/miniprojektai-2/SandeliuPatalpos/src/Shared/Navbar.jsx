import { NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <NavLink className='link' to='/sandelys1'>1 Sandėlio aukštas</NavLink>
        <NavLink className='link' to='/sandelys2'>2 Sandėlio aukštas</NavLink>
        <NavLink className='link' to='/AdminPatalpos'>Administracinės Patalpos</NavLink>
      </div>
    </div>
  )
}

export default Navbar
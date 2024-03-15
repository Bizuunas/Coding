import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <div className='bar'>
        <h1><NavLink to='/'>Bizevičiaus kabinetas</NavLink></h1>
        <nav>
            <ul>
                <li><NavLink to='/naujas-pac'>Pridėti naują pacientą</NavLink></li>
                <li><NavLink to='/pacientu-sar'>Pacientų sąrašas</NavLink></li>
            </ul>
        </nav>

    </div>
  )
}

export default Nav

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>

      <div className='container'>

        <ul className='navbar-nav ms-auto'>

          <li className='nav-item me-2'>

            <Link to='/'>
              <button className='btn btn-primary'>
                Home
              </button>
            </Link>

          </li>

          <li className='nav-item'>

            <Link to='/contact'>
              <button className='btn btn-primary'>
                Contact
              </button>
            </Link>

          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar
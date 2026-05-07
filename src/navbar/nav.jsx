import React from 'react'

const Navbar = () => {
  return (

    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>

      <div className='container'>

        <ul className='navbar-nav ms-auto'>

          <li className='nav-item'>
            <button className='btn btn-primary me-2'>
              Home
            </button>
          </li>

          <li className='nav-item'>
            <button className='btn btn-primary'>
              Contact
            </button>
          </li>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar
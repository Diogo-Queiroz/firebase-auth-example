import React from 'react'
import { Link } from 'react-router-dom'

import * as routes from '../constants/routes'

const Navigation = () =>
  <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
    <Link className='navbar-brand' to={routes.HOME}>KART</Link>
    <button className='navbar-toggler' type='button' 
            data-toggle='collapse' data-target='#navbar-content'
            aria-controls='navbarContent' aria-expanded='false'
            aria-label='Toggle Navigation'>
      <span className='navbar-toggler-icon'></span>
    </button>
    <div className='collapse navbar-collapse' id='navbar-content'>
      <ul className='navbar-nav mr-auto'>        
        <li className='nav-item'><Link className='nav-link' to={routes.HOME}>Home</Link></li>
        <li className='nav-item'><Link className='nav-link' to={routes.LANDING}>Landing</Link></li>
        <li className='nav-item'><Link className='nav-link' to={routes.ACCOUNT}>Account</Link></li>
      </ul>
      <ul className='navbar-nav'>
        <li className='nav-item'><Link className='nav-link' to={routes.SIGN_IN}>Sign In</Link></li>
        <li className='nav-item'><Link className='nav-link' to={routes.SIGN_UP}>Sign Up</Link></li>
      </ul>
    </div>
  </nav>

export default Navigation
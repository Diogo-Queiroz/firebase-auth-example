import React from 'react'
import { Link } from 'react-router-dom'

import SignOutButton from './SignOut'
import * as routes from '../constants/routes'

const Navigation = ({ authUser }) =>
  <div className='collapse navbar-collapse' id='navbar-content'>
    { authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </div>
const NavigationAuth = () => 
  <ul className='navbar-nav mr-auto'>
    <li className='nav-item'><Link className='nav-link' to={routes.HOME}>Home</Link></li>
    <li className='nav-item'><Link className='nav-link' to={routes.LANDING}>Landing</Link></li>
    <li className='nav-item'><Link className='nav-link' to={routes.ACCOUNT}>Account</Link></li>
    <li className='nav=item'><SignOutButton /></li>
  </ul>
const NavigationNonAuth = () => 
  <ul className='navbar-nav'>
    <li className='nav-item'><Link className='nav-link' to={routes.LANDING}>Landing</Link></li>
    <li className='nav-item'><Link className='nav-link' to={routes.SIGN_IN}>Sign In</Link></li>
  </ul>

const NavigationFullBar = () =>
  <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
    <Link className='navbar-brand' to={routes.HOME}>KART</Link>
    <button className='navbar-toggler' type='button' 
            data-toggle='collapse' data-target='#navbar-content'
            aria-controls='navbarContent' aria-expanded='false'
            aria-label='Toggle Navigation'>
      <span className='navbar-toggler-icon'></span>
    </button>
    <Navigation />
  </nav>

export default NavigationFullBar
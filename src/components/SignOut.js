import React from 'react'
import { auth } from '../firebase'

const SignOutButton = () =>
  <button className='btn circle' 
    type='button'
    onClick={auth.doSignOut}
  >
    <i className='fas fa-sign-out-alt'></i>
  </button>

export default SignOutButton
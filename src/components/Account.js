import React from 'react'

import AuthUserContext from './AuthUserContext'
import { PasswordForgetForm } from './PasswordForget'
import PasswordChangeForm from './PasswordChange'

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser => 
      <div>
        <h1>Account: {authUser.email} Page</h1>
        <div className='row'>
          <div className='col-6'>
            <PasswordForgetForm />
          </div>
          <div className='col-6'>
            <PasswordChangeForm />
          </div>
        </div>
      </div>
    }
  </AuthUserContext.Consumer>

export default AccountPage
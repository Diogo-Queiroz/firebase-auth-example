import React from 'react'

import AuthUserContext from './AuthUserContext'
import { PasswordForgetForm } from './PasswordForget'
import PasswordChangeForm from './PasswordChange'
import withAuthorization from './withAuthorization'

const AccountPage = () =>
  <AuthUserContext.Consumer>
    {authUser => 
      <div>
        <h1>Account: {authUser.username} Page</h1>
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

const authCondition = (authUser) => !!authUser

export default withAuthorization(authCondition)(AccountPage)
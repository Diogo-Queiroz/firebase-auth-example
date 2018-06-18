import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import NavigationFullBar from './Navigation'
import HomePage from './Home'
import SignInPage from './SignIn'
import SignUpPage from './SignUp'
import LandingPage from './Landing'
import AccountPage from './Account'
import PasswordForgetPage from './PasswordForget'

import * as routes from '../constants/routes'
import withAuthentication from './withAuthentication'

const App = () =>  
    <Router>
    <div>
        <NavigationFullBar />
    
        <hr />
    
        <Route exact path={routes.HOME} component={() => <HomePage />} />
        <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
        <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
        <Route exact path={routes.LANDING} component={() => <LandingPage />} />
        <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
        <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
    </div>
    </Router>

export default withAuthentication(App)

import React, { Component } from 'react'
import { 
  Link,
  withRouter
} from 'react-router-dom'

import { SignUpLink } from './SignUp'
import { PasswordForgetLink } from './PasswordForget'
import { auth } from '../firebase'
import * as routes from '../constants/routes'

const SignInPage = ({ history }) =>
  <div>
    <h1>Sign In</h1>
    <SignInForm history={history} />
    <SignUpLink />
    <PasswordForgetLink />
  </div>

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
})

class SignInForm extends Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state

    const {
      history
    } = this.props

    auth.doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }))
        history.push(routes.HOME)
      })
      .catch(error => {
        this.setState(byPropKey('error', error))
      })

    event.preventDefault()
  }

  render() {
    const {
      email,
      password,
      error
    } = this.state

    const isInvalid =
      password === '' ||
      email === ''

    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          <input className='form-control' value={email} type='email' placeholder='E-mail Address'
            onChange={event => this.setState(byPropKey('email', event.target.value))}
          />
        </div>
        <div className='form-group'>
          <input className='form-control' value={password} type='password' placeholder='Password'
            onChange={event => this.setState(byPropKey('password', event.target.value))}
          />
        </div>
        <button className='btn btn-primary' disabled={isInvalid} type='submit'>
          Sign In
        </button>

        {error && <p className='text-danger'> {error.message} </p>}
      </form>
    )
  }
}

const SignInLink = () =>
  <p>
    Already have an account?
    {' '}
    <Link to={routes.SIGN_IN}>Sign In</Link>
  </p>

export default withRouter(SignInPage)

export {
  SignInForm,
  SignInLink
}
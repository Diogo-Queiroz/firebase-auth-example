import React, { Component } from 'react'
import { 
  Link,
  withRouter
} from 'react-router-dom'

import { SignInLink } from './SignIn'
import { auth, db } from '../firebase'
import * as routes from '../constants/routes'

import './signupstyle.css'

const SignUpPage = ({ history }) =>
  <div>
    <h1>Sign Up</h1>
    <SignUpForm history={history}/>
    <SignInLink />
  </div>

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
})

class SignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state

    const {
      history
    } = this.props

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }))
              history.push(routes.HOME)
            })
            .catch(error => {
              this.setState(byPropKey('error', error))
          })
      })

    event.preventDefault()
  }

  render() {
    const {
      username,
      email,
      passwordOne, 
      passwordTwo,
      error
    } = this.state

    const isInvalid = 
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === ''

    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          <input className='form-control' value={username} type='text' placeholder='Full Name'
            onChange={event => this.setState(byPropKey('username', event.target.value))}
          />
        </div>
        <div className='form-group'>
          <input className='form-control' value={email} type='email' placeholder='E-mail Address'
            onChange={event => this.setState(byPropKey('email', event.target.value))}
          />
        </div>
        <div className='form-group'>
          <input className='form-control' value={passwordOne} type='password' placeholder='Password'
            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          />
        </div>
        <div className='form-group'>
          <input className='form-control' value={passwordTwo} type='password' placeholder='Password'
            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          />
          <small className='form-text text-muted'>Repeat the password</small>
        </div>
        <button className='btn btn-primary' disabled={isInvalid} type='submit'>
          Sign Up
        </button>

        { error && <p> { error.message } </p> }
      </form>
    )
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage)

export {
  SignUpForm,
  SignUpLink
}
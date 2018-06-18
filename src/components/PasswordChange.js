import React, { Component } from 'react'

import { auth } from '../firebase'

const byProperKey = (propertyName, value) => () => ({
  [propertyName]: value
})

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null
}

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...INITIAL_STATE
    }
  }
  onSubmit = (event) => {
    const { passwordOne } = this.state
    
    auth.doPasswordChange(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }))
      })
      .catch(error => {
        this.setState(byProperKey('error', error))
      })
    
    event.preventDefault()
  }
  
  render() {
    const {
      passwordOne,
      passwordTwo,
      error
    } = this.state
    
    const isInvalid = passwordOne !== passwordTwo || passwordOne === ''
    
    return (
      <form onSubmit={this.onSubmit}>
        <div className='form-group'>
          <input className='form-control' value={passwordOne} onChange={event => this.setState(byProperKey('passwordOne', event.target.value))} type='password' placeholder='New Password' />
        </div>
        <div className='form-group'>
          <input className='form-control' value={passwordTwo} onChange={event => this.setState(byProperKey('passwordTwo', event.target.value))} type='password' placeholder='New Password' />
        </div>
        <button className='btn btn-success' disabled={isInvalid} type='submit'>
          Change my Password
        </button>
        
        { error && <p className='text-danger'>{error.message}</p> }
      </form>  
    )
  }
}

export default PasswordChangeForm
import React from "react"
import axios from "axios";
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const onButtonClick = async e => {
    // Set initial error values to empty
    setEmailError('')
    setPasswordError('')
  
    // Check if the user has entered both fields correctly
    if ('' === email) {
      setEmailError('Please enter your email')
      return
    }
  
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email')
      return
    }
  
    if ('' === password) {
      setPasswordError('Please enter a password')
      return
    }
  
    if (password.length < 7) {
      setPasswordError('The password must be 8 characters or longer')
      return
    }

    console.log('lets get tokens started!')
  
    // Authentication calls will be made here...
    e.preventDefault();
    const user = {
          username: email,
          password: password
         };

    console.log('setting up..')

    // Create the POST requuest
    // const {data} = await axios.post('http://localhost:8000/token/', user ,{headers: {
    //     'Content-Type': 'application/json'
    // }}, {withCredentials: true});
    
    try {
        const { data } = await axios.post('http://localhost:8000/token/', user, {
            headers: {
                'Content-Type': 'application/json'
            },
            withCredentials: true
        });

        console.log('we made the post request')
        // setToken(response.data.token);
        
        if (data && data.access && data.refresh) {
            // Initialize the access & refresh token in localstorage.      
            localStorage.clear();
            localStorage.setItem('access_token', data.access);
            localStorage.setItem('refresh_token', data.refresh);
            axios.defaults.headers.common['Authorization'] = 
                                            `Bearer ${data['access']}`;
            window.location.href = '/'

            console.log('we are getting the refresh token')
            console.log(localStorage.getItem('refresh_token'));
        } else {
            console.error('Unexpected response structure:', data)
        }
    } catch (error) {
        console.error('Error during login:', error)
    }

  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={onButtonClick} value={'Log in'} />
      </div>
    </div>
  )
}

export default Login
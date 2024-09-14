import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useEffect, useState} from "react";
import axios from "axios";
import '../interceptors/axios';

const Home = (props) => {
  const { loggedIn, email } = props
  const [message, setMessage] = useState('');
  const navigate = useNavigate()

//   const onButtonClick = () => {
//     const path = `newPath`; 
//     navigate(path);
//   }

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Welcome!</div>
      </div>
      <div>This is the home page.</div>
      {/* <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
          value={loggedIn ? 'Log out' : 'Log in'}
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
      </div> */}
    </div>
  )
}

export default Home
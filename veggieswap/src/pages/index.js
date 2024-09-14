import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useEffect, useState} from "react";
import axios from "axios";
import '../interceptors/axios';

const Home = (props) => {
  const { loggedIn, email } = props
  const [message, setMessage] = useState('');
  const navigate = useNavigate()

//   // if authenticated, goes immediately to login page?
//   useEffect(() => {
//     if(localStorage.getItem('access_token') === null){                   
//         window.location.href = '/login'
//     }
//     else{
//         (async () => {
//             try {
//                 const {data} = await axios.get(   
//                                 'http://localhost:8000/home/', {
//                                 headers: {
//                                     'Content-Type': 'application/json'
//                                 }}
//                             );
//                 setMessage(data.message);
//             } catch (e) {
//                 console.log('not auth')
//             }
//         })()};
//   }, []);

  const onButtonClick = () => {
    // You'll update this function later
    if(localStorage.getItem('access_token') === null){                   
        window.location.href = '/login'
    }
    else{
        (async () => {
            try {
                const {data} = await axios.get(   
                                'http://localhost:8000/home/', {
                                headers: {
                                    'Content-Type': 'application/json'
                                }}
                            );
                setMessage(data.message);
            } catch (e) {
                console.log('not auth')
            }
        })()};
    
  }

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Welcome!</div>
      </div>
      <div>This is the home page.</div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
          value={loggedIn ? 'Log out' : 'Log in'}
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
      </div>
    </div>
  )
}

export default Home
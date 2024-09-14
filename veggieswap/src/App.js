import React from "react";
import Navbar from "./components/Navbar/navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Login from "./pages/login";
import PublicBoard from "./pages/public";
import Post from "./pages/post";
import './App.css'
import { useEffect, useState } from 'react'
 
function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
      <Router>
          <Navbar />
          <Routes>
              <Route
                path="/"
                element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
              />
              <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/publicboard" element={<PublicBoard/>}/>
              <Route path="post" element={<Post/>}/>
          </Routes>
      </Router>
  );
}
 
export default App;
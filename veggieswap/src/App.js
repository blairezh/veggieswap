import React from "react";
import Navbar from "./components/Navbar/navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Login from "./pages/login";
import Logout from "./pages/logout";
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
              <Route path="/logout" element={<Logout />} />
          </Routes>
      </Router>
  );
}
 
export default App;
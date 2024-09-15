import React from "react";
import Navbar from "./components/Navbar/navbar";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import PublicBoard from "./pages/public";
import Post from "./pages/post";
import Account from "./pages/account";
import './App.css'
import { useEffect, useState } from 'react'
 
function App() {

  return (
      <Router>
          <Navbar />
          <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route path="/publicboard" element={<PublicBoard/>}/>
              <Route path="/post" element={<Post/>}/>
              <Route path="/account" element={<Account/>}/>
          </Routes>
      </Router>
  );
}
 
export default App;
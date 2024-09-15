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
          </Routes>
      </Router>
  );
}
 
export default App;
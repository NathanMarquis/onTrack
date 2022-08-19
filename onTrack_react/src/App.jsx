import './App.css';
import React, {Component, useState, useEffect } from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import NavigationBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import Homepage from './pages/Homepage';
import Trips from './pages/Trips';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import CreateTrip from './pages/CreateTrip';
import ViewTrip from './pages/ViewTrip';

const getCSRFToken = ()=>{
  let csrfToken

  // the browser's cookies for this page are all in one string, separated by semi-colons
  const cookies = document.cookie.split(';')
  for ( let cookie of cookies ) {
      // individual cookies have their key and value separated by an equal sign
      const crumbs = cookie.split('=')
      if ( crumbs[0].trim() === 'csrftoken') {
          csrfToken = crumbs[1]
      }
  }
  return csrfToken
}

//Key for google maps api from MapContaineer
// const mapkey = process.env.REACT_APP_API_KEY

function App() {
  
  console.log('token? ', getCSRFToken())
  axios.defaults.headers.common['X-CSRFToken'] = getCSRFToken()
  
  return (
    <div className='Navbar'>
      <NavigationBar />
      <Router>
        <Routes> 
          <Route path='/' element={<Homepage />} />
          <Route path='/trips' element={<Trips />} />
          <Route path='/login' element={<Login />} />
          <Route path='/viewtrip' element={<ViewTrip />} />
          <Route path='/createaccount' element={<CreateAccount />} />
          <Route path='/createtrip' element={<CreateTrip />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
import './App.css';
import { useState, useEffect } from 'react';
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
console.log('token? ', getCSRFToken())
axios.defaults.headers.common['X-CSRFToken'] = getCSRFToken()

//Key for google maps api from MapContaineer
// const mapkey = process.env.REACT_APP_API_KEY

function App() {
  const [user, setUser] = useState(null)

  const submitSignupForm = function(event){
    // this isn't actually necessary, since this isn't in a form. but if it WAS a form, we'd need to prevent default.
    event.preventDefault()
    axios.post('/signup', {email: 'jeff@amazon.com', password:'dragons'}).then((response)=>{
      console.log('response from server: ', response)
    })
  }

  const submitLoginForm = function(event){
    // this isn't actually necessary, since this isn't in a form. but if it WAS a form, we'd need to prevent default.
    event.preventDefault()
    axios.post('/login', {email: 'jeff@amazon.com', password:'dragons'}).then((response)=>{
      console.log('response from server: ', response)
      window.location.reload()
    })
  }
  
  const logOut = function(event){
    // this isn't actually necessary, since this isn't in a form. but if it WAS a form, we'd need to prevent default.
    event.preventDefault()
    axios.post('/logout').then((response)=>{
      console.log('response from server: ', response)
      whoAmI()
    })
  }

  const whoAmI = async () => {
    const response = await axios.get('/whoami')
    const user = response.data && response.data[0] && response.data[0].fields
    // const user = response.data[0].fields
    console.log('user from whoami? ', user, response)
    setUser(user)
    window.foo.bar.baz = 'error!'
  }

  useEffect(()=>{
    whoAmI()
  }, [])
  
  return (
    <div className='Navbar'>
      <h1>Hi</h1>
      <NavigationBar />
      <Router>
        <Routes> 
          <Route path='/' element={<Homepage />} />
          <Route path='/trips' element={<Trips />} />
          <Route path='/login' element={<Login />} />
          <Route path='/createAccount' element={<CreateAccount />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

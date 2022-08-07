import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import NavigationBar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './pages/Homepage';
import Trips from './pages/Trips';
import Login from './pages/Login';
import {HashRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const incrementCounter = () => {
    setCount(count + 1)
  }

  return (
    <div className='Navbar'>
      <NavigationBar />
      <Router>
        <Routes> 
          <Route path='/' element={<Homepage />} />
          <Route path='/trips' element={<Trips />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import submitLoginForm from '../App';
import React, {Component, useState, useEffect } from 'react';
import axios from 'axios'

function Login() {
  const [user, setUser] = useState(null)

  

  

  const submitLoginForm = function(event){
    // this isn't actually necessary, since this isn't in a form. but if it WAS a form, we'd need to prevent default.
    event.preventDefault()
    axios.post('/login', {email: 'jeff@amazon.com', password:'dragons'}).then((response)=>{
      console.log('response from server: ', response)
      window.location.reload()
    })
  }
  
  // const logOut = function(event){
  //   // this isn't actually necessary, since this isn't in a form. but if it WAS a form, we'd need to prevent default.
  //   event.preventDefault()
  //   axios.post('/logout').then((response)=>{
  //     console.log('response from server: ', response)
  //     whoAmI()
  //   })
  // }

  const whoAmI = async () => {
    const response = await axios.get('/whoami')
    const user = response.data && response.data[0] && response.data[0].fields
    // const user = response.data[0].fields
    console.log('user from whoami? ', user, response)
    setUser(user)
  }

  useEffect(()=>{
    whoAmI()
  }, [])
  return (
    <div>
      <Form onSubmit={submitLoginForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Link to={"/createaccount"}>Create account</Link>
    </div>
  );
}

export default Login;

import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function NavigationBar ({user, whoAmI}){
  let navigate = useNavigate();
  const logOut = function(event){
    // this isn't actually necessary, since this isn't in a form. but if it WAS a form, we'd need to prevent default.
    event.preventDefault()
    axios.post('/logout').then((response)=>{
      console.log('response from server: ', response)
      whoAmI()
      navigate('/');
    })
  }
    return (
        <Navbar className="rounded" bg="light" expand="md">
          <Container>
            <Navbar.Brand href="/#">onTrack</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/#">Home</Nav.Link>
                
                { user ? <Nav.Link href="/#/trips">Trips</Nav.Link> : <Nav.Link href="/#/trips" disabled>Trips</Nav.Link> }
                { user ? <Nav.Link onClick={logOut}>Logout</Nav.Link> : <Nav.Link href="/#/login">Login</Nav.Link> }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );

}
 
export default NavigationBar;
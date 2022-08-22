import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavigationBar (){

    return (
        <Navbar className="rounded" bg="light" expand="md">
          <Container>
            <Navbar.Brand href="/#">onTrack</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/#">Home</Nav.Link>

                {/* disabled */}
                <Nav.Link id="tripLink" href="/#/trips">Trips</Nav.Link>
                <Nav.Link href="/#/login">Login</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );

}
 
export default NavigationBar;
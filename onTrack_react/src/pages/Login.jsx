import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { Component, useState, useEffect } from "react";
import axios from "axios";

// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = 'X-CSRFToken'

const getCSRFToken = () => {
  let csrfToken

  // the browser's cookies for this page are all in one string, separated by semi-colons
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    // individual cookies have their key and value separated by an equal sign
    const crumbs = cookie.split("=");
    if (crumbs[0].trim() === "csrftoken") {
      csrfToken = crumbs[1];
    } else{
      console.log('no tokens!!!')
    }
  }
  return csrfToken;
};
console.log('token? ', getCSRFToken())
axios.defaults.headers.common['X-CSRFToken'] = getCSRFToken()

function Login({user, whoAmI}) {
  

  let navigate = useNavigate();
  const submitLoginForm = function (event) {
    // this isn't actually necessary, since this isn't in a form. but if it WAS a form, we'd need to prevent default.
    event.preventDefault();
    console.log(event);
    let email = event.target[0].value;
    let password = event.target[1].value;
    axios.post("/login", { email: email, password: password })
      .then((response) => {
        console.log("response from server: ", response);
        whoAmI()
        navigate('/trips')
        window.location.reload()
      });
  };

  return (
    <div>
      <div className="d-flex justify-content-center py-2">
        <Form className="w-25" onSubmit={submitLoginForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="light" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <Link className="text-white" to={"/createaccount"}>Create account</Link>
    </div>
  );
}

export default Login;

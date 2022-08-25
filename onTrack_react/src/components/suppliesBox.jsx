import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { Component, useState, useEffect } from "react";
import axios from "axios";

function SuppliesBox() {
  
  const addSupplies = function (event) {
    // this isn't actually necessary, since this isn't in a form. but if it WAS a form, we'd need to prevent default.
    event.preventDefault();
    console.log(event);
    // let email = event.target[0].value;
    // let password = event.target[1].value;
    axios.post("/addsupplies", { email: email, password: password })
      .then((response) => {
        console.log("response from server: ", response);
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
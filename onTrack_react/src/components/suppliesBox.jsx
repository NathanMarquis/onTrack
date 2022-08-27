import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';
import React, { Component, useState, useEffect } from "react";
import axios from "axios";

function Supplies() {
  const supplies = []
  
  const addSupplies = function (event) {
    // this isn't actually necessary, since this isn't in a form. but if it WAS a form, we'd need to prevent default.
    event.preventDefault();
    console.log(event);
    // let email = event.target[0].value;
    // let password = event.target[1].value;
    axios.post("/addsupplies", { item })
      .then((response) => {
        console.log("response from server: ", response);
      });
  };

  for (item in supplies) {
    supplies.push(<div className="supplyBox"/>)
  }
  return (
    <div>
      <div>
      {supplies}
      </div>
      <InputGroup onSubmit={addSupplies} className="mb-3">
        <Form.Control placeholder="Add supply item"/>
        <Button type="submit" variant="outline-secondary" id="button-addon1">
          Add
        </Button>
      </InputGroup>
    </div>
  );
}

export default Supplies;
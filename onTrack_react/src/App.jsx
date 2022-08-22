import "./App.css";
import React, { Component, useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Homepage from "./pages/Homepage";
import Trips from "./pages/Trips";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import CreateTrip from "./pages/CreateTrip";
import ViewTrip from "./pages/ViewTrip";

//Key for google maps api from MapContaineer
// const mapkey = process.env.REACT_APP_API_KEY

function App() {

  return (
    <div w-75>
      <div className="d-flex navbar justify-content-center">
      <NavigationBar />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/login" element={<Login />} />
          <Route path="/viewtrip" element={<ViewTrip />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/createtrip" element={<CreateTrip />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

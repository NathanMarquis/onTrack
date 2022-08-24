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
  const [user, setUser] = useState(null);
  // use the user state if null to disable button 

  const whoAmI = async () => {
    console.log("Trying whoami");
    const response = await axios.get("/whoami");
    const user = response.data && response.data[0] && response.data[0].fields;
    // const user = response.data[0].fields
    console.log("user from whoami? ", user, response);
    setUser(user);
  };

  useEffect(() => {
    whoAmI();
  }, []);
  // only renders first time page loads because nothing in brackets, whatever state is in brackets determines if function executed again

  return (
    <div w-75>
      <Router>
      <div className="d-flex navbar justify-content-center">
        <NavigationBar user={user} whoAmI={whoAmI} />
      </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/trips" element={<Trips />} />
          <Route path="/login" element={<Login user={user} whoAmI={whoAmI}/>} />
          <Route path="/viewtrip" element={<ViewTrip />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/createtrip" element={<CreateTrip />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

function CreateAccount() {
  console.log("Creating account");
  const submitSignupForm = function (event) {
    event.preventDefault();
    let email = event.target[0].value;
    let password = event.target[1].value;
    axios
      .post("/signup", { email: email, password: password })
      .then((response) => {
        console.log("response from server: ", response);
      });
  };
  return (
    <div className="d-flex justify-content-center py-2">
      <Form className="w-25" onSubmit={submitSignupForm}>
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
  );
}

export default CreateAccount;

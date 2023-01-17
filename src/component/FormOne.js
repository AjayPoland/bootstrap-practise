import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//styling ReactBootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

const obj = {
  email: "null",
  password: "null",
};

function FormOne() {
    const [message,setmessage]=useState(null);
  const [state, setstate] = useState(obj);
  function submitFormOne(event) {
    alert(`Requesting to submit Form One \nmessage: ${message}`);
    event.preventDefault();
  }
  function emailChangeHandler(event) {
    setstate({...state,email: event.target.value });
  }
  function passwordChangeHandler(event) {
    setstate({...state,password:event.target.value});
  }
  function messageChangeHandler (event){
    setmessage(event.target.value);
  }

  const submitFormTwo = (event) => {
    alert(`email: ${state.email}. \npassword: ${state.password}`);
    event.preventDefault();
  };

  return (
    <>
      <div className="container text-start">
        <h1>Simplest Form-One</h1>
        <Form
          onSubmit={submitFormOne}
          className="container border border-2 border-secondary rounded-3 mt-3 p-2"
        >
          <Form.Group>
            <Form.Label> Message:</Form.Label>
            <Form.Control
            value={message}
              type="textarea"
              placeholder="write your massages"
              style={{ maxWidth: "25em" }}
              onChange={messageChangeHandler}
              required
            ></Form.Control>
            <Button type="submit" className="mt-2">
              submit
            </Button>
          </Form.Group>
        </Form>
      </div>
      <div className="container text-start mt-3">
        <h1>Form Two</h1>
        <Form
          onSubmit={submitFormTwo}
          className="container border border-2 border-secondary rounded-3 mt-3 p-2"
        >
          <Form.Group>
            <Form.Label htmlFor="UserEmailInput">Email Adress:</Form.Label>
            <Form.Control
              id="UserEmailInput"
              type="email"
              placeholder="example@gmail.com"
              onChange={emailChangeHandler}
              required
            ></Form.Control>
            <Form.Text>
              We'll never share your email with anyone, for your security
              purpose.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="UserPassword">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Entre your password"
              onChange={passwordChangeHandler}
              required
            ></Form.Control>
          </Form.Group>
          <Button type="submit" className="mt-2">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default FormOne;

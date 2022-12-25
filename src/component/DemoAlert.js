import React, { useReducer } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
//for css styling
import "bootstrap/dist/css/bootstrap.min.css";

//object holding the state
const initalObj = {
  alert_one: true,
  alert_two: true,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CloseOne":
      return {...state,alert_one: !state.alert_one };
    case "CloseTwo":
      return {...state, alert_two: !state.alert_two };
  }
};
export default function DemoAlert() {
  const [state, dispatch] = useReducer(reducer, initalObj);
  console.log(state.alert_one);
  return (
    <div>
      {/* <button onClick={()=>dispatch({type:"CloseOne"})} >log me</button> */}
      <div className="container">
        <Alert
          variant=""
          className="bg-dark mb-3 text-light text-wrap text-start"
        >
          <Alert.Heading className="text-warning text-center">
            default Alert!
          </Alert.Heading>
          <p className="">
            Hello! Any tag can be added inside Alert element. This is the
            Default display of Alert element of React-bootstrap. This example
            text is going to run a bit longer so that you can see how spacing
            within alert works with this kind of content.
          </p>
          <hr />
          <p className="text-light mb-0">
            Whenever you need to, be sure to use margin utlities to keep things
            nice and tidy.
          </p>
        </Alert>
        {/* using tranarry operator */}
        {state.alert_one ? (
          <Alert onClose={() => dispatch({ type: "CloseOne" })} dismissible>
            <h1>Alert with dismiss button</h1>
            <p>
              Hay! You can close this alert by clicking cross on the right top
              corner. To add dimiss button{" "}
              <mark className="rounded-3 text-bg-warning">
                {" "}
                pass dismissible prop
              </mark>{" "}
              to the Alert element.
            </p>
          </Alert>
        ) : (
          <Button  onClick={() => dispatch({ type: "CloseOne" })}>
            Show Alert
          </Button>
        )}
        {JSON.stringify(state)}
        <Alert show={state.alert_two} variant="danger">
        <h1>Here is some custome dismissible button</h1>
        <p>This custome close button is applied without dimissible prop, to the Alert element. Just using Boolean state to hide and show the alert.</p>
        <hr/>
        <div className="d-flex justify-content-end">
        <Button variant="outline-success" className="d-block" onClick={()=>dispatch({type:"CloseTwo"})}>Close me y'all!</Button>
        </div>
      </Alert>
      <Button variant="outline-light" className="" onClick={()=>dispatch({type:"CloseTwo"})}>Show Alert</Button>
      </div>
      
    </div>
  );
}

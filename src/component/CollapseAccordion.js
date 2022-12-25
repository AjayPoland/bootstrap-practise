import React from "react";
import Accordion from "react-bootstrap/Accordion";
//for react-bootstrap element css
import "bootstrap/dist/css/bootstrap.min.css";
//external css for accordion.header.
import "../css/collapse_accordion.css"

// for Normal bootstrap css
export default function CollapseAccordion() {
  return (
    <div>
      <div className="container ">
        <h1>Collapse & Accordion</h1>
        <p className="text-bg-success rounded-2 p-2">
          In React, Collapse is murged with Accordion. So to create collapse, we
          need to write the custome function to toggle the collpase.
        </p>
      </div>
      <div className="container">
        <Accordion className='rounded bg-warning'>
          <Accordion.Item eventKey='0' >
            <Accordion.Header>Show me!</Accordion.Header>
            <Accordion.Body className='text-bg-success'>
              I am the Accordion Created using React Accordion element. It is
              quite easy to create collapse as accordion in create. There is
              nothing to deal with data-bs-toggle or target in React while
              creating collpase. <hr /> Hope you Like it. <br /> Thank you!
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

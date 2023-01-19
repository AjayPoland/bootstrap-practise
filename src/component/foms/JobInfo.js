import React, { Children } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";

function JobInfo({children}) {
  return (
    <>
      <div className="container text-start px-4 mb-3">
        <h6 className="fw-bold py-3">Job Information</h6>
        <hr className='mt-0 mb-3'/>
        <Form className="d-flex flex-column">
          <Form.Group>
            <Form.Label htmlFor="title">Title</Form.Label>
            <Form.Control id="title" style={{width:'15.625rem'}}/>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="depart">Department</Form.Label>
            <Form.Select id="depart"  style={{width:'15.625rem'}}>
              <option >Option1</option>
              <option>Option2</option>
              <option>Option3</option>
              <option>Option4</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="work-type">Title</Form.Label>
            <Form.Select id="work-type"  style={{width:'15.625rem'}}>
              <option>Type1</option>
              <option>Type2</option>
              <option>Type3</option>
              <option>Type4</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label htmlFor="date">Start Date</Form.Label>
            <Form.Control type="date" id="date"  style={{width:'15.625rem'}}/>
            <Form.Text>Date</Form.Text>
          </Form.Group>
        </Form>
        <hr className="m-0" />
        {children}
      </div>
    </>
  );
}

export default JobInfo;

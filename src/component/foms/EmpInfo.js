import React from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button'

//styling bootstrap css.
import "bootstrap/dist/css/bootstrap.min.css";
//external styling css
import '../../css/EmpInfo.css'

const EmpInfo = () => {
  return (
    <div className="container rounded-3 border border-3 border-danger mt-5 mb-5 p-0">
      <h2 className="p-3 fw-bold">Employee Information Form</h2>
      <hr />
      <div className="p-4 text-start">
        <h6 className="fw-bold">Personal Information</h6>
        <hr />
        <Form>
          <Row className='mb-4'>
          <Form.Label>Name</Form.Label>
            <Form.Group as={Col}>
              <Form.Control type="text" />
              <Form.Text>First Name</Form.Text>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control type="text" />
              <Form.Text>First Name</Form.Text>
            </Form.Group>
          </Row>
          <Row className='mb-4'>
            <Form.Group as={Col}>
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" />
              <Form.Text>Street Address</Form.Text>
            </Form.Group>
          </Row>
          <Row className='mb-4'>
            <Form.Group as={Col}>
              <Form.Control type="text" />
              <Form.Text>Street Address Line 2</Form.Text>
            </Form.Group>
          </Row>
          <Row className='mb-4'>
            <Form.Group as={Col}>
              <Form.Control type="text" />
              <Form.Text>city</Form.Text>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control type="text" />
              <Form.Text>State/Province</Form.Text>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control type="text" />
              <Form.Text>Postal/Zip Code</Form.Text>
            </Form.Group>
          </Row>
          <Row className='mb-4'>
            <Form.Group as={Col}>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="(000) 000-0000"/>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Home Phone Number</Form.Label>
              <Form.Control type="number" placeholder="(000) 000-0000"/>
            </Form.Group>
          </Row>
          <Row className='mb-4'>
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control type="mail" />
              <Form.Text>Example@example.com</Form.Text>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Birthday</Form.Label>
              <Form.Control type="date" />
              <Form.Text>Date</Form.Text>
            </Form.Group>
          </Row>
          <Row className='mb-4'>
            <Form.Group as={Col}>
                <Form.Label>Please upload your Photo</Form.Label>
                <Form.Control type='file'/>
            </Form.Group>
          </Row>
        </Form>
      </div>
      <hr/>
      <div className='text-end'>
      <Button variant='primary' className='px-4 m-4 justify-content-end'>Next</Button>
      </div>
    </div>
  );
};

export default EmpInfo;

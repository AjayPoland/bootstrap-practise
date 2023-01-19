import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//styling bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'


function ContectInfo({children}) {
  return (
    <>
      <div className="container text-start px-4 mb-3">
        <h6 className="fw-bold py-3">Job Emergency Contact Information</h6>
        <hr className='mt-0 mb-3'/>
        <Form >
          <Row className="mb-4">
            <Form.Label>Primary Emergency | Contact Name</Form.Label>
            <Form.Group as={Col}>
              <Form.Control type="text" />
              <Form.Text>First Name</Form.Text>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control type="text" />
              <Form.Text>Last Name</Form.Text>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col}>
              <Form.Label>Primary Emergency | Phone Number</Form.Label>
              <Form.Control type="number" placeholder="(000) 000-0000"/>
              <Form.Text>Please enter a valid phone number</Form.Text>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col}>
            <Form.Label>Primary Emergency | What is your relationship with this person?</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Row>
          <hr/>
          <Row className="mb-4">
            <Form.Label>Secondary Emergency | Contact Name</Form.Label>
            <Form.Group as={Col}>
              <Form.Control type="text" />
              <Form.Text>First Name</Form.Text>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Control type="text" />
              <Form.Text>Last Name</Form.Text>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col}>
              <Form.Label>Secondary Emergency | Phone Number</Form.Label>
              <Form.Control type="number" placeholder="(000) 000-0000"/>
              <Form.Text>Please enter a valid phone number</Form.Text>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col}>
            <Form.Label>Secondary Emergency | What is your relationship with this person?</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Row>
        </Form>
        <hr className="m-0" />
        {children}
      </div>
    </>
  )
}

export default ContectInfo

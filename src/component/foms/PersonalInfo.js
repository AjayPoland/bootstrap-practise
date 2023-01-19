import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

//styling bootstrap css.
import "bootstrap/dist/css/bootstrap.min.css";
//external styling css
import "../../css/EmpInfo.css";

import uploadicon from "../../icons/—Pngtree—file upload icon_4717174.png";

function PersonalInfo({children}) {
  let ref1 = useRef(null);
  const [flage, setFlage] = useState(true);
  const [empPic, setEmpPic] = useState();
  const [uploadedFile, setUploadedFile] = useState();

  const setInput = (ref1) => {
    const data = JSON.stringify(ref1.target.value);
    setUploadedFile({ src: `${data}` });
    console.log(uploadedFile);
  };

  const handleBtnClick = () => {};

  const showCard = () => {
    return flage ? (
      <>
        <Form.Control
          id="upload-file"
          type="file"
          ref={ref1}
          placeholder="upload"
          onChange={setInput}
          style={{ display: "none" }}
          onClick={handleBtnClick}
        />
        <Form.Label
          className="mb-0"
          htmlFor="upload-file"
          style={{ cursor: "pointer" }}
        >
          <Card className=" text-dark text-center justify-content-center align-items-center flex-column border-0">
            <Card.Img
              src={uploadicon}
              style={{ height: "65px", width: "65px" }}
            />
            <Card.Body className="p-1 mb-2">
              <Card.Title>Browse Files</Card.Title>
              <Card.Text>Drag and drop files here</Card.Text>
            </Card.Body>
          </Card>
        </Form.Label>
      </>
    ) : (
      <h1 className="text-dark"></h1>
    );
  };
  return (
    <div className="container text-start px-4 mb-3">
        <h6 className="fw-bold py-3">Personal Information</h6>
        <hr className="mt-0 mb-3"/>
        <Form>
          <Row className="mb-4">
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
          <Row className="mb-4">
            <Form.Group as={Col}>
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" />
              <Form.Text>Street Address</Form.Text>
            </Form.Group>
          </Row>
          <Row className="mb-4">
            <Form.Group as={Col}>
              <Form.Control type="text" />
              <Form.Text>Street Address Line 2</Form.Text>
            </Form.Group>
          </Row>
          <Row className="mb-4">
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
          <Row className="mb-4">
            <Form.Group as={Col}>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="(000) 000-0000" />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Home Phone Number</Form.Label>
              <Form.Control type="number" placeholder="(000) 000-0000" />
            </Form.Group>
          </Row>
          <Row className="mb-4">
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
          <Row className="mb-4">
            <Form.Group as={Col}>
              <Form.Label>Please upload your Photo</Form.Label>
              <Card className="">{showCard()}</Card>
            </Form.Group>
          </Row>
        </Form>
      <hr className="m-0" />
      {children}
    </div>
  );
}

export default PersonalInfo;

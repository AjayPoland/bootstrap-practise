import React, { useState } from "react";
import Button from "react-bootstrap/Button";

//styling bootstrap css.
import "bootstrap/dist/css/bootstrap.min.css";
import PersonalInfo from "./PersonalInfo";
import JobInfo from "./JobInfo";
import ContectInfo from "./ContectInfo";

const EmpInfo = () => {
  //const [backBool, setBackBool] = useState(false);
  const [formBool, setFormBool] = useState({ triger1: true, triger2: true });
  //d-flex justify-content-between

  const form1 = () => {
    return (
      <PersonalInfo>
        <div className=" py-3 d-flex justify-content-end">
          <Button
            variant="primary"
            className="px-4"
            onClick={() => {
              nextButton(false,true);
            }}
          >
            Next
          </Button>
        </div>
      </PersonalInfo>
    );
  };

  const form2 = () => {
    return (
      <JobInfo>
        <div className=" py-3 d-flex justify-content-between">
          <Button
            variant="secondary"
            className="px-4"
            onClick={() => backButton(true,true)}
          >
            Back
          </Button>
          <Button
            variant="primary"
            className="px-4"
            onClick={() =>{nextButton(true,false)}}
          >
            Next
          </Button>
        </div>
      </JobInfo>
    );
  };

  const form3 = () => {
    return (
      <ContectInfo>
        <div className=" py-3  d-flex justify-content-between">
          <Button variant="secondary" className="px-4"
          onClick={()=>backButton(false,true)}>
            Back
          </Button>
          <Button
            variant="primary"
            className="px-4"
            onClick={() =>alert("form Submitted")}
          >
            Next
          </Button>
        </div>
      </ContectInfo>
    );
  };
  const nextButton = (arg,arg1) => {
    setFormBool({ triger1: arg,triger2:arg1 });
  };
  const backButton = (arg1,arg) => {
    setFormBool({ triger1: arg1,triger2:arg });
  };
  return (
    <div
      className="container container-sm rounded-3 border border-3 border-info mt-5 mb-5 p-0"
      style={{ width: "60vw" }}
    >

      <h2 className="p-3 fw-bold">Employee Information Form</h2>
      <hr className="m-0" />
      {formBool.triger2 ? (formBool.triger1 ? form1() : form2()) : form3()}
    </div>
  );
};

export default EmpInfo;

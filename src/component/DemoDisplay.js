import React from "react";
//js object
import { Details } from "../json/imageData";
//JSON
import ImagesRecord from "../json/imageRecord.json";

function DemoDisplay() {
  // console.log(JSON.parse(Details));
  //   const detailsimage=JSON.parse(Details)
  console.log(Details);
  return (
    <div className="mt-3 img-thumbnail container text-bg-secondary">
      <h2 className="text-decoration-underline text-start" >:- Displayed using js Array object</h2>
      <div className="container-fluid d-flex justify-content-evenly">
        {Details &&
          Details.map((obj) => (
            <div key={obj.id}>
              <img src={obj.src} height="100px" width="auto" /> <br />
              id: {obj.id}
              <br />
              <h2> Name: &nbsp; {obj.name}</h2>
              <p>Size: {obj.size}</p>
            </div>
          ))}
      </div>
      <h2 className="text-decoration-underline text-start" >:- Displayed using JSON file</h2>
      <div className="container-fluid d-flex justify-content-around">{ImagesRecord && ImagesRecord.map(record=>{return(<div key={record.id} >
        <img className='rounded-5' src={record.src} height="200px" width='auto'/>
        <br/>Name: &nbsp;
        {record.name}
      </div>)})}</div>
    </div>
  );
}

export default DemoDisplay;

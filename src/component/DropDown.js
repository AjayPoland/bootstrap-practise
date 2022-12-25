import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropDown from "react-bootstrap/NavDropDown";

//styling bootstrap css.
import "bootstrap/dist/css/bootstrap.min.css";

function DropDown() {

  const handleEvent=(eventKey)=>alert(`select${eventKey}`);

  return (
    <div className="container text-start">
      <h1 className="text-primary text-decoration-underline fw-bold">
        Navigation-bars. <br /> Navigation-Pills. <br /> Navigation-tabs:-
      </h1>
      <p>All the Imported Components are: Nav, NavDropDown.</p>
      <div className="container-fluid">
        <h2 className="text-secondary">Default view</h2>
        <Nav
          activeKey="/Home"
          onSelect={handleEvent}
        >
          <Nav.Item>
            <Nav.Link href="/Home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Link-1">Link-1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Link-2">Link-2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Disabled" disabled>
              Disabled Link.
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="container-fluid">
        <h2 className="text-secondary">Tabs bar</h2>
        <Nav variant='tabs'  defaultActiveKey="/home" as='ul'onSelect={handleEvent}>
        <Nav.Item as='li'>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link eventKey="Link-1">Link-1</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link eventKey="Link-2">Link-2</Nav.Link>
          </Nav.Item>
          <Nav.Item as='li'>
            <Nav.Link eventKey="Disabled" disabled>
              Disabled Link.
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="container-fluid">
        <h2 className='text-secondary'>Nav pills</h2>
        <Nav variant='pills' defaultActiveKey='0'>
          <Nav.Item>
            <Nav.Link href='#home'eventKey='0'>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#Resources2" eventKey='Link-1'>
              Link-1
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='#About2' eventKey='Link-2'>
              Link-2
            </Nav.Link>
          </Nav.Item>
          <NavDropDown title='More' id='nav-dropdown'>
            <NavDropDown.Item eventKey='3.1' >
              First-Link
            </NavDropDown.Item>
            <NavDropDown.Item eventKey='3.2' >
              Second-Link
            </NavDropDown.Item>
            <NavDropDown.Item eventKey='3.3' >
              Third-Link
            </NavDropDown.Item>
          </NavDropDown>
          <Nav.Item>
            <Nav.Link eventKey='disabled'disabled>
              disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div className="tab-content">
            <div className="container tab-pane active" id="Home2"><strong>Home </strong> <br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid similique, dolor, aperiam quia rerum adipisci architecto mollitia veritatis libero, sed accusamus dolorem. Ullam provident voluptatum, quod hic in sunt. Alias?</div>
            <div className="container tab-pane fade" id="Resources2"><strong>Resources </strong> <br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid similique, dolor, aperiam quia rerum adipisci architecto mollitia veritatis libero, sed accusamus dolorem. Ullam provident voluptatum, quod hic in sunt. Alias?</div>
            <div className="container tab-pane fade" id="About2"><strong>About </strong> <br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid similique, dolor, aperiam quia rerum adipisci architecto mollitia veritatis libero, sed accusamus dolorem. Ullam provident voluptatum, quod hic in sunt. Alias?</div>
          </div>
      </div> 
  );
}

export default DropDown;

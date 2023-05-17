import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import React from "react";
// import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";


const Navigationbar = () => {
    return (
    <Navbar bg="black" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="text-white">K3FILM</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="#action1" className="text-white">Home</Nav.Link>
            <div className='text-white'>
            <NavDropdown title="Genre" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#superhero">Superhero</NavDropdown.Item>
              <NavDropdown.Item href="#anime">
                Anime
              </NavDropdown.Item>
              <NavDropdown.Item href="#horor" >
                Horor
              </NavDropdown.Item>
            </NavDropdown>
            </div>
            
          </Nav>
            {/* <MDBCol md="6">
      <MDBFormInline className="md-form">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
      </MDBFormInline>
    </MDBCol> */}
            <Button variant="outline-danger">Login</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar

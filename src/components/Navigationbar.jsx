// import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../style/landingpage.css";
function NavScrollExample() {
  return (
    <Navbar bg="black" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"  className='text-danger logo'>Kelompok 3</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 "
            style={{ Height: '' }}
            navbarScroll
          >
            <Nav.Link href="/"  className='text-white'>Home</Nav.Link>
            <Nav.Link href="#anime" className='text-white'>Trending</Nav.Link>
            <Nav.Link href="#superhero" className='text-white'>Superhero</Nav.Link>
            <Nav.Link href="#horor" className='text-white'>Horor</Nav.Link>
          </Nav>
          <Form className="d-flex search">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
          <Navbar.Text className='login'>
             <a href="login" className='text-danger'>Login</a>
             {/* <NavLink to="/contact">Login</NavLink> */}
            {/* <Link className='text-danger'>Register</Link> */}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
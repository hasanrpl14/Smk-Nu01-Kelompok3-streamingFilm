import {Navbar, Container, Nav} from "react-bootstrap"

const Navigationbar = () => {
    return (
        <Navbar>
            <Container>
            <Navbar.Brand className="text-white">K3FILMS</Navbar.Brand>
            <Nav>
                <Nav.Link className="text-white">TRENDING</Nav.Link>
                <Nav.Link className="text-white">SUPERHERO</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigationbar
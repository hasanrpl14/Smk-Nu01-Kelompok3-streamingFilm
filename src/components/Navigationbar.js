import {Navbar, Container, Nav} from "react-bootstrap"

const Navigationbar = () => {
    return (
        <Navbar variant="dark">
            <Container>
            <Navbar.Brand href="/">K3FILMS</Navbar.Brand>
            <Nav>
                <Nav.Link href="#trending">TRENDING</Nav.Link>
                <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
                <Nav.Link href="#anime">ANIME</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigationbar
import { Navbar, Container, Nav, ButtonGroup, Button } from "react-bootstrap"

const Navigationbar = () => {
    return (
        <Navbar variant="dark">
            {/* <Container> */}
            {/* <Navbar.Brand className="text-white">K3FILMS
            <Nav>
                <Nav.Link href="#trending">TRENDING</Nav.Link>
                <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
                <Nav.Link href="#anime">ANIME</Nav.Link>
            </Nav>
            </Navbar.Brand> */}
            <Container>
                <Navbar.Brand href="#home">K3FILMS</Navbar.Brand>
                <Nav className="u">
                    <Nav.Link href="#">HOME</Nav.Link>
                    <Nav.Link href="#trending">TRENDING</Nav.Link>
                    <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
                    <Nav.Link href="#anime">ANIME</Nav.Link>
                </Nav>
                {/* </Container> */}
                <div class="input-group rounded w-25 p-3">
                    <input  type="search" class="form-control rounded" className="b text-white border border-white"placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span class="input-group-text border-0" id="search-addon">
                        <i class="fas fa-search"></i>
                    </span>
                </div>
                {/* <button type="button" class="btn btn-outline-danger">
                    <Link href="#anime">Login</Link>
                </button> */}
                <button type="button" class="btn btn-outline-danger" href="#Login.js">
                Login
                </button>
                {/* <Link href="#anime">Login</Link> */}

            </Container>
        </Navbar>
    )
}
export default Navigationbar
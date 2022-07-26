import { Container, Navbar, Nav } from 'react-bootstrap';
import { RiGamepadFill } from 'react-icons/ri'
import { FiSearch } from 'react-icons/fi'

export default function Navigation() {
  return (
    <Container fluid style={{padding: '0'}}>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
        <Navbar.Brand id='logo' href="/Game-App"><RiGamepadFill /> Blak Kontroller</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Game-App">Home</Nav.Link>
            <Nav.Link href="/browse">Browse</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={1} href="/search">
            <FiSearch /> Search
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  )
}

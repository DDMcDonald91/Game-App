import { Container, Navbar, Nav } from 'react-bootstrap';
import { RiGamepadFill } from 'react-icons/ri'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <Container fluid style={{padding: '0'}}>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
        <Navbar.Brand id='logo' href="/Game-App"><RiGamepadFill /> Blak Kontroller</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/Game-App">Home</Link>
            <Link to="/browse">Browse</Link>
          </Nav>
          <Nav>
            <Link eventKey={1} to="/search">
            <FiSearch /> Search
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  )
}

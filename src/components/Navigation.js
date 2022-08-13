import { Container, Navbar, Nav } from 'react-bootstrap';
import { RiGamepadFill } from 'react-icons/ri'
import { FiSearch } from 'react-icons/fi'
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <Container fluid style={{padding: '0'}}>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
        <Navbar.Brand id='logo' href="/"><RiGamepadFill /> Blak Kontroller</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" style={{color: 'white', padding: '0 5px'}}>Home</NavLink>
            <NavLink to="/about" style={{color: 'white', padding: '0 5px'}}>About</NavLink>
            <NavLink to="/browse" style={{color: 'white', padding: '0 5px'}}>Browse</NavLink>
          </Nav>
          <Nav>
            <NavLink style={{color: 'white', padding: '0 5px'}} eventKey={1} to="/search">
            <FiSearch /> Search
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  )
}

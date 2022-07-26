import { Container, Navbar, Nav } from 'react-bootstrap';
import { RiGamepadFill } from 'react-icons/ri'
import { FiSearch } from 'react-icons/fi'
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <Container fluid style={{padding: '0'}}>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
        <Navbar.Brand id='logo' href="/Game-App"><RiGamepadFill /> Blak Kontroller</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/Game-App" className='nav-item' style={{color: 'white'}}>Home</NavLink>
            <NavLink to="browse" className='nav-item' style={{color: 'white'}}>Browse</NavLink>
          </Nav>
          <Nav>
            <NavLink eventKey={1} to="/search">
            <FiSearch /> Search
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  )
}

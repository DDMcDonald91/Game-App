import { useEffect, useState } from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Header from '../components/Header';
import GameList from '../components/GameList';
import Footer from '../components/Footer';

export default function Browse() {
    const [genre, setGenre] = useState(null)

    useEffect(() => {
        console.log(genre)
    }, [genre])

        return (
            <>
            <Header 
                heading={'Browse from hundreds of games.'} 
                subHeading={'Hundreds free pc games are now at your disposal. Scroll through our database below or check out our search page to find a specific game.'} 
                hidden={'d-none'} 
                />
            <Container style={{minHeight: '70vh'}}>
            <h2>Choose a category</h2> 
            <Navbar collapseOnSelect  expand="md">
                <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav variant="pills" defaultActiveKey="/home">
                            <Nav.Item>
                                <Nav.Link bg='dark' onClick={(e) => {setGenre('mmorpg')}} eventKey="link-0">MMORPG</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={(e) => {setGenre('shooter')}} eventKey="link-1">Shooter</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={(e) => {setGenre('strategy')}} eventKey="link-2">Strategy</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={(e) => {setGenre('survival')}} eventKey="link-3">Survival</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={(e) => {setGenre('anime')}} eventKey="link-4">Anime</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={(e) => {setGenre('action')}} eventKey="link-5">Action</Nav.Link>
                            </Nav.Item>
                            <NavDropdown title="View All Categories" id="nav-dropdown">
                                <NavDropdown.Item onClick={(e) => {setGenre('racing')}} eventKey="4.1">Racing</NavDropdown.Item>
                                <NavDropdown.Item onClick={(e) => {setGenre('open-world')}} eventKey="4.2">Open-World</NavDropdown.Item>
                                <NavDropdown.Item onClick={(e) => {setGenre('mmotps')}} eventKey="4.3">MMOPTS</NavDropdown.Item>
                                <NavDropdown.Item onClick={(e) => {setGenre('fighting')}}  eventKey="4.4">Fighting</NavDropdown.Item>
                                <NavDropdown.Item onClick={(e) => {setGenre('zombie')}}  eventKey="4.5">Zombie</NavDropdown.Item>
                                <NavDropdown.Item onClick={(e) => {setGenre('fantasy')}}  eventKey="4.6">Fantasy</NavDropdown.Item>
                                <NavDropdown.Item onClick={(e) => {setGenre('card')}}  eventKey="4.7">Card</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
                {!genre ? 
                    <>
                    </> : 
                    <>
                        <GameList category={genre} />
                    </>    
                }
            </Container>
            <Footer />
            </>
        )
    }


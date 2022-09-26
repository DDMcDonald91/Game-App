import { Container, Row, Col, Image } from 'react-bootstrap'
import  about  from '../components/images/about.png'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
    <Header 
        heading={'About Blak Kontroller'} 
        subHeading={'The best website to find and play free pc games online. With a passion to create and build innovating resources for us all to enjoy, we strive to provide the best online tool for gamers to find the best pc games.'} 
        hidden={'d-none'} />
    <Container style={{minHeight: '70vh'}}>
        <Container fluid className='p-0'>
            <Row>
                <Col sm={12} md={7} className='d-flex align-items-center justify-content-center'>
                    <Container>
                    <h2 className='section-title sub-title'>The game store where its all FREE!</h2>
                    <p>We work hard to provide some of the best free online games in one place. We are building out membership profiles with merch, perks, and more all comining soon! We here at Blak Kontoller hope gamers find their next favorite game using our tools!</p>
                    </Container>
                </Col>
                <Col sm={12} md={5} className='p-0'>
                    <Image src={about} className='img-fluid' />
                </Col>
            </Row>
        </Container>
        <Container>
            <h2 className='section-title sub-title'>Who are we?</h2>
        </Container>
        <Container>
            <p>
            We are BlaK Kontroller, a website tool that helps gamers search and find free pc games online. You can search from hundreds of different games and find all the best online games. With different genre such as Free-to-Play Multiplayer Games and MMO Games, you're sure to find great online games to play with friends. We're hard at work building out new features such as the ability to maintain your own games library, track what you've played and search for what to play next! Enjoy the best place to find and play free games online.
            </p>
        </Container>
    </Container>
    <Footer />
    </>
  )
}

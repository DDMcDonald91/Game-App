import { Container, Row, Col, Image } from 'react-bootstrap'
import  about  from '../components/images/about.png'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <>
    <Header 
        heading={'About Blakkontroller'} 
        subHeading={'Dedicated to building the best environment for gamers to find Free-to-Play video games online. With a passion to create and build innovating resources for us all to enjoy, we strive to provide our best.'} 
        hidden={'d-none'} />
    <Container style={{minHeight: '70vh'}}>
        <Container fluid className='p-0'>
            <Row>
                <Col sm={12} md={7} className='d-flex align-items-center justify-content-center'>
                    <Container>
                    <h2 className='section-title sub-title'>The game store where its all free!</h2>
                    <p>All free games with membership, merch, perks, and more all comining soon.</p>
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
            We are Blakkontroller, a new gaming platform that brings all the best Free-to-Play Multiplayer Games and MMO Games into one place. We're hard at work building out new features such as the ability to maintain your own games library, track what you've played and search for what to play next! Enjoy the best place to find and play free games online.
            </p>
        </Container>
    </Container>
    <Footer />
    </>
  )
}

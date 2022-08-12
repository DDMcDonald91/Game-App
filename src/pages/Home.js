import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineRobot } from 'react-icons/ai'
import Header from '../components/Header';
import GameCard from '../components/GameCard';
import GameRow from '../components/GameRow';
import Loading from '../components/Loading';
import Footer from '../components/Footer';

export default function Home() {
    const [data, setData] = useState(null);
    const [newGames, setNewGames] = useState(null);

    const url = {
        method: 'GET',
        url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
        headers: {
          'X-RapidAPI-Key': '61254c1e4cmshcc74a38697e3b87p12bb76jsn4854c036d859',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
    
    //Get games on load
    useEffect(() => {
        axios.request(url).then((res) => {setData(res.data)});
        console.log('this worked')
    }, [!data])

    setTimeout(() => {setNewGames(data.filter(obj => {return obj.release_date.includes('2022')}))}, 1000)

    if(!data, !newGames) {
       return ( <Loading /> )
    } else {
        return (
            <>
            <Header heading={'The best resource to play free games online'} subHeading={'Get started below.'} />
            <Container id='about-container'>
                <Container id='hero-text-container'>
                    <h1 className='section-title sub-title'><AiOutlineRobot />Hundreds of games to play from</h1>
                    <p>Check out some of our top recommendations.</p>
                </Container>
                <Container>
                    <Row>
                        <Col><Link to={`/${data[0].title}`}><GameCard img={data[0].thumbnail} title={data[0].title} /></Link></Col>
                        <Col><Link to={`/${data[352].title}`}><GameCard img={data[352].thumbnail} title={data[352].title} /></Link></Col>
                        <Col><Link to={`/${data[238].title}`}><GameCard img={data[238].thumbnail} title={data[238].title} /></Link></Col>
                        <Col className='d-none d-md-block'><Link to={`/${data[70].title}`}><GameCard img={data[70].thumbnail} title={data[70].title} /></Link></Col>
                        <Col className='d-none d-md-block'><Link to={`/${data[54].title}`}><GameCard img={data[54].thumbnail} title={data[54].title} /></Link></Col>
                    </Row>
                </Container>
                <Container fluid id='new-container'>
                    <Container>
                        <h2 className='section-title sub-title'>Recently Added</h2>
                    </Container>
                    {newGames.map((obj => {
                        return (
                            <Container style={{padding: '0px'}} fluid key={obj.id}>
                            <Link to={`/${obj.title}`}><GameRow img={obj.thumbnail} title={obj.title} description={obj.short_description} /></Link>
                            </Container>
                        )
                    }))}
                </Container>
            </Container>
            <Footer />
            </>
        )
    }
}

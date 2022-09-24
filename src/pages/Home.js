import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineRobot } from 'react-icons/ai'
import Header from '../components/Header';
import GameCard from '../components/GameCard';
import GameRow from '../components/GameRow';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import PurpleAdsCard from '../components/PurpleAdsCard'

export default function Home() {
    const [data, setData] = useState(null);
    const [newGames, setNewGames] = useState(null);
    const [suggestedGames, setSuggestedGames] = useState(null);

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
    setTimeout(() => {setSuggestedGames(data.filter(obj => {return obj.genre.includes('Shooter')}))}, 1000)

    if(!data, !newGames) {
       return ( <Loading /> )
    } else {
        return (
            <>
            <Header 
                heading={'The best resource to play free games online'} 
                subHeading={"Get started below with our catalog filled with HUNDREDS of games to choose from! With a variety of different categories, you're sure to find something to play and enjoy. The best part? Its all free!"} 
                />
            <Container id='about-container'>
                <Container id='hero-text-container'>
                    <h1 className='section-title sub-title'><AiOutlineRobot />Hundreds of games to play from.</h1>
                    <p>Check out some of our top played games.</p>
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
                        <p>Here are some recently added games to our catalog. Maybe one of these are your new favorite.</p>
                    </Container>
                    {newGames.map((obj => {
                        return (
                            <Container style={{padding: '0px'}} fluid key={obj.id}>
                            <Link to={`/${obj.title}`}><GameRow img={obj.thumbnail} title={obj.title} description={obj.short_description} /></Link>
                            </Container>
                        )
                    }))}
                </Container>

                <Container fluid id='recommendations-container'>
                    <Container fluid>
                        <h2 className='section-title sub-title'>Recommendations</h2>
                        <p>Here are some of our personal game recommendations. We hope you like these as much as we do!</p>
                    </Container>
                    <Container fluid className='p-0'>
                        <Row>
                             <Col sm={12} md={9}>
                                <Container fluid className='p-0'>
                                <Container fluid>
                                    <h4 className='section-title sub-title'>Our Suggestions</h4>
                                </Container>
                                <Stack>
                                {suggestedGames.slice(1, 7).map((obj) => {
                                    return (
                                        <Container style={{padding: '0px'}} fluid key={obj.id}>
                                        <Link to={`/${obj.title}`}><GameRow img={obj.thumbnail} title={obj.title} description={obj.short_description} /></Link>
                                        </Container>
                                    )
                                })}
                                </Stack>
                                </Container>
                            </Col>
                            <Col sm={12} md={3}>
                            <Container fluid className='p-0'>
                                <Container fluid className='p-0'>
                                    <h4 className='section-title sub-title'>Played Today</h4>
                                </Container>
                                <Stack>
                                    <Col><Link to={`/${data[38].title}`}><GameCard img={data[38].thumbnail} title={data[38].title} /></Link></Col>
                                    <Col><Link to={`/${data[138].title}`}><GameCard img={data[138].thumbnail} title={data[138].title} /></Link></Col>
                                    <Col><Link to={`/${data[220].title}`}><GameCard img={data[220].thumbnail} title={data[220].title} /></Link></Col>
                                    <Col><PurpleAdsCard /></Col>
                                </Stack>
                            </Container>
                            </Col>
                        </Row>

                    </Container>
                </Container>
            </Container>
            <Footer />
            </>
        )
    }
}

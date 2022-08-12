import { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import Loading from '../components/Loading';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Game(props) {
  const [data, setData] = useState(null)
  const { name } = useParams();


  const url = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    headers: {
      'X-RapidAPI-Key': '61254c1e4cmshcc74a38697e3b87p12bb76jsn4854c036d859',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };

//Get game info on load
useEffect(() => {
    axios.request(url).then((res) => {setData(res.data)});
    console.log(data);
}, [!data])

if(!data) {
  return (
    <Loading />
    )  
}

console.log(props.name)
let filtered = data.find(obj => {return obj.title === name});
console.log(filtered)

  return (
    <>
    <Header heading={filtered.title} subHeading={`Released: ${filtered.release_date}`} hidden={'d-none'} />
    <Container style={{minHeight: '70vh'}}>
      <Row>
        <Col md={12} lg={5} className="d-flex justify-content-center">
          <Image src={filtered.thumbnail} className='img-fluid' style={{borderRadius: '5px'}} />
        </Col>
        <Col md={12} lg={7}>
          <h3 className='section-title'>{filtered.title}</h3>
          <Row style={{fontSize: '14px'}}>
            <Col><h6 style={{textDecoration: 'underline'}}>Developer:</h6> <p>{filtered.developer}</p></Col>
            <Col><h6 style={{textDecoration: 'underline'}}>Genre:</h6> <p>{filtered.genre}</p></Col>
            <Col><h6 style={{textDecoration: 'underline'}}>Platform:</h6> <p>{filtered.platform}</p></Col>
          </Row>
          <Container fluid>
            <p>{filtered.short_description}</p>
          </Container>
          <a href={filtered.game_url} target='_blank' rel="noreferrer"><Button variant="outline-dark">Play Now!</Button></a>
        </Col>
      </Row>
    </Container>
    <Footer />
    </>
  )
}

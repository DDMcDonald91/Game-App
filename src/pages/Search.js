import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Form, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {FiSearch} from 'react-icons/fi'
import GameCard from '../components/GameCard';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Footer from '../components/Footer';

export default function Search() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState()

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
        console.log(data);
    }, [!data])

    //Search function
    useEffect(() => {
      if (!search) {
        setSearch()
      }
    })
    
    const onChange = (e) => {
      setSearch(e.target.value.charAt(0).toUpperCase()+ e.target.value.slice(1))
    }

    let toSearch = search
    let result = data.filter(obj => {return obj.title.includes(toSearch)})
    if(!data) {
        return (
            <Loading />
        )
    }

  return (
    <>
    <Header 
      heading={'Find specific games from our catalog.'} 
      subHeading={'Use the interactive search bar below to search for a specific game. Type the name in below and watch the options show up.'} 
      hidden={'d-none'} 
      />
    <Container style={{minHeight: '80vh'}}>
      <h2><FiSearch /> Find Games</h2>
      <hr/>
      <Container>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              controlId="gameForm"
              id='search' 
              type="text" 
              placeholder="Enter game"
              onChange={onChange}
              />
            <Form.Text className="text-muted">
              Hundreds of games to search and choose from. All free.
            </Form.Text>
          </Form.Group>
        </Form>
      </Container>

      <Container>
        <Row>
          {result.map(obj => {
            return (
              <Col xs={12} sm={6} md={4}>
                  <Container key={obj.id}>
                    <Link to={`/${obj.title}`}><GameCard title={obj.title} img={obj.thumbnail} /></Link>
                  </Container>
              </Col>
            )
        })}
        </Row>
    </Container>
    </Container>
    <Footer />
    </>
  )
}

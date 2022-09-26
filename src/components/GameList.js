import { useState, useEffect } from 'react';
import axios from 'axios';
import GameRow from './GameRow';
import { Container, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Loading from './Loading'

export default function GameList(props) {
    const [data, setData] = useState(null);

    const url = {
        method: 'GET',
        url: `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${props.category}`,
        headers: {
          'X-RapidAPI-Key': '61254c1e4cmshcc74a38697e3b87p12bb76jsn4854c036d859',
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
    
    //Get games on load
    useEffect(() => {
        axios.request(url).then((res) => {setData(res.data)});
        console.log('this worked')
    }, [!data, props.category])

    if(!data) {
        return (
            <Container>
                <Spinner animation="grow" />;
            </Container>
        )
    } else {
        return (
            <Container fluid className='p-0'>
                {data.map((obj => {
                    return (
                        <Container fluid key={obj.id}>
                            <Link to={`/${obj.title}`}><GameRow key={obj.id} img={obj.thumbnail} title={obj.title} description={obj.short_description} /></Link>
                        </Container>
                        )
                    }))}
            </Container>
          )
    }
}

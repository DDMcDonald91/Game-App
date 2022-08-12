import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Header from '../components/Header';
import GameRow from '../components/GameRow';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import Footer from '../components/Footer';

export default function Browse() {
    const [data, setData] = useState(null);

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

    if(!data) {
        return ( <Loading /> )
     } else {
        return (
            <>
            <Header heading={'Browse from hundreds of games.'} subHeading={'Hundreds of Browser and PC games'} hidden={'d-none'} />
            <Container>
                {data.map((obj => {
                        return (
                            <Container fluid key={obj.id}>
                            <Link to={`/${obj.title}`}><GameRow key={obj.id} img={obj.thumbnail} title={obj.title} description={obj.short_description} /></Link>
                            </Container>
                        )
                    }))}
            </Container>
            <Footer />
            </>
        )
    }
}

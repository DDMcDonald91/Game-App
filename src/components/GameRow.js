import { Container, Row, Col, Card} from 'react-bootstrap';

export default function GameRow(props) {
  return (
    <Container>
        <Card style={{height: 'auto', padding: '5px', margin: '7.5px 0'}}>
            <Row>
                <Col sm={6} md={6} lg={4}>
                <Card.Img src={props.img} className='img-fluid' style={{borderRadius: '5px', margin: 'auto auto'}} />
                </Col>
                <Col sm={6} md={6} lg={8}>
                <h3 className='game-row-text section-title'>{props.title}</h3>
                <hr/>
                <p className='game-row-text'>{props.description}</p>
                </Col>
            </Row>
        </Card>
    </Container>
  )
}

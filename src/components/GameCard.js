import { Card } from 'react-bootstrap'

export default function GameCard(props) {
  return (
    <Card style={{ maxWidth: '20rem', margin: '7.5px auto' }}>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
    </Card.Body>
  </Card>
  )
}

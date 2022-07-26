import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <Container id='heading' fluid>
      <Container style={{paddingTop: '5rem'}}>
        <h1 className='section-title header-title'>{props.heading}</h1>
        <p>{props.subHeading}</p>
        <Link to='/Game-App/browse'><Button className={props.hidden}>Browse All Games</Button></Link>
      </Container>
    </Container>
  )
}

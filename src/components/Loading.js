import { Container, Spinner } from 'react-bootstrap'
import Header from './Header'

export default function Loading() {
  return (
    <>
    <Header heading={'Loading...'} subHeading={'Please wait'} hidden={'d-none'} />
    <Container>
        <Spinner animation="grow" />;
    </Container>
    </>
  )
}

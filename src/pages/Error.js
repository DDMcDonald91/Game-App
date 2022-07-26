import { Container } from 'react-bootstrap'
import Header from '../components/Header'

export default function Error() {
  return (
    <>
    <Header heading={"404 Error"} subHeading={"Seems to be an error. Head back to the home page"} hidden={'d-none'} />
    <Container>Sorry...</Container>
    </>
  )
}

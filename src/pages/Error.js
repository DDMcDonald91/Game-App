import { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'

export default function Error() {

  if(!data) {
    return (
      <>
      <Header heading={"404 Error"} subHeading={"Seems to be an error. Head back to the home page"} hidden={'d-none'} />
      <Container>Sorry...</Container>
      </>
    )
  }

}

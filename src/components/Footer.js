import { Container } from 'react-bootstrap'

export default function Footer() {
  return (
    <Container id='footer' fluid>
        <p style={{color: 'white', paddingTop: '6rem'}} className="text-center mt-4 mb-4">Designed & Created by DMDesigns.</p>
        <p style={{color: 'white', fontSize: '.9rem'}} className="text-center mt-4 mb-4">© 2022 DMDesigns, all rights reserved. All trademarks are property of their respective owners.</p> 
    </Container>
  )
}

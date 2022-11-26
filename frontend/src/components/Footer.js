import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>Produced/Developed by GM26</Col>
          <Col className='text-center py-3'> Copyright (c) 2022 Papaioannou Marmbles</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

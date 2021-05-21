import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'> Supporting WATER <span role='img'>🌊</span> for Kandivaram(Kandiyur)</Col>
          <Col className='text-center py-3'> Copyright (c) 2020 Traversy Media </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

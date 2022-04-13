import React from 'react'
import { Card, Button, Image } from 'react-bootstrap'

export default function Home() {
    return (
      <>
      <h1 className='App'>Benvenuto</h1>
      <Card className="text-center bg">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>CRUD REACT</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">Sophie Fitone. &copy;</Card.Footer>
      </Card>
      </>
    )  
}

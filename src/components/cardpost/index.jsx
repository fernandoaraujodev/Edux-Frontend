import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './index.css';

const CardPost = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Usuario 1</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis corporis, illo dolorum inventore velit ex? Excepturi sunt quas fugit quo quae aperiam delectus ipsa aut! Itaque aspernatur neque doloribus!
                </Card.Text>
                <Card.Img variant="top" src="https://www.incimages.com/uploaded_files/image/1920x1080/GettyImages-1216515595_449069.jpg" />
                <Button className="TL-btn" variant="primary">Curtir</Button>
            </Card.Body>
        </Card>
    )
}

export default CardPost
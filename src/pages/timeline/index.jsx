import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import './index.css';

const Timeline = () => {
    return(
        <div>
            <Menu />
            <div style={{'backgroundImage' : 'url(https://blog.topenglish.com.br/wp-content/uploads/2017/03/como-potencializar-seu-aprendizado-em-ingles-descubra-aqui.jpeg)', 'paddingTop' : '60px', 'paddingBottom' : '60px'}}>

                <Container style={{'backgroundColor' : '#f8f9fa', 'paddingBottom' : '70px'}} >
                <div className="text-center"  >
                <h1>Timeline</h1>
                <p>Curta com seus colegas de turma</p>
                </div>
                <Card>
                    <Card.Body>
                        <Card.Title>Usuario 1</Card.Title>
                        <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perferendis corporis, illo dolorum inventore velit ex? Excepturi sunt quas fugit quo quae aperiam delectus ipsa aut! Itaque aspernatur neque doloribus!
                        </Card.Text>
                        <Card.Img variant="top" src="https://www.incimages.com/uploaded_files/image/1920x1080/GettyImages-1216515595_449069.jpg" />
                        <Button variant="primary">Curtir</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                        <Card.Title>Usuario 1</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/spacex-founder-elon-musk-addresses-the-media-during-a-press-news-photo-1585058537.jpg" />
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Container>

            </div>
            <Rodape />
        </div>
    )
}

export default Timeline
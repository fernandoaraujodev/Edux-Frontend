import { Form, Button, Container } from 'react-bootstrap';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import './index.css';
//import { Jumbotron } from 'react-bootstrap';

const CriarPost = () => {
    return(
        <div>
            <Menu />
            <div className="CPbackground" >
                <Container style={{'backgroundColor' : '#f8f9fa', 'paddingBottom' : '50px', 'paddingTop' : '30px'}} >
                <Form className='form-signin' >
                        <h2>USUARIO 1</h2>
                        <Form.Group controlId='formBasicText' >
                            <Form.Control type='texto' placeholder='O que voce esta pensando?' required ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formBasicFile' >
                            <Form.Label>Imagem</Form.Label>
                            <Form.Control type='file'  required ></Form.Control>
                        </Form.Group>
                        <Button variant='success' type='submit' style={{marginBottom : '10px', 'fontFamily' : '123Sketch'}}>Publicar</Button>
                        <br/>
                    </Form>
                </Container>
            </div>
            <Rodape />
        </div>
    )
}

export default CriarPost
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";


import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import CardPost from '../../components/cardpost';
import './index.css';

const Timeline = () => {

    const history = useHistory();

    const criarpost = (event) => {
        event.preventDefault();

        history.push('/criarpost');
    }
    
    return(
        <div>
            <Menu />
            <div className="TLbackground" style={{'backgroundImage' : 'url(https://blog.topenglish.com.br/wp-content/uploads/2017/03/como-potencializar-seu-aprendizado-em-ingles-descubra-aqui.jpeg)', 'paddingTop' : '60px', 'paddingBottom' : '60px'}}>
                <div className="btnCriarPost">
                <Button variant="primary" onClick={event => criarpost(event)} >Criar Post</Button>
                </div>

                <Container style={{'backgroundColor' : '#f8f9fa', 'paddingBottom' : '70px'}} >

                <div className="text-center"  >
                <h1>Timeline</h1>
                <p>Curta com seus colegas de turma</p>
                </div>

                <CardPost />
                <CardPost />
                <CardPost />
                
                </Container>
            </div>
            <Rodape />
        </div>
    )
}

export default Timeline
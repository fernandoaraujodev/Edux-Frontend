import React from 'react';
import { Container } from 'react-bootstrap';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import './index.css';
//import { Jumbotron } from 'react-bootstrap';

const NaoEncontrada = () => {
    return(
        <div>
            <Menu />
            <div className="conteiner">
                <div className="text-center">
                <h1>Pagina nao encontrada</h1>
                <p>Por favor entre em contato com nosso<a href="https://github.com/fernandoaraujodev/Edux-Frontend">Squad</a></p>
                </div>
            </div>
            
            <Rodape />
        </div>
    )
}

export default NaoEncontrada
import React, { useState } from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import {Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/img/logo_2.png';
import './index.css';
import { useHistory } from "react-router-dom"

const Cadastro = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');

    const cadastro = (event) => {
        event.preventDefault();
                fetch('http://localhost:56515/api/Usuario',{
            method : 'POST',
            body : JSON.stringify({
                Email : email,
                Nome : nome,
                Senha : senha,
				IdPerfil : 1
				
            }),
            headers : {
                'content-type' : 'application/json'
            }
        })
          .then(response => response.json)
          .then(dado => {
            alert("Salvo com sucesso");
            
          })
          .catch(err => console.error(err));
    }
 
        return (
	    <div className="Cadastrar">
	            <Menu />
				<div className="conteiner" >
				<Container className='form-height'>
				<Form className='form-signup'>
				  <div className='text-center'>
                            <img alt="EDUX" src={logo} style={{ width : '194px' }}/>
                        </div>
  <p>Informe os dados abaixo</p>
                          <br/>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>E-mail</Form.Label>
    <Form.Control type="email" onChange={ event => setEmail(event.target.value)} placeholder="Insira seu email" />
  </Form.Group>
    <Form.Group controlId="formBasicEmail">
    <Form.Label>Nome </Form.Label>
    <Form.Control type="text" onChange={ event => setNome(event.target.value)} placeholder="Nome Completo" required />
    </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Senha</Form.Label>
    <Form.Control type="password" onChange={ event => setSenha(event.target.value)} placeholder="Senha" />
    <Form.Text className="text-muted">
      Não compartilhe sua senha com ninguem.
    </Form.Text>
  </Form.Group>
  <Button variant="success" onClick={ event => cadastro(event)} type="submit" style={{marginBottom : '10px', 'fontFamily' : '123Sketch'}}>
    Cadastrar
  </Button>
                          <br/>
</Form>
                </Container>
				            </div>
            <Rodape />
</div>
    )
}

export default Cadastro
import React, { useState } from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Component } from 'react';
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
    <div>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Endereço de E-mail</Form.Label>
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
  <Button variant="primary" onClick={ event => cadastro(event)} type="submit">
    Cadastrar
  </Button>
</Form>
</div>
    )
}

export default Cadastro
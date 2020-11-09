import React, { useState }  from 'react';
import { useHistory } from "react-router-dom";
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import {Container, Form, Button} from 'react-bootstrap';
import logo from '../../assets/img/logo_2.png';
import jwt_decode from 'jwt-decode';
import './index.css';



const Login = () => {

    const history = useHistory();

    //Usando Hooks
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = (event) => {
        event.preventDefault();
        
        fetch('http://localhost:56515/api/Login', {
            method : 'POST',
            body : JSON.stringify({
                email : email,
                senha : senha
            }),
            headers :{
                'content-type' : 'application/json'
            }
        })
        .then(response => {

            if(response.ok){
                return response.json();

            }else{
                alert('dados inválidos');
            }
        })
        .then( data => {
            
            localStorage.setItem('token-edux', data.token);

            let usuario = jwt_decode(data.token);

            //1 = Administrador | 2 = Professor | 3 = Aluno
            if(usuario.Role = "2"){
                history.push('/home');
            }
            else{
                history.push('/');
            }
            
        })
        .catch(err => console.error(err));
    }

    return (
        <div className="Login">
            <Menu />
            <div className="conteiner" >
                <Container className='form-height'>
                    <Form className='form-signin' onSubmit={event => logar(event)} >
                        <div className='text-center'>
                            <img alt="EDUX" src={logo} style={{ width : '194px' }}/>
                        </div>
                        <br/>
                        <p>Informe os dados abaixo</p>
                        <hr/>
                        <Form.Group controlId='formBasicEmail' >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' value={email} onChange={ event => setEmail(event.target.value)} placeholder='Digite o seu email' required ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='formBasicPassword' >
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type='password' value={senha} onChange={ event => setSenha(event.target.value)} placeholder='Digite a sua senha' required ></Form.Control>
                        </Form.Group>
                        <Button variant='success' type='submit' style={{marginBottom : '10px', 'fontFamily' : '123Sketch'}}>Entrar</Button>
                        <br/>
                        <a href="/cadastrar" >Nao tenho uma conta!</a>
                    </Form>
                </Container>
            </div>
            <Rodape />
        </div>
    )
}

export default Login
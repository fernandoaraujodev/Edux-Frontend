import React from 'react';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import logo from '../../assets/img/logo_2.png';
import './index.css';

const Menu = () => {

    const history = useHistory();

    //Deslogar do usuario
    const sair = (event) => {
        event.preventDefault();

        localStorage.removeItem('token-edux');

        history.push('/');
    }

    const renderMenu = () => {

        let token = localStorage.getItem('token-edux');

        
        //Condições para renderizar o menu de acordo com a role do usuario
        //Usuario NÃO LOGADO
        if(token === null){
            return (
                <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/cadastrar">Cadastrar</Nav.Link>
                </Nav>
            );
        } 
                //Usuario PROFESSOR
                else if(jwt_decode(token).role === 'Professor'){
                    return (
                        <Nav>
                        <Nav.Link href="/eventos">Professor</Nav.Link>
                        <NavDropdown title={jwt_decode(token).nameid} id="basic-nav-dropdown">
                            <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={ event => sair(event)}>Sair</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                )
            }
            //Usuario ADMINISTRADOR
            else if(jwt_decode(token).role === 'Administrador'){
                return (
                    <Nav>
                        <Nav.Link href="/admin/dashboard">Admin</Nav.Link>
                        <Nav.Link href="/admin/eventos">Admin</Nav.Link>
                        <Nav.Link href="/admin/categorias">Admin</Nav.Link>
                        <NavDropdown title={jwt_decode(token).nameid} id="basic-nav-dropdown">
                            <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={ event => sair(event)}>Sair</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                )
            }
            //Usuario ALUNO
            else{
                return(
                    <Nav>
                        <Nav.Link href="/eventos">Aluno</Nav.Link>
                        <NavDropdown title={jwt_decode(token).nameid} id="basic-nav-dropdown">
                            <NavDropdown.Item href="/perfil">Perfil</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={ event => sair(event)}>Sair</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                )
            }
        
        
    }

    return(
        <div className="menu">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar">
                <Container>
                    <Navbar.Brand href="/home">
                    <img src={logo} style={{width : '5rem'}} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav>

                        { renderMenu() }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu;
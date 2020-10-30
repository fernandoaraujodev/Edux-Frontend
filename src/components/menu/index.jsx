import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/img/logo_2.png';
import './index.css';

const Menu = () => {

    return(
        
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="navbar">
            <Navbar.Brand href="/">
            <img src={logo} style={{width : '5rem', marginLeft : '80px'}} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav>
                <Nav >
                    <Nav.Link href='/login'>Login</Nav.Link> 
                    <Nav.Link href='/cadastrar' style={{ marginRight : '80px'}}>Cadastrar</Nav.Link> 
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu;
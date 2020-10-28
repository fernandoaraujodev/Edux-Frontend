import React from 'react';
import logo2 from '../../assets/img/logo_2.png';

const Rodape = () => {
    return (
        <footer className="text-center" style={{ marginTop : '55px'}}>
                <img src={logo2} style={{width : '100px'}} />
                <small>Desenvolvido pelo <a href="https://github.com/fernandoaraujodev/Edux-Frontend">Squad</a></small>
        </footer>
    )
}

export default Rodape;

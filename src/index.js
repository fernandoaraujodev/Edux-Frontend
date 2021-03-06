import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//import * as serviceWorker from './serviceWorker';

//pages
import NaoEncontrada from './pages/naoencontrada';
import Login from './pages/login';
import Timeline from './pages/timeline';
import Cadastro from './pages/cadastrar';
//import Turma from './pages/turma';
import Home from './pages/home';


const routing = (
  <Router>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/timeline" component={Timeline} />
      <Route path="/cadastrar" component={Cadastro} />
      <Route path="/home" component={Home} />
      <Route component={NaoEncontrada} />
    </Switch>
  </Router>
)

ReactDOM.render(
    routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

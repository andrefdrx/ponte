import React, { Component } from 'react';
import './Navbarex.css'
import logomenu from '../img/logomenu.png';
import { Link } from 'react-router-dom';

{/*

            
*/}

class Navbar extends Component {
  state={clicked: false};
  handleClick = () =>{
    this.setState({clicked:!this.state.clicked})
  }
  render() {
    return (
      <nav>
        <a><img src={logomenu} alt='menu' />  </a>

        <div>
          <ul id='navitem' className={this.state.clicked ? "#navitem active" : "#navitem"}>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/cadastrar">Cadastrar</Link></li>
            <li><Link to="/info">Termos de uso</Link></li>
            <li><Link to="/info">Sobre</Link></li>
          </ul>
        </div>

        <div id='mobile' onClick={this.handleClick}>
          <i
            id='bar'
            className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}
          ></i>
        </div>

      </nav>
    );
  }  
};

export default Navbar
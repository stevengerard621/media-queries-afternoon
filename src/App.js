import React, {Component} from 'react';
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
library.add(faBars);

class App extends Component {
  constructor (){
    super();
    this.state = {
      toggleMenu: false
    }
  }

  handleToggle = () => {
    this.setState({
      toggleMenu: !this.state.toggleMenu
    })
  }
  
  render(){
  return (
    <div className="App">
      {!this.state.toggleMenu     
    ? (<header id='header'>
        <a className="boot">Start Bootstrap</a>
        <nav id='nav'>
          <button className="nav-links">SERVICES</button>
          <button className="nav-links">PORTFOLIO</button>
          <button className="nav-links">ABOUT</button>
          <button className="nav-links">TEAM</button>
          <button className="nav-links">CONTACT</button>
        </nav>
        <button id='ham-button' onClick={this.handleToggle}>MENU
          <FontAwesomeIcon icon="bars" id='hamburger'/>
        </button>
      </header>)
      : (
        <>
        <header id='header'>
        <a className="boot">Start Bootstrap</a>
        <nav id='nav'>
          <button className="nav-links">SERVICES</button>
          <button className="nav-links">PORTFOLIO</button>
          <button className="nav-links">ABOUT</button>
          <button className="nav-links">TEAM</button>
          <button className="nav-links">CONTACT</button>
        </nav>
        <button id='ham-button' onClick={this.handleToggle}>MENU
          <FontAwesomeIcon icon="bars" id='hamburger'/>
        </button>
      </header>
      <nav id='side-menu'>
              <a className='drop-link'>SERVICES</a>
              <a className='drop-link'>PORTFOLIO</a>
              <a className='drop-link'>ABOUT</a>
              <a className='drop-link'>TEAM</a>
              <a className='drop-link'>CONTACT</a>
            </nav>
      </>)}
      <div id='container-div'>
        <div id='center-text'>
          <div id='welcome'>Welcome To Our Studio!</div>
          <div id='nice'><strong>IT'S NICE TO MEET YOU</strong></div>
          <button id='button'>TELL ME MORE</button>
        </div>
      </div>
    </div>
  );
}
}

export default App;

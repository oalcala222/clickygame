import React from 'react';
import Nav from './components/nav/nav';
import Header from './components/header/header';
import Main from './components/main/main';
import './App.css';


function App(props) {
 return (
      <div className= "container-fluid">
        <Nav>The Simpsons Clicky Game</Nav>
        <Header />
        <Main />
      </div>
    );
  }


export default App;

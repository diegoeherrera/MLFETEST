import React, { Component } from 'react';
import logo from './logo.svg';
import NavBarSearch from './components/NavbarSearch'
require( './App.scss');


class App extends Component {
  
  constructor(props){
    super(props)
  }

  

  
  render() {
    return (
      <div className="App">
        <NavBarSearch/>
        
      </div>
    );
  }
}

export default App;

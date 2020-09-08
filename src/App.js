import React from 'react';
import { Route , Switch as Sw } from 'react-router-dom';
import './App.css';
import About from './About';
import Contact from './Contact';
import Error from './Rrro';
import Menu from './Menu';
import Api from './Fct'

function App() {
  return (
    <div className="App">
      <Menu />

      <Sw>
        <Route exact path='/react-form_validation-api' component={About} />
        <Route exact path='/react-form_validation-api/contact' component={Contact} />
        <Route exact path='/react-form_validation-api/api' component={Api} />
        <Route component={Error} />
      </Sw>
    </div>
  );
}

export default App;

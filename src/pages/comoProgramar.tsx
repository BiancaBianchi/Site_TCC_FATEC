import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../App.css';


function comoProgramar() {
  return(
    <div className="App">
      <Header/>
    <p className="textGlobal">
      <strong>
      - COMO PROGRAMAR?
      </strong>
<br/><br/>
      Para programar o nosso kit Rasblock, abaixo temos um passo-a-passo que vai te auxiliar!
    </p>
    <Footer/>
    </div>
  )
}

export default comoProgramar;
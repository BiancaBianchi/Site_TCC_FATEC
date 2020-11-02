import React from 'react';
import Header from '../components/Header';

import '../App.css'
import Footer from '../components/Footer';

function projects() {
  return(
    <div className="App">
    <Header />
    <p className="textGlobal">
      <strong>- PROJETOS</strong><br/><br/>
    Junto com nosso kit de Robótica Rasblock, temos quatro exemplos de projetos que <br/>
    podem ser aplicados em sala de aula. <br/><br/>
O passo-a-passo da montagem e de sua integração em aula está 
<br/>na aba "Apostilas e Conteúdos complementares". <br/>
Abaixo, fotos dos projetos montados feitos em Fusion 360.


 <br/>
 <br/>
 <div className="projects">
 <a href="" className="linksProjects">Projeto 1</a>
 <a href="" className="linksProjects">Projeto 2</a>
 </div>

 <div className="projects">
 <a href="" className="linksProjects">Projeto 3</a>
 <a href="" className="linksProjects">Projeto 4</a>
 </div>
 <br/>
    </p>
    <Footer />
    </div>
  )
}

export default projects;
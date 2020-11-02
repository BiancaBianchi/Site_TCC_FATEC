import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import landing from './pages/landing';
import apostilasEMais from './pages/apostilasEMais';
import projects from './pages/projects';
import stem from './pages/stem';
import comoProgramar from './pages/comoProgramar';
import sobreEContato from './pages/sobreEContato'


function Routes(){
  return(
    <BrowserRouter>

      <Route path='/' exact component={landing}/>
      <Route path='/apostilas' component={apostilasEMais}/>
      <Route path='/projects' component={projects}/>
      <Route path='/stem' component={stem}/>
      <Route path='/comoprogramar' component={comoProgramar}/>
      <Route path='/sobreecontato' component={sobreEContato}/>

    </BrowserRouter>
  )
}

export default Routes;
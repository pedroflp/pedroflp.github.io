import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import MainPage from './pages/MainPage';
import Sobre from './pages/Sobre';
import Repositories from './pages/Repositories'

function Routes () {
  return (
    <BrowserRouter>
      <Route path='/' component={MainPage} exact />
      <Route path='/sobre' component={Sobre} exact />
      <Route path='/repositorios' component={Repositories} exact />
    </BrowserRouter>
  )
}

export default Routes;
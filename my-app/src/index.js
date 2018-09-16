import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import firstPage from '../src/components/header/index'

const App =
  
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={firstPage} />
      </Switch>
    </BrowserRouter>
  

ReactDOM.render( App, document.getElementById('root'));
registerServiceWorker();

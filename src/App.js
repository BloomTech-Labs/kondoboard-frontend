import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import LoginForm from './view/login/LoginForm';
import RegistrationForm from './view/registration/RegistrationForm';
import BoardView from './view/dashboard/board/BoardView';
import ListView from './view/dashboard/list/ListView';
import Footer from './view/headers/Footer';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <LoginForm />
      </Route>
     <Route path='/register'>
       <RegistrationForm />
     </Route>
     <Route path='/dashboard'>
        <BoardView />
     </Route>
     <Route path='/selected'>
       <ListView />
     </Route>
     <Footer />
    </div>
  );
}

export default App;

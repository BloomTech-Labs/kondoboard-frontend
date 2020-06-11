// Core
import React from 'react';
import { Switch } from 'react-router';
import { Route, Redirect, useHistory } from 'react-router-dom';
import { useOktaAuth, LoginCallback } from '@okta/okta-react';
import './App.css';

//Model & Helpers
import Spinner from '@helpers/Spinner';
import LoginController from '@controllers/LoginController';

import ProfileController from '@controllers/ProfileController';
// Components
import Login from '@containers/Login';
import Profile from '@containers/Profile';
import Header from '@containers/Header';
import NotFound from '@containers/NotFound';
import JobListings from '@containers/JobListings.jsx';
import SavedListings from './view/dashboard/containers/SavedListings.jsx';
import AppliedJobListings from './view/dashboard/containers/AppliedListings.jsx';
import UserValidation from '@dashboard/profile/UserValidation';


const App = () => {

  // Initialize OktaAuth

  const { authState } = useOktaAuth();

  if (authState.isAuthenticated && !window.localStorage.getItem('kondotoken')) {
    window.localStorage.setItem('kondotoken', authState.idToken);
  }

  const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
      authState.isPending ? <Spinner /> :
      authState.isAuthenticated === true 
      ? <Component/>
      : <Redirect to='/login'/>
    )}/>
  );

    const PublicRoute = ({component: Component, ...rest}) => (
        <Route {...rest} render={() => (
          authState.isPending ? <Spinner /> :
          authState.isAuthenticated === true
          ? <Redirect to='/'/>
          : <Component/>
        )}/>
      )

  return (
    <div className="App">
      <Header />
      <UserValidation />
      <Switch>
        <PublicRoute path='/login' component={Login}/>
        <PublicRoute path='/implicit/callback' component={LoginCallback}/>
        <PrivateRoute path='/profile' component={Profile}/>
        <PrivateRoute path='/applied' component={AppliedJobListings} />
        <PrivateRoute path='/saved' component={SavedListings} />
        <PrivateRoute exact path='/' component={JobListings}/>
        <Route component={NotFound}/> {/* Catch all for non existing routes */}
      </Switch>

    </div>
  );
}

export default App;

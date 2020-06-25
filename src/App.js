// Core
import React from 'react';
import { Switch } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import { useOktaAuth, LoginCallback } from '@okta/okta-react';
import './App.css';

//Model & Helpers
import Spinner from '@helpers/Spinner';

// Components
import Login from '@containers/Login';
import Profile from '@containers/Profile';
import Header from '@containers/Header';
import NotFound from '@containers/NotFound';
import Search from '@containers/Search';
import AppliedJobListings from './view/dashboard/containers/AppliedListings.jsx';
import UserValidation from '@dashboard/profile/UserValidation';
import SideBar from '@dashboard/nav/SideBar';

const App = () => {

  // Initialize OktaAuth

  const { authState } = useOktaAuth();

  if (authState.isAuthenticated && !window.localStorage.getItem('kondotoken')) {
    window.localStorage.setItem('kondotoken', authState.idToken);
  }

  const PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={() => (
      authState.isPending  ? <Spinner /> :
        authState.isAuthenticated === true 
          ? <Component />
          : <Redirect to='/login' />
    )}
    />
  );

  const PublicRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={() => (
      authState.isPending ? <Spinner /> :
        authState.isAuthenticated === true
          ? <Redirect to='/' />
          : <Component />
    )}
    />
  );

  return (
    <div className="App">
      <Header />
      <UserValidation />
      <div className='app-container'>
        {authState.isAuthenticated && <SideBar />}
        <Switch>
          <PublicRoute path='/login' component={Login} />
          <PublicRoute path='/implicit/callback' component={LoginCallback} />
          <PrivateRoute path='/profile' component={Profile} />
          <PrivateRoute path='/applied' component={AppliedJobListings} />
          <PrivateRoute exact path='/' component={Search} />
          <Route component={NotFound} /> {/* Catch all for non existing routes */}
        </Switch>
      </div>
    </div>
  );
};

export default App;

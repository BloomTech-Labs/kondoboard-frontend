// Core
import React, { useEffect } from 'react';
import { Switch } from 'react-router';
import { Route, useHistory, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useOktaAuth, LoginCallback } from '@okta/okta-react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './App.css';

//Model & Helpers
import { selectHistory, selectUser } from '@state/selectors';
import store from './store';
import * as Action from '@state/actions';



// Components
import Login from '@containers/Login';
import Profile from '@containers/Profile';
import Header from '@containers/Header';
import NotFound from '@containers/NotFound';
import JobListings from '@containers/JobListings.jsx';


const App = () => {

// Initialize OktaAuth

  const { authState } = useOktaAuth();

    const history = useHistory();
    const stateHistory = useSelector(selectHistory);
    const user = useSelector(selectUser);
    if (stateHistory === null) {
      store.dispatch(Action.setHistory(history));
    }

  if (authState.isAuthenticated && !window.localStorage.getItem('kondotoken')) {
    window.localStorage.setItem('kondotoken', authState.idToken);
  }
  useEffect(() => {

  }, []);

  const loading = (
    <Spin className='loading' indicator={<LoadingOutlined style={{ fontSize: 144}} spin/>}/>
  )

    const PrivateRoute = ({ component: Component, ...rest}) => (
        <Route {...rest} render={(props) => (
          authState.isPending ? loading :
          authState.isAuthenticated === true 
          ? <Component/>
          : <Redirect to='/login'/>
        )}/>
      );
    
    const PublicRoute = ({component: Component, ...rest}) => (
        <Route {...rest} render={() => (
          authState.isPending ? loading :
          authState.isAuthenticated === true
          ? <Redirect to='/profile'/>
          : <Component/>
        )}/>
      )

  return (
    <div className="App">
      <Header />
      <Switch>

        <PublicRoute path='/login' component={Login}/>
        <PublicRoute path='/implicit/callback' component={LoginCallback}/>
        <PrivateRoute path='/profile' component={Profile}/>
        
        <PrivateRoute path='/listings' component={JobListings} />
        <PrivateRoute exact path='/' component={JobListings}/>
        <Route component={NotFound}/> {/* Catch all for non existing routes */}
      </Switch>

    </div>
  );
}

export default App;

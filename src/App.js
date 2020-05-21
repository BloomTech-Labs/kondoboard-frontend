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
import { selectHistory } from './model/state/selectors';
import store from './store';
import * as Action from './model/state/actions';



// Components
import Login from './view/Login';
import Profile from './view/Profile';
import Header from './view/Header';
import NotFound from './view/NotFound';


const App = () => {

// Initialize OktaAuth & History
  const stateHistory = useSelector(selectHistory)
  const { authState } = useOktaAuth();

  let history = useHistory();

  if (stateHistory === null) {
    store.dispatch(Action.setHistory(history))
  }
  if (authState.isAuthenticated && !window.localStorage.getItem('kondotoken')) {
    window.localStorage.setItem('kondotoken', authState.idToken);
  }
  useEffect(() => {

  }, []);

    const PrivateRoute = ({ component: Component, ...rest}) => (
        <Route {...rest} render={() => (
          authState.isAuthenticated === true 
          ? <Component/>
          : <Redirect to='/login'/>
        )}/>
      );
    
    const PublicRoute = ({component: Component, ...rest}) => (
        <Route {...rest} render={() => (
          authState.isPending ? <Spin indicator={<LoadingOutlined style={{ fontSize: 72}} spin/>}/> :
          authState.isAuthenticated === true
          ? <Redirect to='/profile'/>
          : <Component/>
        )}/>
      )

  return (
    <div className="App">
      <Header/>
      <Switch>

        <PublicRoute path='/login' component={Login}/>
        <PublicRoute path='/implicit/callback' component={LoginCallback}/>
        <PrivateRoute path='/profile' component={Profile}/>
        
        <PrivateRoute exact path='/'/>
        <Route component={NotFound}/> {/* Catch all for non existing routes */}
      </Switch>

    </div>
  );
}

export default App;

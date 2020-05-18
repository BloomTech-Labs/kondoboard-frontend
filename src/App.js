// Core
import React, { useEffect } from 'react';
import { Switch } from 'react-router';
import { Route, useHistory, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

//Model & Helpers
import { selectAuthStatus, selectHistory } from './model/state/selectors';
import store from './store';
import * as Action from './model/state/actions';
// import RouteHelper from './helpers/RouteHelper';

// Components
import Login from './view/Login';
import Profile from './view/Profile';
import BoardContainer from './view/dashboard/board/BoardContainer.jsx';


function App() {

  const authStatus = useSelector(selectAuthStatus);
  const stateHistory = useSelector(selectHistory)
  let history = useHistory();

  if (stateHistory === null) {
    store.dispatch(Action.setHistory(history))
  }

  useEffect(() => {

  }, []);

    // const PrivateRoute = ({ component: Component, ...rest}) => (
    //     <Route {...rest} render={() => (
    //       authStatus === true 
    //       ? <Component/>
    //       : <Redirect to='/'/>
    //     )}/>
    //   );
    
    // const PublicRoute = ({component: Component, ...rest}) => (
    //     <Route {...rest} render={() => (
    //       authStatus === null ? <CircularProgress color="primary"/> :
    //       authStatus === true
    //       ? <Redirect to='/profile'/>
    //       : <Component/>
    //     )}/>
    //   )

  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/profile' component={Profile}/>

        <Route path='/dashboard' component={BoardContainer} />
        <Route>Not Found</Route> {/* Catch all for non existing routes, will update with a 404 component that includes redirect to home page */}
      </Switch>
    </div>
  );
}

export default App;

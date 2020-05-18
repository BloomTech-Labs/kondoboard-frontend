// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { CircularProgress } from '@material-ui/core';
// import { useSelector } from 'react-redux';
// import { selectAuthStatus } from '../model/state/selectors';


    
// const RouteHelper = () => {
//     let authStatus = useSelector(selectAuthStatus);
//     const PrivateRoute = ({ component: Component, ...rest}) => (
//         <Route {...rest} render={() => (
//           authStatus === true 
//           ? <Component/>
//           : <Redirect to='/'/>
//         )}/>
//       );
    
//     const PublicRoute = ({component: Component, ...rest}) => (
//         <Route {...rest} render={() => (
//           authStatus === null ? <CircularProgress  color="primary"/> :
//           authStatus === true
//           ? <Redirect to='/dashboard'/>
//           : <Component/>
//         )}/>
//       )
// }

// export default RouteHelper;

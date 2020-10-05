import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import { createContext } from 'react';
import { useState } from 'react';
import RegistrationHistoryForUser from './Components/RegistrationHistoryForUser/RegistrationHistoryForUser';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [userInfo, setUserInfo] = useState({
    isLoggedIn : false,
    userName : '',
    email : '',
    eventName : '',
    eventImg : '',
    errorMessage : ''
  })
  return (
    <UserContext.Provider value={[userInfo, setUserInfo]}>
      <Router>
        <Switch>
          <Route path='/home'>
            <Header></Header>
            <Home></Home>
          </Route>
          <PrivateRoute path='/register'>
            <Header></Header>
            <Registration></Registration>
          </PrivateRoute>
          <Route path='/login'>
            <Header></Header>
            <Login></Login>
          </Route>
          <PrivateRoute path="/userHistory">
            <Header></Header>
            <RegistrationHistoryForUser></RegistrationHistoryForUser>
          </PrivateRoute>
          <Route exact path='/'>
            <Header></Header>
            <Home></Home>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Notfound from './Pages/Shared/Notfound/Notfound';
import Explore from './Pages/Explore/Explore';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import PrivateRoute from './Pages/Login/PrivareRoute/PrivateRoute';
import UserPrivate from './Pages/UserPrivate/UserPrivate/UserPrivate';
import AdminDashBoard from './Pages/Admin/AdminDashboard/AdminDashBoard';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Explore></Explore>
          </Route>
          <PrivateRoute path="/service/:serviceKey">
            <UserPrivate></UserPrivate>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <SignUp></SignUp>
          </Route>
          <PrivateRoute path="/admindashboard">
            <AdminDashBoard></AdminDashBoard>
          </PrivateRoute>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;

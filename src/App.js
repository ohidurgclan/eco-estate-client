import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Notfound from './Pages/Shared/Notfound/Notfound';
import Explore from './Pages/Explore/Explore';
import AddService from './Pages/Admin/AddService/AddService';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import PrivateRoute from './Pages/Login/PrivareRoute/PrivateRoute';
import UserPrivate from './Pages/UserPrivate/UserPrivate/UserPrivate';
import AdminDashBoard from './Pages/Admin/AdminDashboard/AdminDashBoard';

function App() {
  return (
    <AuthProvider>
      <Router>
          <Header></Header>
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
          <Route path="/addService">
            <AddService></AddService>
          </Route>
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
        <Footer></Footer>
        </Router>
    </AuthProvider>
  );
}

export default App;

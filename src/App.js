import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Notfound from './Pages/Shared/Notfound/Notfound';
import Explore from './Pages/Explore/Explore';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import AddService from './Pages/Admin/AddService/AddService';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import PrivateRoute from './Pages/Login/PrivareRoute/PrivateRoute';
import UserPrivate from './Pages/UserPrivate/UserPrivate/UserPrivate';

function App() {
  return (
    <AuthProvider>
      <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Explore></Explore>
          </Route>
          <PrivateRoute exact path="/service/:serviceKey">
            <UserPrivate></UserPrivate>
          </PrivateRoute>
          <PrivateRoute exact path="/about">
            <About></About>
          </PrivateRoute>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/addService">
            <AddService></AddService>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/signup">
            <SignUp></SignUp>
          </Route>
          <Route exact path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
        </Router>
    </AuthProvider>
  );
}

export default App;

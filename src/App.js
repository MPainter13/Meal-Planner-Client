import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header/Header';
import AddForm from './AddForm/AddForm';
import Meal from './Meal/Meal';
import HomePage from './HomePage/HomePage';
import LandingPage from './LandingPage/LandingPage';
import LoginPage from './LoginPage/LoginPage';
import SignUpPage from './SignUpPage/SignUpPage';

class App extends Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
       <Header />
      </header>
      <main>
        <Switch>
          <Route 
          exact 
          path={'/'}
          component={LandingPage} 
          />
          <Route
          path={'/singUp'}
          component={SignUpPage}
          />
          <Route
          path={'/login'}
          component={LoginPage}
          />
          <Route
          path={'/home'}
          component={HomePage}
          />
          <Route
          path={'/add'}
          component={AddForm}
          />
          <Route
          path={'/meal'}
          component={Meal}
          />
        </Switch>
        </main>    
    </div>
  );
}
}

export default App;

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import AddForm from '../AddForm/AddForm';
import Meal from '../Meal/Meal';
import HomePage from '../HomePage/HomePage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import SignUpPage from '../SignUpPage/SignUpPage';
import EditFrom from '../EditForm/EditForm';
import Context from '../../Context';


//parent of all the other components
class App extends Component {

  state = {
    currentUser: null,
  }

  setUser = (newUser) => {
    this.setState({ currentUser: newUser })
  }

  render() {
    const value = {
      currentUser: this.state.currentUser,
      setUser: this.setUser
    }
    return (
    <Context.Provider value={value}>
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
              path={'/signUp'}
              render={(routeprops) => <SignUpPage setUser={this.setUser} {...routeprops} />}
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
              path={'/addForm'}
              render={(routeprops) => <AddForm {...routeprops} currentUser={this.state.currentUser} />}
            />
            <Route
              path={'/meal/:id'}
              component={Meal}
            />
            <Route
            path={'/edit/:id'}
            component={EditFrom}
            />
          </Switch>
        </main>
      </div>
      </Context.Provider>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {Provider} from 'react-redux'
import logo from './logo.svg';
import './App.css';
import AddQuestion from './views/addQuestion'
import TakeTest from './views/takeTest'
import Login from './views/login'
import SubjectSelect from './views/subjectSelect'
import store from './redux/reducers'

import {Route, Link, Switch, BrowserRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/selectSubjects' component={SubjectSelect}/>
          </Switch>
        </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;

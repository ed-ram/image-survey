import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import ImageGroup from './components/ImageGroup';
import ButtonGroup from './components/ButtonGroup';
import Header from './components/Header';
import { Link, Route, Switch } from 'react-router-dom';

const Login = () => (
  <div className="btn btn-ghost">
    <Link to="/app"><h1>register or login</h1></Link>
  </div>
)

const DataEntry = () => (
  <div>
  <Header/>
  <ImageGroup />
  <ButtonGroup />
  </div>
)


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/app" component={DataEntry} />
      </div>
    );
  }
}

export default App;

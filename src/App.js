import React, { Component } from 'react';
import Auth from './Authorisation/Auth'
import './App.css';
import ImageGroup from './components/ImageGroup';
import ButtonGroup from './components/ButtonGroup';
import Header from './components/Header';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
/*
const Login = () => (
  <div className="btn btn-ghost login-placeholder">
    <Link to="/app"><h3>register or login</h3></Link>
  </div>
)*/

const auth = new Auth();

const Login = () => {
  auth.login();
};


const DataEntry = () => (
  <div>
  <Header/>
  <ImageGroup />
  <ButtonGroup />
  </div>
)


class App extends Component {

  componentDidMount() {
    auth.handleAuthentication();
  }

  render() {
    const { fetching, error, onGetList, } = this.props;
    return (
      <div className="App">
      <Header auth={auth} />
      {auth.isAuthenticated() ?
      <div>
        <ImageGroup />
        <ButtonGroup /> 
      </div>
      : <div> <button className="btn btn-full start-btn" onClick={Login}>
       Let's get started </button>
       
       {/*<button onClick={onGetList}>fff</button> */}
       
       </div>}      
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      fetching: state.fetching,
      error: state.error,
      imageGroups: state.imageGroups
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetList: () => dispatch({ type: 'GET_LIST_REQUEST'})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

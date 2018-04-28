import React, { Component } from 'react';
import Auth from './Authorisation/Auth'
import './App.css';
import ImageGroup from './components/ImageGroup';
import ButtonGroup from './components/ButtonGroup';
import Header from './components/Header';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import * as types from './actions/types';
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

function Home (props) {
  let {initialised, imageGroups} = props;
  if (initialised) {
    return (
      <div>
      <ImageGroup/>
      <ButtonGroup/> 
    </div>
    )
    return (null)
  }
}


class App extends Component {

  render() {
    let { fetching, error, onGetList, imageGroups, initialised } = this.props;
    return (
      <div className="App">
      <Header />

      <div>
      <ImageGroup/>
      <ButtonGroup/> 
      </div>) 
      
      
      <div>
      <button onClick={onGetList}> Let's get started! </button>
      </div>
       
      </div>    

    );
  }
}

const mapStateToProps = state => {
  return {
      initialised: state.initialised,
      fetching: state.fetching,
      error: state.error,
      imageGroups: state.imageGroups,
  };
};
//event emit signup sheet
const mapDispatchToProps = dispatch => {
  return {
    onGetList: () => dispatch({ type: types.GET_LIST_REQUEST}),
     
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

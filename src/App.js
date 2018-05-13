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

  componentDidMount() {
    this.props.onGetList()
  }

  render() {
    let { fetching, error, onGetList, imageGroups, initialised, current} = this.props;
    return (
      <div className="App">
      <Header current={current} imageGroups={imageGroups}/>
      {current<=imageGroups.length-1
      ?
      (<div>
      <ImageGroup/>
      <ButtonGroup/> 
      </div>) 
      :
      (<div>
      <h1> thank you for participating </h1>
      </div>)
    }

    </div>    

    );
  }
}

const mapStateToProps = state => {
  return {
      initialised: state.initialised,
      fetching: state.fetching,
      error: state.error,
      imageGroups: state.imageList.imageGroups,
      current: state.counter.current
  };
};
//event emit signup sheet
const mapDispatchToProps = dispatch => {
  return {
    onGetList: () => dispatch({ type: types.GET_LIST_REQUEST, payload:{fetching: true, error: null, initialised: true}}),

     
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

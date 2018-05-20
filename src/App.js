import React, { Component } from 'react';
import Auth from './Authorisation/Auth'
import './App.css';
import ImageGroup from './components/ImageGroup';
import ButtonGroup from './components/ButtonGroup';
import Header from './components/Header';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import * as types from './actions/types';
import Form from './components/Form';

const Survey = ({current, imageGroups}) => {
  return (
    <div>
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
  )
}

class App extends Component {

  componentDidMount() {
    this.props.onGetList()
  }

  render() {
    const { fetching, error, onGetList, imageGroups, initialised, current, 
    years_experience, inc_years_exp, dec_years_exp, initialise} = this.props;
    return (
      <div className="App">
      <Header current={current} imageGroups={imageGroups}/>
      
      {!initialised 
      ?
      <Form years_experience={years_experience}
            inc_years_exp={inc_years_exp}
            dec_years_exp={dec_years_exp}
            initialise={initialise}      
      />
      :
      <Survey current={current} imageGroups={imageGroups}/>
      }
    </div>    

    );
  }
}

const mapStateToProps = state => {
  return {
      initialised: state.imageList.initialised,
      fetching: state.fetching,
      error: state.error,
      imageGroups: state.imageList.imageGroups,
      current: state.counter.current,
      years_experience: state.scores.years_experience,
    };
};
//event emit signup sheet
const mapDispatchToProps = dispatch => {
  return {
    onGetList: () => dispatch({ type: types.GET_LIST_REQUEST, payload:{fetching: true, error: null}}),
    inc_years_exp: () => dispatch({ type: types.INC_YEARS_EXP }),
    dec_years_exp: () => dispatch({ type: types.DEC_YEARS_EXP }),
    initialise: () => dispatch({ type: types.INITIALISE })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import * as types from './actions/types';
import Form from './components/Form';
import Survey from './components/Survey'


class App extends Component {

  componentDidMount() {
    this.props.onGetList()
  }

  render() {
    const { fetching, error, onGetList, imageGroups, initialised, current, 
    years_experience, inc_years_exp, dec_years_exp, initialise} = this.props;
    return (
      <div className="App">
      <Header current={current} imageGroups={imageGroups} initialised={initialised}/>
      
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

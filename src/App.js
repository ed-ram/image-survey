import React, { Component } from 'react';

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
    const { auth, fetching, error, onGetList, imageGroups, initialised, current, 
    years_experience, inc_years_exp, dec_years_exp, initialise, scores_submitted, test} = this.props;
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
      <Survey scores_submitted={scores_submitted} auth={auth} />
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
      scores_submitted: state.scores.scores_submitted
    };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetList: () => dispatch({ type: types.GET_LIST_REQUEST, payload:{fetching: true, error: null}}),
    inc_years_exp: () => dispatch({ type: types.INC_YEARS_EXP }),
    dec_years_exp: () => dispatch({ type: types.DEC_YEARS_EXP }),
    initialise: () => dispatch({ type: types.INITIALISE }),
    test: () => dispatch({type: types.TEST})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import Header from './Header';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import * as types from '../actions/types';
import Form from '../components/Form';
import Survey from '../components/Survey';


class App extends Component {

  componentDidMount() {
    this.props.onGetList()
  }

  render() {
    const { auth, fetching, error, onGetList, imageGroups, initialised, current, 
    years_experience, inc_years_exp, dec_years_exp, initialise, scores_submitted,
    test, toggle_accreditation, toggle_towards_accreditation, SVT_accredited, 
    working_towards_acc} = this.props;
    
    return (
      
      <div className="App" > 
        <Header current={current} imageGroups={imageGroups} initialised={initialised} scores_submitted={scores_submitted}/>
        
        {!initialised 
        ?
          <Form years_experience={years_experience}
                SVT_accredited={SVT_accredited}
                working_towards_acc={working_towards_acc}
                inc_years_exp={inc_years_exp}
                dec_years_exp={dec_years_exp}
                initialise={initialise}
                toggle_accreditation={toggle_accreditation}
                toggle_towards_accreditation={toggle_towards_accreditation}
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
      SVT_accredited: state.scores.SVT_accredited,
      working_towards_acc: state.scores.working_towards_acc,
      scores_submitted: state.scores.scores_submitted
    };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetList: () => dispatch({ type: types.GET_LIST_REQUEST, payload:{fetching: true, error: null}}),
    inc_years_exp: () => dispatch({ type: types.INC_YEARS_EXP }),
    dec_years_exp: () => dispatch({ type: types.DEC_YEARS_EXP }),
    initialise: () => dispatch({ type: types.INITIALISE }),
    test: () => dispatch({type: types.TEST}),
    toggle_accreditation: () => dispatch({type: types.TOGGLE_SVT_ACCREDITED}),
    toggle_towards_accreditation: () => dispatch({type: types.TOGGLE_WORKING_TOWARDS_ACCREDITATION})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

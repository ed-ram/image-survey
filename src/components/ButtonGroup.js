import React, { Component } from 'react';
import {connect} from 'react-redux';
import {INCREMENT} from '../actions/types';
import {commit_score, update_current_score} from '../reducer/scores'

class ButtonGroup extends Component {

    handleInput = (evt) => {
      console.log(evt.target.value)
      let val = {score: evt.target.value, uuid: this.props.imageGroups[this.props.counter].uuid};
      this.props.update_current_score(val)
    }

    render() {
      const {increment, current_score, counter, imageGroups} = this.props;
        return(
<section className="buttonContainer">
    <button className="btn btn-full" href='#'>prev</button>
  
    
    {/*<input className="" type="range" min="0" max="5"></input>*/}
    <form className="inputControl">
      <fieldset>
            <li className="formList">
              <input type="radio" name="score" value="1"
              checked={current_score==1}
              onChange={this.handleInput}/>
              <label htmlFor="1">No calcification</label>
            </li>
            <li className="formList">  
              <input type="radio" name="score" value="2"
              checked={current_score==2}
              onChange={this.handleInput}/>
              <label htmlFor="2">Mild calcification</label>
            </li>
            <li className="formList">
              <input type="radio" name="score" value="3"
              checked={current_score==3}
              onChange={this.handleInput}/>
              <label htmlFor="3">Significant calcification</label>
            </li>
            <li className="formList">
              <input type="radio" name="score" value="4"
              checked={current_score==4}
              onChange={this.handleInput}/>
              <label htmlFor="4">Severe calcification</label>
            </li>
      </fieldset>
    </form>
 
    <button className="btn btn-full"  onClick={increment}>next</button>
</section>
        )
    }
}


const mapStateToProps = (state) => {
  return {
      counter: state.counter.current,
      imageGroups: state.imageList.imageGroups,  
      current_score: state.scores.current_score

  };
};

/*
const mapDispatchToProps = dispatch => {
  return {
    update_current_score,
    increment: () => dispatch({ type: INCREMENT})
    };
};*/

const mapDispatchToProps = {update_current_score}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonGroup);

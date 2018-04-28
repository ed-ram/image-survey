import React, { Component } from 'react';
import {connect} from 'react-redux';
import {INCREMENT} from '../actions/types';

class ButtonGroup extends Component {
    render() {
      const {increment} = this.props;
        return(
<section className="buttonContainer">
    <button className="btn btn-full" href='#'>prev</button>
  
    
    {/*<input className="" type="range" min="0" max="5"></input>*/}
    <form className="inputControl">
      <fieldset>
            <li className="formList">
              <input type="radio" name="score" value="1"/>
              <label for="1">No calcification</label>
            </li>
            <li className="formList">  
              <input type="radio" name="score" value="2"/>
              <label for="2">Mild calcification</label>
            </li>
            <li className="formList">
              <input type="radio" name="score" value="3"/>
              <label for="3">Significant calcification</label>
            </li>
            <li className="formList">
              <input type="radio" name="score" value="4"/>
              <label for="4">Severe calcification</label>
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
      current: state.counter.current
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: INCREMENT})
     
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonGroup);

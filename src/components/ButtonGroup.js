import React, { Component } from 'react';

export default class ButtonGroup extends Component {
    render() {
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
 
    <button className="btn btn-full" href='#'>next</button>
</section>
        )
    }
}
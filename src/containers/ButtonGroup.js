import React, { Component } from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from '../reducer/counter'
import {commit_score, update_current_score} from '../reducer/scores'
import './ButtonGroup.css';


class ButtonGroup extends Component {

    handleInput = (evt) => {
      /*console.log(evt.target.value)*/
      let val = {score: evt.target.value, uuid: this.props.imageGroups[this.props.counter].uuid};
      this.props.update_current_score(val)
    }

    handleSubmit = () => {this.props.commit_score(
                            {scores: this.props.scores, 
                            years_experience: this.props.years_experience,
                            SVT_accredited: this.props.SVT_accredited,
                            working_towards_acc: this.props.working_towards_acc}
                          )};

    render() {
      const {scores, increment, current_score, counter, imageGroups, decrement, years_experience, SVT_accredited, working_towards_acc} = this.props;
        return(
            <section className="buttonContainer">
                {(counter>0) && <button className="btn btn-full" onClick={decrement}>prev</button>}
              

                <form className="inputControl">
                  <fieldset>
                        <li className="formList">
                          <input type="radio" name="score" value="1"
                          checked={scores[counter].score==1}
                          onChange={this.handleInput}/>
                          <label htmlFor="1">No calcification</label>
                        </li>
                        <li className="formList">  
                          <input type="radio" name="score" value="2"
                          checked={scores[counter].score==2}
                          onChange={this.handleInput}/>
                          <label htmlFor="2">Mild calcification</label>
                        </li>
                        <li className="formList">
                          <input type="radio" name="score" value="3"
                          checked={scores[counter].score==3}
                          onChange={this.handleInput}/>
                          <label htmlFor="3">Significant calcification</label>
                        </li>
                        <li className="formList">
                          <input type="radio" name="score" value="4"
                          checked={scores[counter].score==4}
                          onChange={this.handleInput}/>
                          <label htmlFor="4">Severe calcification</label>
                        </li>
                  </fieldset>
                </form>

              {(counter<imageGroups.length-1) && <button className="btn btn-full"  onClick={increment} disabled={scores[counter].score===''}>next</button>}

              {(counter==imageGroups.length-1) &&<button className="btn btn-full"  onClick={this.handleSubmit}>SUBMIT</button>}
              
              <button className="btn btn-full"  onClick={this.handleSubmit}>SUBMIT</button>
              
          </section>
        )
    }
}


const mapStateToProps = (state) => {
  return {
      counter: state.counter.current,
      imageGroups: state.imageList.imageGroups,  
      current_score: state.scores.current_score,
      scores: state.scores.scores,
      years_experience: state.scores.years_experience,
      SVT_accredited: state.scores.SVT_accredited,
      working_towards_acc: state.scores.working_towards_acc

  };
};

const mapDispatchToProps = {update_current_score, increment, decrement, commit_score}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonGroup);

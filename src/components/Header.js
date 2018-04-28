import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import image_list from '../reducer/image_list';


class Header extends Component {

    
    render() {
        const {current, imageGroups} = this.props;
        return(
            <div className="Header">
                <div>current: {current}/ {imageGroups.length}</div>
                <div className="App-title">
                    <h3>Arterial calcification on duplex ultrasound</h3>
                </div>
                <div>
                    <p>register || sign in</p>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        current: state.counter.current,
        imageGroups: state.imageList.imageGroups
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      /*onGetList: () => dispatch({ type: types.GET_LIST_REQUEST}),*/
       
      };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Header);
  

// Refactored as a FUNCTIONAL COMPONENT
/*
export default function Header(props) {
    return(
        <div className="Header">
            <div>page 1 of 20</div>
            <div className="App-title">
                <h3>Arterial calcification on duplex ultrasound</h3>
            </div>
            
                {props.loggedIn
                ? <div>
                <button className="btn btn-full" >logout</button>
            </div>
                : <div>
                <button className="btn btn-full" >login</button>
                </div>
                }
        </div>
    )
}*/
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import image_list from '../reducer/image_list';
import './Header.css'



class Header extends Component {
    render() {
        const style={fontFamily:"'Lucida Console', Monaco, monospace"};
        const {current, imageGroups, initialised, scores_submitted} = this.props;
        return(
            <div className="Header" >
                <div className="App-title">
                    <h2>Arterial calcification on duplex ultrasound</h2>
                    {(initialised && !scores_submitted) && <div className="counter"> 
                    now showing image {current+1} of {imageGroups.length}</div>}
                </div>
            </div>
        )
    }
}

export default Header;

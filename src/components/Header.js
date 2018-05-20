import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import image_list from '../reducer/image_list';


class Header extends Component {

    
    render() {
        const {current, imageGroups, initialised} = this.props;
        return(
            <div className="Header">
                {initialised && <div className="counter"> {current+1}/ {imageGroups.length}</div>}
                <div className="App-title">
                    <h3>Arterial calcification on duplex ultrasound</h3>
                </div>

            </div>
        )
    }
}

export default Header;

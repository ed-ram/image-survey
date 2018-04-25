//import React, { Component } from 'react';
//import { Link, Route, Switch } from 'react-router-dom';
/*
export default class Header extends Component {

    render() {
        return(
            <div className="Header">
                <div>page 1 of 20</div>
                <div className="App-title">
                    <h3>Arterial calcification on duplex ultrasound</h3>
                </div>
                <div>
                    <p>register || sign in</p>
                </div>
            </div>
        )
    }
}*/

// Refactored as a FUNCTIONAL COMPONENT

import React from 'react';

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
}
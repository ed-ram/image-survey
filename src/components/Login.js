import React from 'react';
import Auth from '../Authorisation/Auth';
import Header from './Header'

const Login = ({auth}) => (
    <div className="App">
        <Header />
        <div>
            <p>Welcome!<br/><br/>
            After registering, you will be shown a series of cases. <br/> 
            Each case consists of three ultrasound images from the same patient.<br/><br/>
            Please estimate the degree of arterial calcification for each case.</p>
        </div>
        <button className="btn btn-full start-btn" onClick={auth.login}> LET'S GET STARTED! </button>
    </div>
);

export default Login;
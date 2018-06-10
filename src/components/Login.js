import React from 'react';
import Auth from '../Authorisation/Auth';
import Header from '../containers/Header';
import './Login.css';

const Login = ({auth}) => (
    <div >
        <Header />
        <div className="welcome">
            <div>
            <p>Welcome!<br/><br/>
            Thank you for taking part in this study<br/><br/>
            After registering, you will be shown a series of cases. <br/> 
            Each case consists of three ultrasound images from the same patient.<br/><br/>
            Please estimate the degree of arterial calcification for each case.</p>
            </div>
          <button className="btn btn-full start-btn" onClick={auth.login}> LET'S GET STARTED! </button>
        </div>
    </div>
);

export default Login;
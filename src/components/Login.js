import React from 'react';
import Auth from '../Authorisation/Auth';

const Login = ({auth}) => (
    <div>
        <button onClick={auth.login}> login </button>
    </div>
);

export default Login;
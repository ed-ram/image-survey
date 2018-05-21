import React from 'react';
import Auth from '../Authorisation/Auth';

const LogOut = ({auth}) => (
    <div>
        <button onClick={auth.logout}> logout </button>
    </div>
);

export default LogOut;
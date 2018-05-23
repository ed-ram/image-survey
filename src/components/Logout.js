import React from 'react';

const LogOut = ({auth}) => (
    <div>
        <button className="logout btn btn-full" onClick={auth.logout}> logout </button>
    </div>
);

export default LogOut;
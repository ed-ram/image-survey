import React from 'react';

const LogOut = ({auth, pos}) => (
    <div>
        <button style={pos} className="btn logout" onClick={auth.logout}> logout </button>
    </div>
);

export default LogOut;
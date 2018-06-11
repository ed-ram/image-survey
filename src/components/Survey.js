import React from 'react';
import ImageGroup from '../containers/ImageGroup';
import ButtonGroup from '../containers/ButtonGroup';
import Logout from './Logout'

const Survey = ({scores_submitted, auth}) => {
    return (
      <div>
      {scores_submitted===false
        ?
        (<div>
        <ImageGroup/>
        <ButtonGroup/> 
        </div>) 
        :
        (<div className="textPage">
          <p><br/> Thank you for participating <br/><br/> Goodbye! </p><br/>
        
          <button onClick={ () => {localStorage.removeItem('state');
                                   window.location.reload()}} 
                  className="btn"> Take Survey Again </button>
        
        <br/><p>or</p><br/>
        <Logout auth={auth}/>
        </div>)
        }
      </div>
    )
};

export default Survey
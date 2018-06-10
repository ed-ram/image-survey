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
        <Logout auth={auth} pos={{position: 'relative'}}/>
        </div>)
        }
      </div>
    )
};

export default Survey
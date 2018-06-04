import React from 'react';
import ImageGroup from '../containers/ImageGroup';
import ButtonGroup from '../containers/ButtonGroup';
import Logout from './Logout'

const style = {
  marginTop: '10vh'
}

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
        (<div style={style}>
        <p> Thank you for participating <br/><br/> Goodbye! </p><br/>
        <Logout auth={auth} pos={{position: 'relative'}}/>
        </div>)
        }
      </div>
    )
};

export default Survey
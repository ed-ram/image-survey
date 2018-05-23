import React from 'react';
import ImageGroup from './ImageGroup';
import ButtonGroup from './ButtonGroup';

const style = {
  marginTop: '10vh'
}

const Survey = ({scores_submitted}) => {
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
        <p> Thank you for participating <br/> Goodbye! </p>
        </div>)
        }
      </div>
    )
};

export default Survey
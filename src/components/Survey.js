import React from 'react';
import ImageGroup from './ImageGroup';
import ButtonGroup from './ButtonGroup';

const Survey = ({current, imageGroups}) => {
    return (
      <div>
      {current<=imageGroups.length-1
        ?
        (<div>
        <ImageGroup/>
        <ButtonGroup/> 
        </div>) 
        :
        (<div>
        <h1> thank you for participating </h1>
        </div>)
        }
      </div>
    )
};

export default Survey
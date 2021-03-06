import React, { Component } from 'react';
import {connect} from 'react-redux';
import {IMAGE_URL} from '../api_config';
import './ImageGroup.css';

const Pic = ({url}) => (
    <div className="pic"><img src={`${IMAGE_URL}/${url}`} /></div>
)

class ImageGroup extends Component {
    render() {
        const {current, imageGroups} = this.props;
        return(
        <div className="imageContainer">
            {
                imageGroups[current].images.map((url) =>
                    <Pic url={url} key={url} />
                )
            }
        </div>
       )
    }
}

const mapStateToProps = (state) => {
    return {
        current: state.counter.current,
        imageGroups: state.imageList.imageGroups
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      /*onGetList: () => dispatch({ type: types.GET_LIST_REQUEST}),*/
       
      };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(ImageGroup);

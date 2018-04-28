import React, { Component } from 'react';
import {connect} from 'react-redux';

//note to self: curly braces around string literals in jsx (30 mins of frustration!)
const Pic = ({url}) => (
    <div className="pic"><img src={`/public/${url}`} /></div>
)

class ImageGroup extends Component {
    render() {
        const {current, imageGroups} = this.props;
        return(
        <section className="imageContainer">
            {
                imageGroups[current].images.map((url) =>
                    <Pic url={url}
                    />

                )
            }
        </section>
        
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
  


/*<div className="item-1 pic"><img src='/public/1d630521-9daf-419a-b7b5-508f2a9fc4d2.jpg' /></div>
            <div className="item-2 pic"><img src={require("./testImages/test-image-02.jpg")} /></div>
            <div className="item-3 pic"><img src={require("./testImages/test-image-03.jpg")} /></div>*/
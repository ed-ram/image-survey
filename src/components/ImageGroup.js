import React, { Component } from 'react';
import {connect} from 'react-redux';

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
                    <Pic url={url} key={url}
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

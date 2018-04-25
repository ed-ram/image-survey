import React, { Component } from 'react';



export default class ImageGroup extends Component {
    render() {
        return(
        <section className="imageContainer">
            <div className="item-1 pic"><img src={'/public/1d630521-9daf-419a-b7b5-508f2a9fc4d2.jpg'} /></div>
            <div className="item-2 pic"><img src={require("./testImages/test-image-02.jpg")} /></div>
            <div className="item-3 pic"><img src={require("./testImages/test-image-03.jpg")} /></div>
        </section>
        
       )
    }
}




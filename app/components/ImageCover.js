import React, {Component} from 'react';

class ImageCover extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <img src={this.props.icon} alt={this.props.alt} style={this.props.style} className={this.props.className}/>
        )
    }
}

export default ImageCover;
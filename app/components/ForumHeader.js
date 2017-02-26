import React, {Component} from 'react';
import ImageCover from './ImageCover';

export default class ForumHeader extends Component {
    constructor(){
        super();
        this.state = {
            brand: "https://s3.amazonaws.com/media-p.slid.es/uploads/jhabdas/images/969312/react-logo-1000-transparent.png",
        };
    }

    imageStyle() {
        const STYLE = {
            width:'30px',
            height:'30px'
        };
        return STYLE;
    }

    render(){
        return(
            <nav className="navbar navbar-light bg-faded">
                <a href="#" className="navbar-brand">
                    <ImageCover icon={this.state.brand} style={this.imageStyle()} className="d-inline-block align-top" alt="Forum"/>
                    React Flux
                </a>
            </nav>
        );
    }
}
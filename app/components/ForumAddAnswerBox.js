import React, {Component} from 'react';

export default class ForumAddAnswerBox extends Component {
    render() {
        return(
            <div className="row">
                <textarea id="andAnswer" className="col-md-6 col-xs-8">
                </textarea>
                <div className="col-md-6 col-xs-8">
                    <input type="button" className="btn btn-primary" value="Add"/>
                </div>
            </div>
        );
    }
}
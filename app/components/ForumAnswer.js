import React, {Component} from 'react';

export default class ForumAnswer extends Component {

    render(){

        let answer = this.props.answer;

        return(
            <div className="card mb-3">
                <div className="card-block">
                    <p className="card-text">{answer.body}</p>
                </div>
            </div>
        );
    }
}
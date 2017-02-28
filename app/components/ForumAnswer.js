import React, {Component} from 'react';

export default class ForumAnswer extends Component {
    constructor() {
        super();
        this._markCorrect = this._markCorrect.bind(this);
    }

    _markCorrect(event){
        event.preventDefault();
        this.props.onMarkCorrect(this.props.id);
    }

    render(){
        let answer = this.props.answer;
        console.log('answer ', answer);
        return(
            <div className="card mb-3">
                <div className="card-block">
                    <div className="card-text">
                        {answer.body}
                        <div className="pull-right">
                            <small>
                                <a href="#" onClick={this._markCorrect}>Mark as correct</a>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ForumAnswer.propType = {
    answer: React.PropTypes.object.isRequired
}
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

        var markAnswer;
        console.log(answer.correct);
        if(!answer.correct) {
            markAnswer = <div className="pull-right">
                            <small>
                                <a href="#" onClick={this._markCorrect}>Mark as correct</a>
                            </small>
                        </div>;
        }

        var classNames = 'card-block';

        if(answer.correct) {
            classNames += 'bg-success';
        }

        return(
            <div className="card mb-3">
                <div className="card-block">
                    <div className={    classNames }>
                        {answer.body}
                        {markAnswer}
                    </div>
                </div>
            </div>
        );
    }
}

ForumAnswer.propType = {
    answer: React.PropTypes.object.isRequired
}
import React, {Component} from 'react';
import ForumDispatcher from '../ForumDispatcher';
import ForumAnswer from './ForumAnswer';


export default class ForumAnswers extends Component {

    _onMarkCorrect(id) {
        ForumDispatcher.dispatch({
            actionType: 'FORUM_ANSWER_MARKED_CORRECT',
            id:id
        });
    }

    render(){
        let allAnswers = this.props.allAnswers;
        let answers = [];

        for(var key in allAnswers){
            answers.push(<ForumAnswer key={key} id={key} answer={allAnswers[key]} onMarkCorrect={this._onMarkCorrect} />);
        }

        return(
            <div>
                { answers }
            </div>
        );
    }
}
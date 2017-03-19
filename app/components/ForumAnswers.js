import React, {Component} from 'react';
import ForumActions from '../actions/ForumActions';
import ForumAnswer from './ForumAnswer';

let forumActions = new ForumActions();
export default class ForumAnswers extends Component {

    _onMarkCorrect(id) {
        forumActions.markAsCorrect(id);
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